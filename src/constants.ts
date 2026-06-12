import { Member, Publication, ResearchArea, LifeEvent } from './types';

export const TEAM_MEMBERS: Member[] = [
  {
    id: '1',
    name: '武瑞东 (研究员)',
    nameEn: 'Ruidong Wu (Professor)',
    role: 'Faculty',
    image: 'https://picsum.photos/seed/faculty1/400/400',
    description: '主要研究方向为全球变化下的生物多样性保护与生物地理学。',
    descriptionEn: 'Research focuses on biodiversity conservation and biogeography under global change.',
    fullBio: '武瑞东，博士，研究员，博士生导师。主要从事保护生物地理学方向的科研与教学工作，系统开展了关键生态保护对象空间分布格局与形成机制、生态保护成效评估和保护优先区网络系统规划等方面的研究。先后主持国家自然科学基金项目（4项）、国家重点研发计划项目/专题、云南省基础研究专项重大项目/课题等科研项目。系统性研究成果，发表于Nature Communications, Global Change Biology,Frontiers in Ecology & the Environment,Communications Earth & Environment, Conservation Letters，Conservation Biology，Biological Conservation等国际权威期刊。研究成果为《中国生物多样性保护战略与行动计划（2011-2030）》、云南省"以国家公园为主体的自然保护地体系建设"、云南省生态产品价值核算、《四川省生物多样性保护战略与行动计划》、阿拉善"一亿棵梭梭"造林项目区规划等实践工作提供了科学支撑。',
    fullBioEn: 'Prof. Ruidong Wu is a researcher and doctoral supervisor at the Institute of International Rivers and Eco-Security, Yunnan University. His research focuses on conservation biogeography, systematically addressing the spatial distribution patterns and formation mechanisms of key conservation targets, evaluating ecological conservation effectiveness, and planning conservation priority area networks. He has led multiple research projects funded by the National Natural Science Foundation of China, the National Key R&D Program, and the Yunnan Provincial Basic Research Program. His research has been published in leading international journals including Nature Communications, Global Change Biology, Frontiers in Ecology & the Environment, Communications Earth & Environment, Conservation Letters, Conservation Biology, and Biological Conservation. His work has provided scientific support for China\'s Biodiversity Conservation Strategy and Action Plan, Yunnan\'s protected area system planning, and other conservation initiatives.',
    education: [
      '博士, 生态学, 某某大学, 2005',
      '硕士, 植物学, 某某大学, 2002',
      '学士, 测绘工程, 某某大学, 1999'
    ],
    educationEn: [
      'PhD, Ecology, 2005',
      'MS, Botany, 2002',
      'BS, Surveying Engineering, 1999'
    ],
    researchInterests: ['全球变化生物学', '空间生态学', '保护规划'],
    researchInterestsEn: ['Global Change Biology', 'Spatial Ecology', 'Conservation Planning'],
    email: 'rdwu@ynu.edu.cn',
  },
  {
    id: '2',
    name: '刘鑫 (Dr. Liu)',
    nameEn: 'Dr. Xin Liu',
    role: 'Postdoc',
    image: 'https://picsum.photos/seed/postdoc1/400/400',
    description: '专注于高山植物的分布格局及其对气候变化的响应。',
    descriptionEn: 'Focuses on alpine plant distribution patterns and their responses to climate change.',
    fullBio: '刘鑫博士于2023年加入研究组。他的研究重点是全球维管植物的分布和全球生物多样性热点区域。',
    fullBioEn: 'Dr. Xin Liu joined the group in 2023. His research focuses on the global distribution of vascular plants and global biodiversity hotspots.',
    education: [
      '博士，生态学, 云南大学, 2026',
      '硕士, 资源与环境, 云南大学, 2023',
      '学士, 水资源工程, 西安理工大学, 2018'
    ],
    educationEn: [
      'PhD, Ecology, Yunnan University, 2026',
      'MS, Resources and Environment, Yunnan University, 2023',
      'BS, Water Resources Engineering, Xi\'an University of Technology, 2018'
    ],
    researchInterests: ['全球变化生物学', '物种分布建模'],
    researchInterestsEn: ['Global Change Biology', 'Species Distribution Modeling'],
  },
  {
    id: '3',
    name: '罗金怡',
    nameEn: 'Jinyi Luo',
    role: 'PhD Student',
    image: 'https://picsum.photos/seed/student1/400/400',
    description: '研究岛屿生物地理学中的物种演化。',
    descriptionEn: 'Studies species evolution in island biogeography.',
    fullBio: '罗金怡同学目前正在攻读博士学位，主要研究全球生物多样性与环境异质性之间的响应关系。',
    fullBioEn: 'Jinyi Luo is currently pursuing her PhD, primarily studying the relationship between global biodiversity and environmental heterogeneity.',
    education: ['学士, 生物科学, 某某大学, 2021'],
    educationEn: ['BS, Biological Science, 2021'],
    researchInterests: ['岛屿生物地理学', '分子进化'],
    researchInterestsEn: ['Island Biogeography', 'Molecular Evolution'],
  },
  {
    id: '4',
    name: '蔡凯',
    nameEn: 'Kai Cai',
    role: 'Master Student',
    image: '/image/team/ck.jpg',
    description: '利用GIS技术分析自然保护区的有效性。',
    descriptionEn: 'Uses GIS technology to analyze the effectiveness of nature reserves.',
    fullBio: '蔡凯同学的研究兴趣在于探究全球孑遗物种与气候变化的响应关系，以及生物避难所的识别与保护。',
    fullBioEn: 'Kai Cai\'s research interests focus on exploring the response relationships between global relict species and climate change, as well as the identification and conservation of biological refugia.',
    education: ['学士, 地理信息系统, 陕西师范大学, 2025'],
    educationEn: ['BS, Geographic Information Systems, Shaanxi Normal University, 2025'],
    researchInterests: ['GIS应用', '统计分析', '遥感数据处理'],
    researchInterestsEn: ['GIS Applications', 'Statistical Analysis', 'Remote Sensing Data Processing'],
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Global patterns of biodiversity conservation in the Anthropocene',
    titleEn: 'Global patterns of biodiversity conservation in the Anthropocene',
    authors: 'Zhang, X., Li, Y., et al.',
    journal: 'Nature Conservation',
    year: 2024,
    doi: '10.1038/s41559-024-0001-x',
    type: 'Journal',
  },
  {
    id: 'p2',
    title: 'Climate change impacts on alpine plant distributions in Southwest China',
    titleEn: 'Climate change impacts on alpine plant distributions in Southwest China',
    authors: 'Li, Y., Zhang, X.',
    journal: 'Journal of Biogeography',
    year: 2023,
    doi: '10.1111/jbi.12345',
    type: 'Journal',
  },
  {
    id: 'p3',
    title: 'Conservation Biogeography: Principles and Practices',
    titleEn: 'Conservation Biogeography: Principles and Practices',
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
    titleEn: 'Biodiversity Patterns',
    description: '研究物种在空间和时间上的分布规律及其驱动机制。',
    descriptionEn: 'Studying the spatial and temporal distribution patterns of species and their driving mechanisms.',
    icon: 'Globe',
  },
  {
    id: 'r2',
    title: '气候变化响应',
    titleEn: 'Climate Change Responses',
    description: '评估气候变化对生态系统和物种分布的影响及适应策略。',
    descriptionEn: 'Assessing the impacts of climate change on ecosystems and species distributions, and developing adaptation strategies.',
    icon: 'Thermometer',
  },
  {
    id: 'r3',
    title: '保护规划',
    titleEn: 'Conservation Planning',
    description: '利用空间分析技术制定科学的自然保护区规划和管理方案。',
    descriptionEn: 'Using spatial analysis techniques to develop scientific conservation area planning and management solutions.',
    icon: 'Map',
  }
];

