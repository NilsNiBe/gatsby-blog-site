import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const ImpressumPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Impressum</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Verein Partnerschaft Ghana e.V.</strong><br/>
            Musterstraße 123<br/>
            12345 Musterstadt<br/>
            Deutschland
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Vertreten durch</h2>
          <p>
            <strong>1. Vorsitzende:</strong> Maria Schmidt<br/>
            <strong>2. Vorsitzende:</strong> Dr. Hans Müller
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Kontakt</h2>
          <p>
            <strong>Telefon:</strong> +49 (0) 123 456789<br/>
            <strong>E-Mail:</strong> info@partnerschaft-ghana.de<br/>
            <strong>Website:</strong> www.partnerschaft-ghana.de
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Registereintrag</h2>
          <p>
            <strong>Eintragung im Vereinsregister:</strong><br/>
            Registergericht: Amtsgericht Musterstadt<br/>
            Registernummer: VR 12345
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Gemeinnützigkeit</h2>
          <p>
            Der Verein ist als gemeinnützig anerkannt und vom Finanzamt Musterstadt 
            unter der Steuernummer 123/456/78901 als gemeinnütziger Verein eingestuft.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Maria Schmidt<br/>
            Musterstraße 123<br/>
            12345 Musterstadt
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Haftungsausschluss</h2>
          
          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf 
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG 
            sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte 
            oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu 
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte 
            wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch 
            keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der 
            jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Bildnachweise</h2>
          <p>
            Alle auf dieser Website verwendeten Bilder sind Eigentum des Vereins oder 
            werden mit ausdrücklicher Genehmigung der Rechteinhaber verwendet. 
            Bei Fragen zu Bildrechten wenden Sie sich bitte an unser 
            <a href="/kontakt" style={{ color: '#667eea' }}> Kontaktformular</a>.
          </p>
        </section>

        <section>
          <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
            Stand: Oktober 2025
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default ImpressumPage

export const Head: HeadFC = () => <title>Impressum - Verein Partnerschaft Ghana</title>