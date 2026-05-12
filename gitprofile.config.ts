// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kingviperthesnake', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['tvanlaar/Biehleretal', 'tvanlaar/CHSPMicrobiome'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Ongoing Work',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Aquatic Gartersnake Climatic Refugia and Functional Morphology',
          description:
            'M.S. Thesis. Integrating ecological niche modeling and morphometric analyses to determine patterns in landscape-scale shifts in species ranges, historic refugia, and signals of ecological adaptation left on functional morphology.',
          imageUrl:
            'https://github.com/kingviperthesnake/kingviperthesnake.github.io/raw/main/Screenshot%202026-05-12%20101449.png',
          link: 'https://github.com/kingviperthesnake/kingviperthesnake.github.io/raw/main/Screenshot%202026-05-12%20101449.png',
        },
        {
          title: 'Drivers of Diversification in Rockfishes',
          description:
            'Examined RH1 gene evolution in rockfishes to reveal depth-driven positive selection, haplotype patterns, and convergent adaptation to low-light environments.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Tricia Van Laar',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Benjamin Torres',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'creaturedoctor',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://kingviperthesnake.github.io',
    phone: '',
    email: 'btorres19@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/kingviperthesnake/kingviperthesnake.github.io/raw/main/Curriculum_Vitae_for_Researchers%20(4).pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'R',
    'MEGA',
    'PAST',
    'Excel',
    'Geneious Prime',
    'Galaxy',
  ],
  experiences: [
    {
      company: 'CSUMB Alter Lab',
      position: 'Lead Lab technician',
      from: 'May 2024',
      to: 'August 2025',
      companyLink: 'http://www.fishfiles.org/',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Adaptive convergence and haplotype sharing reveal depth-related evolution of a low-light optimized gene in rockfishes (Sebastes)',
      conferenceName: '',
      journalName: 'Journal of Evolutionary Biology (In Review)',
      authors: 'Benjamin T. Torres, S. Liz Alter',
      link: '',
      description:
        'Investigates molecular evolution of the RH1 (rhodopsin) gene across 33 rockfish species to understand how depth-related light environments shape adaptation. Our study identifies stronger positive selection and distinct haplotype patterns in deep-water species, alongside widespread haplotype sharing in shallow taxa, providing evidence for convergent evolution and fine-scale genetic tuning for dim-light vision.',
    },
    {
      title: 'A review of phylogenetic relationships in Lampropeltis: is population structure sufficient for delimiting diverse clades? (Serpentes: Colubridae)',
      conferenceName: '',
      journalName: 'Evolutionary Systematics (In Preparation',
      authors: 'Benjamin T. Torres, Sean McFarlan, Austin Yu, Alok Arun',
      link: '',
      description:
        'Reviews phylogenetic relationships in Lampropeltis, arguing that population structure alone is insufficient for species delimitation. Highlights how gene flow, incomplete lineage sorting, and ecological divergence create discordant patterns, making species boundaries difficult to infer. We suggest that robust, model-based approaches incorporating coalescent history and gene flow are necessary to distinguish true evolutionary lineages from geographic variation.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
