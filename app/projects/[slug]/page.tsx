"use client"

import { useEffect, use } from "react"
import { notFound } from "next/navigation"
import { projects } from "../../../lib/projects"
import Link from "next/link"

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  useEffect(() => {
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
  }, [project])

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>ALFAZ BILAKHIYA</Link>
            </div>
            <div className="nav-links">
              <Link href="/#about">About</Link>
              <Link href="/#work">Work</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero animate-on-scroll" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="container">
            <Link href="/#work" style={{ color: "var(--muted-foreground)", textDecoration: "none", marginBottom: "2rem", display: "inline-block", fontWeight: 500 }}>
              ← Back to Work
            </Link>
            <div className="hero-layout" style={{ gridTemplateColumns: '1fr', gap: '4rem' }}>
              <div className="hero-content-wrapper" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <span className="card-tag" style={{ marginBottom: "1rem" }}>{project.year} • {project.role}</span>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  {project.title}
                </h1>
                <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: 'var(--muted-foreground)', maxWidth: '800px', marginBottom: '2rem' }}>
                  {project.tagline}
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-submit" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      Visit Live Site ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="project-image-container animate-on-scroll" style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: 'var(--card)' }}>
          <div className="container">
            <div className="animate-on-scroll">
              <h2 className="section-title">Project Overview</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--muted-foreground)', maxWidth: '900px', marginBottom: '3rem' }}>
                {project.longDescription}
              </p>
            </div>

            <div className="animate-on-scroll">
              <h2 className="section-title" style={{ marginTop: '4rem' }}>Technologies Used</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
                {project.techStack.map((tech) => (
                  <span key={tech} className="card-tag" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 className="section-title">Key Features</h2>
            </div>
            <div className="grid">
              {project.features.map((feature, index) => (
                <article key={index} className="card animate-on-scroll" style={{ padding: '2rem' }}>
                  <div className="card-content" style={{ padding: 0 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {feature.icon === 'mic' && <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></>}
                        {feature.icon === 'message' && <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>}
                        {feature.icon === 'clock' && <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
                        {feature.icon === 'chart' && <><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></>}
                        {feature.icon === 'image' && <><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></>}
                        {feature.icon === 'search' && <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>}
                        {feature.icon === 'zap' && <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>}
                        {feature.icon === 'link' && <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>}
                        {feature.icon === 'shield' && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>}
                        {feature.icon === 'workflow' && <><rect width="8" height="8" x="8" y="8" rx="2"/><path d="M12 2v6"/><path d="M12 16v6"/><path d="M2 12h6"/><path d="M16 12h6"/></>}
                        {feature.icon === 'database' && <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></>}
                        {feature.icon === 'users' && <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
                      </svg>
                    </div>
                    <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{feature.title}</h3>
                    <p className="card-desc" style={{ fontSize: '1rem', lineHeight: 1.6 }}>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="container animate-on-scroll">
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Interested in building something similar?</h2>
            <Link href="/#contact" className="btn-submit" style={{ textDecoration: 'none', display: 'inline-flex', padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
              Let's Talk
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="logo">ALFAZ BILAKHIYA</div>
            <div className="footer-content">
              <nav className="footer-nav">
                <Link href="/#about">About</Link>
                <Link href="/#work">Work</Link>
                <Link href="/#blog">Blog</Link>
                <Link href="/#contact">Contact</Link>
              </nav>
            </div>
          </div>
          <div className="copyright">© 2026 Alfaz Bilakhiya. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
