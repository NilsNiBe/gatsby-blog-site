import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const SpendenPage: React.FC<PageProps> = () => {
  const spendenmoeglichkeiten = [
    {
      typ: "Einmalspende",
      beschreibung: "Flexible Unterstützung für aktuelle Projekte",
      mindestbetrag: "ab 10 €"
    },
    {
      typ: "Dauerspende",
      beschreibung: "Regelmäßige monatliche oder jährliche Unterstützung",
      mindestbetrag: "ab 5 € monatlich"
    },
    {
      typ: "Projektspende",
      beschreibung: "Gezielte Spende für ein bestimmtes Projekt",
      mindestbetrag: "variabel"
    },
    {
      typ: "Sachspende",
      beschreibung: "Spende von Materialien oder Ausrüstung",
      mindestbetrag: "nach Bedarf"
    }
  ]

  const verwendungszwecke = [
    "Bildungsprojekte (40%)",
    "Gesundheitsversorgung (25%)", 
    "Infrastruktur (20%)",
    "Verwaltung und Transport (10%)",
    "Notfallfonds (5%)"
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Spenden</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Ihre Spende hilft direkt</h2>
          <p>
            Mit Ihrer Spende unterstützen Sie konkrete Hilfsprojekte in unserer 
            Partnergemeinde Kalba in Ghana. Jeder Euro kommt direkt dort an, wo 
            er gebraucht wird - bei den Menschen vor Ort.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Spendenmöglichkeiten</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {spendenmoeglichkeiten.map((spende, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#f9f9f9',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #ddd'
                }}
              >
                <h3 style={{ color: '#667eea', marginTop: 0 }}>{spende.typ}</h3>
                <p style={{ margin: '0.5rem 0' }}>{spende.beschreibung}</p>
                <p style={{ 
                  margin: 0, 
                  fontWeight: 'bold', 
                  color: '#27ae60' 
                }}>
                  {spende.mindestbetrag}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Bankverbindung</h2>
          <div style={{ 
            backgroundColor: '#f0f4ff',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #667eea'
          }}>
            <h3 style={{ marginTop: 0 }}>Spendenkonto</h3>
            <p style={{ margin: '0.5rem 0' }}>
              <strong>Kontoinhaber:</strong> Verein Partnerschaft Ghana e.V.<br/>
              <strong>IBAN:</strong> DE12 3456 7890 1234 5678 90<br/>
              <strong>BIC:</strong> GENODED1ABC<br/>
              <strong>Bank:</strong> Volksbank Beispielstadt<br/>
              <strong>Verwendungszweck:</strong> Spende [Ihr Name]
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: '1rem 0 0 0' }}>
              Bitte geben Sie Ihre vollständige Adresse im Verwendungszweck an, 
              damit wir Ihnen eine Spendenbescheinigung zusenden können.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Verwendung der Spenden</h2>
          <p>
            Transparenz ist uns wichtig. Hier sehen Sie, wie Ihre Spenden verwendet werden:
          </p>
          <ul style={{ lineHeight: '1.6' }}>
            {verwendungszwecke.map((zweck, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{zweck}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Spendenbescheinigung</h2>
          <p>
            Als gemeinnütziger Verein stellen wir Ihnen gerne eine 
            Spendenbescheinigung für das Finanzamt aus. Bei Spenden bis 300 € 
            genügt der Kontoauszug als Nachweis.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Was bewirkt Ihre Spende?</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0f8f0', borderRadius: '8px' }}>
              <strong style={{ color: '#27ae60', fontSize: '1.2rem' }}>25 €</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Schulbücher für ein Kind</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0f8f0', borderRadius: '8px' }}>
              <strong style={{ color: '#27ae60', fontSize: '1.2rem' }}>50 €</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Medizinische Grundversorgung</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f0f8f0', borderRadius: '8px' }}>
              <strong style={{ color: '#27ae60', fontSize: '1.2rem' }}>100 €</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Schuluniform und Material</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Fragen zu Spenden?</h2>
          <p>
            Bei Fragen zu Spendenmöglichkeiten oder zur Verwendung der Gelder 
            wenden Sie sich gerne an uns über unser <a href="/kontakt" style={{ color: '#667eea' }}>Kontaktformular</a>.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default SpendenPage

export const Head: HeadFC = () => <title>Spenden</title>