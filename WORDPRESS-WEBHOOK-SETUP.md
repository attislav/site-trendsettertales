# WordPress Webhook Setup für On-Demand Revalidation

Diese Anleitung zeigt dir, wie du WordPress so konfigurierst, dass deine Next.js Site automatisch aktualisiert wird, wenn du Content änderst.

**WICHTIG**: Der automatische Generator erstellt ein **Must-Use Plugin** statt die `functions.php` zu ändern. Das ist viel sicherer und überlebt Theme-Updates!

## Was ist On-Demand Revalidation?

- ✅ Änderungen an Posts/Pages sind **sofort sichtbar** (5-10 Sekunden)
- ✅ Kein manuelles Redeploy auf Vercel mehr nötig
- ✅ Nur betroffene Seiten werden neu generiert (nicht der komplette Cache)
- ✅ Performance bleibt optimal

---

## Schritt 1: Revalidation Token erstellen

### 1.1 Generiere einen sicheren Token

Öffne dein Terminal und erstelle einen zufälligen Token:

```bash
# Linux/Mac/Git Bash
openssl rand -base64 32

# oder nutze einen Online-Generator:
# https://generate-secret.vercel.app/32
```

Beispiel-Token: `xK9mP2nQ5vR8sL4wT7yU1aZ3bC6dE0fG`

### 1.2 Füge den Token zu deiner `.env.local` hinzu

```bash
# .env.local
REVALIDATION_TOKEN=xK9mP2nQ5vR8sL4wT7yU1aZ3bC6dE0fG
```

### 1.3 Füge den Token zu Vercel hinzu

1. Gehe zu deinem Vercel Dashboard
2. Wähle dein Projekt aus
3. Gehe zu **Settings** → **Environment Variables**
4. Füge hinzu:
   - **Name**: `REVALIDATION_TOKEN`
   - **Value**: `xK9mP2nQ5vR8sL4wT7yU1aZ3bC6dE0fG`
   - **Environment**: Production, Preview, Development (alle auswählen)
5. Klicke auf **Save**
6. **Redeploy** dein Projekt, damit die Variable aktiv wird

---

## Schritt 2: WordPress Plugin installieren

Du hast zwei Optionen:

### Option A: WP Webhooks Plugin (Empfohlen - Einfacher)

1. Gehe zu WordPress Admin → **Plugins** → **Add New**
2. Suche nach **"WP Webhooks"**
3. Installiere und aktiviere das Plugin
4. Gehe zu **Settings** → **WP Webhooks** → **Send Data**

### Option B: Custom Code (Fortgeschritten)

Füge diesen Code in deine `functions.php` deines Child Themes ein:

```php
<?php
/**
 * On-Demand Revalidation Webhook für Next.js
 */

// Revalidation Endpoint deiner Next.js Site
define('NEXTJS_REVALIDATE_URL', 'https://deine-site.com/api/revalidate');
define('NEXTJS_REVALIDATE_TOKEN', 'xK9mP2nQ5vR8sL4wT7yU1aZ3bC6dE0fG');

/**
 * Sende Revalidation Request an Next.js
 */
function trigger_nextjs_revalidation($action, $post_id) {
    $post = get_post($post_id);

    if (!$post || $post->post_type !== 'post') {
        return;
    }

    // Get post data
    $post_slug = $post->post_name;
    $categories = get_the_category($post_id);
    $category_slug = !empty($categories) ? $categories[0]->slug : '';

    // Get tags
    $tags = get_the_tags($post_id);
    $tag_slugs = [];
    if ($tags) {
        foreach ($tags as $tag) {
            $tag_slugs[] = $tag->slug;
        }
    }

    // Prepare webhook payload
    $payload = [
        'token' => NEXTJS_REVALIDATE_TOKEN,
        'action' => $action,
        'postSlug' => $post_slug,
        'categorySlug' => $category_slug,
        'tags' => $tag_slugs,
    ];

    // Send webhook
    wp_remote_post(NEXTJS_REVALIDATE_URL, [
        'headers' => ['Content-Type' => 'application/json'],
        'body' => json_encode($payload),
        'timeout' => 15,
        'blocking' => false, // Non-blocking request
    ]);

    error_log("Next.js revalidation triggered for: {$post_slug}");
}

// Hook into WordPress post events
add_action('save_post', function($post_id) {
    trigger_nextjs_revalidation('update_post', $post_id);
});

add_action('publish_post', function($post_id) {
    trigger_nextjs_revalidation('publish_post', $post_id);
});

add_action('delete_post', function($post_id) {
    trigger_nextjs_revalidation('delete_post', $post_id);
});
```