export const LIFE_EVENTS: LifeEvent[] = [
  {
    id: 'l1',
    title: '2025年课题组新年聚餐',
    titleEn: '2025 New Year Group Dinner',
    date: '2025-01-15',
    category: '聚餐',
    description: '新年伊始，课题组全体成员齐聚一堂，在昆明市区的一家云南特色餐厅举行了新年聚餐。武瑞东老师总结了过去一年的科研成果，并对新一年的研究工作提出了期望。席间大家畅谈学术与生活，气氛热烈而温馨。',
    descriptionEn: 'To celebrate the New Year, all group members gathered at a Yunnan specialty restaurant in downtown Kunming for a festive dinner. Prof. Wu summarized the past year\'s research achievements and set expectations for the upcoming year. Everyone enjoyed lively discussions about both academic and personal life in a warm and joyful atmosphere.',
    coverImage: 'https://picsum.photos/seed/lab-dinner1/800/600',
    images: [
      'https://picsum.photos/seed/lab-dinner1/800/600',
      'https://picsum.photos/seed/lab-dinner2/800/600',
      'https://picsum.photos/seed/lab-dinner3/800/600',
    ],
  },
  {
    id: 'l2',
    title: '大理苍山野外考察',
    titleEn: 'Field Expedition to Cangshan Mountain, Dali',
    date: '2024-08-20',
    category: '野外考察',
    description: '课题组前往大理苍山进行了为期一周的野外考察，采集高山植物标本并记录植被分布数据。虽然山路崎岖，但大家互相帮助，圆满完成了考察任务。山间的清风与壮丽的景色让每一位成员都感受到了野外科研工作的独特魅力。',
    descriptionEn: 'The group conducted a week-long field expedition to Cangshan Mountain in Dali, collecting alpine plant specimens and recording vegetation distribution data. Despite the rugged terrain, everyone helped each other and successfully completed the mission. The mountain breeze and magnificent scenery reminded each member of the unique charm of field research.',
    coverImage: 'https://picsum.photos/seed/fieldwork1/800/600',
    images: [
      'https://picsum.photos/seed/fieldwork1/800/600',
      'https://picsum.photos/seed/fieldwork2/800/600',
      'https://picsum.photos/seed/fieldwork3/800/600',
      'https://picsum.photos/seed/fieldwork4/800/600',
    ],
  },
  {
    id: 'l3',
    title: '课题组春季团建——西山徒步',
    titleEn: 'Spring Team Building — Xishan Mountain Hike',
    date: '2024-04-10',
    category: '团建活动',
    description: '春光明媚的四月，课题组组织了一次西山徒步团建活动。从山脚到龙门，大家一边攀登一边交流，既锻炼了身体也增进了感情。登顶后俯瞰滇池全景，所有人都被眼前的美景所震撼。',
    descriptionEn: 'In the beautiful April spring, the group organized a hiking team-building activity at Xishan Mountain. From the foot to Longmen, everyone climbed while chatting, exercising both body and friendship. At the summit, the panoramic view of Dianchi Lake left everyone in awe.',
    coverImage: 'https://picsum.photos/seed/hiking1/800/600',
    images: [
      'https://picsum.photos/seed/hiking1/800/600',
      'https://picsum.photos/seed/hiking2/800/600',
      'https://picsum.photos/seed/hiking3/800/600',
    ],
  },
  {
    id: 'l4',
    title: '参加2024年国际生物地理学大会',
    titleEn: '2024 International Biogeography Conference',
    date: '2024-07-05',
    category: '学术会议',
    description: '课题组成员赴北京参加了2024年国际生物地理学大会。武瑞东老师做了题为"全球变化背景下的生物多样性保护优先区规划"的大会报告，多位研究生也以海报形式展示了自己的研究成果。会后大家还一起游览了长城和故宫。',
    descriptionEn: 'Group members traveled to Beijing for the 2024 International Biogeography Conference. Prof. Wu delivered a keynote presentation on "Conservation Priority Area Planning Under Global Change," and several graduate students presented their research as posters. After the conference, the group visited the Great Wall and the Forbidden City together.',
    coverImage: 'https://picsum.photos/seed/conference1/800/600',
    images: [
      'https://picsum.photos/seed/conference1/800/600',
      'https://picsum.photos/seed/conference2/800/600',
      'https://picsum.photos/seed/conference3/800/600',
      'https://picsum.photos/seed/conference4/800/600',
    ],
  },
  {
    id: 'l5',
    title: '中秋节月饼DIY活动',
    titleEn: 'Mid-Autumn Festival Mooncake DIY',
    date: '2024-09-17',
    category: '节日庆祝',
    description: '中秋佳节，课题组在实验室举办了一场别开生面的月饼DIY活动。大家亲手制作了各种口味的月饼，从和面到压模，每个人都乐在其中。虽然有些月饼形状不太完美，但满满的都是心意。活动结束后大家一边品尝劳动成果一边赏月，思乡之情在温暖的集体氛围中得到了慰藉。',
    descriptionEn: 'During the Mid-Autumn Festival, the group held a unique mooncake DIY event in the lab. Everyone made mooncakes of various flavors by hand — from kneading dough to pressing molds, each person enjoyed the process. Although some mooncakes weren\'t perfectly shaped, they were filled with heart. After the activity, everyone tasted their creations while admiring the moon, finding comfort in the warm group atmosphere.',
    coverImage: 'https://picsum.photos/seed/mooncake1/800/600',
    images: [
      'https://picsum.photos/seed/mooncake1/800/600',
      'https://picsum.photos/seed/mooncake2/800/600',
      'https://picsum.photos/seed/mooncake3/800/600',
    ],
  },
  {
    id: 'l6',
    title: '实验室日常——午间学术讨论',
    titleEn: 'Lab Daily Life — Lunchtime Academic Discussion',
    date: '2024-11-28',
    category: '日常',
    description: '每周四的午间学术讨论是课题组雷打不动的传统。大家围坐在一起，分享最新的文献阅读心得或者研究进展。轻松的氛围中，往往能碰撞出意想不到的灵感火花。这天轮到王同学分享他关于岛屿生物地理学的最新发现，引发了大家热烈的讨论。',
    descriptionEn: 'The Thursday lunchtime academic discussion is an unshakeable tradition of the group. Everyone gathers to share the latest literature insights or research progress. In the relaxed atmosphere, unexpected sparks of inspiration often emerge. On this day, it was Wang\'s turn to share his latest findings on island biogeography, sparking a lively discussion.',
    coverImage: 'https://picsum.photos/seed/seminar1/800/600',
    images: [
      'https://picsum.photos/seed/seminar1/800/600',
      'https://picsum.photos/seed/seminar2/800/600',
    ],
  },
];
