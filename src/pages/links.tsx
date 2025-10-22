import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const LinksPage: React.FC<PageProps> = () => {
  const links = [
    {
      kategorie: "Entwicklungshilfe",
      links: [
        { name: "Misereor", url: "https://www.misereor.de", beschreibung: "Hilfswerk der katholischen Kirche" },
        { name: "Brot für die Welt", url: "https://www.brot-fuer-die-welt.de", beschreibung: "Evangelisches Hilfswerk" },
        { name: "Welthungerhilfe", url: "https://www.welthungerhilfe.de", beschreibung: "Private Hilfsorganisation" }
      ]
    },
    {
      kategorie: "Ghana Informationen",
      links: [
        { name: "Botschaft Ghana", url: "https://www.ghanaembassy.de", beschreibung: "Offizielle Vertretung Ghanas" },
        { name: "Ghana Tourism", url: "https://www.ghana.travel", beschreibung: "Tourismus-Informationen" },
        { name: "GIZ Ghana", url: "https://www.giz.de/ghana", beschreibung: "Deutsche Entwicklungszusammenarbeit" }
      ]
    },
    {
      kategorie: "Partnerstädte",
      links: [
        { name: "Städtepartnerschaft Kalba", url: "#", beschreibung: "Offizielle Partnerschaftsseite" },
        { name: "Kommunal International", url: "https://www.kommunal-international.de", beschreibung: "Plattform für Städtepartnerschaften" }
      ]
    }
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Links</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Nützliche Links</h2>
          <p>
            Hier finden Sie eine Sammlung nützlicher Links zu Themen rund um 
            Entwicklungszusammenarbeit, Ghana und Städtepartnerschaften.
          </p>
        </section>

        {links.map((kategorie, katIndex) => (
          <section key={katIndex} style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#667eea' }}>{kategorie.kategorie}</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {kategorie.links.map((link, linkIndex) => (
                <div 
                  key={linkIndex}
                  style={{ 
                    backgroundColor: '#f9f9f9',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid #ddd'
                  }}
                >
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#667eea', textDecoration: 'none' }}
                    >
                      {link.name} ↗
                    </a>
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                    {link.beschreibung}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section style={{ marginTop: '2rem' }}>
          <h2>Link vorschlagen</h2>
          <p>
            Kennen Sie weitere nützliche Links? Gerne nehmen wir Ihre Vorschläge 
            über unser <a href="/kontakt" style={{ color: '#667eea' }}>Kontaktformular</a> entgegen.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default LinksPage
export const Head: HeadFC = () => <title>Links</title>