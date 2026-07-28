import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppWidget from './components/WhatsAppWidget.jsx';
import QuoteCartWidget from './components/QuoteCartWidget.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import HomePage from './pages/HomePage.jsx';
import ProdutosPage from './pages/ProdutosPage.jsx';
import VentiladoresPage from './pages/VentiladoresPage.jsx';
import ExaustoresPage from './pages/ExaustoresPage.jsx';
import LocacaoPage from './pages/LocacaoPage.jsx';
import EmpresaPage from './pages/EmpresaPage.jsx';
import QualidadePage from './pages/QualidadePage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';
import DownloadsPage from './pages/DownloadsPage.jsx';
import ClientesPage from './pages/ClientesPage.jsx';
import EticaPage from './pages/EticaPage.jsx';
import PrivacidadePage from './pages/PrivacidadePage.jsx';
import NovidadesPage from './pages/NovidadesPage.jsx';

// Mapeamento simples de páginas
const PAGES = {
  home: HomePage,
  produtos: ProdutosPage,
  ventiladores: VentiladoresPage,
  exaustores: ExaustoresPage,
  locacao: LocacaoPage,
  empresa: EmpresaPage,
  qualidade: QualidadePage,
  contato: ContatoPage,
  downloads: DownloadsPage,
  clientes: ClientesPage,
  etica: EticaPage,
  privacidade: PrivacidadePage,
  novidades: NovidadesPage,
};

// Títulos SEO por página
const PAGE_TITLES_PT = {
  home: 'Vent Rio Equipamentos | Ventiladores e Exaustores Industriais — Rio de Janeiro',
  produtos: 'Produtos Vent Rio | Ventiladores, Exaustores, Climatização e Locação',
  ventiladores: 'Ventiladores Industriais | Vent Rio Equipamentos — Rio de Janeiro',
  exaustores: 'Exaustores Industriais | Vent Rio Equipamentos — Rio de Janeiro',
  locacao: 'Locação de Ventiladores, Exaustores e Cortinas de Ar | Vent Rio',
  empresa: 'Nossa História | Vent Rio Equipamentos — Bonsucesso, Rio de Janeiro',
  qualidade: 'Qualidade e Sistema de Gestão | Vent Rio Equipamentos',
  contato: 'Contato | Vent Rio Equipamentos — Rio de Janeiro',
  downloads: 'Catálogos e Downloads | Vent Rio Equipamentos',
  clientes: 'Clientes | Vent Rio Equipamentos',
  etica: 'Código de Ética | Vent Rio Equipamentos',
  novidades: 'Novidades | Vent Rio Equipamentos',
  privacidade: 'Política de Privacidade | Vent Rio Equipamentos',
};

const PAGE_TITLES_EN = {
  home: 'Vent Rio Equipment | Industrial Fans and Exhausters — Rio de Janeiro',
  produtos: 'Vent Rio Products | Fans, Exhausters, Cooling and Rental',
  ventiladores: 'Industrial Fans | Vent Rio Equipment — Rio de Janeiro',
  exaustores: 'Industrial Exhausters | Vent Rio Equipment — Rio de Janeiro',
  locacao: 'Fan, Exhauster and Air Curtain Rental | Vent Rio',
  empresa: 'Our History | Vent Rio Equipment — Bonsucesso, Rio de Janeiro',
  qualidade: 'Quality Management | Vent Rio Equipment',
  contato: 'Contact | Vent Rio Equipment — Rio de Janeiro',
  downloads: 'Catalogs and Downloads | Vent Rio Equipment',
  clientes: 'Clients | Vent Rio Equipment',
  etica: 'Code of Ethics | Vent Rio Equipment',
  novidades: 'News | Vent Rio Equipment',
  privacidade: 'Privacy Policy | Vent Rio Equipment',
};

