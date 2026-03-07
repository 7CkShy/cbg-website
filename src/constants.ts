import { Member, Publication, ResearchArea } from './types';

export const TEAM_MEMBERS: Member[] = [
  {
    id: '1',
    name: '武瑞东 (研究员)',
    role: 'Faculty',
    image: 'https://picsum.photos/seed/faculty1/400/400',
    description: '主要研究方向为全球变化下的生物多样性保护与生物地理学。',
    fullBio: '武瑞东，博士，研究员，博士生导师。主要从事保护生物地理学方向的科研与教学工作，系统开展了关键生态保护对象空间分布格局与形成机制、生态保护成效评估和保护优先区网络系统规划等方面的研究。先后主持国家自然科学基金项目（4项）、国家重点研发计划项目/专题、云南省基础研究专项重大项目/课题等科研项目。系统性研究成果，发表于Nature Communications, Global Change Biology,Frontiers in Ecology & the Environment,Communications Earth & Environment, Conservation Letters，Conservation Biology，Biological Conservation等国际权威期刊。研究成果为《中国生物多样性保护战略与行动计划（2011-2030）》、云南省“以国家公园为主体的自然保护地体系建设”、云南省生态产品价值核算、《四川省生物多样性保护战略与行动计划》、阿拉善“一亿棵梭梭”造林项目区规划等实践工作提供了科学支撑。',
    education: [
      '博士, 生态学, 某某大学, 2005',
      '硕士, 植物学, 某某大学, 2002',
      '学士, 测绘工程, 某某大学, 1999'
    ],
    researchInterests: ['全球变化生物学', '空间生态学', '保护规划'],
    email: 'rdwu@ynu.edu.cn',
  },
  {
    id: '2',
    name: '李博士 (Dr. Li)',
    role: 'Postdoc',
    image: 'https://picsum.photos/seed/postdoc1/400/400',
    description: '专注于高山植物的分布格局及其对气候变化的响应。',
    fullBio: '李博士于2023年加入研究组。他的研究重点是利用物种分布模型预测高山植物在未来气候情景下的迁移路径。',
    education: [
      '博士, 植物学, 某某大学, 2023',
      '学士, 生态学, 某某大学, 2018'
    ],
    researchInterests: ['高山生态系统', '物种分布建模'],
  },
  {
    id: '3',
    name: '王同学 (Wang)',
    role: 'PhD Student',
    image: 'https://picsum.photos/seed/student1/400/400',
    description: '研究岛屿生物地理学中的物种演化。',
    fullBio: '王同学目前正在攻读博士学位，主要关注岛屿隔离程度对物种形成速率的影响。',
    education: ['学士, 生物科学, 某某大学, 2021'],
    researchInterests: ['岛屿生物地理学', '分子进化'],
  },
  {
    id: '4',
    name: '赵同学 (Zhao)',
    role: 'Master Student',
    image: 'https://picsum.photos/seed/student2/400/400',
    description: '利用GIS技术分析自然保护区的有效性。',
    fullBio: '赵同学的研究兴趣在于评估现有自然保护网络对濒危物种的覆盖程度。',
    education: ['学士, 地理信息系统, 某某大学, 2022'],
    researchInterests: ['GIS应用', '保护区评估'],
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Global patterns of biodiversity conservation in the Anthropocene',
    authors: 'Zhang, X., Li, Y., et al.',
    journal: 'Nature Conservation',
    year: 2024,
    doi: '10.1038/s41559-024-0001-x',
    type: 'Journal',
  },
  {
    id: 'p2',
    title: 'Climate change impacts on alpine plant distributions in Southwest China',
    authors: 'Li, Y., Zhang, X.',
    journal: 'Journal of Biogeography',
    year: 2023,
    doi: '10.1111/jbi.12345',
    type: 'Journal',
  },
  {
    id: 'p3',
    title: 'Conservation Biogeography: Principles and Practices',
    authors: 'Zhang, X. (Ed.)',
    journal: 'Academic Press',
    year: 2022,
    type: 'Book',
  }
];

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'r1',
    title: '生物多样性格局',
    description: '研究物种在空间和时间上的分布规律及其驱动机制。',
    icon: 'Globe',
  },
  {
    id: 'r2',
    title: '气候变化响应',
    description: '评估气候变化对生态系统和物种分布的影响及适应策略。',
    icon: 'Thermometer',
  },
  {
    id: 'r3',
    title: '保护规划',
    description: '利用空间分析技术制定科学的自然保护区规划和管理方案。',
    icon: 'Map',
  }
];
