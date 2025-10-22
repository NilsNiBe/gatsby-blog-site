import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#AA0000', marginBottom: '2rem' }}>
          Willkommen bei unserem Verein
        </h1>
        
        <section style={{ marginBottom: '3rem' }}>
          <h2>Partnerschaft mit Kalba, Ghana</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            Wir sind ein gemeinnütziger Verein, der sich für nachhaltige Entwicklungszusammenarbeit 
            und die Stärkung der Partnerschaft mit unserer Partnergemeinde Kalba in Ghana einsetzt.
          </p>
        </section>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            backgroundColor: '#fff0f0', 
            padding: '2rem', 
            borderRadius: '10px',
            border: '2px solid #AA0000'
          }}>
            <h3 style={{ color: '#AA0000', marginTop: 0 }}>🏫 Bildung</h3>
            <p>Unterstützung von Schulprojekten und Bildungsinitiativen für Kinder und Jugendliche in Ghana.</p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f8f8', 
            padding: '2rem', 
            borderRadius: '10px',
            border: '2px solid #333333'
          }}>
            <h3 style={{ color: '#333333', marginTop: 0 }}>💧 Infrastruktur</h3>
            <p>Bau von Brunnen, Gesundheitsstationen und anderen wichtigen Infrastrukturprojekten.</p>
          </div>
          
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '2rem', 
            borderRadius: '10px',
            border: '2px solid #666666'
          }}>
            <h3 style={{ color: '#666666', marginTop: 0 }}>🤝 Partnerschaft</h3>
            <p>Kultureller Austausch und langfristige Partnerschaften zwischen den Gemeinden.</p>
          </div>
        </div>

        <section style={{ 
          backgroundColor: '#f9f9f9', 
          padding: '2rem', 
          borderRadius: '10px',
          textAlign: 'left'
        }}>
          <h2>Aktuelle Neuigkeiten</h2>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#AA0000', marginBottom: '0.5rem' }}>Neue Schule erfolgreich eröffnet</h4>
            <p style={{ margin: 0, color: '#666' }}>
              Die mit Ihrer Hilfe erbaute Grundschule in Kalba wurde feierlich eröffnet. 
              200 Kinder haben nun Zugang zu moderner Bildung.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: '#AA0000', marginBottom: '0.5rem' }}>Spendenaktion erfolgreich abgeschlossen</h4>
            <p style={{ margin: 0, color: '#666' }}>
              Dank der großzügigen Unterstützung unserer Mitglieder konnten wir 
              15.000 € für das Brunnenprojekt sammeln.
            </p>
          </div>
        </section>

        <section style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>Möchten Sie helfen?</h2>
          <p style={{ marginBottom: '2rem' }}>
            Werden Sie Teil unserer Gemeinschaft und unterstützen Sie unsere wichtige Arbeit.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/spenden" 
              style={{ 
                backgroundColor: '#AA0000', 
                color: 'white', 
                padding: '1rem 2rem', 
                textDecoration: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Jetzt spenden
            </a>
            <a 
              href="/der-verein" 
              style={{ 
                backgroundColor: '#333333', 
                color: 'white', 
                padding: '1rem 2rem', 
                textDecoration: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Mitglied werden
            </a>
            <a 
              href="/kontakt" 
              style={{ 
                backgroundColor: '#666666', 
                color: 'white', 
                padding: '1rem 2rem', 
                textDecoration: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Kontakt aufnehmen
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Startseite - Verein Partnerschaft Ghana</title>