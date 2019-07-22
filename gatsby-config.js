module.exports = {
  siteMetadata: {
    title: `Danyrupes`,
    description: `Code your Pathway`,
    author: `gatsbyjs4Dan`,

    header : {
      uname:'Danyrupes',
      contents:[
        {name:'Projects', url:'#project-content'},
        {name:'About', url:'#about'},
        {name:'Connect', url:'#connect'},
      ],
    },

    TopIntro :{
      image_url:'',
      description:"Im a junior MERN Stack Developer and React Native developer with an year of experience. I'm curious about javascript and user satisfaction with edge technologies. Praising Lord is my Majoy point"
    },
    projects : [
      {
        id:0,
        img_url:'https://i.pinimg.com/originals/13/65/b5/1365b517a0402a97bac5637e8482a122.png', 
      description:"It is a \"Dashboard\" for a Sales manager selling of one or many products. The Dashboard is using mainly for maintaining daily stocks in a location(warehouse). ongoing project..."
    },
    {id:1,img_url:'https://www.dropbox.com/s/i4vdwvi6i40h47p/raydeous2.jpg?raw=1', 
    description:"\"Raydeous\" -For a Restaurant App. By using Raydeous Customer app user can know about food deals near around. Restaurant's will add deals by using their anothe app(admin) App"
  },
  {id:2,img_url:'https://www.dropbox.com/s/kq8o8hg7x7skk20/seminar1.png?raw=1', 
  description:"This Native app mainly desinged for Staffs in my college schedule any conference hall thorugh this app any data in future. Hence the request will processed by HOD's and Principal their separate app "
},
{id:3,img_url:'https://www.dropbox.com/s/r7bxu4od4kcmw68/phone_myuon.png?raw=1', 
description:"\" Campus Administrator\"- is made for placement perspective for UG students. By using this app students get letest updates from placement cell. This app also have tutorials for coaching for placement tests."
}
    ],
  
  bottomQuote : {
    head : 'That One Energy - long last me',
    quote:'His lord said to him, ‘Well done, good and faithful servant; you have been faithful over a few things, I will make you ruler over many things. Enter into the joy of your lord.’'
  }
  },


  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
