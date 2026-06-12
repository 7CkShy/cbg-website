import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'zh' | 'en';

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'zh',
  toggleLang: () => {},
  t: (key: string) => key,
});

export function useI18n() {
  return useContext(I18nContext);
}

const translations: Record<Lang, Record<string, string>> = {
  zh: {
    // Navbar
    'nav.home': '首页',
    'nav.research': '研究方向',
    'nav.publications': '发表成果',
    'nav.team': '团队成员',
    'nav.life': '课题组生活',
    'nav.contact': '联系我们',
    // Home
    'home.tagline': '探索自然规律 · 守护生物多样性',
    'home.groupName': '保护生物地理研究组',
    'home.groupSubtitle': 'Conservation Biogeography Research Group',
    'home.description': '我们致力于研究生物多样性的空间分布格局及其驱动机制，利用多学科手段为全球变化背景下的生物多样性保护提供科学依据。',
    'home.ctaResearch': '了解我们的研究',
    'home.ctaPublications': '查看发表成果',
    'home.latestResearch': 'Latest Research',
    'home.recentPubs': '近期发表成果',
    'home.viewAllPubs': '查看全部发表成果',
    // Research
    'research.title': '核心研究方向',
    'research.subtitle': 'Research Focus',
    'research.description': '我们结合野外考察、遥感监测和生态模型，在多个尺度上探讨生物地理学与保护生物学的交叉课题。',
    // Publications
    'publications.subtitle': 'Our Impact',
    'publications.title': '发表成果',
    // Team
    'team.subtitle': 'The Team',
    'team.title': '团队成员',
    'team.faculty': '指导教师',
    'team.postdoc': '博士后',
    'team.phd': '博士研究生',
    'team.master': '硕士研究生',
    'team.viewDetail': '查看详情',
    'team.backToList': '返回团队列表',
    // Team detail
    'team.bio': '个人简介',
    'team.education': '教育背景',
    'team.interests': '研究兴趣',
    'team.website': '个人主页',
    // Lab Life
    'life.subtitle': 'Lab Life',
    'life.title': '课题组生活',
    'life.description': '科研之余，我们也是一个温暖的大家庭。这里记录了我们一起走过的美好时光。',
    'life.photos': '张照片',
    'life.viewDetail': '查看详情',
    'life.backToList': '返回课题组生活',
    'life.notFound': '未找到该活动',
    'life.backToLife': '返回课题组生活',
    'life.eventPhotos': '活动照片',
    'life.warmMessage': '课题组就是一个大家庭。我们不仅在学术上互相支持，也在生活中彼此陪伴。期待更多志同道合的朋友加入我们！',
    // Contact
    'contact.subtitle': 'Get in Touch',
    'contact.title': '联系我们',
    'contact.address': '实验室地址',
    'contact.email': '电子邮箱',
    'contact.addressText': '云南大学国际河流与生态安全研究院\n国际河流与生态安全研究院 1212室\n中国 · 昆明',
    'contact.locationTitle': 'University Location',
    'contact.locationDesc': '欢迎访问我们的实验室进行学术交流',
    // Footer
    'footer.rights': '© {year} Conservation Biogeography Group. All rights reserved.',
    // Misc
    'lang.switch': 'English',
    'github.link': 'GitHub',
    'member.notFound': '未找到该成员信息',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.team': 'Team',
    'nav.life': 'Lab Life',
    'nav.contact': 'Contact',
    // Home
    'home.tagline': 'Explore Nature · Conserve Biodiversity',
    'home.groupName': 'Conservation Biogeography Group',
    'home.groupSubtitle': 'Yunnan University',
    'home.description': 'We study the spatial distribution patterns of biodiversity and their driving mechanisms, using multidisciplinary approaches to provide scientific evidence for biodiversity conservation under global change.',
    'home.ctaResearch': 'Explore Our Research',
    'home.ctaPublications': 'View Publications',
    'home.latestResearch': 'Latest Research',
    'home.recentPubs': 'Recent Publications',
    'home.viewAllPubs': 'View All Publications',
    // Research
    'research.title': 'Core Research Areas',
    'research.subtitle': 'Research Focus',
    'research.description': 'We integrate field surveys, remote sensing, and ecological modeling to explore interdisciplinary topics at the intersection of biogeography and conservation biology across multiple scales.',
    // Publications
    'publications.subtitle': 'Our Impact',
    'publications.title': 'Publications',
    // Team
    'team.subtitle': 'The Team',
    'team.title': 'Team Members',
    'team.faculty': 'Faculty',
    'team.postdoc': 'Postdoctoral Researcher',
    'team.phd': 'PhD Students',
    'team.master': 'Master Students',
    'team.viewDetail': 'View Profile',
    'team.backToList': 'Back to Team',
    // Team detail
    'team.bio': 'Biography',
    'team.education': 'Education',
    'team.interests': 'Research Interests',
    'team.website': 'Personal Website',
    // Lab Life
    'life.subtitle': 'Lab Life',
    'life.title': 'Lab Life',
    'life.description': 'Beyond research, we are a warm family. Here we record the wonderful moments we share together.',
    'life.photos': 'photos',
    'life.viewDetail': 'View Details',
    'life.backToList': 'Back to Lab Life',
    'life.notFound': 'Event not found',
    'life.backToLife': 'Back to Lab Life',
    'life.eventPhotos': 'Event Photos',
    'life.warmMessage': 'Our lab is one big family. We support each other not only in academics but also in life. We look forward to welcoming more like-minded friends to join us!',
    // Contact
    'contact.subtitle': 'Get in Touch',
    'contact.title': 'Contact Us',
    'contact.address': 'Lab Address',
    'contact.email': 'Email',
    'contact.addressText': 'Institute of International Rivers and Eco-Security\nRoom 1212, Yunnan University\nKunming, China',
    'contact.locationTitle': 'University Location',
    'contact.locationDesc': 'Welcome to visit our lab for academic exchanges',
    // Footer
    'footer.rights': '© {year} Conservation Biogeography Group. All rights reserved.',
    // Misc
    'lang.switch': '中文',
    'github.link': 'GitHub',
    'member.notFound': 'Member not found',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh');

  const toggleLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
