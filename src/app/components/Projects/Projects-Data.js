// all gif links must be in the format below to work properly but are restrunred from redordit as - http://recordit.co/LAdssCIM1f
const ProjectsData = [
  {
    title: 'Symphony',
    description: 'Enterprise software built with Angular2/4/5 leveraging Typescript, RxJS, AgGrid, D3, Material Design, Express Gateway and a plethora of libraries. Created to visualize and troubleshoot a nation-wide network of a vast array of devices from many vendors, an internal ticketing and alert system as well as a portal to allow network engineers to run commands and scripts on customized groups of devices across the country.',
    image: './Project-Images/Symphony.png',
    gifLink:'http://g.recordit.co/9pK6yliaco.gif',
    gitHubRepo: '',
    siteURL: '',
    techUsed: ['Angular 2/4/5 ', 'Javascript ', 'Typescript ', 'RxJS ', 'Material Design ', 'GoJS ', 'D3 ', 'RethinkDB ', 'AgGrid ', 'HTML5 ', 'SASS '],
    icons: {
      git: './Project-Images/github.svg',
      site: './Project-Images/computer.svg',
    },
  },
  {
    title: 'Eco-Symphony',
    description: 'This project was part of an Innovation Day challenge at Charter that I took on with a small team. We used a RaspberryPi 2, as well as a hygrometer, small water pump and led light to create an automated office plant care system. Unfortunately I was not able to get a picture of the system we demo-ed as we had to disassemble for parts for a different small project.',
    image: './Project-Images/EcoSymphony.png',
    gifLink:'./Project-Images/EcoSymphSample.gif',
    gitHubRepo: 'https://github.com/Adamj1232/eco-symphony',
    siteURL: '',
    techUsed: ['Javascript ', 'D3 ', 'PostgresSQL ', 'HTML5 ', 'CSS3 ', 'Raspeberry Pi 2 '],
    icons: {
      git: './Project-Images/github.svg',
      site: './Project-Images/computer.svg',
    },
  },
  {
    title: 'GigWrangler',
    description: 'GigWrangler is a Musician Booking app built with React/Redux and JS ES6, Google Maps API and tested with Enzyme, Mocha & Chai. With a propritary set of data containing over 3200 venues throughout the US, GW uses google maps API to pinpoint and connect musicians and talent agents around the US. Included is venue data on each venue that allows musicians to connect with talent buyers and create a tour throughout the country.',
    image: './Project-Images/GigWrangler1.png',
    gifLink:'http://g.recordit.co/uiL89qhwtf.gif',
    gitHubRepo: 'https://github.com/Adamj1232/Gig-Wrangler',
    siteURL: 'https://adamj1232.github.io/Gig-Wrangler/',
    techUsed: ['Javascript ', 'React ', 'Redux ', 'Google Maps API ', 'Jest ', 'Enzyme ', 'HTML5 ', 'CSS '],
    icons: {
      git: './Project-Images/github.svg',
      site: './Project-Images/computer.svg',
    },
  },
  {
    title: 'Movie Tracker',
    description: 'This application was a first introduction to Redux, Express, SQL & postgreSQL. The application allows users to log in and view the most recently released movies. Once the user is logged in they are able to favorite multiple movies which are saved to their account. To test use the application, sign in with the credentials test@test.com & password.',
    image: './Project-Images/MovieTracker1.png',
    gifLink:'http://g.recordit.co/7OnaKQKKsg.gif',
    gitHubRepo: 'https://github.com/Adamj1232/movie-tracker',
    siteURL: 'https://movie--tracker.herokuapp.com/',
    techUsed: ['Javascript ', 'React ', 'Redux ', 'React Router ', 'Node ', 'Express ', 'SQL ', 'postgreSQL ', 'Jest ', 'Enzyme ', 'HTML5 ', 'CSS3 '],
    icons: {
      git: './Project-Images/github.svg',
      site: './Project-Images/computer.svg',
    },
  },
  {
    title: 'Ghost Revue',
    description: 'A fully responsive website created for a band out of Denver that I perform with, with the help of the guitar player and fellow Turing Grad Zane Russell. This site was built using React as well as plugins from ReverbNation and Spotify. Logo and landing page image were created using Photoshop and Illustrator',
    image: './Project-Images/GhostRevue.png',
    gifLink:'http://g.recordit.co/LAdssCIM1f.gif',
    gitHubRepo: 'https://github.com/Adamj1232/ghost-revue',
    siteURL: 'https://adamj1232.github.io/ghost-revue/',
    techUsed: ['Javascript ', 'React ', 'HTML5 ', 'CSS3 ', 'Spotify Player Plugin ', 'ReverbNation Concert Calendar Plugin '],
    icons: {
      git: './Project-Images/github.svg',
      site: './Project-Images/computer.svg',
    },
  },
  {
    title: 'Jet-Fuel',
    description: 'This application is based on the bitly url shortener. Using Express.js to create endpoints and Knex along with PostgresSQL to store link data. The user is able to create specific folders and add long urls from any website to that folder. The Express server and Knex/postgreSQL DB will then create a shortened url that can be used anywhere to redirect a user back to the original long url.',
    image: './Project-Images/JetFuel1.png',
    gifLink:'http://g.recordit.co/YnnreY3GHf.gif',
    gitHubRepo: 'https://github.com/Adamj1232/Jet-Fuel',
    siteURL: 'https://jet--fuel.herokuapp.com/',
    techUsed: ['Javascript ', 'Node ', 'Express ', 'Knex ', 'PostgresSQL ', 'Chai ', 'Mocha ', 'HTML5 ', 'CSS3 '],
    icons: {
      git: './Project-Images/github.svg',
      site: './Project-Images/computer.svg',
    },
  },
  {
    title: 'Cloud Kicker',
    description: 'Mobile weather application built in React JS and tested with Mocha and Enzyme. Cloud Kicker utilizes Weather Underground’s API to render on demand weather forecasts to a stylish and accessible user interface that supports an auto-complete location search.',
    image: './Project-Images/CloudKicker1.png',
    gifLink:'http://g.recordit.co/i6ABkaMAdN.gif',
    gitHubRepo: 'https://github.com/Adamj1232/CloudKicker-WeatherForecast-ReactProject',
    siteURL: 'https://adamj1232.github.io/CloudKicker-WeatherForecast-ReactProject/',
    techUsed: ['Javascript ', 'React ', 'Enzyme ', 'HTML5 ', 'CSS3 ', 'ARIA', 'Mocha ', 'Chai '],
    icons: {
      git: './Project-Images/github.svg',
      site: './Project-Images/computer.svg',
    },
  },
  {
    title: 'Connect Four - Ninjas vs Robots',
    description: 'Desktop replica of the classic arcade game Breakout built using vanilla JavaScript, HTML canvas and Mocha/Chai for testing. The game supports 5 levels of play.',
    image: './Project-Images/ConnectFour1.png',
    gifLink:'',
    gitHubRepo: 'https://github.com/Adamj1232/game-time-ConnectFour',
    siteURL: 'https://adamj1232.github.io/game-time-ConnectFour/',
    techUsed: ['Javascript ', 'HTML Canvas ', 'CSS3 ', 'Mocha ', 'Chai'],
    icons: {
      git: './Project-Images/github.svg',
      site: './Project-Images/computer.svg',
    },
  }
];

export default ProjectsData;
