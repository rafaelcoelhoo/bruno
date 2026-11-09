import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const dynamic = 'force-static'
export const alt = `${site.name} — Obras e remodelações em Ovar`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#2a4aa8',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', fontSize: 120, fontWeight: 900, lineHeight: 1 }}>Bruno</div>
        <div style={{ display: 'flex', fontSize: 44, letterSpacing: 6, textTransform: 'uppercase', marginTop: 16, color: '#f2c14e' }}>
          Obras & Remodelações
        </div>
        <div style={{ display: 'flex', fontSize: 40, marginTop: 56, opacity: 0.9 }}>Ovar e arredores · Orçamento gratuito</div>
      </div>
    ),
    size,
  )
}
