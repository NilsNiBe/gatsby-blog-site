import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

interface NewsItem {
  id: string
  frontmatter: {
    title: string
    date: string
    excerpt: string
    priority: number
  }
}

interface IndexPageProps extends PageProps {
  data: {
    allMarkdownRemark: {
      nodes: NewsItem[]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#AA0000', marginBottom: '2rem' }}>
          Willkommen bei unserem Verein
        </h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Partnerschaft mit Kalba, Ghana</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            Wir sind ein gemeinnütziger Verein, der sich für nachhaltige Entwicklungszusammenarbeit 
            und die Stärkung der Partnerschaft mit unserer Partnergemeinde Kalba in Ghana einsetzt.
          </p>
        </section>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            backgroundColor: '#fff0f0', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '2px solid #AA0000',
            flex: '1',
            minWidth: '200px',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#AA0000', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>🏫 Bildung</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Schulprojekte und Bildungsinitiativen</p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f8f8f8', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '2px solid #333333',
            flex: '1',
            minWidth: '200px',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#333333', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>💧 Infrastruktur</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Brunnen und Gesundheitsstationen</p>
          </div>
          
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '1rem', 
            borderRadius: '8px',
            border: '2px solid #666666',
            flex: '1',
            minWidth: '200px',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#666666', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>🤝 Partnerschaft</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Kultureller Austausch</p>
          </div>
        </div>

        <section style={{ 
          backgroundColor: '#f9f9f9', 
          padding: '2rem', 
          borderRadius: '10px',
          textAlign: 'left',
          marginBottom: '3rem'
        }}>
          <h2>Aktuelle Neuigkeiten</h2>
          {data.allMarkdownRemark.nodes.length > 0 ? (
            data.allMarkdownRemark.nodes.map((news) => (
              <div key={news.id} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#AA0000', marginBottom: '0.5rem' }}>
                  {news.frontmatter.title}
                </h4>
                <p style={{ 
                  margin: 0, 
                  color: '#666',
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem'
                }}>
                  {new Date(news.frontmatter.date).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p style={{ margin: 0, color: '#666' }}>
                  {news.frontmatter.excerpt}
                </p>
              </div>
            ))
          ) : (
            <p style={{ color: '#666' }}>
              Derzeit sind keine Neuigkeiten verfügbar.
            </p>
          )}
        </section>

        <section style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>Möchten Sie helfen?</h2>
          <p style={{ marginBottom: '2rem' }}>
            Werden Sie Teil unserer Gemeinschaft und unterstützen Sie unsere wichtige Arbeit.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/spenden" 
              style={{ 
                backgroundColor: '#AA0000', 
                color: 'white', 
                padding: '1rem 2rem', 
                textDecoration: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Jetzt spenden
            </Link>
            <Link 
              to="/der-verein" 
              style={{ 
                backgroundColor: '#333333', 
                color: 'white', 
                padding: '1rem 2rem', 
                textDecoration: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Mitglied werden
            </Link>
            <Link 
              to="/kontakt" 
              style={{ 
                backgroundColor: '#666666', 
                color: 'white', 
                padding: '1rem 2rem', 
                textDecoration: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/neuigkeiten/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          excerpt
          priority
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>Startseite - Verein Partnerschaft Ghana</title>