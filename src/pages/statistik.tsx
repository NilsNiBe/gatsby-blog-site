import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const StatistikPage: React.FC<PageProps> = () => {
  const statistikDaten = {
    projekte: {
      gesamt: 12,
      abgeschlossen: 8,
      laufend: 4
    },
    spenden: {
      gesamt: "125.000 €",
      jahr2024: "45.000 €",
      jahr2023: "38.000 €"
    },
    mitglieder: {
      aktiv: 45,
      foerdermitglieder: 120,
      ehrenamtliche: 25
    },
    besuche: {
      nachGhana: 6,
      ausGhana: 4,
      teilnehmer: 35
    }
  }

  const projektStatus = [
    { name: "Schulbau Kalba", status: "Abgeschlossen", fortschritt: 100 },
    { name: "Brunnen-Projekt", status: "Laufend", fortschritt: 75 },
    { name: "Gesundheitsstation", status: "Laufend", fortschritt: 60 },
    { name: "Bibliothek", status: "Planung", fortschritt: 25 }
  ]

  return (
    <Layout>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1>Statistik</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Vereinsstatistiken im Überblick</h2>
          <p>
            Hier finden Sie aktuelle Zahlen und Fakten zu unserer Vereinsarbeit, 
            unseren Projekten und dem Engagement unserer Mitglieder.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {/* Projekte */}
            <div style={{ 
              backgroundColor: '#f0f4ff', 
              padding: '1.5rem', 
              borderRadius: '8px',
              textAlign: 'center',
              border: '2px solid #667eea'
            }}>
              <h3 style={{ color: '#667eea', marginTop: 0 }}>Projekte</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
                {statistikDaten.projekte.gesamt}
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
                {statistikDaten.projekte.abgeschlossen} abgeschlossen, {statistikDaten.projekte.laufend} laufend
              </p>
            </div>

            {/* Spenden */}
            <div style={{ 
              backgroundColor: '#f0f8f0', 
              padding: '1.5rem', 
              borderRadius: '8px',
              textAlign: 'center',
              border: '2px solid #27ae60'
            }}>
              <h3 style={{ color: '#27ae60', marginTop: 0 }}>Spenden gesamt</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
                {statistikDaten.spenden.gesamt}
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
                2024: {statistikDaten.spenden.jahr2024}
              </p>
            </div>

            {/* Mitglieder */}
            <div style={{ 
              backgroundColor: '#fff8f0', 
              padding: '1.5rem', 
              borderRadius: '8px',
              textAlign: 'center',
              border: '2px solid #f39c12'
            }}>
              <h3 style={{ color: '#f39c12', marginTop: 0 }}>Mitglieder</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
                {statistikDaten.mitglieder.aktiv + statistikDaten.mitglieder.foerdermitglieder}
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
                {statistikDaten.mitglieder.aktiv} aktiv, {statistikDaten.mitglieder.foerdermitglieder} Förderer
              </p>
            </div>

            {/* Besuche */}
            <div style={{ 
              backgroundColor: '#f8f0f8', 
              padding: '1.5rem', 
              borderRadius: '8px',
              textAlign: 'center',
              border: '2px solid #8e44ad'
            }}>
              <h3 style={{ color: '#8e44ad', marginTop: 0 }}>Besuche</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
                {statistikDaten.besuche.nachGhana + statistikDaten.besuche.ausGhana}
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
                {statistikDaten.besuche.teilnehmer} Teilnehmer insgesamt
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Projektstatus</h2>
          <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
            {projektStatus.map((projekt, index) => (
              <div key={index} style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>{projekt.name}</strong>
                  <span style={{ color: projekt.fortschritt === 100 ? '#27ae60' : '#667eea' }}>
                    {projekt.status}
                  </span>
                </div>
                <div style={{ 
                  backgroundColor: '#ddd', 
                  height: '10px', 
                  borderRadius: '5px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    backgroundColor: projekt.fortschritt === 100 ? '#27ae60' : '#667eea',
                    height: '100%',
                    width: `${projekt.fortschritt}%`,
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  {projekt.fortschritt}% abgeschlossen
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Ehrenamtliches Engagement</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                {statistikDaten.mitglieder.ehrenamtliche}
              </div>
              <p>Ehrenamtliche Helfer</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                1.200h
              </div>
              <p>Geleistete Stunden 2024</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                15
              </div>
              <p>Veranstaltungen pro Jahr</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default StatistikPage

export const Head: HeadFC = () => <title>Statistik</title>