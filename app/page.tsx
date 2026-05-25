"use client"

import { useEffect, useState } from "react"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = "Alfaz Bilakhiya"

  useEffect(() => {
    const animateText = (element: Element) => {
      const text = element.textContent || ""
      const words = text.split(" ")
      let html = ""
      let totalChars = 0

      words.forEach((word, wordIndex) => {
        const letters = word.split("")
        letters.forEach((letter) => {
          const delay = totalChars * 0.03
          html += `<span class="letter-blur" style="animation-delay: ${delay}s">${letter}</span>`
          totalChars++
        })
        if (wordIndex < words.length - 1) {
          html += " "
          totalChars++
        }
      })

      element.innerHTML = html
    }

    const textElements = document.querySelectorAll(
      ".section-title, .newsletter h2, .blog-section h2, .contact-section h2",
    )
    textElements.forEach((el) => {
      if (!el.classList.contains("animated")) {
        animateText(el)
        el.classList.add("animated")
      }
    })

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150
    const pauseDuration = 2000

    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length < fullText.length) {
        setTypedText(fullText.substring(0, typedText.length + 1))
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(fullText.substring(0, typedText.length - 1))
      } else if (!isDeleting && typedText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration)
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">ALFAZ BILAKHIYA</div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#resume">Resume</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
            <div className="social-icons desktop-only">
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alfaz-bilakhiya-73b987313" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com/Alfaz-17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
              <a href="#work" onClick={handleLinkClick}>
                Work
              </a>
              <a href="#resume" onClick={handleLinkClick}>
                Resume
              </a>
              <a href="#blog" onClick={handleLinkClick}>
                Blog
              </a>
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
              <div className="mobile-menu-social">
                <a href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/alfaz-bilakhiya-73b987313" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://github.com/Alfaz-17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="about" className="hero animate-on-scroll">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-vertical-name">
                {typedText}
                <span className="typing-cursor">|</span>
              </div>
              <div className="hero-content-wrapper">
                <div className="hero-image-container animate-on-scroll">
                  <div className="hero-image-bg"></div>
                  <img src="/PASSPORT.jpeg" alt="Profile" className="hero-image" />
                </div>
                <div className="hero-content">
                  <span className="hero-role">Full Stack Developer</span>
                  <div className="hero-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Bhavnagar, India
                  </div>
                  <p className="hero-bio">
                    Aspiring Full Stack Developer with strong knowledge of Next.js, Node.js, Express, MongoDB, PostgreSQL, and Prisma. Passionate about building scalable applications, integrating AI-powered solutions, and contributing to real-world projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee-wrapper">
          <div className="marquee-content">
            <div className="marquee-text">
              <span>Available for New Projects</span>
              <span className="marquee-dot">•</span>
              <span>Design & Development</span>
              <span className="marquee-dot">•</span>
              <span>Let's Build Something Amazing</span>
              <span className="marquee-dot">•</span>
              <span>Available for New Projects</span>
              <span className="marquee-dot">•</span>
              <span>Design & Development</span>
              <span className="marquee-dot">•</span>
              <span>Let's Build Something Amazing</span>
              <span className="marquee-dot">•</span>
            </div>
            <div className="marquee-text" aria-hidden="true">
              <span>Available for New Projects</span>
              <span className="marquee-dot">•</span>
              <span>Design & Development</span>
              <span className="marquee-dot">•</span>
              <span>Let's Build Something Amazing</span>
              <span className="marquee-dot">•</span>
              <span>Available for New Projects</span>
              <span className="marquee-dot">•</span>
              <span>Design & Development</span>
              <span className="marquee-dot">•</span>
              <span>Let's Build Something Amazing</span>
              <span className="marquee-dot">•</span>
            </div>
          </div>
        </div>

        <section id="work" className="section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 className="section-title">Featured Work</h2>
              <a href="#" className="view-all">
                View All
              </a>
            </div>
            <div className="grid">
              <article className="card animate-on-scroll">
                <img src="/bookmybox-ss.png" alt="BookMyBox.online" className="card-image" />
                <div className="card-content">
                  <span className="card-tag">AI & Full Stack</span>
                  <h3 className="card-title">BookMyBox.online</h3>
                  <p className="card-desc">
                    An intelligent platform for booking sports venues featuring a voice-activated assistant and real-time slot management.
                  </p>
                  <a href="/projects/bookmybox" className="read-more" style={{display: 'inline-block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none'}}>Read Case Study →</a>
                </div>
              </article>

              <article className="card animate-on-scroll">
                <img src="/coronamarine-ss.png" alt="Corona Marine" className="card-image" />
                <div className="card-content">
                  <span className="card-tag">AI & Next.js</span>
                  <h3 className="card-title">Corona Marine</h3>
                  <p className="card-desc">
                    A modern B2B product catalog that uses Artificial Intelligence to optimize content and improve search engine rankings.
                  </p>
                  <a href="/projects/coronamarine" className="read-more" style={{display: 'inline-block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none'}}>Read Case Study →</a>
                </div>
              </article>

              <article className="card animate-on-scroll">
                <img src="/crm-ss.png" alt="Media Masala CRM" className="card-image" />
                <div className="card-content">
                  <span className="card-tag">CRM & Automation</span>
                  <h3 className="card-title">Media Masala CRM</h3>
                  <p className="card-desc">
                    A complete Customer Relationship Management (CRM) system for managing sales pipelines, tasks, and employee attendance.
                  </p>
                  <a href="/projects/mediamasala" className="read-more" style={{display: 'inline-block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none'}}>Read Case Study →</a>
                </div>
              </article>

              <article className="card animate-on-scroll">
                <img src="/inbill-ss.png" alt="InBill ERP" className="card-image" />
                <div className="card-content">
                  <span className="card-tag">AI & Desktop Software</span>
                  <h3 className="card-title">InBill ERP</h3>
                  <p className="card-desc">
                    A robust, AI-powered desktop billing software with local-first database architecture and automated invoice parsing via Google Gemini.
                  </p>
                  <a href="/projects/inbill" className="read-more" style={{display: 'inline-block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none'}}>Read Case Study →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="blog" className="section blog-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 className="section-title">Skills & Education</h2>
            </div>
            <div className="grid">
              <article className="card animate-on-scroll">
                <div className="card-content">
                  <span className="card-tag">Web Development</span>
                  <h3 className="card-title">Frontend & UI</h3>
                  <p className="card-desc">
                    React.js, Next.js, and Tailwind CSS. Experienced in building fast, responsive, and beautiful user interfaces that work perfectly on any device.
                  </p>
                </div>
              </article>

              <article className="card animate-on-scroll">
                <div className="card-content">
                  <span className="card-tag">Systems & APIs</span>
                  <h3 className="card-title">Backend & Databases</h3>
                  <p className="card-desc">
                    Node.js, Express, PostgreSQL, and MongoDB. Skilled in creating secure servers, managing databases, and building reliable APIs for web apps.
                  </p>
                </div>
              </article>

              <article className="card animate-on-scroll">
                <div className="card-content">
                  <span className="card-tag">Innovation</span>
                  <h3 className="card-title">AI & Specialized Tools</h3>
                  <p className="card-desc">
                    Google Gemini AI, Voice Assistants, and Real-Time features (Socket.IO). Passionate about integrating smart features to solve real-world problems.
                  </p>
                </div>
              </article>
            </div>
            
            <div className="section-header animate-on-scroll" style={{ marginTop: '80px' }}>
              <h2 className="section-title">Technologies</h2>
            </div>
            <div className="tech-grid">
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                <span className="tech-name">React</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                <span className="tech-name">Next.js</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <span className="tech-name">Node.js</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" />
                <span className="tech-name">Express</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <span className="tech-name">MongoDB</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                <span className="tech-name">PostgreSQL</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="Prisma" />
                <span className="tech-name">Prisma</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                <span className="tech-name">Tailwind CSS</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <span className="tech-name">JavaScript</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
                <span className="tech-name">TypeScript</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                <span className="tech-name">Java</span>
              </div>
              <div className="tech-card animate-on-scroll">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                <span className="tech-name">C++</span>
              </div>
            </div>
          </div>
        </section>
        <section className="newsletter animate-on-scroll">
          <div className="container">
            <div className="newsletter-inner">
              <h2>Stay Updated</h2>
              <p>Get insights on design, development, and product thinking delivered to your inbox.</p>
              <form className="form-group" suppressHydrationWarning>
                <input type="email" placeholder="Enter your email" aria-label="Email address" suppressHydrationWarning />
                <button type="submit" className="btn-subscribe" suppressHydrationWarning>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="resume" className="resume-section animate-on-scroll">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Interactive Resume</h2>
            </div>
            
            <div className="resume-container">
              
              <div className="resume-block">
                <h3>Experience & Projects</h3>
                
                <div className="resume-item">
                  <div className="resume-item-header">
                    <div className="resume-item-title">BookMyBox.online</div>
                    <div className="resume-item-subtitle">AI-Powered Turf Booking Platform | Full Stack Developer</div>
                  </div>
                  <ul className="resume-list">
                    <li>Engineered an AI-powered turf booking platform with real-time slot management, dynamic pricing, and automated booking workflows.</li>
                    <li>Built a conversational “Talk-to-Book” voice assistant using Groq Whisper Large V3 and Murf AI for hands-free booking interactions.</li>
                    <li>Implemented WhatsApp OTP authentication and automated booking notifications using Baileys API.</li>
                    <li>Developed real-time slot synchronization with Socket.IO to prevent double bookings across concurrent users.</li>
                    <li>Integrated the SabPaisa payment gateway with custom Node.js encryption/decryption utilities for secure transaction validation.</li>
                    <li>Designed an admin analytics dashboard with maintenance slot blocking and Express Cron automation.</li>
                  </ul>
                </div>
                
                <div className="resume-item">
                  <div className="resume-item-header">
                    <div className="resume-item-title">Corona Marine</div>
                    <div className="resume-item-subtitle">AI-Powered Maritime Spares Ecosystem | Full Stack Developer</div>
                  </div>
                  <ul className="resume-list">
                    <li>AI-powered catalog platform for automated content and sales optimization.</li>
                    <li>Client-side image processing using HuggingFace ONNX to reduce server cost.</li>
                    <li>Server-side AI integration using Gemini for SEO-ready product descriptions.</li>
                    <li>Built with Next.js + React Server Components for faster load time and improved SEO.</li>
                    <li>Implemented “Request Quote” + WhatsApp flow for lead conversion.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <div className="resume-item-header">
                    <div className="resume-item-title">Media Masala CRM</div>
                    <div className="resume-item-subtitle">Intelligent Operational Command Center | Full Stack Developer</div>
                  </div>
                  <ul className="resume-list">
                    <li>Built a high-performance CRM using Next.js and Express for complex workflows.</li>
                    <li>Implemented multi-tenant RBAC for role-based data visibility.</li>
                    <li>Created automated sales pipeline and task creation workflows.</li>
                    <li>Optimized PostgreSQL (Prisma) queries with pagination and debounced search.</li>
                    <li>Developed HR tools with geo-attendance and automated EOD PDF reports.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <div className="resume-item-header">
                    <div className="resume-item-title">InBill ERP</div>
                    <div className="resume-item-subtitle">AI-Powered Universal ERP System | Desktop & AI Developer</div>
                  </div>
                  <ul className="resume-list">
                    <li>Architected a robust, 'Local-First' desktop application using Electron and Next.js for zero-latency operations.</li>
                    <li>Integrated Google Gemini 2.0 Flash for AI-powered Optical Character Recognition (OCR) to automatically extract product details from supplier invoices.</li>
                    <li>Developed an intelligent dashboard providing AI-driven business insights based on daily sales trends and stock risk metrics.</li>
                    <li>Engineered an asynchronous cloud sync engine using Neon PostgreSQL to securely backup data and maintain multi-device consistency.</li>
                  </ul>
                </div>
              </div>

              <div className="resume-block">
                <h3>Education</h3>
                <div className="resume-item">
                  <div className="resume-item-header">
                    <div className="resume-item-title">Bachelor of Computer Applications (BCA)</div>
                    <div className="resume-item-subtitle">Swami Sahajanand College, Bhavnagar | 2023 – 2026 | CGPA: 7.8</div>
                  </div>
                </div>
                
                <div className="resume-item">
                  <div className="resume-item-header">
                    <div className="resume-item-title">12th Grade (Higher Secondary)</div>
                    <div className="resume-item-subtitle">Mahdi School, Bhavnagar | 2023</div>
                  </div>
                  <ul className="resume-list">
                    <li>Achieved 90 percentile and 74% overall percentage.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <div className="resume-item-header">
                    <div className="resume-item-title">10th Grade (Secondary)</div>
                    <div className="resume-item-subtitle">Mahdi School, Bhavnagar | 2021</div>
                  </div>
                  <ul className="resume-list">
                    <li>Achieved 96 percentile and 90% overall percentage.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-wrapper animate-on-scroll">
              <div className="contact-info">
                <h2 className="section-title">Let's Work Together</h2>
                <p className="contact-desc">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                  just want to say hi, feel free to reach out.
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 7 10-7" />
                    </svg>
                    <span>alfazbilakhiya17@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>+91 63537 83332</span>
                  </div>
                </div>
              </div>
              <form className="contact-form" suppressHydrationWarning>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required suppressHydrationWarning />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" required suppressHydrationWarning />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" required suppressHydrationWarning />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me more..." required suppressHydrationWarning></textarea>
                </div>
                <button type="submit" className="btn-submit" suppressHydrationWarning>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="logo">ALFAZ BILAKHIYA</div>
            <div className="footer-content">
              <nav className="footer-nav">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#resume">Resume</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
              </nav>
              <div className="social-icons">
                <a href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/alfaz-bilakhiya-73b987313" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://github.com/Alfaz-17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">© 2026 Alfaz Bilakhiya. All rights reserved.</div>
          <div className="credit">Designed using 1UI.dev and built using v0.app</div>
        </div>
      </footer>
    </>
  )
}
