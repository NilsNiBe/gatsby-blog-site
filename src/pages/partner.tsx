import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const PartnerPage: React.FC<PageProps> = () => {
  const partner = [
    {
      name: "Stadt Musterstadt",
      beschreibung: "Offizielle Städtepartnerschaft und Unterstützung unserer Projekte"
    },
    {
      name: "Katholische Kirche St. Marien",
      beschreibung: "Spirituelle Begleitung und Vermittlung der Kontakte"
    },
    {
      name: "Rotary Club",
      beschreibung: "Finanzielle Unterstützung verschiedener Bildungsprojekte"
    },
    {
      name: "Bäckerei Schmidt",
      beschreibung: "Lokaler Partner für Spendenaktionen und Veranstaltungen"
    }
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Partner</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Unsere Partner und Unterstützer</h2>
          <p>
            Unsere Arbeit wäre ohne die Unterstützung verschiedener Partner nicht möglich. 
            Hier stellen wir Ihnen unsere wichtigsten Kooperationspartner vor.
          </p>
        </section>

        <section>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {partner.map((partner, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#f9f9f9',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #ddd'
                }}
              >
                <h3 style={{ color: '#667eea', marginTop: 0 }}>{partner.name}</h3>
                <p style={{ margin: 0 }}>{partner.beschreibung}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Partner werden</h2>
          <p>
            Möchten Sie Partner unseres Vereins werden? Wir freuen uns über neue 
            Kooperationen und Unterstützung. <a href="/kontakt" style={{ color: '#667eea' }}>Kontaktieren Sie uns!</a>
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default PartnerPage
export const Head: HeadFC = () => <title>Partner</title>