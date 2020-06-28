module.exports = {
  pathPrefix: '',
  siteUrl: 'https://rolwinreevan.com',
  siteTitle: 'Gibelli Christophe',
  siteDescription: 'Logbook of a software developer',
  author: 'Rolwin Reevan',
  postsForArchivePage: 3,
  defaultLanguage: 'fr',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
    creation: 'creation',
  },
  social: {
    github: 'https://github.com/rolwin100',
    facebook: 'https://www.facebook.com/rolwin.monteiro',
    twitter: 'https://twitter.com/rolwin100',
    instagram: 'https://www.instagram.com/reevan100/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
  creation: {
    chalets: {
      name: 'Chalets et Caviar',
      technology: 'Wordpress',
      color: '#43ace0',
      url: 'https://wordpress-409224-1306010.cloudwaysapps.com/',
    },
    festival: {
      name: 'Festival des films en plein air',
      technology: 'Bootstrap',
      color: '#257acc',
      url: 'https://projet3oc.netlify.app/',
    },
    citations: {
      name: 'Générateur de citations',
      technology: 'Javascript',
      color: '#f0da50',
      url: 'https://projet5oc.netlify.app',
    },
    jeu: {
      name: 'Jeu de plateau',
      technology: 'Javascript et JQuery',
      color: '#f0da50',
      url: 'https://projet6oc.netlify.app',
    },
    localisation: {
      name: 'Application d\'avis de réstaurants',
      technology: 'Javascript',
      color: '#f0da50',
      url: 'https://projet7oc.com/',
    },
    ong: {
      name: 'ONG AIESOR',
      technology: 'Wordpress',
      color: '#43ace0',
      url: 'https://wordpress-409224-1287621.cloudwaysapps.com/',
    },
  },
};
