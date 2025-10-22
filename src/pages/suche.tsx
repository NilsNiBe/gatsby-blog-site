import * as React from "react"
import { HeadFC, PageProps, navigate } from "gatsby"
import Layout from "../components/layout"

const SuchePage: React.FC<PageProps> = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<any[]>([])

  // Alle verfügbaren Seiten mit Inhalten für die Suche
  const searchableContent = [
    {
      title: "Der Verein",
      path: "/der-verein",
      content: "Über unseren Verein Mission Vereinsstruktur Mitgliedschaft gemeinnützig Entwicklungszusammenarbeit"
    },
    {
      title: "Pater Hagen", 
      path: "/pater-hagen",
      content: "Pater Hagen Wirken Projekte Initiativen Bildungsprogramme Gesundheitsinitiativen Infrastrukturprojekte"
    },
    {
      title: "Chronik",
      path: "/chronik", 
      content: "Geschichte Verein Meilensteine Ereignisse Gründung Spendenaktion Besuch Partnergemeinde Kalba Bildungsprojekt Schule"
    },
    {
      title: "Sammlungen",
      path: "/sammlungen",
      content: "Briefmarkensammlung Ghana Dokumente Fotoarchiv Kunsthandwerk traditionell ghanaisch"
    },
    {
      title: "Presse",
      path: "/presse",
      content: "Pressemitteilungen Berichte Medien Spendenaktion Schulprojekt Partnerschaftsbesuch Auszeichnung"
    },
    {
      title: "Statistik", 
      path: "/statistik",
      content: "Projektstatus Spenden Mitglieder Besuche Ghana ehrenamtlich Engagement Vereinsstatistiken"
    },
    {
      title: "Partnerschaftskommitee",
      path: "/partnerschaftskommitee",
      content: "Komitee Koordination Hilfsprojekte Spendenaktionen Besuchsreisen Partnergemeinde Öffentlichkeitsarbeit"
    },
    {
      title: "Spenden",
      path: "/spenden",
      content: "Spenden Einmalspende Dauerspende Projektspende Sachspende Bankverbindung Ghana Bildungsprojekte"
    },
    {
      title: "Projekte",
      path: "/projekte",
      content: "Schulbau Brunnen Wasserbrunnen Grundschule Kinder Kalba Ghana Infrastruktur Bildung"
    },
    {
      title: "Berichte aus Kalba",
      path: "/berichte-kalba",
      content: "Kalba Partnergemeinde Ghana Schulstart Klassenzimmer Schulgarten Ernte Landwirtschaft"
    },
    {
      title: "Besuche nach Ghana",
      path: "/besuche-ghana", 
      content: "Ghana Besuch Delegation Vereinsmitglieder Einweihung Schule Projektplanung Baufortschritte"
    },
    {
      title: "Partner",
      path: "/partner",
      content: "Partner Unterstützer Stadt Musterstadt Katholische Kirche Rotary Club Bäckerei Kooperation"
    },
    {
      title: "Links", 
      path: "/links",
      content: "Links Auswärtiges Amt Botschaft GIZ Entwicklungszusammenarbeit Brot für die Welt Misereor"
    },
    {
      title: "Bilder",
      path: "/bilder",
      content: "Bilder Fotogalerien Kalba Schulbau Spendenaktion Stadtfest Gegenbesuch Ghana Brunnen"
    },
    {
      title: "Blaue Tonne",
      path: "/blaue-tonne", 
      content: "Blaue Tonne Sammelprojekt Handys Elektrogeräte Schmuck Münzen Briefmarken Recycling Umweltschutz"
    },
    {
      title: "Kontakt",
      path: "/kontakt",
      content: "Kontakt Ansprechpartner Adresse Telefon Email Öffnungszeiten Kontaktformular Anfahrt"
    }
  ]

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    
    if (term.length < 2) {
      setSearchResults([])
      return
    }

    const results = searchableContent.filter(item => 
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      item.content.toLowerCase().includes(term.toLowerCase())
    )
    
    setSearchResults(results)
  }

  const handleResultClick = (path: string) => {
    navigate(path)
  }

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Suche</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <p>
            Durchsuchen Sie alle Inhalte unserer Website nach Begriffen, 
            Projekten oder Informationen.
          </p>
          
          <div style={{ 
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            border: '2px solid #667eea',
            borderRadius: '8px',
            padding: '0.5rem'
          }}>
            <input
              type="text"
              placeholder="Suchbegriff eingeben..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '1.1rem',
                padding: '0.5rem'
              }}
            />
            <span style={{ 
              padding: '0.5rem',
              color: '#667eea',
              fontSize: '1.2rem'
            }}>
              🔍
            </span>
          </div>
        </section>

        {searchTerm.length > 0 && (
          <section>
            <h2>Suchergebnisse für "{searchTerm}"</h2>
            
            {searchResults.length === 0 ? (
              <div style={{ 
                backgroundColor: '#fff8e1',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #ffc107',
                textAlign: 'center'
              }}>
                <p style={{ margin: 0 }}>
                  Keine Ergebnisse gefunden. Versuchen Sie es mit anderen Suchbegriffen.
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '1rem' }}>
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => handleResultClick(result.path)}
                    style={{
                      backgroundColor: '#f9f9f9',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f4ff'
                      e.currentTarget.style.borderColor = '#667eea'
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#f9f9f9'
                      e.currentTarget.style.borderColor = '#ddd'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <h3 style={{ 
                      margin: '0 0 0.5rem 0',
                      color: '#667eea',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      {result.title}
                      <span style={{ fontSize: '0.8rem', color: '#666' }}>→</span>
                    </h3>
                    <p style={{ 
                      margin: 0,
                      color: '#666',
                      fontSize: '0.9rem'
                    }}>
                      {result.path}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div style={{ 
              marginTop: '2rem',
              textAlign: 'center',
              color: '#666',
              fontSize: '0.9rem'
            }}>
              {searchResults.length} von {searchableContent.length} Seiten gefunden
            </div>
          </section>
        )}

        {searchTerm.length === 0 && (
          <section>
            <h2>Beliebte Suchbegriffe</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Ghana', 'Spenden', 'Projekte', 'Kalba', 'Pater Hagen', 'Schule', 'Partnerschaft'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSearch(tag)}
                  style={{
                    backgroundColor: '#f0f4ff',
                    color: '#667eea',
                    border: '1px solid #667eea',
                    borderRadius: '20px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#667eea'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f4ff'
                    e.currentTarget.style.color = '#667eea'
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  )
}

export default SuchePage

export const Head: HeadFC = () => <title>Suche - Verein Partnerschaft Ghana</title>