export interface Member {
  id: string;
  name: string;
  nameEn?: string;
  role: 'Faculty' | 'Postdoc' | 'PhD Student' | 'Master Student' | 'Alumni';
  cohort?: string;
  cohortEn?: string;
  title?: string;
  titleEn?: string;
  honors?: string[];
  honorsEn?: string[];
  image: string;
  description: string;
  descriptionEn?: string;
  fullBio?: string;
  fullBioEn?: string;
  education?: string[];
  educationEn?: string[];
  researchInterests?: string[];
  researchInterestsEn?: string[];
  projects?: string[];
  projectsEn?: string[];
  courses?: string[];
  coursesEn?: string[];
  admissions?: string[];
  admissionsEn?: string[];
  selectedPublications?: string[];
  email?: string;
  website?: string;
}

export interface Publication {
  id: string;
  title: string;
  titleEn?: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  link?: string;
  type: 'Journal' | 'Book' | 'Conference';
}

export interface ResearchArea {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  titleEn?: string;
  date: string;
  category: '论文发表' | '学术会议' | '获奖荣誉' | '项目动态' | '其他';
  summary: string;
  summaryEn?: string;
  content: string;
  contentEn?: string;
  image?: string;
}

export interface LifeEvent {
  id: string;
  title: string;
  titleEn?: string;
  date: string;
  category: '聚餐' | '野外考察' | '团建活动' | '学术会议' | '日常' | '节日庆祝';
  description: string;
  descriptionEn?: string;
  coverImage: string;
  images: string[];
}
