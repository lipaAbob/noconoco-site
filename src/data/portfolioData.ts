export type Lang = 'en' | 'es';

export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  caption: {
    en: string;
    es: string;
  };
}

export interface ProjectItem {
  id: string;
  tag: {
    en: string;
    es: string;
  };
  title: string;
  description: {
    en: string;
    es: string;
  };
  coverSrc: string;
  coverFit?: 'cover' | 'contain';
  coverFocal?: 'object-top' | 'object-center';
  actionType: 'lightbox' | 'external' | 'video';
  externalUrl?: string;
  media?: MediaItem[];
}

export interface DrawerItem {
  number: string;
  title: {
    en: string;
    es: string;
  };
  summary: {
    en: string;
    es: string;
  };
  projects: ProjectItem[];
}

export const BRAND_LOGOS = [
  { name: 'Kenneth Cole', src: '/assets/logos/kenneth-colelogo.png', height: 26 },
  { name: 'IBM', src: '/assets/logos/ibmlogo.png', height: 34 },
  { name: 'Clinique', src: '/assets/logos/cliniquelogo.png', height: 30 },
  { name: 'Durex', src: '/assets/logos/durexlogo.png', height: 34 },
  { name: 'Clínica Cénit', src: '/assets/logos/cenitlogo.png', height: 26 },
  { name: 'EventMatch AI', src: '/assets/logos/eventmatchlogo.png', height: 34 },
  { name: 'ExtraCity', src: '/assets/logos/extracitylogo.png', height: 34 },
  { name: 'GoldPass', src: '/assets/logos/goldpasslogo2.png', height: 36 },
  { name: 'MyMode', src: '/assets/logos/mymodelogo.png', height: 36 },
  { name: 'Prada', src: '/assets/logos/pradalogo.png', height: 28 },
  { name: 'Triumph', src: '/assets/logos/triumphlogo.png', height: 30 },
];

