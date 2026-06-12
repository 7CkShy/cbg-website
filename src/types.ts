export interface Member {
  id: string;
  name: string;
  nameEn?: string;
  role: 'Faculty' | 'Postdoc' | 'PhD Student' | 'Master Student' | 'Alumni';
  image: string;
  description: string;
  descriptionEn?: string;
  fullBio?: string;
  fullBioEn?: string;
  education?: string[];
  educationEn?: string[];
  researchInterests?: string[];
  researchInterestsEn?: string[];
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