// Meta descriptions por página
const PAGE_DESCRIPTIONS_PT = {
  home: 'Vent Rio Equipamentos — fabricação, comercialização e locação de ventiladores, exaustores, climatizadores, Ventfog, aspersão e cortinas de ar. Bonsucesso, Rio de Janeiro. (21) 9 9723-5086.',
  produtos: 'Categorias de produtos Vent Rio: ventiladores, exaustores axiais e centrífugos, climatização, Ventfog, aspersão e frota de locação.',
  ventiladores: 'Ventiladores comerciais, industriais, super industriais, com suporte móvel, aspersão e soluções sob especificação. Rio de Janeiro.',
  exaustores: 'Exaustores axiais, centrífugos, pneumáticos, Ventex, Man Cooler, banheiro, cozinha, divisória, churrasqueira e aplicações industriais.',
  locacao: 'Locação de ventiladores, exaustores, Ventfog, equipamentos com aspersão e cortinas de ar. Atendimento técnico e entrega em todo o Brasil.',
  empresa: 'Conheça a Vent Rio Equipamentos, fundada em 24 de julho de 2012 em Bonsucesso, Rio de Janeiro, com atuação em ventilação e exaustão industrial.',
  qualidade: 'Política de qualidade, missão, visão, valores e escopo do Sistema de Gestão da Qualidade da Vent Rio Equipamentos.',
  contato: 'Entre em contato com a Vent Rio Equipamentos. Telefone, e-mail, endereço e formulário de contato. Bonsucesso, Rio de Janeiro.',
  downloads: 'Catálogos técnicos em PDF para ventiladores e exaustores industriais Vent Rio. Download gratuito.',
  clientes: 'Clientes da Vent Rio Equipamentos: Petrobras, Braskem, Vale, Embraer e outros. Referência nacional em ventilação e exaustão industrial.',
  etica: 'Código de Ética e Conduta da Vent Rio Equipamentos LTDA.',
  novidades: 'Últimas novidades, lançamentos e publicações da Vent Rio Equipamentos. Siga nossas redes sociais.',
  privacidade: 'Política de Privacidade da Vent Rio Equipamentos LTDA. Como tratamos seus dados pessoais.',
};

const PAGE_DESCRIPTIONS_EN = {
  home: 'Vent Rio Equipment - manufacturing, sales and rental of industrial fans, exhausters, cooling units, Ventfog, misting systems and air curtains. Bonsucesso, Rio de Janeiro. +55 21 99723-5086.',
  produtos: 'Vent Rio product categories: fans, axial and centrifugal exhausters, cooling, Ventfog, misting systems and rental fleet.',
  ventiladores: 'Commercial, industrial and super industrial fans, mobile supports, misting systems and custom ventilation solutions. Rio de Janeiro.',
  exaustores: 'Axial, centrifugal and pneumatic exhausters, Ventex, Man Cooler, bathroom, kitchen, partition, barbecue and industrial applications.',
  locacao: 'Rental of fans, exhausters, Ventfog, misting equipment and air curtains. Technical service and delivery throughout Brazil.',
  empresa: 'Learn about Vent Rio Equipment, founded on July 24, 2012 in Bonsucesso, Rio de Janeiro, focused on industrial ventilation and exhaust.',
  qualidade: 'Quality policy, mission, vision, values and Quality Management System scope of Vent Rio Equipment.',
  contato: 'Contact Vent Rio Equipment. Phone, email, address and contact form. Bonsucesso, Rio de Janeiro.',
  downloads: 'Technical PDF catalogs for Vent Rio industrial fans and exhausters. Free download.',
  clientes: 'Vent Rio Equipment clients: Petrobras, Braskem, Vale, Embraer and others. National reference in industrial ventilation and exhaust.',
  etica: 'Code of Ethics and Conduct of Vent Rio Equipment LTDA.',
  novidades: 'Latest news, releases and publications from Vent Rio Equipment. Follow our social channels.',
  privacidade: 'Privacy Policy of Vent Rio Equipment LTDA. How we handle personal data.',
};

// Canonical URLs por página
const PAGE_SLUGS = {
  home: '',
  produtos: 'produtos',
  ventiladores: 'ventiladores',
  exaustores: 'exaustores',
  locacao: 'locacao',
  empresa: 'empresa',
  qualidade: 'qualidade',
  contato: 'contato',
  downloads: 'downloads',
  clientes: 'clientes',
  etica: 'etica',
  novidades: 'novidades',
  privacidade: 'privacidade',
};

