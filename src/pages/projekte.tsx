import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const ProjektePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Projekte</h1>
        <section>
          <h2>Aktuelle Projekte in Kalba</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: '#667eea' }}>Schulbau-Projekt</h3>
              <p>Bau einer neuen Grundschule für 200 Kinder</p>
              <div style={{ backgroundColor: '#ddd', height: '10px', borderRadius: '5px', marginTop: '1rem' }}>
                <div style={{ backgroundColor: '#27ae60', height: '100%', width: '85%', borderRadius: '5px' }}></div>
              </div>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>85% abgeschlossen</p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: '#667eea' }}>Brunnen-Projekt</h3>
              <p>Installation von Wasserbrunnen für sauberes Trinkwasser</p>
              <div style={{ backgroundColor: '#ddd', height: '10px', borderRadius: '5px', marginTop: '1rem' }}>
                <div style={{ backgroundColor: '#f39c12', height: '100%', width: '60%', borderRadius: '5px' }}></div>
              </div>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>60% abgeschlossen</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ProjektePage
export const Head: HeadFC = () => <title>Projekte</title>