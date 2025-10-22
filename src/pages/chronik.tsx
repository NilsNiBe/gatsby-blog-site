import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const ChronikPage: React.FC<PageProps> = () => {
  const chronikEvents = [
    { year: "2020", event: "Gründung des Vereins und erste Kontakte nach Ghana" },
    { year: "2021", event: "Erste Spendenaktion und Projektplanung" },
    { year: "2022", event: "Erster Besuch in der Partnergemeinde Kalba" },
    { year: "2023", event: "Start des Bildungsprojekts und Bau der ersten Schule" },
    { year: "2024", event: "Erweiterung der Projekte und neue Partnerschaften" },
    { year: "2025", event: "Fortführung der erfolgreichen Zusammenarbeit" }
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Chronik</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Die Geschichte unseres Vereins</h2>
          <p>
            Hier finden Sie eine chronologische Übersicht über die wichtigsten 
            Meilensteine und Ereignisse in der Geschichte unseres Vereins und 
            unserer Partnerschaftsarbeit.
          </p>
        </section>

        <section>
          <h2>Wichtige Ereignisse</h2>
          <div style={{ borderLeft: '3px solid #667eea', paddingLeft: '1rem' }}>
            {chronikEvents.map((item, index) => (
              <div key={index} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <h3 style={{ color: '#667eea', margin: '0 0 0.5rem 0' }}>{item.year}</h3>
                <p style={{ margin: 0 }}>{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Ausblick</h2>
          <p>
            Wir blicken mit Stolz auf das Erreichte zurück und freuen uns auf 
            die kommenden Jahre, in denen wir unsere erfolgreiche Arbeit fortsetzen 
            und neue Projekte verwirklichen möchten.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default ChronikPage

export const Head: HeadFC = () => <title>Chronik</title>