import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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
  Lightbulb
} from 'lucide-react';
import { TEAM_MEMBERS, PUBLICATIONS, RESEARCH_AREAS } from './constants';
import { cn } from './lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '/' },
    { name: '研究方向', href: '/research' },
    { name: '发表成果', href: '/publications' },
    { name: '团队成员', href: '/team' },
    { name: '联系我们', href: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled || location.pathname !== '/' ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white">
            <Globe size={24} />
          </div>
          <div>
            <h1 className={cn(
              "font-serif font-bold text-xl leading-tight",
              isScrolled || location.pathname !== '/' ? "text-brand-green" : "text-white"
            )}>保护生物地理研究组</h1>
            <p className={cn(
              "text-[10px] uppercase tracking-widest opacity-70 font-sans",
              isScrolled || location.pathname !== '/' ? "text-slate-500" : "text-white"
            )}>Conservation Biogeography Group</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled || location.pathname !== '/' 
                  ? "text-slate-600 hover:text-brand-green" 
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2",
            isScrolled || location.pathname !== '/' ? "text-slate-900" : "text-white"
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
                key={link.name} 
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-slate-100 text-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/conservation/1920/1080" 
            alt="Nature background" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-earth"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-medium tracking-widest uppercase mb-6"
          >
            探索自然规律 · 守护生物多样性
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
          >
            保护生物地理研究组
            <span className="block text-2xl md:text-3xl mt-4 font-sans font-light opacity-90">Conservation Biogeography Research Group</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            我们致力于研究生物多样性的空间分布格局及其驱动机制，利用多学科手段为全球变化背景下的生物多样性保护提供科学依据。
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/research" className="px-8 py-4 bg-brand-green text-white rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2">
              了解我们的研究 <ChevronRight size={18} />
            </Link>
            <Link to="/publications" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all">
              查看发表成果
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">Latest Research</h3>
            <h2 className="text-4xl md:text-5xl font-serif">近期发表成果</h2>
          </div>

          <div className="space-y-6">
            {PUBLICATIONS.slice(0, 3).map((pub) => (
              <div 
                key={pub.id}
                className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-brand-earth rounded-xl flex flex-col items-center justify-center text-brand-green font-serif">
                  <span className="text-xs font-bold uppercase">{pub.type}</span>
                  <span className="text-lg font-bold">{pub.year}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-brand-green transition-colors">{pub.title}</h4>
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
          
          <div className="mt-12 text-center">
            <Link to="/publications" className="px-8 py-3 border border-brand-green text-brand-green rounded-full font-medium hover:bg-brand-green hover:text-white transition-all">
              查看全部发表成果
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Research = () => {
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
            <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">Research Focus</h3>
            <h2 className="text-4xl md:text-5xl font-serif">核心研究方向</h2>
          </div>
          <p className="text-slate-500 max-w-md">
            我们结合野外考察、遥感监测和生态模型，在多个尺度上探讨生物地理学与保护生物学的交叉课题。
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
                <h4 className="text-xl font-bold mb-4">{area.title}</h4>
                <p className="text-slate-600 leading-relaxed font-light">
                  {area.description}
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
  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">Our Impact</h3>
          <h2 className="text-4xl md:text-5xl font-serif">发表成果</h2>
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
                <h4 className="text-xl font-bold mb-2 group-hover:text-brand-green transition-colors">{pub.title}</h4>
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
  const roles = ['Faculty', 'Postdoc', 'PhD Student', 'Master Student'];
  
  return (
    <div className="pt-32 pb-24 px-6 bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">The Team</h3>
          <h2 className="text-4xl md:text-5xl font-serif">团队成员</h2>
        </div>

        {roles.map(role => {
          const members = TEAM_MEMBERS.filter(m => m.role === role);
          if (members.length === 0) return null;
          
          return (
            <div key={role} className="mb-20 last:mb-0">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 border-b border-slate-100 pb-4">
                {role === 'Faculty' ? '指导教师' : role === 'Postdoc' ? '博士后' : role === 'PhD Student' ? '博士研究生' : '硕士研究生'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {members.map((member) => (
                  <Link 
                    key={member.id}
                    to={`/team/${member.id}`}
                    className="group"
                  >
                    <div className="relative aspect-square rounded-3xl overflow-hidden mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-brand-green px-4 py-2 rounded-full text-xs font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">查看详情</span>
                      </div>
                    </div>
                    <h5 className="text-xl font-bold mb-1 group-hover:text-brand-green transition-colors">{member.name}</h5>
                    <p className="text-sm text-brand-green font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-slate-500 font-light line-clamp-2">{member.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = TEAM_MEMBERS.find(m => m.id === id);

  if (!member) return <div className="pt-32 text-center">Member not found</div>;

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-green mb-12 transition-colors"
        >
          <ArrowLeft size={18} /> 返回团队列表
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
              <h1 className="text-3xl font-serif font-bold">{member.name}</h1>
              <p className="text-brand-green font-medium">{member.role}</p>
              {member.email && (
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail size={18} className="text-brand-green" />
                  <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
                </div>
              )}
              {member.website && (
                <div className="flex items-center gap-3 text-slate-600">
                  <Globe size={18} className="text-brand-green" />
                  <a href={member.website} target="_blank" rel="noopener noreferrer" className="hover:underline">个人主页</a>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Users size={20} className="text-brand-green" /> 个人简介
              </h2>
              <p className="text-slate-600 leading-relaxed font-light text-lg">
                {member.fullBio || member.description}
              </p>
            </section>

            {member.education && (
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <GraduationCap size={20} className="text-brand-green" /> 教育背景
                </h2>
                <ul className="space-y-3">
                  {member.education.map((edu, i) => (
                    <li key={i} className="text-slate-600 flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0"></div>
                      {edu}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {member.researchInterests && (
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Lightbulb size={20} className="text-brand-green" /> 研究兴趣
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.researchInterests.map((interest, i) => (
                    <span key={i} className="px-4 py-2 bg-brand-earth text-brand-green rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-green tracking-widest uppercase mb-4">Get in Touch</h3>
          <h2 className="text-4xl md:text-5xl font-serif">联系我们</h2>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-earth flex items-center justify-center text-brand-green flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">实验室地址</h4>
                <p className="text-slate-500 leading-relaxed">
                  云南大学国际河流与生态安全研究院<br />
                  国际河流与生态安全研究院 1212室<br />
                  中国 · 昆明
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-earth flex items-center justify-center text-brand-green flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">电子邮箱</h4>
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
              <p className="text-xs font-bold text-brand-green uppercase tracking-widest mb-1">University Location</p>
              <p className="text-sm text-slate-700">欢迎访问我们的实验室进行学术交流</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <Globe className="text-brand-green" size={20} />
          <span className="font-serif font-bold text-brand-green">保护生物地理研究组</span>
        </Link>
        
        <div className="text-slate-400 text-sm font-light">
          © {new Date().getFullYear()} Conservation Biogeography Group. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-brand-green transition-colors"><Globe size={18} /></a>
          <a href="#" className="text-slate-400 hover:text-brand-green transition-colors"><Users size={18} /></a>
          <a href="#" className="text-slate-400 hover:text-brand-green transition-colors"><BookOpen size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<MemberDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
