import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QRCodeSVG } from 'qrcode.react'
import './styles.css'

const profile = {
  name: 'Dr. Hany Ibrahim Ahmed Habiba',
  subtitle: 'Professional Profile',
  mobile: '01227514120',
  whatsapp: '01066229275',
  whatsappInternational: '201066229275',
  telefax: '045-3368069',
  telefaxDial: '0453368069',
  linkedin:
    'https://www.linkedin.com/in/hanyhabiba?utm_source=share_via&utm_content=profile&utm_medium=member_android',
}

// Change this one value when the production domain is known or changes.
const profileUrl = 'https://YOUR-DOMAIN.com/hany-habiba'

function Icon({ name }) {
  const paths = {
    phone: (
      <path d="M7.4 3.1 5.8 3.9a2 2 0 0 0-.9 2.7c1.8 3.6 4.8 6.6 8.4 8.4a2 2 0 0 0 2.7-.9l.8-1.6a1.2 1.2 0 0 0-.5-1.6l-2.2-1.1a1.2 1.2 0 0 0-1.5.3l-.8 1a11.5 11.5 0 0 1-4.1-4.1l1-.8a1.2 1.2 0 0 0 .3-1.5L9 3.6a1.2 1.2 0 0 0-1.6-.5Z" />
    ),
    chat: (
      <>
        <path d="M17.5 10.2a6.2 6.2 0 0 1-6.3 6.1 6.7 6.7 0 0 1-2.5-.5L5 17l1-3.1a6 6 0 0 1-1-3.7 6.2 6.2 0 0 1 6.2-6.1 6.2 6.2 0 0 1 6.3 6.1Z" />
        <path d="M8.3 10.2h.1m3 0h.1m3 0h.1" />
      </>
    ),
    fax: (
      <>
        <path d="M5 7.5V4.2h10v3.3M4 7.5h12a1 1 0 0 1 1 1v6.3H3V8.5a1 1 0 0 1 1-1Z" />
        <path d="M6 12.2h8M6 15v2h8v-2M7 4.2V2.8h6v1.4" />
      </>
    ),
    linkedin: (
      <>
        <path d="M5.2 7.5v7.7M5.2 4.8v.1M8.8 15.2V7.5m0 3.7a3.6 3.6 0 0 1 7.2 0v4M8.8 11.2c0-2.5 1.6-3.7 3.5-3.7 2.2 0 3.7 1.5 3.7 4.2" />
      </>
    ),
    arrow: <path d="M5 10h9m-3.5-3.5L14 10l-3.5 3.5" />,
  }
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 20 20" fill="none">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </g>
    </svg>
  )
}

function ProfileHeader() {
  return (
    <header className="profile-header">
      <div className="portrait" aria-label="Profile photo placeholder">
        <span>HI</span>
      </div>
      <div>
        <p className="eyebrow">Digital contact card</p>
        <h1>{profile.name}</h1>
        <p className="subtitle">{profile.subtitle}</p>
      </div>
    </header>
  )
}

function ContactButton({ icon, label, value, href, external = false }) {
  return (
    <a
      className="contact-card"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={`${label}: ${value}`}
    >
      <span className="contact-icon"><Icon name={icon} /></span>
      <span className="contact-copy">
        <span className="contact-label">{label}</span>
        <span className="contact-value">{value}</span>
      </span>
      <span className="card-arrow"><Icon name="arrow" /></span>
    </a>
  )
}

function QRCodeCard() {
  return (
    <section className="qr-card" aria-labelledby="qr-heading">
      <div className="qr-copy">
        <p className="eyebrow">Share this profile</p>
        <h2 id="qr-heading">Keep in touch</h2>
        <p>Save this professional contact card for easy access anytime.</p>
      </div>
      <div className="qr-wrap">
        <QRCodeSVG
          value={profileUrl}
          size={164}
          level="H"
          marginSize={3}
          bgColor="#ffffff"
          fgColor="#111820"
          aria-label="QR code linking to Dr. Hany Ibrahim Ahmed Habiba's professional profile"
        />
        <span>Scan to view professional profile</span>
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="page-shell">
      <div className="accent-line" />
      <div className="content">
        <ProfileHeader />
        <div className="section-heading">
          <span className="section-rule" />
          <h2>Contact details</h2>
        </div>
        <section className="contact-list" aria-label="Contact details">
          <ContactButton icon="phone" label="Mobile" value={profile.mobile} href={`tel:${profile.mobile}`} />
          <ContactButton
            icon="chat"
            label="WhatsApp"
            value={profile.whatsapp}
            href={`https://wa.me/${profile.whatsappInternational}`}
            external
          />
          <ContactButton icon="fax" label="Telefax" value={profile.telefax} href={`tel:${profile.telefaxDial}`} />
          <ContactButton icon="linkedin" label="LinkedIn" value="LinkedIn Profile" href={profile.linkedin} external />
        </section>
        <QRCodeCard />
        <footer>Professional profile · Dr. Hany Ibrahim Ahmed Habiba</footer>
      </div>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