function parseLocation(pathname, hashString) {
  if (hashString && hashString.startsWith('#/')) {
    pathname = '/' + hashString.replace(/^#\/?/, '');
  }

  const normalizedPath = pathname.replace(/\/+/g, '/').replace(/\/$/, '').replace(/^\//, '');
  if (!normalizedPath) {
    return { page: 'home', productId: null };
  }

  const parts = normalizedPath.split('/');
  const page = parts[0];
  const productId = parts[1] || null;

  if (PAGES[page]) {
    return { page, productId };
  }
  return { page: 'home', productId: null };
}

function buildPath(page, productId = null) {
  if (page === 'home' && !productId) {
    return '/';
  }
  if (productId) {
    return `/${page}/${productId}`;
  }
  return `/${page}/`;
}

export default function App() {
  const { i18n } = useTranslation();
  const [route, setRoute] = useState(() => parseLocation(window.location.pathname, window.location.hash));

  const navigateTo = (page, productId = null) => {
    if (PAGES[page]) {
      const path = buildPath(page, productId);
      window.history.pushState(null, '', path);
      setRoute({ page, productId });
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Escuta mudanÃ§as de histÃ³rico do navegador (botÃ£o voltar/avanÃ§ar)
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseLocation(window.location.pathname, window.location.hash));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const currentPage = route.page;
  const currentProductId = route.productId;

  // Atualizar title, description, canonical e hash a cada mudanÃ§a de pÃ¡gina/idioma/produto
  useEffect(() => {
    const isEN = i18n.language === 'en';
    const titles = isEN ? PAGE_TITLES_EN : PAGE_TITLES_PT;
    const descriptions = isEN ? PAGE_DESCRIPTIONS_EN : PAGE_DESCRIPTIONS_PT;

    // Title
    document.title = titles[currentPage] || titles.home;

    // Meta description
    let descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', descriptions[currentPage] || descriptions.home);
    }

    // Canonical â€” URL limpa sem hash para SEO
    const baseUrl = window.location.origin;
    const slug = PAGE_SLUGS[currentPage] || currentPage;
    const canonical = currentPage === 'home'
      ? `${baseUrl}/`
      : currentProductId
        ? `${baseUrl}/${currentPage}/${currentProductId}`
        : `${baseUrl}/${slug}/`;
    let canonicalEl = document.getElementById('canonical-link');
    if (canonicalEl) canonicalEl.setAttribute('href', canonical);

    // Open Graph URL
    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl) ogUrlEl.setAttribute('content', canonical);

    // HTML lang
    document.documentElement.lang = isEN ? 'en' : 'pt-BR';

    // Garante que o caminho do navegador esteja correto sem hash
    const expectedPath = buildPath(currentPage, currentProductId);
    if (window.location.pathname + window.location.search !== expectedPath) {
      window.history.replaceState(null, '', expectedPath);
    }

    // Scroll ao topo na troca de pÃ¡gina
    window.scrollTo(0, 0);
  }, [currentPage, currentProductId, i18n.language]);

  const PageComponent = PAGES[currentPage] || HomePage;

  return (
    <div className="min-h-screen bg-theme-body text-theme-primary antialiased transition-colors duration-300">
      {/* Skip to content link para acessibilidade */}
      <a href="#main-content" className="skip-to-content">
        {i18n.language === 'en' ? 'Skip to main content' : 'Pular para o conteúdo principal'}
      </a>

      <Header currentPage={currentPage} navigateTo={navigateTo} />

      <main id="main-content" tabIndex="-1">
        <PageComponent
          navigateTo={navigateTo}
          currentPage={currentPage}
          currentProductId={currentProductId}
        />
      </main>

      <Footer navigateTo={navigateTo} />
      <QuoteCartWidget />
      <WhatsAppWidget />
      <ScrollToTop />
    </div>
  );
}

