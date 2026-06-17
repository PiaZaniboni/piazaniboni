'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import data from '../data.json';

export default function Portfolio() {
  const [language, setLanguage] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hidratación - prevenir mismatch en SSR
  useEffect(() => {
    setMounted(true);
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const t = data[language];

  if (!mounted) return null;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-950 text-gray-50' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-950/95 border-gray-800' : 'bg-white/95 border-gray-100'} backdrop-blur border-b`}>
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="text-lg font-medium">MPZ</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`text-sm transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}>
              {t.nav.about}
            </a>
            <a href="#work" className={`text-sm transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}>
              {t.nav.work}
            </a>
            <a href="#contact" className={`text-sm transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}>
              {t.nav.contact}
            </a>
            
            {/* Language & Theme Toggle */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l" style={{ borderColor: darkMode ? '#374151' : '#f3f4f6' }}>
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className={`text-sm font-medium transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-1 transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-1 transition ${darkMode ? 'text-gray-400' : 'text-gray-900'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className={`text-sm font-medium transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className={darkMode ? 'text-gray-50' : 'text-gray-900'}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden border-t transition-colors duration-300 ${darkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-100 bg-white'}`}>
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
              <a 
                href="#about" 
                className={`text-sm transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a 
                href="#work" 
                className={`text-sm transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.work}
              </a>
              <a 
                href="#contact" 
                className={`text-sm transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6">{t.hero.name}</h1>
          <p className={`text-xl mb-6 font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.hero.title}
          </p>
          <p className={`text-lg mb-10 max-w-2xl leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.hero.subtitle}
          </p>
          <a
            href="#contact"
            className={`inline-block px-6 py-3 rounded transition ${
              darkMode
                ? 'bg-white text-gray-950 hover:bg-gray-200'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 border-t transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-10">{t.about.heading}</h2>
          <p className={`text-lg leading-relaxed max-w-3xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.about.text}
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className={`py-20 px-6 border-t transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-12">{t.work.heading}</h2>
          <div className="space-y-12">
            {t.work.projects.map((project, idx) => (
              <div key={idx} className={`pb-12 border-b transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-100'} last:border-b-0`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-medium">{project.name}</h3>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>{project.period}</p>
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>{project.role}</span>
                </div>
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 px-6 border-t transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-12">{t.skills.heading}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {t.skills.categories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-medium mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-2 rounded transition-colors duration-300 ${
                        darkMode
                          ? 'text-gray-400 bg-gray-900'
                          : 'text-gray-600 bg-gray-50'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 border-t transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-6">{t.contact.heading}</h2>
          <p className={`text-lg mb-10 max-w-2xl leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.contact.text}
          </p>
          
          <div className="space-y-4 mb-10">
            <div>
              <p className={`text-sm mb-1 ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>Email</p>
              <a
                href={`mailto:${t.contact.email}`}
                className={`text-lg transition ${darkMode ? 'text-gray-50 hover:text-gray-400' : 'text-gray-900 hover:text-gray-600'}`}
              >
                {t.contact.email}
              </a>
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href={data.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t.contact.links.github}
            </a>
            <a
              href={data.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t.contact.links.linkedin}
            </a>
            <a
              href={data.socialLinks.behance}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${darkMode ? 'text-gray-400 hover:text-gray-50' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t.contact.links.behance}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t transition-colors duration-300 text-center text-sm ${darkMode ? 'border-gray-800 text-gray-600' : 'border-gray-100 text-gray-500'}`}>
        <div className="max-w-5xl mx-auto">
          {t.footer}
        </div>
      </footer>
    </div>
  );
}