export const DRAWERS: DrawerItem[] = [
  {
    number: '01',
    title: {
      en: 'Brand Strategy & Identity',
      es: 'Estrategia e Identidad de Marca',
    },
    summary: {
      en: 'We define what makes your business one of a kind, building holistic strategy and clear narratives that move it forward.',
      es: 'Definimos lo que hace único a tu negocio, construyendo una estrategia integral y narrativas claras que lo impulsan hacia adelante.',
    },
    projects: [
      {
        id: 'cenit',
        tag: {
          en: 'HEALTHCARE POSITIONING & PATIENT JOURNEY',
          es: 'POSICIONAMIENTO CLÍNICO Y RECORRIDO DE PACIENTE',
        },
        title: 'Clínica Cénit',
        description: {
          en: 'End-to-end brand architecture, diagnostic user flow, and search visibility for a specialized rehabilitation and active longevity clinic.',
          es: 'Arquitectura de marca integral, flujo de valoración diagnóstica y visibilidad en buscadores para una clínica especializada en rehabilitación y longevidad activa.',
        },
        coverSrc: '/assets/images/cenit1.png',
        coverFit: 'cover',
        coverFocal: 'object-top',
        actionType: 'lightbox',
        media: [
          {
            type: 'image',
            src: '/assets/images/cenit1.png',
            caption: {
              en: 'Clínica Cénit — 360° Clinical & Diagnostic Experience',
              es: 'Clínica Cénit — Experiencia Clínica y Diagnóstica 360°',
            },
          },
          {
            type: 'image',
            src: '/assets/images/cenit2.png',
            caption: {
              en: 'Clínica Cénit — Pain Relief to Active Longevity Pathway',
              es: 'Clínica Cénit — Ruta del Alivio del Dolor a la Longevidad Activa',
            },
          },
          {
            type: 'image',
            src: '/assets/images/cenit3.png',
            caption: {
              en: 'Clínica Cénit — Patient Journey & Decision Architecture',
              es: 'Clínica Cénit — Arquitectura de Decisión y Recorrido del Paciente',
            },
          },
          {
            type: 'image',
            src: '/assets/images/cenit4.png',
            caption: {
              en: 'Clínica Cénit — Interactive Triage & Digital Front Door',
              es: 'Clínica Cénit — Triaje Interactivo y Puerta de Entrada Digital',
            },
          },
        ],
      },
      {
        id: 'ibm',
        tag: {
          en: 'ENTERPRISE INNOVATION & EXECUTIVE EXPERIENCE',
          es: 'INNOVACIÓN CORPORATIVA Y EXPERIENCIA EJECUTIVA',
        },
        title: 'IBM',
        description: {
          en: 'Strategic narrative, spatial storytelling, and executive briefing environments designed to translate enterprise technology into tangible business outcomes.',
          es: 'Narrativa estratégica, storytelling espacial y entornos ejecutivos diseñados para traducir tecnología empresarial en resultados tangibles de negocio.',
        },
        coverSrc: '/assets/images/ibm1.jpg',
        coverFit: 'cover',
        coverFocal: 'object-center',
        actionType: 'lightbox',
        media: [
          {
            type: 'image',
            src: '/assets/images/ibm1.jpg',
            caption: { en: 'IBM — Executive Innovation Environment (01/06)', es: 'IBM — Entorno Ejecutivo de Innovación (01/06)' },
          },
          {
            type: 'image',
            src: '/assets/images/ibm2.jpg',
            caption: { en: 'IBM — Strategic Brand Storytelling (02/06)', es: 'IBM — Narrativa Estratégica de Marca (02/06)' },
          },
          {
            type: 'image',
            src: '/assets/images/ibm3.jpg',
            caption: { en: 'IBM — Client Experience Architecture (03/06)', es: 'IBM — Arquitectura de Experiencia de Cliente (03/06)' },
          },
          {
            type: 'image',
            src: '/assets/images/ibm4.jpg',
            caption: { en: 'IBM — Interactive Solution Showcase (04/06)', es: 'IBM — Exhibición Interactiva de Soluciones (04/06)' },
          },
          {
            type: 'image',
            src: '/assets/images/ibm5.jpg',
            caption: { en: 'IBM — Spatial Identity & Wayfinding (05/06)', es: 'IBM — Identidad Espacial y Señalética (05/06)' },
          },
          {
            type: 'image',
            src: '/assets/images/ibm6.jpg',
            caption: { en: 'IBM — Executive Briefing Center Madrid (06/06)', es: 'IBM — Centro Ejecutivo de Innovación Madrid (06/06)' },
          },
        ],
      },
    ],
  },
  {
    number: '02',
    title: {
      en: 'STRATEGY · SOLUTIONS · RESULTS',
      es: 'Desarrollo y Soluciones de Producto con IA',
    },
    summary: {
      en: 'We turn early concepts into intuitive, AI-powered digital products built for real-world adoption.',
      es: 'Transformamos ideas iniciales en productos digitales intuitivos, impulsados por IA y diseñados para su adopción real.',
    },
    projects: [
      {
        id: 'extracity',
        tag: {
          en: 'AI TRAVEL DISCOVERY PLATFORM',
          es: 'PLATAFORMA DE DESCUBRIMIENTO DE VIAJES CON IA',
        },
        title: 'ExtraCity',
        description: {
          en: 'Smart stopover and multi-destination flight engine turning layovers into curated second vacations with a single search.',
          es: 'Motor inteligente de escalas y múltiples destinos que convierte cada conexión aérea en una segunda escapada con una sola búsqueda.',
        },
        coverSrc: '/assets/images/extracity1.png',
        coverFit: 'cover',
        coverFocal: 'object-top',
        actionType: 'external',
        externalUrl: 'https://extracity.lovable.app/',
      },
      {
        id: 'eventmatch',
        tag: {
          en: 'B2B INTELLIGENCE & EVENT MATCHING',
          es: 'INTELIGENCIA B2B Y MATCHING DE EVENTOS',
        },
        title: 'EventMatch AI',
        description: {
          en: 'AI positioning analyzer that evaluates any company domain and recommends the highest-ROI conferences and industry events.',
          es: 'Analizador de posicionamiento con IA que evalúa cualquier empresa y recomienda los congresos y ferias sectoriales con mayor retorno.',
        },
        coverSrc: '/assets/images/eventmatch1.png',
        coverFit: 'cover',
        coverFocal: 'object-top',
        actionType: 'external',
        externalUrl: 'https://eventmatch-ai-henna.vercel.app/',
      },
    ],
  },
  {
    number: '03',
    title: {
      en: 'Customer Experience & Revenue Growth',
      es: 'Experiencia de Cliente y Crecimiento Comercial',
    },
    summary: {
      en: 'We design seamless journeys that connect digital engagement with measurable loyalty and sales.',
      es: 'Diseñamos recorridos fluidos que conectan la interacción digital con la fidelización y el aumento real de ventas.',
    },
    projects: [
     {
        id: 'goldpass',
        tag: {
          en: 'LOCAL LOYALTY & RETAIL FOOTFALL ENGINE',
          es: 'FIDELIZACIÓN LOCAL Y TRÁFICO EN PUNTO DE VENTA',
        },
        title: 'GoldPass',
        description: {
          en: 'Digital membership ecosystem connecting neighborhood businesses with high-intent local consumers through instant mobile rewards.',
          es: 'Ecosistema digital de membresía que conecta comercios locales con consumidores cercanos mediante recompensas móviles instantáneas.',
        },
        coverSrc: '/assets/logos/goldpasslogo1.png',
        coverFit: 'contain',
        coverFocal: 'object-center',
        actionType: 'video',
        media: [
          {
            type: 'video',
            src: 'https://www.youtube.com/embed/qgYZDFw35mc?autoplay=1&rel=0',
            caption: {
              en: 'GoldPass — Product Trailer & Local Ecosystem Overview',
              es: 'GoldPass — Tráiler de Producto y Ecosistema Local',
            },
          },
        ],
      },
      {
        id: 'mymode',
        tag: {
          en: 'CONTEXTUAL MOBILE ENGAGEMENT',
          es: 'INTERACCIÓN MÓVIL CONTEXTUAL',
        },
        title: 'MyMode',
        description: {
          en: 'Intent-driven mobile experience matching real-time user mood and proximity with curated local venues and instant redemption.',
          es: 'Experiencia móvil basada en intención que conecta el momento y la ubicación del usuario con comercios cercanos y canje inmediato.',
        },
        coverSrc: '/assets/logos/mymodelogo2.png',
        coverFit: 'contain',
        coverFocal: 'object-center',
        actionType: 'lightbox',
        media: [
          {
            type: 'image',
            src: '/assets/images/mymodelogo.jpg',
            caption: {
              en: 'MyMode — 3-Step Contextual User Journey & Redemption Flow',
              es: 'MyMode — Flujo Contextual de 3 Pasos y Canje en Tienda',
            },
          },
        ],
      },
    ],
  },
  {
    number: '04',
    title: {
      en: 'Creative Direction & Omnichannel Campaigns',
      es: 'Dirección Creativa y Campañas Multicanal',
    },
    summary: {
      en: 'We craft bold, cross-platform creative concepts that capture attention and elevate global brands.',
      es: 'Creamos conceptos de alto impacto que captan la atención y elevan grandes marcas en todos los canales.',
    },
    projects: [
      {
        id: 'campaigns',
        tag: {
          en: 'GLOBAL BRAND CAMPAIGNS & VISUAL DIRECTION',
          es: 'CAMPAÑAS GLOBALES Y DIRECCIÓN VISUAL',
        },
        title: 'Brand Campaigns',
        description: {
          en: 'Selected campaign direction and visual storytelling across fashion, beauty, and lifestyle leaders including Prada, Clinique, Triumph, Kenneth Cole, and Durex.',
          es: 'Selección de dirección de campaña y narrativa visual para marcas líderes de moda, belleza y estilo de vida como Prada, Clinique, Triumph, Kenneth Cole y Durex.',
        },
        coverSrc: '/assets/images/f1.jpg',
        coverFit: 'cover',
        coverFocal: 'object-top',
        actionType: 'lightbox',
        media: Array.from({ length: 10 }, (_, idx) => ({
          type: 'image' as const,
          src: `/assets/images/f${idx + 1}.jpg`,
          caption: {
            en: `Global Brand Campaign Archive (${String(idx + 1).padStart(2, '0')} / 10)`,
            es: `Archivo de Campañas Globales (${String(idx + 1).padStart(2, '0')} / 10)`,
          },
        })),
      },
      {
        id: 'omnichannel',
        tag: {
          en: 'CROSS-PLATFORM & EDITORIAL ACTIVATIONS',
          es: 'ACTIVACIONES MULTICANAL Y EDITORIALES',
        },
        title: 'Omnichannel Activations',
        description: {
          en: 'Integrated print, editorial, and experiential activations built to create cohesive brand impact across physical and digital touchpoints.',
          es: 'Activaciones integradas en prensa, editorial y punto de contacto físico diseñadas para generar un impacto de marca coherente.',
        },
        coverSrc: '/assets/images/cross1.jpg',
        coverFit: 'cover',
        coverFocal: 'object-top',
        actionType: 'lightbox',
        media: [
          {
            type: 'image',
            src: '/assets/images/cross1.jpg',
            caption: { en: 'Omnichannel Activation — Cross-Platform Concept (01/07)', es: 'Activación Multicanal — Concepto Cross-Platform (01/07)' },
          },
          {
            type: 'image',
            src: '/assets/images/cross2.jpg',
            caption: { en: 'Omnichannel Activation — Integrated Rollout (02/07)', es: 'Activación Multicanal — Despliegue Integrado (02/07)' },
          },
          {
            type: 'image',
            src: '/assets/images/mag1.jpg',
            caption: { en: 'Editorial & Print Direction (03/07)', es: 'Dirección Editorial y Prensa (03/07)' },
          },
          {
            type: 'image',
            src: '/assets/images/mag2.jpg',
            caption: { en: 'Editorial & Print Direction (04/07)', es: 'Dirección Editorial y Prensa (04/07)' },
          },
          {
            type: 'image',
            src: '/assets/images/mag3.jpg',
            caption: { en: 'Editorial & Print Direction (05/07)', es: 'Dirección Editorial y Prensa (05/07)' },
          },
          {
            type: 'image',
            src: '/assets/images/mag4.jpg',
            caption: { en: 'Editorial & Print Direction (06/07)', es: 'Dirección Editorial y Prensa (06/07)' },
          },
          {
            type: 'image',
            src: '/assets/images/mag5.jpg',
            caption: { en: 'Editorial & Print Direction (07/07)', es: 'Dirección Editorial y Prensa (07/07)' },
          },
        ],
      },
    ],
  },
];

