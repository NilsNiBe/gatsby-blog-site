# 🌍 Verein Partnerschaft Ghana - Website

Website für den Verein zur Unterstützung der Partnerschaft mit Kalba, Ghana.

## 🚀 GitHub Pages Deployment

Diese Website wird automatisch auf GitHub Pages deployed.

### � Automatisches Deployment
- Jeder Push auf den `main` Branch löst automatisch ein Deployment aus
- GitHub Actions buildet die Seite und deployed sie auf GitHub Pages
- Die Website ist dann unter `https://nilsnibe.github.io/gatsby-blog-site` verfügbar

### 📝 Neuigkeiten hinzufügen
1. Neue `.md` Datei in `src/content/neuigkeiten/` erstellen
2. Frontmatter hinzufügen:
   ```yaml
   ---
   title: "Titel der Neuigkeit"
   date: "2024-10-22" 
   priority: 1
   excerpt: "Kurze Beschreibung"
   ---
   ```
3. Datei committen und pushen - automatisches Deployment!

## 🛠️ Entwicklung

### Lokale Entwicklung starten

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)
