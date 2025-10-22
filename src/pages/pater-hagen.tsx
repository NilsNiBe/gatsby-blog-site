import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const PaterHagenPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Pater Hagen</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Über Pater Hagen</h2>
          <p>
            Pater Hagen ist eine zentrale Figur in unserem Verein und unserer 
            Partnerschaftsarbeit. Sein unermüdlicher Einsatz und seine Hingabe 
            haben maßgeblich zur Entwicklung unserer Projekte beigetragen.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Sein Wirken</h2>
          <p>
            Durch seine jahrelange Arbeit vor Ort hat Pater Hagen tiefe Verbindungen 
            zu den lokalen Gemeinschaften aufgebaut und zahlreiche Projekte initiiert, 
            die nachhaltige positive Veränderungen bewirkt haben.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Projekte und Initiativen</h2>
          <ul>
            <li>Bildungsprogramme für Kinder und Jugendliche</li>
            <li>Gesundheitsinitiativen</li>
            <li>Infrastrukturprojekte</li>
            <li>Kultureller Austausch</li>
          </ul>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Für Fragen oder weitere Informationen über Pater Hagens Arbeit 
            können Sie gerne <a href="/kontakt" style={{ color: '#667eea' }}>Kontakt</a> mit uns aufnehmen.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default PaterHagenPage

export const Head: HeadFC = () => <title>Pater Hagen</title>