import './nav.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'STACK', href: '#stack' },
    { label: 'LOGS', href: '#logs' },
    { label: 'CONTACT', href: 'mailto:arjakroy2411@gmail.com' },
  ];

  return (
    <motion.nav
      className="nav-bar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <motion.a
          href="#"
          className="nav-brand"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          ARJAK_ROY
        </motion.a>

        <div className={`nav-links ${mobileOpen ? 'nav-links--open' : ''}`}>
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.06, duration: 0.3 }}
              whileHover={{ color: '#D4A574' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="nav-icons">
          <motion.a
            href="https://github.com/arjak-roy"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
            whileHover={{ color: '#D4A574' }}
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/arjak-roy-07400524a/"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
            whileHover={{ color: '#D4A574' }}
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </motion.a>
        </div>

        <button
          className={`nav-hamburger ${mobileOpen ? 'nav-hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </motion.nav>
  );
}

export default Nav;