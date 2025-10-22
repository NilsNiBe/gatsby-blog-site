import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const PartnerschaftskommiteePage: React.FC<PageProps> = () => {
  const kommiteeMitglieder = [
    {
      name: "Maria Schmidt",
      rolle: "Vorsitzende",
      aufgaben: "Koordination und strategische Planung"
    },
    {
      name: "Dr. Hans Müller", 
      rolle: "Stellvertretender Vorsitzender",
      aufgaben: "Projektentwicklung und -betreuung"
    },
    {
      name: "Anna Weber",
      rolle: "Schatzmeisterin",
      aufgaben: "Finanzverwaltung und Spendenverwaltung"
    },
    {
      name: "Michael Bauer",
      rolle: "Öffentlichkeitsarbeit",
      aufgaben: "Kommunikation und Medienbetreuung"
    }
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Partnerschaftskommitee</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Über das Komitee</h2>
          <p>
            Das Partnerschaftskommitee ist das koordinierende Gremium unserer 
            Partnerschaftsarbeit mit Kalba in Ghana. Es besteht aus engagierten 
            Vereinsmitgliedern, die die verschiedenen Aspekte der Partnerschaft 
            planen, koordinieren und durchführen.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Aufgaben des Komitees</h2>
          <ul style={{ lineHeight: '1.6' }}>
            <li>Planung und Koordination von Hilfsprojekten</li>
            <li>Organisation von Spendenaktionen</li>
            <li>Vorbereitung und Durchführung von Besuchsreisen</li>
            <li>Pflege der Kontakte zur Partnergemeinde</li>
            <li>Öffentlichkeitsarbeit und Informationsveranstaltungen</li>
            <li>Berichterstattung über Projektfortschritte</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Mitglieder des Komitees</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {kommiteeMitglieder.map((mitglied, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#f9f9f9',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #ddd'
                }}
              >
                <h3 style={{ color: '#667eea', marginTop: 0 }}>{mitglied.name}</h3>
                <p style={{ fontWeight: 'bold', margin: '0.5rem 0', color: '#555' }}>
                  {mitglied.rolle}
                </p>
                <p style={{ margin: 0 }}>{mitglied.aufgaben}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Sitzungen und Termine</h2>
          <p>
            Das Partnerschaftskommitee trifft sich regelmäßig jeden ersten 
            Montag im Monat um 19:00 Uhr im Vereinsheim. Interessierte 
            Mitglieder sind herzlich willkommen.
          </p>
          <div style={{ 
            backgroundColor: '#f0f4ff',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #667eea',
            marginTop: '1rem'
          }}>
            <strong>Nächste Sitzung:</strong> Montag, 3. November 2025, 19:00 Uhr
          </div>
        </section>

        <section>
          <h2>Mitarbeit im Komitee</h2>
          <p>
            Wir freuen uns über neue Mitglieder, die sich aktiv in der 
            Partnerschaftsarbeit engagieren möchten. Bei Interesse wenden 
            Sie sich gerne an unser <a href="/kontakt" style={{ color: '#667eea' }}>Kontaktformular</a> 
            oder kommen Sie zu einer unserer Sitzungen.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default PartnerschaftskommiteePage

export const Head: HeadFC = () => <title>Partnerschaftskommitee</title>