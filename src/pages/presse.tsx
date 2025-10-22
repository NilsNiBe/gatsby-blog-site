import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const PressePage: React.FC<PageProps> = () => {
  const presseberichte = [
    {
      datum: "15. März 2025",
      titel: "Erfolgreiche Spendenaktion für Schulprojekt",
      quelle: "Lokalzeitung",
      link: "#"
    },
    {
      datum: "8. Februar 2025", 
      titel: "Partnerschaftsbesuch stärkt Verbindungen",
      quelle: "Stadtmagazin",
      link: "#"
    },
    {
      datum: "20. Januar 2025",
      titel: "Verein erhält Auszeichnung für Entwicklungshilfe",
      quelle: "Regionale Presse",
      link: "#"
    },
    {
      datum: "5. Dezember 2024",
      titel: "Neue Projekte in Ghana gestartet",
      quelle: "Online-Portal",
      link: "#"
    }
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Presse</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Pressemitteilungen und Berichte</h2>
          <p>
            Hier finden Sie aktuelle Pressemitteilungen unseres Vereins sowie 
            Berichte über unsere Arbeit in den Medien.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Aktuelle Berichte</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {presseberichte.map((bericht, index) => (
              <div 
                key={index}
                style={{ 
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1rem',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, color: '#667eea' }}>{bericht.titel}</h3>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>{bericht.datum}</span>
                </div>
                <p style={{ margin: '0.5rem 0', color: '#555' }}>Quelle: {bericht.quelle}</p>
                <a href={bericht.link} style={{ color: '#667eea', textDecoration: 'none' }}>
                  Artikel lesen →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Pressekontakt</h2>
          <div style={{ 
            backgroundColor: '#f0f4ff', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #667eea'
          }}>
            <h3 style={{ marginTop: 0 }}>Für Medienvertreter</h3>
            <p>
              <strong>Ansprechpartner:</strong> Pressebeauftragte/r<br/>
              <strong>E-Mail:</strong> presse@verein.de<br/>
              <strong>Telefon:</strong> +49 (0) 123 456789
            </p>
            <p>
              Gerne stellen wir Ihnen weiterführende Informationen, 
              Bildmaterial oder Interviewpartner zur Verfügung.
            </p>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Pressematerial</h2>
          <ul>
            <li><a href="#" style={{ color: '#667eea' }}>Vereinslogo (hochauflösend)</a></li>
            <li><a href="#" style={{ color: '#667eea' }}>Factsheet über den Verein</a></li>
            <li><a href="#" style={{ color: '#667eea' }}>Bildergalerie aktueller Projekte</a></li>
            <li><a href="#" style={{ color: '#667eea' }}>Pressemappe (PDF)</a></li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default PressePage

export const Head: HeadFC = () => <title>Presse</title>