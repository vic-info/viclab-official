import { useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>VIC LAB</title>
        <meta name="description" content="VIC LAB INC Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>VIC LAB</div>
        <div className={styles.navLinks}>
          <button onClick={() => scrollToSection(aboutRef)}>About Us</button>
          <button onClick={() => scrollToSection(missionRef)}>Mission</button>
          <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
        </div>
      </nav>

      <main className={styles.main}>
        <section ref={aboutRef} className={styles.section}>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>

        <section ref={missionRef} className={styles.section}>
          <h2>Mission</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>

        <section ref={projectsRef} className={styles.section}>
          <h2>Projects</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </section>
      </main>
    </div>
  );
} 