**Wichtig**: Ersetze `https://deine-site.com` mit deiner echten Domain!

---

## Schritt 3: WP Webhooks Plugin konfigurieren (Option A)

Falls du das WP Webhooks Plugin nutzt:

### 3.1 Webhook erstellen

1. Gehe zu **WP Webhooks** → **Send Data**
2. Klicke auf **Add Webhook**
3. Konfiguriere:

**Trigger**: `Post Updated` (auch: `Post Published`, `Post Deleted`)

**Webhook URL**:
```
https://deine-site.com/api/revalidate
```

**HTTP Method**: `POST`

**Headers**:
```json
{
  "Content-Type": "application/json"
}
```

**Body** (JSON):
```json
{
  "token": "xK9mP2nQ5vR8sL4wT7yU1aZ3bC6dE0fG",
  "action": "update_post",
  "postSlug": "{{post_name}}",
  "categorySlug": "{{category_slug}}",
  "tags": ["{{tag_slugs}}"]
}
```

### 3.2 Webhook testen

1. Bearbeite einen Post in WordPress und klicke auf **Update**
2. Gehe zu **WP Webhooks** → **Logs**
3. Prüfe, ob der Webhook erfolgreich gesendet wurde (Status 200)

---

## Schritt 4: Testen

### 4.1 Test mit Browser

Öffne in deinem Browser (ersetze die URL und den Token):

```
https://deine-site.com/api/revalidate?token=xK9mP2nQ5vR8sL4wT7yU1aZ3bC6dE0fG
```

**Erwartete Antwort**:
```json
{
  "success": true,
  "message": "Test revalidation successful - homepage revalidated",
  "timestamp": "2025-01-17T10:30:00.000Z"
}
```

### 4.2 Test mit WordPress Post

1. Öffne einen Blog Post in WordPress
2. Ändere den Titel oder Content
3. Klicke auf **Update**
4. Warte 5-10 Sekunden
5. Öffne die Post-Seite auf deiner Next.js Site
6. Die Änderungen sollten **sofort** sichtbar sein (ggf. Hard Refresh mit `Strg+Shift+R`)

---

## Troubleshooting

### Problem: "Invalid token"

**Lösung**:
- Prüfe, ob `REVALIDATION_TOKEN` in Vercel korrekt gesetzt ist
- Prüfe, ob der Token im WordPress Webhook exakt übereinstimmt (keine Leerzeichen!)
- Redeploy das Projekt auf Vercel nach dem Setzen der Environment Variable

### Problem: "Revalidation not configured"

**Lösung**:
- `REVALIDATION_TOKEN` fehlt in den Environment Variables
- Füge es in Vercel hinzu und redeploy

### Problem: Änderungen nicht sichtbar

**Lösung**:
- Prüfe WordPress Webhook Logs (WP Webhooks → Logs)
- Prüfe Vercel Function Logs (Vercel Dashboard → Deployments → Functions)
- Mache einen Hard Refresh im Browser (`Strg+Shift+R`)
- Warte 10-20 Sekunden (Vercel braucht Zeit zum Rebuilden)

### Problem: Webhook wird nicht gesendet

**Lösung**:
- Prüfe, ob WP Webhooks Plugin aktiviert ist
- Prüfe, ob der Trigger korrekt konfiguriert ist (`Post Updated`, nicht `Post Draft`)
- Prüfe WordPress Debug Logs

---

## Webhook Actions

Die API unterstützt folgende Actions:

| Action | Wann verwenden | Revalidiert |
|--------|---------------|-------------|
| `update_post` | Post wurde bearbeitet | Post, Kategorie, Tags, Homepage |
| `publish_post` | Post wurde veröffentlicht | Post, Kategorie, Tags, Homepage |
| `delete_post` | Post wurde gelöscht | Kategorie, Tags, Homepage |
| `update_category` | Kategorie wurde bearbeitet | Kategorie-Seite, Homepage |
| `update_tag` | Tag wurde bearbeitet | Tag-Seite |
| `revalidate_all` | Notfall: Alles neu generieren | Alle Seiten (langsam!) |

---

## Next Steps

Nach erfolgreichem Setup:

1. ✅ Teste die Revalidation mit einem Test-Post
2. ✅ Bearbeite einen echten Post und prüfe, ob Änderungen sofort sichtbar sind
3. ✅ Überwache Vercel Function Logs für die ersten Tage
4. ✅ Optional: Erweitere die Webhook Actions (z.B. für Custom Post Types)

---

## Support

Bei Problemen:
- Prüfe Vercel Function Logs
- Prüfe WordPress Webhook Logs
- Prüfe Browser Console für Cache-Probleme
