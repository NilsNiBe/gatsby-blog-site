import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const DerVereinPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Der Verein</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Über unseren Verein</h2>
          <p>
            Unser Verein wurde mit dem Ziel gegründet, eine Brücke zwischen Kulturen zu schlagen
            und nachhaltige Entwicklungszusammenarbeit zu fördern. Wir setzen uns für 
            Bildung, soziale Gerechtigkeit und die Stärkung lokaler Gemeinschaften ein.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Unsere Mission</h2>
          <ul>
            <li>Förderung der Völkerverständigung</li>
            <li>Unterstützung von Bildungsprojekten</li>
            <li>Nachhaltige Entwicklungszusammenarbeit</li>
            <li>Kultureller Austausch</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Vereinsstruktur</h2>
          <p>
            Der Verein wird von einem engagierten Vorstand geleitet und zählt 
            zahlreiche aktive Mitglieder, die sich in verschiedenen Bereichen 
            der Vereinsarbeit einbringen.
          </p>
        </section>

        <section>
          <h2>Mitgliedschaft</h2>
          <p>
            Werden Sie Teil unserer Gemeinschaft! Informationen zur Mitgliedschaft 
            erhalten Sie über unser <a href="/kontakt" style={{ color: '#667eea' }}>Kontaktformular</a>.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default DerVereinPage

export const Head: HeadFC = () => <title>Der Verein</title>