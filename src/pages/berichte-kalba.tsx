import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const BerichteKalbaPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Berichte aus Kalba</h1>
        <section>
          <h2>Nachrichten aus unserer Partnergemeinde</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <article style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px' }}>
              <h3>Schulstart erfolgreich verlaufen</h3>
              <p style={{ color: '#666', margin: '0.5rem 0' }}>15. September 2025</p>
              <p>Das neue Schuljahr hat in Kalba erfolgreich begonnen. Dank der neuen Klassenzimmer können nun 50 weitere Kinder unterrichtet werden.</p>
            </article>
            <article style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px' }}>
              <h3>Erste Ernte aus dem Schulgarten</h3>
              <p style={{ color: '#666', margin: '0.5rem 0' }}>28. August 2025</p>
              <p>Der im Frühjahr angelegte Schulgarten hat seine erste Ernte gebracht. Die Kinder lernen nun praktisch über nachhaltige Landwirtschaft.</p>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BerichteKalbaPage
export const Head: HeadFC = () => <title>Berichte aus Kalba</title>