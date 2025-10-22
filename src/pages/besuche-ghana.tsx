import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const BesucheGhanaPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Besuche nach Ghana</h1>
        <section>
          <h2>Unsere Reisen zur Partnergemeinde</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
              <h3>Besuch März 2025</h3>
              <p><strong>Teilnehmer:</strong> 6 Vereinsmitglieder</p>
              <p><strong>Schwerpunkte:</strong> Einweihung der neuen Schule, Projektplanung für 2025</p>
              <p>Ein sehr erfolgreicher Besuch mit herzlichem Empfang und wichtigen Gesprächen über zukünftige Projekte.</p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
              <h3>Besuch Oktober 2024</h3>
              <p><strong>Teilnehmer:</strong> 4 Vereinsmitglieder</p>
              <p><strong>Schwerpunkte:</strong> Überprüfung der Baufortschritte, medizinische Hilfsaktion</p>
              <p>Wichtige Kontrollreise zur Überwachung der laufenden Bauprojekte.</p>
            </div>
          </div>
          <section style={{ marginTop: '2rem' }}>
            <h2>Nächste Reise</h2>
            <p>Die nächste Delegationsreise ist für Frühjahr 2026 geplant. Interessierte Mitglieder können sich gerne melden.</p>
          </section>
        </section>
      </div>
    </Layout>
  )
}

export default BesucheGhanaPage
export const Head: HeadFC = () => <title>Besuche nach Ghana</title>