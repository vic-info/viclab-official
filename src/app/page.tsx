'use client';

import { useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const initiativesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>VIC LAB</div>
        <div className={styles.navLinks}>
          <button onClick={() => scrollToSection(aboutRef)}>About Us</button>
          <button onClick={() => scrollToSection(missionRef)}>Mission</button>
          <button onClick={() => scrollToSection(initiativesRef)}>Initiatives</button>
        </div>
      </nav>

      <main className={styles.main}>
        <section ref={aboutRef} className={styles.section}>
          <h2>About Us</h2>
          <p>VIC LAB INC is a 501(c)(3) nonprofit organization based in California, founded in 2025 to support mission-aligned technology projects and open knowledge initiatives. We are independently operated by a volunteer board and committed to inclusive, public-benefit innovation.</p>
        </section>

        <section ref={missionRef} className={styles.section}>
          <h2>Mission</h2>
          <p>Our mission is to foster ethical, inclusive, and publicly beneficial technology by supporting early-career professionals in contributing to real-world, mission-aligned projects. We create opportunities for open collaboration, shared learning, and community-driven impact.</p>
        </section>

        <section ref={initiativesRef} className={styles.section}>
          <h2>Initiatives</h2>
          <p className={styles.initiativesIntro}>VIC LAB INC currently supports two core public-interest initiatives:</p>
          
          <div className={styles.initiativesList}>
            <div className={styles.initiativeItem}>
              <h3>OPT Collaboration Pathway</h3>
              <p>We provide OPT participants with access to training and collaborative volunteer roles that align with our nonprofit mission.</p>
            </div>

            <div className={styles.initiativeItem}>
              <h3>Technology Education Program</h3>
              <p>A volunteer-supported program helping early-career technologists grow their skills through open, mission-aligned learning activities. All learning activities are free and community-centered.</p>
            </div>
          </div>

          <p className={styles.initiativesDisclaimer}>Participation in VIC LAB programs is voluntary and does not imply or guarantee employment.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <h3>Governance</h3>
          <p>VIC LAB INC is independently governed by a volunteer board of directors.</p>
          <p>We operate in full compliance with IRS nonprofit regulations and maintain clear separation from any for-profit entities.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <p>contact@viclab.org</p>
        </div>
      </footer>
    </div>
  );
} 