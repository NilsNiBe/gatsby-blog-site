import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const SammlungenPage: React.FC<PageProps> = () => {
  const sammlungen = [
    {
      title: "Briefmarkensammlung Ghana",
      description: "Eine umfangreiche Sammlung ghanaischer Briefmarken aus verschiedenen Epochen",
      items: "ca. 150 Exemplare"
    },
    {
      title: "Historische Dokumente",
      description: "Originaldokumente zur Geschichte der Partnerschaft und wichtige Korrespondenzen",
      items: "25 Dokumente"
    },
    {
      title: "Fotoarchiv",
      description: "Fotografische Dokumentation aller Besuche und Projekte seit Vereinsgründung",
      items: "über 500 Fotos"
    },
    {
      title: "Kunsthandwerk",
      description: "Traditionelle ghanaische Kunstgegenstände und Handwerksarbeiten",
      items: "30 Objekte"
    }
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Sammlungen</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Unsere Sammlungen</h2>
          <p>
            Der Verein pflegt verschiedene Sammlungen, die die Geschichte und 
            Kultur unserer Partnerschaft dokumentieren und für zukünftige 
            Generationen bewahren.
          </p>
        </section>

        <section>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {sammlungen.map((sammlung, index) => (
              <div 
                key={index} 
                style={{ 
                  border: '1px solid #ddd', 
                  borderRadius: '8px', 
                  padding: '1.5rem',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <h3 style={{ color: '#667eea', marginTop: 0 }}>{sammlung.title}</h3>
                <p style={{ marginBottom: '0.5rem' }}>{sammlung.description}</p>
                <p style={{ 
                  margin: 0, 
                  fontWeight: 'bold', 
                  color: '#555',
                  fontSize: '0.9rem'
                }}>
                  Umfang: {sammlung.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Besichtigung</h2>
          <p>
            Die Sammlungen können nach Voranmeldung besichtigt werden. 
            Interessierte können gerne <a href="/kontakt" style={{ color: '#667eea' }}>Kontakt</a> 
            mit uns aufnehmen, um einen Termin zu vereinbaren.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Spenden für die Sammlung</h2>
          <p>
            Wir freuen uns über Spenden relevanter Gegenstände, Dokumente oder 
            Fotografien, die unsere Sammlungen bereichern könnten.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default SammlungenPage

export const Head: HeadFC = () => <title>Sammlungen</title>