export const COPY = {
  en: {
    nav: {
      methodology: 'Methodology',
      capabilities: 'Capabilities',
      experience: 'Experience',
      contact: 'Contact',
      cta: "Let's Talk",
    },
    hero: {
      eyebrow: 'STRATEGY · SOLUTIONS · RESULTS',
      headline: 'Turning complex challenges into clear, measurable results.',
      subheadline:
        'noconoco is a boutique consultancy partnering with ambitious businesses and global brands to build sharp positioning, AI-powered products, and high-impact creative.',
      primaryCta: 'Explore Work',
      secondaryCta: 'Start a Conversation',
    },
    methodology: {
      eyebrow: 'HOW WE WORK',
      title: 'Clarity first. Execution without noise.',
      steps: [
        {
          num: '01',
          title: 'Diagnose & Focus',
          text: 'We strip away assumptions and pinpoint the exact strategic lever that unlocks growth.',
        },
        {
          num: '02',
          title: 'Build & Prototype',
          text: 'From brand systems to functional AI products, we move rapidly from concept to tangible reality.',
        },
        {
          num: '03',
          title: 'Launch & Scale',
          text: 'Every narrative, interface, and campaign is engineered for real-world adoption and commercial traction.',
        },
      ],
    },
    capabilities: {
      eyebrow: 'WHAT WE DO & SELECTED WORK',
      title: 'Capabilities proven in practice.',
      subtitle: 'Select any pillar below to inspect real client executions, digital products, and brand activations.',
      badges: {
        lightbox: 'View Gallery',
        external: 'Open Live Site',
        video: 'Play Video',
      },
    },
    experience: {
      eyebrow: 'SELECTED BRAND EXPERIENCE',
      caption: 'Global icons and category-defining ventures we have shaped and collaborated with.',
    },
    contact: {
      eyebrow: 'NEXT STEP',
      title: 'Have a challenge worth solving?',
      subtitle:
        'Whether launching a new AI product, repositioning an established business, or crafting a standout campaign—let’s build something unmistakable.',
      emailLabel: 'hola@noconoco.es',
      location: 'Madrid · Barcelona · Remote Worldwide',
    },
    footer: {
      rights: '© 2026 noconoco. All rights reserved.',
    },
  },
  es: {
    nav: {
      methodology: 'Metodología',
      capabilities: 'Capacidades',
      experience: 'Experiencia',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      eyebrow: 'ESTRATEGIA · PRODUCTOS IA · DIRECCIÓN CREATIVA',
      headline: 'Convertimos retos complejos en resultados claros y medibles.',
      subheadline:
        'noconoco es una consultora boutique que acompaña a empresas ambiciosas y marcas globales en posicionamiento estratégico, productos impulsados por IA y creatividad de alto impacto.',
      primaryCta: 'Ver Proyectos',
      secondaryCta: 'Iniciar Conversación',
    },
    methodology: {
      eyebrow: 'CÓMO TRABAJAMOS',
      title: 'Claridad primero. Ejecución sin ruido.',
      steps: [
        {
          num: '01',
          title: 'Diagnóstico y Foco',
          text: 'Eliminamos suposiciones e identificamos la palanca estratégica exacta que desbloquea el crecimiento.',
        },
        {
          num: '02',
          title: 'Construcción y Prototipo',
          text: 'Desde sistemas de marca hasta productos funcionales con IA, pasamos rápido del concepto a la realidad.',
        },
        {
          num: '03',
          title: 'Lanzamiento y Tracción',
          text: 'Cada narrativa, interfaz y campaña está diseñada para su adopción real y retorno comercial.',
        },
      ],
    },
    capabilities: {
      eyebrow: 'QUÉ HACEMOS Y TRABAJO SELECCIONADO',
      title: 'Capacidades demostradas en la práctica.',
      subtitle: 'Selecciona cualquier pilar para explorar casos reales, productos digitales y activaciones de marca.',
      badges: {
        lightbox: 'Ver Galería',
        external: 'Visitar Proyecto',
        video: 'Ver Vídeo',
      },
    },
    experience: {
      eyebrow: 'EXPERIENCIA CON MARCAS SELECCIONADAS',
      caption: 'Referentes globales y proyectos innovadores con los que hemos colaborado.',
    },
    contact: {
      eyebrow: 'SIGUIENTE PASO',
      title: '¿Tienes un reto que merece una gran solución?',
      subtitle:
        'Ya sea lanzar un nuevo producto con IA, reposicionar tu negocio o crear una campaña memorable, construyamos algo único.',
      emailLabel: 'hola@noconoco.es',
      location: 'Madrid · Barcelona · Proyectos Internacionales',
    },
    footer: {
      rights: '© 2026 noconoco. Todos los derechos reservados.',
    },
  },
};
