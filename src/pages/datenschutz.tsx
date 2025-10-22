import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const DatenschutzPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Datenschutzerklärung</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>1. Datenschutz auf einen Blick</h2>
          
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br/>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei einem externen Dienstleister. 
            Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden 
            auf den Servern des Hosters gespeichert.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/><br/>
            <strong>Verein Partnerschaft Ghana e.V.</strong><br/>
            Maria Schmidt (1. Vorsitzende)<br/>
            Musterstraße 123<br/>
            12345 Musterstadt<br/>
            Deutschland<br/><br/>
            Telefon: +49 (0) 123 456789<br/>
            E-Mail: info@partnerschaft-ghana.de
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>4. Datenerfassung auf dieser Website</h2>
          
          <h3>Cookies</h3>
          <p>
            Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten 
            auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen 
            dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in 
            so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
            Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
            aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>5. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht:
          </p>
          <ul>
            <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten;</li>
            <li>die Berichtigung oder Löschung dieser Daten zu verlangen;</li>
            <li>eine Einschränkung der Datenverarbeitung zu verlangen;</li>
            <li>der Datenverarbeitung zu widersprechen;</li>
            <li>die Datenübertragbarkeit zu verlangen.</li>
          </ul>
          <p>
            Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über 
            die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>6. Spenden und Mitgliedsdaten</h2>
          <p>
            Als gemeinnütziger Verein verarbeiten wir personenbezogene Daten unserer Mitglieder 
            und Spender ausschließlich für satzungsgemäße Zwecke. Dies umfasst:
          </p>
          <ul>
            <li>Mitgliederverwaltung</li>
            <li>Spendenabwicklung und -bescheinigungen</li>
            <li>Information über Vereinsaktivitäten</li>
            <li>Erfüllung steuerrechtlicher Verpflichtungen</li>
          </ul>
          <p>
            Die Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist zur 
            Erfüllung unserer satzungsgemäßen Zwecke oder aufgrund gesetzlicher Verpflichtungen erforderlich.
          </p>
        </section>

        <section>
          <h2>7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Oktober 2025. 
            Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund 
            geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig 
            werden, diese Datenschutzerklärung zu ändern.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic', marginTop: '2rem' }}>
            Stand: Oktober 2025
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default DatenschutzPage

export const Head: HeadFC = () => <title>Datenschutz - Verein Partnerschaft Ghana</title>