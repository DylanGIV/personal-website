const profile = {
  fullName: 'Genaro Gonzalez',
  description: 'FULL-STACK DEVELOPER',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: './icons/self.jpg',
  about: {
    title: `HEY THERE! 
    I'M GENARO GONZALEZ`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.`,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Bakersfield, California',
        url: '',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'twitter',
        text: '@username',
        url: 'https://twitter.com/username',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'genarogonzaleziv@gmail.com',
        url: 'mailto://genarogonzaleziv@gmail.com',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'lock',
        text: '@kuser',
        url: 'https://keybase.io/kuser',
        hoverColor: '#e9641c'
      }
    ]
  },
  social: [
    {
      iconName: 'linkedIn',
      url: 'https://www.linkedin.com/in/dylan-gonzalez-88bb0a19a/',
      text: "I'm on LinkedIn",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/Dylangiv',
      text: "I'm on Telegram",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/dylangiv',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:genarogonzaleziv@gmail.com',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'Rig Monitor (Worker Service)',
    img: './assets/icons/cog.png',
    description: 'Worker service designed for Crypto miners that records GPU data and saves to a database.',
    categories: ['C#', '.NET Core', 'CUDA', '.NET Core Worker Service'],
    sourceCodeUrl: 'https://github.com/DylanGIV/RigMonitor'
  },
  {
    title: 'Rig Monitor API',
    img: './assets/icons/cloud.png',
    description: 'REST API utilized by the Rig Monitor Desktop Service and Mobile Application for user authentication and database retrieval.',
    categories: ['C#', '.NET Core', 'EF Core', 'REST API'],
    siteUrl: 'https://rig-monitor-api.herokuapp.com/swagger',
    sourceCodeUrl: 'https://github.com/DylanGIV/RigMonitorApi'
  },
  {
    title: 'Rig Monitor (Mobile Application)',
    img: './assets/icons/gpu.png',
    description: 'Mobile application that allows users to view their mining earnings, machines and devices, as well as their data.',
    categories: ['React Native', 'Javascript', 'Mobile App'],
    sourceCodeUrl: 'https://github.com/DylanGIV/RigMonitorApp'
  },
  {
    title: 'Kala',
    img: 'https://play-lh.googleusercontent.com/sHNEJAggDCPWGoWYPTG8IpnXLHrUndgbeyKdB3BAi40YFvKarzKtI4svR_Pb4KT74A=s360-rw',
    description: 'Mobile application built around the user viewing all of their bank accounts from many, and different, banking institutions in one place.',
    categories: ['React Native', 'Javascript', 'Mobile App'],
    sourceCodeUrl: 'https://github.com/DylanGIV/Kala'
  },
  {
    title: 'Kala API',
    img: './assets/icons/cloud.png',
    description: 'REST API utilized by Kala for user authentication and database retrieval.',
    categories: ['C#', '.NET Core', 'EF Core', 'REST API'],
    siteUrl: 'https://kala-app-api.herokuapp.com/swagger',
    sourceCodeUrl: 'https://github.com/DylanGIV/Kala-API'
  },
  {
    title: 'Mobby Resto',
    img: './assets/icons/dish.png',
    description: 'Mobile application that allows for easily viewing of restaurants across the US with options to search, filter, sort, and favorite restaurants.',
    categories: ['React Native', 'Javascript', 'Mobile App'],
    sourceCodeUrl: 'https://github.com/DylanGIV/Mobby_Resto'
  },
  {
    title: 'Mobby Resto API',
    img: './assets/icons/cloud.png',
    description: 'REST API built for Mobby Resto for user authentication and database retrieval.',
    categories: ['C#', '.NET Core', 'EF Core', 'Mobile App'],
    siteUrl: 'https://mobby-resto-api.herokuapp.com/swagger',
    sourceCodeUrl: 'https://github.com/DylanGIV/MobbyRestoAPI'
  },
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
const missingProjectIcon = './assets/no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
