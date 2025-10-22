import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const BilderPage: React.FC<PageProps> = () => {
  const bildergalerien = [
    {
      titel: "Besuch in Kalba 2025",
      beschreibung: "Impressionen von unserem letzten Besuch in der Partnergemeinde",
      anzahl: 45,
      datum: "März 2025"
    },
    {
      titel: "Schulbau-Projekt",
      beschreibung: "Dokumentation des Schulbau-Projekts von Grundsteinlegung bis Einweihung",
      anzahl: 67,
      datum: "2024-2025"
    },
    {
      titel: "Spendenaktion Stadtfest",
      beschreibung: "Bilder von unserer Spendenaktion beim jährlichen Stadtfest",
      anzahl: 23,
      datum: "August 2024"
    },
    {
      titel: "Gegenbesuch aus Ghana",
      beschreibung: "Delegation aus Kalba besucht unsere Stadt",
      anzahl: 34,
      datum: "Juni 2024"
    },
    {
      titel: "Brunnen-Projekt",
      beschreibung: "Bau und Einweihung der neuen Wasserbrunnen",
      anzahl: 29,
      datum: "2023-2024"
    }
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Bilder</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Bildergalerien unserer Projekte</h2>
          <p>
            Hier finden Sie Fotodokumentationen unserer Aktivitäten, Projekte und 
            Besuche. Die Bilder zeigen die Entwicklung unserer Partnerschaft und 
            den Fortschritt unserer Hilfsprojekte.
          </p>
        </section>

        <section>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {bildergalerien.map((galerie, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#f9f9f9',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: '#667eea', marginTop: 0, marginBottom: '0.5rem' }}>
                      {galerie.titel}
                    </h3>
                    <p style={{ margin: '0 0 1rem 0', color: '#666' }}>
                      {galerie.beschreibung}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#888' }}>
                      <span><strong>{galerie.anzahl}</strong> Bilder</span>
                      <span>{galerie.datum}</span>
                    </div>
                  </div>
                  <div style={{ 
                    width: '80px', 
                    height: '60px', 
                    backgroundColor: '#e0e0e0', 
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    color: '#666'
                  }}>
                    📷 {galerie.anzahl}
                  </div>
                </div>
                <button
                  style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                  onClick={() => alert(`Galerie "${galerie.titel}" wird geöffnet (Funktionalität wird noch implementiert)`)}
                >
                  Galerie ansehen →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Bildrechte und Nutzung</h2>
          <div style={{ backgroundColor: '#fff8e1', padding: '1rem', borderRadius: '8px', border: '1px solid #ffc107' }}>
            <p style={{ margin: 0 }}>
              <strong>Hinweis:</strong> Alle Bilder sind urheberrechtlich geschützt. 
              Bei Interesse an der Nutzung einzelner Bilder wenden Sie sich bitte 
              an unser <a href="/kontakt" style={{ color: '#667eea' }}>Kontaktformular</a>.
            </p>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Bilder beitragen</h2>
          <p>
            Haben Sie Fotos von Vereinsaktivitäten oder -veranstaltungen? 
            Wir freuen uns über Ihre Beiträge zur Bildsammlung!
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default BilderPage
export const Head: HeadFC = () => <title>Bilder</title>