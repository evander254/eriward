import { useEffect, useState } from 'react'

const phoneNumber = '+254790368475'
const phoneLabel = '+254 790 368475'
const contactEmail = 'info@eriward.co.ke'
const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/eriward_water/', icon: 'instagram' },
  { name: 'Facebook', url: 'https://www.facebook.com/p/Eriward-Water-61586136607095/', icon: 'facebook' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@eriward_water', icon: 'tiktok' },
]
const heroSlides = [
  { src: '/assets/hero-water.jpg', alt: 'ERIWARD purified water refill shop' },
  { src: '/assets/1.jpeg', alt: 'ERIWARD water refill service' },
  { src: '/assets/2.jpeg', alt: 'ERIWARD purified drinking water station' },
]

const processSteps = ['Sediment', 'Carbon', 'RO', 'UV', 'UTC', 'Eco refill', 'Content']

function Icon({ name }) {
  const paths = {
    drop: (<><path d="M12 2C9 6.2 5.5 9.7 5.5 14a6.5 6.5 0 0 0 13 0C18.5 9.7 15 6.2 12 2Z" /><path d="M8.7 15.2c.4 1.6 1.6 2.6 3.3 2.9" /></>),
    phone: <path d="M6.6 3.8 9 3l2 4.6-1.9 1.4a15.8 15.8 0 0 0 5.9 5.9l1.4-1.9 4.6 2-.8 2.4c-.4 1.2-1.6 2-2.9 1.9C10.1 18.8 5.2 13.9 4.7 6.8c-.1-1.3.7-2.5 1.9-3Z" />,
    arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
    shield: (<><path d="m12 3 7 3v5.2c0 4.5-2.9 8.1-7 9.8-4.1-1.7-7-5.3-7-9.8V6l7-3Z" /><path d="m8.5 12 2.3 2.3 4.7-5" /></>),
    truck: (<><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>),
    leaf: (<><path d="M19.5 4.5C12 4.2 6.2 6.8 5 12c-.7 3.2 1.4 6 4.5 6 5.7 0 8.5-6.4 10-13.5Z" /><path d="M5 20c2.2-4.8 5.2-7.6 9.6-9.6" /></>),
    pin: (<><path d="M12 21s7-6.4 7-12A7 7 0 0 0 5 9c0 5.6 7 12 7 12Z" /><circle cx="12" cy="9" r="2.2" /></>),
    instagram: (<><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="3.8" /><circle cx="16.8" cy="7.2" r="1.3" fill="currentColor" stroke="none" /></>),
    facebook: <path fill="currentColor" stroke="none" d="M13.2 21v-6.3h2.1l.3-2.4h-2.4v-1.6c0-.7.2-1.1 1.2-1.1h1.3V7.3c-.2 0-.9-.1-1.8-.1-1.8 0-3 1.1-3 3.2v1.3H8.7V14.7h2.2V21h2.3Z" />,
    tiktok: <path fill="currentColor" stroke="none" d="M19 8.7A5.4 5.4 0 0 1 14.7 7v8.2a4.2 4.2 0 1 1-4.2-4.2c.2 0 .5 0 .7.1v2.1a2 2 0 1 0 1.4 1.9V3H14.7A5.4 5.4 0 0 0 19 8.7Z" />,
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const slider = window.setInterval(() => {
      if (!document.hidden) {
        setActiveSlide((current) => (current + 1) % heroSlides.length)
      }
    }, 10000)

    return () => window.clearInterval(slider)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const sendContactEmail = (event) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = form.get('name')?.toString().trim()
    const email = form.get('email')?.toString().trim()
    const message = form.get('message')?.toString().trim()
    const subject = encodeURIComponent(`ERIWARD website enquiry from ${name || 'a customer'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
            <a href="#home" aria-label="ERIWARD home" onClick={closeMenu}><img className="logo" src="/assets/logo.png" alt="ERIWARD" /></a>
            <div className={`navlinks ${menuOpen ? 'open' : ''}`}>
            <a href="#why" onClick={closeMenu}>Our Story</a>
            <a href="#process" onClick={closeMenu}>Our Process</a>
            <a href="#delivery" onClick={closeMenu}>Sustainable Delivery</a>
            <a href="#location" onClick={closeMenu}>Community</a>
            <a href="#contact" onClick={closeMenu}>Contact Us</a>
            <a className="nav-cta" href={`tel:${phoneNumber}`} onClick={closeMenu}>Order Water</a>
          </div>
          <button className="menu" type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>☰</button>
        </div>
      </nav>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow"><Icon name="drop" /> Purified Drinking Water</span>
              <h1>Drink with absolute <span>Confidence.</span><br />Refill with total Purity.</h1>
              <p>Fresh, clean and professionally filtered drinking water for homes, offices and businesses across Nairobi CBD - with <strong>free delivery</strong> to your doorstep.</p>
              <div className="hero-actions">
                <a className="hero-cta" href={`tel:${phoneNumber}`}><Icon name="phone" /> Customize Your Service</a>
                <a className="secondary" href="#location">Find Our Shop <Icon name="arrow" /></a>
              </div>
              <div className="mini-trust">
                <span><Icon name="shield" /> Quality focused</span>
                <span><Icon name="truck" /> Free delivery</span>
                <span><Icon name="leaf" /> Refill & reuse</span>
              </div>
            </div>

            <div className="hero-visual reveal" aria-label="ERIWARD water product illustration">
              <div className="photo-card photo-main">
                {heroSlides.map((slide, index) => (
                  <img
                    className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    width="800"
                    height="600"
                    decoding="async"
                    fetchPriority={index === 0 ? 'high' : 'low'}
                  />
                ))}
                <div className="photo-overlay" />
              </div>
              <div className="photo-card photo-side"><img src="/assets/1.jpeg" alt="ERIWARD customers enjoying purified water" width="800" height="600" loading="lazy" decoding="async" /></div>
              <div className="photo-card photo-community"><img src="/assets/2.jpeg" alt="ERIWARD community delivery team" width="800" height="600" loading="lazy" decoding="async" /></div>
              <div className="spotlight-card"><img src="/assets/hero-water.jpg" alt="ERIWARD water station" width="320" height="240" loading="lazy" decoding="async" /><span>Community Spotlight</span></div>
              <div className="water-orb" />
              <div className="bottle3d" aria-hidden="true">
                <div className="bottle-cap" /><div className="bottle-neck" /><div className="bottle-body" />
                <div className="bottle-label"><img src="/assets/logo-bottle.png" alt="" width="120" height="120" loading="lazy" /></div>
              </div>
              <i className="bubble b1" /><i className="bubble b2" /><i className="bubble b3" />
            </div>
          </div>
        </section>

        <section className="process-band" id="process">
          <div className="container reveal">
            <h2>Our Process</h2>
            <div className="process-flow">
              {processSteps.map((step) => (
                <div className="process-step" key={step}>
                  <div className="process-icon"><Icon name={step === 'Eco refill' ? 'leaf' : step === 'Content' ? 'shield' : 'drop'} /></div>
                  <b>{step}</b>
                  <small>{step === 'Eco refill' ? 'Responsible refill' : step === 'Content' ? 'Clean delivery' : 'Advanced filtration'}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid reveal">
            <div className="stat"><div className="stat-icon"><Icon name="drop" /></div><div><b>Pure & Filtered</b><small>Clean water for everyday life</small></div></div>
            <div className="stat"><div className="stat-icon"><Icon name="truck" /></div><div><b>Free Delivery</b><small>Nairobi CBD doorstep service</small></div></div>
            <div className="stat"><div className="stat-icon"><Icon name="shield" /></div><div><b>Drink Confidently</b><small>Quality-focused purification</small></div></div>
          </div>
        </section>

        <section className="section" id="why">
          <div className="container">
            <div className="section-head reveal">
              <div className="kicker">The ERIWARD difference</div>
              <h2>Water that fits your lifestyle.</h2>
              <p>Whether you need a quick refill for your home or reliable supply for your workplace, ERIWARD keeps clean drinking water simple and convenient.</p>
            </div>
            <div className="cards">
              <article className="card feature-blue reveal"><div className="card-icon"><Icon name="drop" /></div><h3>Water Quality</h3><p>Detailed care for purified water, filtration and clean refills.</p><strong>Scientifically Proven Purity</strong></article>
              <article className="card feature-green reveal"><div className="card-icon"><Icon name="leaf" /></div><h3>Eco-Friendly Refill</h3><p>Refill and reuse bottles to reduce unnecessary single-use plastic.</p><strong>Your Sustainable Choice</strong></article>
              <article className="card feature-dark reveal"><div className="card-icon"><Icon name="phone" /></div><h3>Seamless Experience</h3><p>Easy ordering, free delivery and direct support for your location.</p><strong>Purity, Simplified</strong></article>
              <article className="card reveal"><div className="card-icon"><Icon name="truck" /></div><h3>Free Delivery</h3><p>Order by phone and enjoy convenient free delivery right to your Nairobi CBD location.</p><strong>Nairobi CBD Service</strong></article>
            </div>
          </div>
        </section>

        <section className="section delivery" id="delivery">
          <div className="container delivery-grid">
            <div className="reveal">
              <div className="kicker delivery-kicker">Convenience, delivered</div>
              <h2>Need a refill?<br />We'll bring it to you.</h2>
              <p>Skip the trip. Contact ERIWARD and arrange your water refill with free delivery. Ideal for homes, offices, shops and businesses around Nairobi CBD.</p>
              <a className="hero-cta" href={`tel:${phoneNumber}`}><Icon name="phone" /> {phoneLabel}</a>
            </div>
            <div className="address-card reveal" id="location">
              <div className="address-row"><Icon name="pin" /><div><b>Visit our refill shop</b><span>New Elimu House, Mfangano Lane,<br />1st Floor, Shop M3, Nairobi CBD</span></div></div>
              <div className="address-row"><Icon name="truck" /><div><b>Free delivery</b><span>Convenient delivery service for customers in Nairobi CBD.</span></div></div>
              <div className="address-row"><Icon name="phone" /><div><b>Call / Order</b><span>{phoneLabel}</span></div></div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-box reveal">
              <div className="contact-copy">
                <div className="kicker">Ready when you are</div>
                <h2>Contact us for pure water delivery.</h2>
                <p>Send ERIWARD a message for refill orders, office supply, delivery questions or customer support. Your email will be addressed to <strong>{contactEmail}</strong>.</p>
                <a className="phone" href={`tel:${phoneNumber}`}><Icon name="phone" /> {phoneLabel}</a>
                <div className="contact-social">
                  <span>Or follow us</span>
                  <div className="social-row">
                    {socialLinks.map((link) => (
                      <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`ERIWARD on ${link.name}`}><Icon name={link.icon} /></a>
                    ))}
                  </div>
                </div>
              </div>
              <form className="contact-form" onSubmit={sendContactEmail}>
                <label>
                  Your name
                  <input name="name" type="text" placeholder="Enter your name" required />
                </label>
                <label>
                  Email address
                  <input name="email" type="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="5" placeholder="Tell us what you need" required />
                </label>
                <button className="hero-cta" type="submit"><Icon name="arrow" /> Send Email</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src="/assets/logo-footer.png" alt="ERIWARD" width="120" height="40" loading="lazy" decoding="async" />
            <small>© 2026 ERIWARD Purified Drinking Water. All rights reserved.</small>
          </div>
          <div className="footer-links"><a href="#why">Quality</a><a href="#delivery">Delivery</a><a href="#location">Location</a><a href="#contact">Contact</a></div>
          <div className="footer-social">
            <span>Follow ERIWARD</span>
            <div className="social-row">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`ERIWARD on ${link.name}`}><Icon name={link.icon} /></a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
