'use client';

import React from 'react';

const navigation = [
  { name: 'O nás', href: '#about' },
  { name: 'Služby', href: '#services' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono antialiased">
      {/* Navbar */}
      <nav className="fixed w-full z-10 bg-gray-950 bg-opacity-90 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#hero" className="text-2xl font-bold text-teal-400 tracking-wider">
                Testovací Kavárna "U Kódu"
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            {/* Mobile menu button - simplified for now */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden pt-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="code-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 10 0 L 10 10 L 0 10 Z M 0 5 L 5 0 M 5 10 L 10 5" stroke="#1f2937" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#code-pattern)" />
          </svg>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in-up drop-shadow-lg">
            Testovací Kavárna <span className="text-teal-400">"U Kódu"</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 animate-fade-in-up delay-200">
            Nejlepší káva pro vaše <span className="text-red-400">bugy</span>.
          </p>
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300 animate-fade-in-up delay-400"
          >
            Zjistit více
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12 relative">
            <span className="relative z-10">O nás</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-teal-500 transform scale-x-0 translate-y-2 group-hover:scale-x-100 transition-transform duration-300"></span>
            <span className="absolute left-1/2 -ml-6 -mt-2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center opacity-70 border border-teal-600 shadow-md">
                <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </span>
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-300">
              Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání.
              Naše specialita je <span className="text-teal-400 font-semibold">"debuggovací doppio"</span>.
              Přijďte si vychutnat jedinečnou atmosféru, kde se inspirace snoubí s chutí.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12 relative">
            <span className="relative z-10">Naše Služby</span>
            <span className="absolute left-1/2 -ml-6 -mt-2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center opacity-70 border border-teal-600 shadow-md">
                <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM13 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"></path></svg>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-850 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-teal-500 transition-colors duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path><path fillRule="evenodd" d="M7 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                Prvotřídní Káva
              </h3>
              <p className="text-gray-400">
                Široký výběr káv z celého světa, připravených našimi zkušenými baristy. Od espressa po pour-over.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-850 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-teal-500 transition-colors duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm3 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                Klidné Pracovní Prostředí
              </h3>
              <p className="text-gray-400">
                Ideální místo pro soustředěnou práci s vysokorychlostním internetem a dostatkem zásuvek.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-850 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-teal-500 transition-colors duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"></path></svg>
                Originální Dezerty
              </h3>
              <p className="text-gray-400">
                Sladkosti pečlivě připravené k dokonalé harmonii s vaší kávou. Včetně veganských variant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 border-t border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12 relative">
            <span className="relative z-10">Kontakt</span>
            <span className="absolute left-1/2 -ml-6 -mt-2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center opacity-70 border border-teal-600 shadow-md">
                <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm-3 8a3 3 0 116 0V7a1 1 0 00-1-1h-2a1 1 0 00-1 1v3zm1 4a1 1 0 100 2h2a1 1 0 100-2H8z" clipRule="evenodd"></path></svg>
            </span>
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 max-w-2xl mx-auto text-center">
            <div className="space-y-4 text-left inline-block">
              <p className="text-lg text-gray-300 flex items-center">
                <svg className="w-6 h-6 mr-3 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Email: <a href="mailto:test@kavarna.cz" className="ml-2 text-teal-400 hover:underline">test@kavarna.cz</a>
              </p>
              <p className="text-lg text-gray-300 flex items-center">
                <svg className="w-6 h-6 mr-3 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Telefon: <a href="tel:+420777123456" className="ml-2 text-teal-400 hover:underline">+420 777 123 456</a>
              </p>
              <p className="text-lg text-gray-300 flex items-center">
                <svg className="w-6 h-6 mr-3 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Adresa: <span className="ml-2">Bugfixová 1, 110 00 Praha 1</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 p-6 text-center text-gray-500 text-sm border-t border-gray-800">
        &copy; {new Date().getFullYear()} Testovací Kavárna "U Kódu". Všechna práva vyhrazena.
      </footer>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }

        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
