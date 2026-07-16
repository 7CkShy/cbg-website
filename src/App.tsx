import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Globe,
  Users,
  BookOpen,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Thermometer,
  Map,
  ArrowLeft,
  GraduationCap,
  Lightbulb,
  Camera,
  Calendar,
  Heart,
  ChevronLeft,
  Github,
  Languages,
  Newspaper,
  Award,
  FolderOpen,
} from 'lucide-react';
import type { Member } from './types';
import { TEAM_MEMBERS, PUBLICATIONS, RESEARCH_AREAS, LIFE_EVENTS, NEWS_ITEMS } from './constants';
import { useI18n } from './i18n.tsx';
import { cn } from './lib/utils';

const OpeningIntro = ({ onComplete }: { onComplete: () => void }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isContentVisible, setIsContentVisible] = useState(true);
  const fadeTimerRef = React.useRef<number | null>(null);
  const openTimerRef = React.useRef<number | null>(null);

  const beginReveal = React.useCallback((openingDelay: number) => {
    if (fadeTimerRef.current !== null) window.clearTimeout(fadeTimerRef.current);
    if (openTimerRef.current !== null) window.clearTimeout(openTimerRef.current);

    setIsContentVisible(false);
    openTimerRef.current = window.setTimeout(onComplete, openingDelay);
  }, [onComplete]);

  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    if (shouldReduceMotion) {
      openTimerRef.current = window.setTimeout(onComplete, 120);
    } else {
      fadeTimerRef.current = window.setTimeout(() => beginReveal(900), 2300);
    }

    return () => {
      if (fadeTimerRef.current !== null) window.clearTimeout(fadeTimerRef.current);
      if (openTimerRef.current !== null) window.clearTimeout(openTimerRef.current);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [beginReveal, onComplete, shouldReduceMotion]);

  const duration = shouldReduceMotion ? 0.01 : 0.9;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      role="status"
      aria-label="网站正在打开"
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-[#173d2b]"
        exit={{ y: '-102%' }}
        transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
      >
        <img
          src="./image/team/home.jpg"
          alt=""
          className="absolute left-0 top-0 h-screen w-screen object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[#173d2b]/88" />
      </motion.div>
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-[#173d2b]"
        exit={{ y: '102%' }}
        transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
      >
        <img
          src="./image/team/home.jpg"
          alt=""
          className="absolute bottom-0 left-0 h-screen w-screen object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[#173d2b]/88" />
      </motion.div>

      <motion.button
        type="button"
        onClick={() => beginReveal(650)}
        className="absolute right-5 top-5 z-30 border-b border-white/40 px-1 py-2 text-xs text-white/70 transition-colors hover:text-white md:right-8 md:top-7"
        animate={{ opacity: isContentVisible ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.35 }}
      >
        跳过开场
      </motion.button>

      <motion.div
        className="pointer-events-none absolute left-6 top-6 z-20 hidden items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-white/45 md:flex"
        animate={{ opacity: isContentVisible ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.45 }}
      >
        <span className="block h-px w-8 bg-white/35" />
        YNU · Kunming
      </motion.div>

      <motion.div
        className="pointer-events-none absolute left-0 right-0 top-1/2 z-20 h-px bg-white/15"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, opacity: isContentVisible ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : isContentVisible ? 1.4 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="relative z-20 flex max-w-[90vw] flex-col items-center text-center"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{
          opacity: { duration: shouldReduceMotion ? 0.01 : isContentVisible ? 0.7 : 0.65 },
          y: { duration: shouldReduceMotion ? 0.01 : 0.7 },
          delay: shouldReduceMotion ? 0 : isContentVisible ? 0.2 : 0,
        }}
      >
        <motion.div
          className="relative mb-7 flex h-14 w-20 items-center justify-center border-y border-white/35 font-serif text-lg tracking-[0.18em] text-white/90"
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.75 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          CBG
        </motion.div>

        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.32em] text-white/65 md:text-xs">
          Yunnan University
        </p>
        <h1 className="text-3xl font-medium leading-tight md:text-5xl">
          保护生物地理研究组
        </h1>
        <p className="mt-3 font-serif text-base text-white/75 md:text-xl">
          Conservation Biogeography Research Group
        </p>

        <div className="mt-9 h-px w-44 overflow-hidden bg-white/20">
          <motion.div
            className="h-full w-full origin-left bg-white/70"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={isContentVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 1, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : isContentVisible ? 1.8 : 0.35, delay: shouldReduceMotion ? 0 : isContentVisible ? 0.55 : 0 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNearTop, setIsNearTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, lang, toggleLang } = useI18n();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsNearTop(e.clientY <= 80);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navLinks = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.research', href: '/research' },
    { key: 'nav.publications', href: '/publications' },
    { key: 'nav.team', href: '/team' },
    { key: 'nav.life', href: '/life' },
    { key: 'nav.news', href: '/news' },
    { key: 'nav.contact', href: '/contact' },
  ];

  // On homepage:
  //   - Not scrolled past hero → mouse near top shows navbar, away hides it (transparent bg)
  //   - Scrolled past hero → navbar always visible (solid white bg)
  // On other pages: navbar always visible (solid white bg)
  const isHidden = isHome && !isScrolled && !isNearTop;
  const isSolid = !isHome || isScrolled;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isHidden ? "-translate-y-full" : "translate-y-0",
      isSolid ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white">
            <Globe size={24} />
          </div>
          <div>
            <h1 className={cn(
              "font-serif font-bold text-xl leading-tight",
              isSolid ? "text-brand-green" : "text-white"
            )}>{lang === 'zh' ? '保护生物地理研究组' : 'Conservation Biogeography Group'}</h1>
            <p className={cn(
              "text-[10px] uppercase tracking-widest opacity-70 font-sans",
              isSolid ? "text-slate-500" : "text-white"
            )}>{lang === 'zh' ? 'Conservation Biogeography Group' : 'Yunnan University'}</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isSolid
                  ? "text-slate-600 hover:text-brand-green"
                  : "text-white/80 hover:text-white"
              )}
            >
              {t(link.key)}
            </Link>
          ))}
          {/* GitHub icon */}
          <a
            href="https://github.com/7CkShy"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-1.5 rounded-lg transition-colors",
              isSolid
                ? "text-slate-500 hover:text-brand-green"
                : "text-white/70 hover:text-white"
            )}
            title="GitHub"
          >
            <Github size={18} />
          </a>
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className={cn(
              "flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium border transition-all",
              isSolid
                ? "border-slate-200 text-slate-600 hover:border-brand-green hover:text-brand-green"
                : "border-white/30 text-white/80 hover:border-white hover:text-white"
            )}
            title={t('lang.switch')}
          >
            <Languages size={14} />
            {t('lang.switch')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2",
            isSolid ? "text-slate-900" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-slate-100 text-slate-900"
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/7CkShy-L/cbg-website"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-brand-green transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <button
                onClick={() => { toggleLang(); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium border border-slate-200 text-slate-600 hover:border-brand-green hover:text-brand-green transition-all"
              >
                <Languages size={16} />
                {t('lang.switch')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Home = () => {
  const { t, lang } = useI18n();

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero: full-screen team photo with group name overlay */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="./image/team/home.jpg"
          alt="Conservation Biogeography Group"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Group name overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg mb-4 text-center px-4">
            {lang === 'zh' ? '保护生物地理研究组' : 'Conservation Biogeography Group'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 drop-shadow-md tracking-widest uppercase">
            {lang === 'zh' ? '云南大学 · 国际河流与生态安全研究院' : 'Institute of International Rivers and Eco-Security, Yunnan University'}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-brand-earth pointer-events-none"></div>
      </section>

      {/* Quote section */}
      <section className="py-12 px-6 bg-brand-earth">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl font-serif text-brand-green/70 italic">
            {lang === 'zh'
              ? '不积跬步，无以至千里；不积小流，无以成江海。'
              : '"A journey of a thousand miles begins with a single step."'}
          </p>
          <p className="text-xs text-slate-400 mt-2">
            {lang === 'zh' ? '—— 荀子《劝学篇》' : '— Xunzi'}
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">{t('home.newsTitle')}</h3>
            <h2 className="text-4xl md:text-5xl font-serif">{t('home.recentNews')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ITEMS.slice(0, 3).map((news) => (
              <Link
                key={news.id}
                to={`/news/${news.id}`}
                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={news.image || 'https://picsum.photos/seed/news/800/400'}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      'px-3 py-1 rounded-full text-xs font-bold',
                      news.category === '论文发表' ? 'bg-blue-100 text-blue-700' :
                      news.category === '学术会议' ? 'bg-purple-100 text-purple-700' :
                      news.category === '获奖荣誉' ? 'bg-amber-100 text-amber-700' :
                      news.category === '项目动态' ? 'bg-green-100 text-green-700' :
                      'bg-slate-100 text-slate-600'
                    )}>
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                    <Calendar size={14} />
                    <span>{news.date}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-brand-green transition-colors line-clamp-2">
                    {lang === 'en' && news.titleEn ? news.titleEn : news.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-light">
                    {lang === 'en' && news.summaryEn ? news.summaryEn : news.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/news" className="px-8 py-3 border border-brand-green text-brand-green rounded-full font-medium hover:bg-brand-green hover:text-white transition-all">
              {t('home.viewAllNews')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Research = () => {
  const { t, lang } = useI18n();
  const iconMap: Record<string, any> = {
    Globe: Globe,
    Thermometer: Thermometer,
    Map: Map,
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">{t('research.subtitle')}</h3>
            <h2 className="text-4xl md:text-5xl font-serif">{t('research.title')}</h2>
          </div>
          <p className="text-slate-500 max-w-md">
            {t('research.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {RESEARCH_AREAS.map((area) => {
            const Icon = iconMap[area.icon] || Globe;
            return (
              <div
                key={area.id}
                className="p-8 rounded-3xl bg-brand-earth border border-slate-100 group transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-green shadow-sm mb-6">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-4">{lang === 'en' && area.titleEn ? area.titleEn : area.title}</h4>
                <p className="text-slate-600 leading-relaxed font-light">
                  {lang === 'en' && area.descriptionEn ? area.descriptionEn : area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Publications = () => {
  const { t, lang } = useI18n();
  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">{t('publications.subtitle')}</h3>
          <h2 className="text-4xl md:text-5xl font-serif">{t('publications.title')}</h2>
        </div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-brand-earth rounded-xl flex flex-col items-center justify-center text-brand-green font-serif">
                <span className="text-xs font-bold uppercase">{pub.type}</span>
                <span className="text-lg font-bold">{pub.year}</span>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold mb-2 group-hover:text-brand-green transition-colors">{lang === 'en' && pub.titleEn ? pub.titleEn : pub.title}</h4>
                <p className="text-slate-600 mb-1">{pub.authors}</p>
                <p className="text-sm italic text-slate-400">{pub.journal}</p>
              </div>
              <div className="flex-shrink-0">
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-brand-green hover:underline"
                  >
                    DOI: {pub.doi} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const { t, lang } = useI18n();

  // Group members by cohort
  const roleOrder = ['Faculty', 'Postdoc', 'PhD Student', 'Master Student'];
  const sortedMembers = [...TEAM_MEMBERS].sort(
    (a, b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role)
  );

  const cohortGroups: Record<string, Member[]> = {};
  sortedMembers.forEach(m => {
    const key = m.cohort || m.role;
    if (!cohortGroups[key]) cohortGroups[key] = [];
    cohortGroups[key].push(m);
  });
  const cohortEntries = Object.entries(cohortGroups);

  const scrollToSection = (cohortId: string) => {
    const el = document.getElementById(cohortId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">{t('team.subtitle')}</h3>
          <h2 className="text-4xl md:text-5xl font-serif">{t('team.title')}</h2>
        </div>

        <div className="flex gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {cohortEntries.map(([cohortKey, members]) => {
              const cohortId = `cohort-${cohortKey.replace(/\s+/g, '-')}`;
              const sample = members[0];
              const displayCohort = lang === 'en' && sample.cohortEn ? sample.cohortEn : cohortKey;

              return (
                <div key={cohortKey} id={cohortId} className="mb-20 last:mb-0 scroll-mt-28">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 border-b border-slate-100 pb-3">
                    {displayCohort}
                    <span className="ml-2 text-slate-300 font-normal">({members.length})</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((member) => {
                      const displayName = lang === 'en' && member.nameEn ? member.nameEn : member.name;
                      const displayRole = lang === 'en' && member.cohortEn ? member.cohortEn : (member.cohort || member.role);
                      return (
                        <Link
                          key={member.id}
                          to={`/team/${member.id}`}
                          className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-sm"
                        >
                          {/* Photo */}
                          <img
                            src={member.image}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-600 group-hover:scale-110 group-hover:rotate-3"
                            referrerPolicy="no-referrer"
                          />

                          {/* Brand overlay — slides down from top on hover */}
                          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/85 via-brand-green/70 to-brand-green/50 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center">
                            <span className="px-6 py-2.5 rounded-full border-2 border-white/60 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all delay-200 duration-300 translate-y-4 group-hover:translate-y-0">
                              {t('team.viewDetail')}
                            </span>
                          </div>

                          {/* Name bar at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                            <h5 className="text-white font-bold text-lg leading-tight">{displayName}</h5>
                            <p className="text-white/60 text-xs mt-0.5">{displayRole}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar quick index */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h5 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">
                {lang === 'zh' ? '快速索引' : 'Quick Index'}
              </h5>
              <nav className="space-y-1">
                {cohortEntries.map(([cohortKey, members]) => {
                  const cohortId = `cohort-${cohortKey.replace(/\s+/g, '-')}`;
                  const sample = members[0];
                  const displayCohort = lang === 'en' && sample.cohortEn ? sample.cohortEn : cohortKey;

                  return (
                    <button
                      key={cohortKey}
                      type="button"
                      onClick={() => scrollToSection(cohortId)}
                      className="block w-full text-left px-3 py-2 rounded-lg text-sm text-slate-500 hover:text-brand-green hover:bg-brand-earth/50 transition-colors"
                    >
                      <span>{displayCohort}</span>
                      <span className="ml-2 text-xs text-slate-300">({members.length})</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const MemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useI18n();
  const member = TEAM_MEMBERS.find(m => m.id === id);
  const [showAllPublications, setShowAllPublications] = useState(false);

  if (!member) return <div className="pt-32 text-center">{t('member.notFound')}</div>;

  const displayName = lang === 'en' && member.nameEn ? member.nameEn : member.name;
  const displayBio = lang === 'en' && member.fullBioEn ? member.fullBioEn : (member.fullBio || member.description);
  const displayEdu = lang === 'en' && member.educationEn ? member.educationEn : member.education;
  const displayInterests = lang === 'en' && member.researchInterestsEn ? member.researchInterestsEn : member.researchInterests;
  const displayTitle = lang === 'en' && member.titleEn ? member.titleEn : (member.title || member.role);
  const displayHonors = lang === 'en' && member.honorsEn ? member.honorsEn : member.honors;
  const displayProjects = lang === 'en' && member.projectsEn ? member.projectsEn : member.projects;
  const displayCourses = lang === 'en' && member.coursesEn ? member.coursesEn : member.courses;
  const displayAdmissions = lang === 'en' && member.admissionsEn ? member.admissionsEn : member.admissions;
  const visiblePublications = showAllPublications
    ? member.selectedPublications
    : member.selectedPublications?.slice(0, 8);

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-green mb-12 transition-colors"
        >
          <ArrowLeft size={18} /> {t('team.backToList')}
        </button>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="aspect-square rounded-3xl overflow-hidden mb-8 shadow-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-serif font-bold">{displayName}</h1>
              <p className="text-brand-green font-medium leading-relaxed">{displayTitle}</p>
              {displayHonors?.map((honor) => (
                <div key={honor} className="flex items-start gap-3 text-sm leading-relaxed text-slate-500">
                  <Award size={17} className="mt-0.5 flex-shrink-0 text-brand-green" />
                  <span>{honor}</span>
                </div>
              ))}
              {member.email && (
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail size={18} className="text-brand-green" />
                  <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
                </div>
              )}
              {member.website && (
                <div className="flex items-center gap-3 text-slate-600">
                  <Globe size={18} className="text-brand-green" />
                  <a href={member.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{t('team.website')}</a>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Users size={20} className="text-brand-green" /> {t('team.bio')}
              </h2>
              <p className="text-slate-600 leading-relaxed font-light text-lg">
                {displayBio}
              </p>
            </section>

            {displayEdu && (
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <GraduationCap size={20} className="text-brand-green" /> {t('team.education')}
                </h2>
                <ul className="space-y-3">
                  {displayEdu.map((edu, i) => (
                    <li key={i} className="text-slate-600 flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0"></div>
                      {edu}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {displayInterests && (
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Lightbulb size={20} className="text-brand-green" /> {t('team.interests')}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {displayInterests.map((interest, i) => (
                    <span key={i} className="px-4 py-2 bg-brand-earth text-brand-green rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {displayProjects && (
              <section>
                <h2 className="text-xl font-bold mb-5 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <FolderOpen size={20} className="text-brand-green" /> {t('team.projects')}
                </h2>
                <ol className="divide-y divide-slate-100">
                  {displayProjects.map((project, i) => (
                    <li key={project} className="grid grid-cols-[2rem_1fr] gap-3 py-4 first:pt-0">
                      <span className="pt-0.5 font-serif text-sm text-brand-green/60">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-slate-600 leading-relaxed">{project}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {(displayCourses || displayAdmissions) && (
              <div className="grid gap-10 border-y border-slate-200 py-8 sm:grid-cols-2">
                {displayCourses && (
                  <section>
                    <h2 className="mb-4 flex items-center gap-2 text-base font-bold">
                      <BookOpen size={18} className="text-brand-green" /> {t('team.teaching')}
                    </h2>
                    <ul className="space-y-2 text-slate-600">
                      {displayCourses.map(course => <li key={course}>{course}</li>)}
                    </ul>
                  </section>
                )}
                {displayAdmissions && (
                  <section>
                    <h2 className="mb-4 flex items-center gap-2 text-base font-bold">
                      <GraduationCap size={18} className="text-brand-green" /> {t('team.admissions')}
                    </h2>
                    <ul className="space-y-2 text-slate-600">
                      {displayAdmissions.map(direction => (
                        <li key={direction} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-green" />
                          <span>{direction}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}

            {visiblePublications && member.selectedPublications && (
              <section>
                <div className="mb-5 flex items-end justify-between gap-4 border-b border-slate-200 pb-2">
                  <h2 className="flex items-center gap-2 text-xl font-bold">
                    <Newspaper size={20} className="text-brand-green" /> {t('team.selectedPublications')}
                  </h2>
                  <span className="flex-shrink-0 text-xs text-slate-400">
                    {member.selectedPublications.length} {lang === 'zh' ? '项' : 'items'}
                  </span>
                </div>
                <ol className="space-y-5">
                  {visiblePublications.map((publication, i) => (
                    <li key={publication} className="grid grid-cols-[2rem_1fr] gap-3">
                      <span className="pt-1 font-serif text-sm text-brand-green/60">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm leading-7 text-slate-600">{publication}</p>
                    </li>
                  ))}
                </ol>
                {member.selectedPublications.length > 8 && (
                  <button
                    type="button"
                    onClick={() => setShowAllPublications(value => !value)}
                    className="mt-8 border-b border-brand-green/40 pb-1 text-sm font-medium text-brand-green transition-colors hover:border-brand-green"
                  >
                    {showAllPublications ? t('team.showLessPublications') : t('team.showAllPublications')}
                  </button>
                )}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LabLife = () => {
  const { t, lang } = useI18n();

  const categoryColors: Record<string, string> = {
    '聚餐': 'bg-orange-100 text-orange-700',
    '野外考察': 'bg-green-100 text-green-700',
    '团建活动': 'bg-blue-100 text-blue-700',
    '学术会议': 'bg-purple-100 text-purple-700',
    '日常': 'bg-slate-100 text-slate-600',
    '节日庆祝': 'bg-red-100 text-red-700',
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">{t('life.subtitle')}</h3>
          <h2 className="text-4xl md:text-5xl font-serif">{t('life.title')}</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
            {t('life.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LIFE_EVENTS.map((event) => (
            <Link
              key={event.id}
              to={`/life/${event.id}`}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className={cn(
                    'px-3 py-1 rounded-full text-xs font-bold',
                    categoryColors[event.category] || 'bg-slate-100 text-slate-600',
                  )}>
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-brand-green transition-colors">{lang === 'en' && event.titleEn ? event.titleEn : event.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-light">
                  {lang === 'en' && event.descriptionEn ? event.descriptionEn : event.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Camera size={14} />
                    {event.images.length} {t('life.photos')}
                  </span>
                  <span className="text-sm font-medium text-brand-green flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    {t('life.viewDetail')} <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const LifeEventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useI18n();
  const event = LIFE_EVENTS.find(e => e.id === id);

  if (!event) return (
    <div className="pt-32 text-center px-6">
      <h2 className="text-2xl font-bold mb-4">{t('life.notFound')}</h2>
      <Link to="/life" className="text-brand-green hover:underline">{t('life.backToLife')}</Link>
    </div>
  );

  const categoryColors: Record<string, string> = {
    '聚餐': 'bg-orange-100 text-orange-700',
    '野外考察': 'bg-green-100 text-green-700',
    '团建活动': 'bg-blue-100 text-blue-700',
    '学术会议': 'bg-purple-100 text-purple-700',
    '日常': 'bg-slate-100 text-slate-600',
    '节日庆祝': 'bg-red-100 text-red-700',
  };

  const displayTitle = lang === 'en' && event.titleEn ? event.titleEn : event.title;
  const displayDesc = lang === 'en' && event.descriptionEn ? event.descriptionEn : event.description;

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate('/life')}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-green mb-12 transition-colors"
        >
          <ChevronLeft size={18} /> {t('life.backToList')}
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-3xl overflow-hidden mb-8 shadow-lg">
              <img
                src={event.coverImage}
                alt={displayTitle}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={cn(
                'px-4 py-1.5 rounded-full text-sm font-bold',
                categoryColors[event.category] || 'bg-slate-100 text-slate-600',
              )}>
                {event.category}
              </span>
              <span className="flex items-center gap-2 text-slate-500 text-sm">
                <Calendar size={16} /> {event.date}
              </span>
              <span className="flex items-center gap-2 text-slate-500 text-sm">
                <Camera size={16} /> {event.images.length} {t('life.photos')}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">{displayTitle}</h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed font-light whitespace-pre-line">
                {displayDesc}
              </p>
            </div>

            <div className="mt-12 p-8 bg-brand-earth rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  <Heart size={20} className="text-brand-green" />
                </div>
                <p className="text-slate-500 text-sm font-light">
                  {t('life.warmMessage')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Camera size={20} className="text-brand-green" />
              {t('life.eventPhotos')}
            </h3>
            <div className="space-y-4">
              {event.images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all"
                >
                  <img
                    src={img}
                    alt={`${displayTitle} - ${t('life.photos')} ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsList = () => {
  const { t, lang } = useI18n();

  const categoryColors: Record<string, string> = {
    '论文发表': 'bg-blue-100 text-blue-700',
    '学术会议': 'bg-purple-100 text-purple-700',
    '获奖荣誉': 'bg-amber-100 text-amber-700',
    '项目动态': 'bg-green-100 text-green-700',
    '其他': 'bg-slate-100 text-slate-600',
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">{t('news.subtitle')}</h3>
          <h2 className="text-4xl md:text-5xl font-serif">{t('news.title')}</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
            {t('news.description')}
          </p>
        </div>

        <div className="space-y-6">
          {NEWS_ITEMS.map((news) => (
            <Link
              key={news.id}
              to={`/news/${news.id}`}
              className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6"
            >
              {news.image && (
                <div className="flex-shrink-0 w-full md:w-48 h-32 rounded-xl overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={cn(
                    'px-3 py-1 rounded-full text-xs font-bold',
                    categoryColors[news.category] || 'bg-slate-100 text-slate-600',
                  )}>
                    {news.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-slate-400">
                    <Calendar size={14} />
                    {news.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-brand-green transition-colors">
                  {lang === 'en' && news.titleEn ? news.titleEn : news.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {lang === 'en' && news.summaryEn ? news.summaryEn : news.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Newspaper size={14} />
                    {t('news.viewDetail')}
                  </span>
                  <span className="text-sm font-medium text-brand-green flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    {t('news.viewDetail')} <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useI18n();
  const news = NEWS_ITEMS.find(n => n.id === id);

  if (!news) return (
    <div className="pt-32 text-center px-6">
      <h2 className="text-2xl font-bold mb-4">{t('news.notFound')}</h2>
      <Link to="/news" className="text-brand-green hover:underline">{t('news.backToNews')}</Link>
    </div>
  );

  const categoryColors: Record<string, string> = {
    '论文发表': 'bg-blue-100 text-blue-700',
    '学术会议': 'bg-purple-100 text-purple-700',
    '获奖荣誉': 'bg-amber-100 text-amber-700',
    '项目动态': 'bg-green-100 text-green-700',
    '其他': 'bg-slate-100 text-slate-600',
  };

  const displayTitle = lang === 'en' && news.titleEn ? news.titleEn : news.title;
  const displayContent = lang === 'en' && news.contentEn ? news.contentEn : news.content;

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/news')}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-green mb-12 transition-colors"
        >
          <ChevronLeft size={18} /> {t('news.backToList')}
        </button>

        {news.image && (
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-8 shadow-lg">
            <img
              src={news.image}
              alt={displayTitle}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className={cn(
            'px-4 py-1.5 rounded-full text-sm font-bold',
            categoryColors[news.category] || 'bg-slate-100 text-slate-600',
          )}>
            {news.category}
          </span>
          <span className="flex items-center gap-2 text-slate-500 text-sm">
            <Calendar size={16} /> {news.date}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-10">{displayTitle}</h1>

        <div className="prose prose-slate max-w-none">
          {displayContent.split('\n').map((paragraph, i) => (
            paragraph.trim() ? (
              <p key={i} className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                {paragraph}
              </p>
            ) : null
          ))}
        </div>

        <div className="mt-16 p-8 bg-brand-earth rounded-3xl border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
              <Newspaper size={20} className="text-brand-green" />
            </div>
            <span className="text-slate-500 text-sm font-light">{t('news.backToList')}</span>
          </div>
          <Link
            to="/news"
            className="px-6 py-2.5 bg-brand-green text-white rounded-full text-sm font-medium hover:bg-brand-green/90 transition-colors"
          >
            {t('news.backToList')}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { t } = useI18n();
  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">{t('contact.subtitle')}</h3>
          <h2 className="text-4xl md:text-5xl font-serif">{t('contact.title')}</h2>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-earth flex items-center justify-center text-brand-green flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{t('contact.address')}</h4>
                <p className="text-slate-500 leading-relaxed whitespace-pre-line">
                  {t('contact.addressText')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-earth flex items-center justify-center text-brand-green flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{t('contact.email')}</h4>
                <p className="text-slate-500">
                  rdwu@ynu.edu.cn<br />
                  yangyin@ynu.edu.cn
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-64 md:h-auto border border-slate-100">
            <img
              src="https://picsum.photos/seed/campus/800/600"
              alt="Campus location"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-green/10"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-brand-green uppercase tracking-widest mb-1">{t('contact.locationTitle')}</p>
              <p className="text-sm text-slate-700">{t('contact.locationDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const { t, lang } = useI18n();
  return (
    <footer className="py-12 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <Globe className="text-brand-green" size={20} />
          <span className="font-serif font-bold text-brand-green">{lang === 'zh' ? '保护生物地理研究组' : 'Conservation Biogeography Group'}</span>
        </Link>

        <div className="text-slate-400 text-sm font-light">
          {t('footer.rights').replace('{year}', String(new Date().getFullYear()))}
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/7CkShy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green transition-colors" aria-label={t('github.link')}>
            <Github size={18} />
          </a>
          <a href="#" className="text-slate-400 hover:text-brand-green transition-colors" aria-label="Globe"><Globe size={18} /></a>
          <a href="#" className="text-slate-400 hover:text-brand-green transition-colors" aria-label="Publications"><BookOpen size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { pathname } = useLocation();
  const [showOpening, setShowOpening] = useState(true);

  const completeOpening = React.useCallback(() => setShowOpening(false), []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {showOpening && <OpeningIntro onComplete={completeOpening} />}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:id" element={<MemberDetail />} />
            <Route path="/life" element={<LabLife />} />
            <Route path="/life/:id" element={<LifeEventDetail />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
