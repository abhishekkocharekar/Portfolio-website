// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'shrutika-Patil1', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['shrutika-Patil1/gitprofile'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Dashboards',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'B2B Dashboard',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl: 'b2b',
          link: 'https://drive.google.com/file/d/1rzzmWaetk5kwNUc3L04OHAQJZ2fgiO2b/view',
        },
        {
          title: 'B2B Sales Dashboard',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl: 'b2bsales',
          link: 'https://drive.google.com/file/d/1Ndwjoi6aUxFTWxX-cEf3cD4IsRkjFO8p/view',
        },
        {
          title: 'Just In Time',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl: 'justintime',
          link: 'https://drive.google.com/file/d/1A0bB1T9GDN7v4q_MN9KKOLJASfRmz5Ss/view',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Shrutika Patil',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'shrutika--patil',
    website: 'https://main--shrutikapatil.netlify.app/',
    email: 'arifulalamszn@gmail.com',
    github: 'https://github.com/shrutika-Patil1',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'MySQL',
    'PostGreSQL',
    'MongoDB',
    'Power BI',
    'Tableau',
    'RapidMiner',
    'Excel',
    'pySpark',
    'Hadoop',
    'AWS',
    'Redshift',
    'Git',
    'Github',
  ],
  experiences: [
    {
      company: 'KeeperAI',
      position: 'Data Science Intern',
      from: 'Nov 2023',
      to: 'Jan 2024',
      companyLink: 'https://keeperai.com/',
    },
    {
      company: 'BI Academy',
      position: 'Power BI Developer',
      from: 'July 2021',
      to: 'June 2022',
      companyLink: 'https://thebiacademy.com/',
    },
    {
      company: 'Dalvik Apps',
      position: 'Data Science Developer',
      from: 'March 2021',
      to: 'June 2022',
      companyLink: 'https://www.dalvikapps.com/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'PACE University',
      degree: 'Masters in MIS',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'BR Harne College of Engineering',
      degree: "Bachelor's in Computer Engineering",
      from: '2019',
      to: '2022',
    },
    {
      institution: 'D.Y. Patil Polytechnic',
      degree: 'Diploma in Information Technology',
      from: '2016',
      to: '2019',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
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
    themes: ['light', 'dark'],

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
      class="text-primary" href="https://github.com/shrutika-Patil1/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
