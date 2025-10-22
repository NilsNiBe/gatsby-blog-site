import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const KontaktPage: React.FC<PageProps> = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    betreff: '',
    nachricht: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde normalerweise die Form-Verarbeitung stattfinden
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns baldmöglichst bei Ihnen melden.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Kontakt</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <section>
            <h2>Kontaktdaten</h2>
            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
              <h3>Verein Partnerschaft Ghana e.V.</h3>
              <p>
                <strong>Vorsitzende:</strong> Maria Schmidt<br/>
                <strong>Adresse:</strong> Musterstraße 123<br/>
                12345 Musterstadt<br/><br/>
                <strong>Telefon:</strong> +49 (0) 123 456789<br/>
                <strong>E-Mail:</strong> info@partnerschaft-ghana.de<br/>
                <strong>Web:</strong> www.partnerschaft-ghana.de
              </p>
            </div>
          </section>

          <section>
            <h2>Öffnungszeiten Büro</h2>
            <div style={{ backgroundColor: '#f0f4ff', padding: '1.5rem', borderRadius: '8px' }}>
              <p>
                <strong>Montag:</strong> 14:00 - 18:00 Uhr<br/>
                <strong>Mittwoch:</strong> 10:00 - 14:00 Uhr<br/>
                <strong>Freitag:</strong> 16:00 - 19:00 Uhr<br/><br/>
                <em>Termine nach Vereinbarung möglich</em>
              </p>
            </div>
          </section>
        </div>

        <section>
          <h2>Kontaktformular</h2>
          <form onSubmit={handleSubmit} style={{ 
            backgroundColor: '#f9f9f9', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="betreff" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Betreff
              </label>
              <input
                type="text"
                id="betreff"
                name="betreff"
                value={formData.betreff}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="nachricht" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Nachricht *
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#667eea',
                color: 'white',
                padding: '0.75rem 2rem',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a67d8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
            >
              Nachricht senden
            </button>
          </form>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Anfahrt</h2>
          <p>
            Unser Büro befindet sich im Zentrum von Musterstadt, nur wenige 
            Gehminuten vom Hauptbahnhof entfernt. Parkplätze sind in der 
            nahegelegenen Tiefgarage verfügbar.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default KontaktPage
export const Head: HeadFC = () => <title>Kontakt</title>