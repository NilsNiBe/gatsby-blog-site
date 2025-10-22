import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const BlaueTonnePage: React.FC<PageProps> = () => {
  const sammelstellen = [
    {
      ort: "Vereinsheim",
      adresse: "Musterstraße 123, 12345 Musterstadt",
      oeffnungszeiten: "Mo-Fr 14-18 Uhr, Sa 10-14 Uhr"
    },
    {
      ort: "Pfarramt St. Marien", 
      adresse: "Kirchplatz 1, 12345 Musterstadt",
      oeffnungszeiten: "Di/Do 16-18 Uhr"
    },
    {
      ort: "Rathaus (Haupteingang)",
      adresse: "Rathausplatz 5, 12345 Musterstadt", 
      oeffnungszeiten: "Mo-Fr 8-16 Uhr"
    }
  ]

  const sammelbareItems = [
    "Alte Handys und Smartphones",
    "Kleine Elektrogeräte",
    "Schmuck (auch defekt)",
    "Münzen und Briefmarken",
    "CDs und DVDs",
    "Druckerpatronen",
    "Batterien und Akkus"
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Blaue Tonne</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Sammelprojekt "Blaue Tonne"</h2>
          <p>
            Mit unserer "Blauen Tonne" sammeln wir wiederverwertbare Gegenstände, 
            die verkauft werden können, um Geld für unsere Hilfsprojekte in Ghana 
            zu generieren. Gleichzeitig leisten wir einen Beitrag zum Umweltschutz 
            durch Recycling und Wiederverwertung.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Was können Sie spenden?</h2>
          <div style={{ backgroundColor: '#f0f8f0', padding: '1.5rem', borderRadius: '8px', border: '2px solid #27ae60' }}>
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              {sammelbareItems.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Sammelstellen</h2>
          <p>
            Bringen Sie Ihre Spenden zu einer unserer Sammelstellen. 
            Alle Gegenstände werden sorgfältig sortiert und fachgerecht verwertet.
          </p>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {sammelstellen.map((stelle, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#f9f9f9',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #ddd'
                }}
              >
                <h3 style={{ color: '#667eea', marginTop: 0 }}>{stelle.ort}</h3>
                <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>{stelle.adresse}</p>
                <p style={{ margin: 0, color: '#666' }}>
                  <strong>Öffnungszeiten:</strong> {stelle.oeffnungszeiten}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Erfolg der Sammelaktion</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0f4ff', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>2.340€</div>
              <p style={{ margin: '0.5rem 0 0 0' }}>Erlös 2024</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0f8f0', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#27ae60' }}>1.250kg</div>
              <p style={{ margin: '0.5rem 0 0 0' }}>Gesammeltes Material</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fff8f0', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f39c12' }}>156</div>
              <p style={{ margin: '0.5rem 0 0 0' }}>Aktive Spender</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Wichtige Hinweise</h2>
          <div style={{ backgroundColor: '#fff3cd', padding: '1rem', borderRadius: '8px', border: '1px solid #ffc107' }}>
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li>Bitte nur saubere und funktionsfähige Gegenstände spenden</li>
              <li>Handys bitte ohne SIM-Karte und nach Löschung persönlicher Daten</li>
              <li>Batterien und Akkus separat sammeln (Umweltschutz)</li>
              <li>Bei größeren Mengen bitte vorher anmelden</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Abholung größerer Spenden</h2>
          <p>
            Bei größeren Spenden können wir nach Absprache auch eine Abholung 
            organisieren. <a href="/kontakt" style={{ color: '#667eea' }}>Kontaktieren Sie uns</a> 
            einfach telefonisch oder per E-Mail.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default BlaueTonnePage
export const Head: HeadFC = () => <title>Blaue Tonne</title>