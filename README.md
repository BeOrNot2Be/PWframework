# PersonalWebsite

Build with Typescript/Angular it is small personal website to show contacts and portfolio projects. The whole style is made with neumorphism design and minimalist design. The project was build to aim for creating platform for creating easy and fast portfolio websites in future.

## Config

infoConfig.json example
```javascript
{
  "name": "Tim Avilov", //optional (can be fetched by service)
  "bio": "I am developer.", //optional (can be fetched by service)
  "location": "Portland, Oregon", //optional (can be fetched by service)
  "avatar_url": "", //optional (can be fetched by service)
  "availability": true, //optional (can be fetched by service)
  "email": "timchick.ua@gmail.com", //optional (can be fetched by service)
  "githubUsername": "BeOrNot2Be", /*not optional (by this name github info
  will be fetched and assigned if 'github' value in 'priority' parameter) */
  "links": { //not optional
    "lnkedin": "https://www.linkedin.com/in/tim-avilov/",
    "github": "https://github.com/BeOrNot2Be",
    "telegram": "https://t.me/BeOrNot2Be",
    "instagram": "https://www.instagram.com/agushakun/"
  },
  "projects": [ //not optional
    {
      "name": "Avilon Production",
      "description": "Django app",
      "link": "https://www.avilonproduction.com/",
      "repoLink": "https://github.com/BeOrNot2Be/MEDILOV-back",
      "mainStack": "Python/Django",
      "descriptionLink": "https://github.com/BeOrNot2Be/MEDILOV-back/blob/master/README.md"
    },
    {
      "name": "Cocktail Builder",
      "description": "React Native app",
      "link": "https://expo.io/@beornot2be/cocktailbuilderApp",
      "repoLink": "https://github.com/BeOrNot2Be/CocktailBuilder",
      "mainStack": "JS/React Native",
      "descriptionLink": "https://github.com/BeOrNot2Be/CocktailBuilder/blob/master/README.md"
    },
    {
      "name": "SportsHold",
      "description": "Meteor app",
      "link": "https://copvsmed.herokuapp.com/",
      "repoLink": "https://github.com/BeOrNot2Be/CopVSMed",
      "mainStack": "JS/React",
      "descriptionLink": "https://github.com/BeOrNot2Be/CopVSMed/blob/master/README.md"
    }
  ],
  "priority": ["profile", "github"] 
  /* 
   not optional (the "profile" means current infoConfig | resources will
   be fetched from left to right resource (profile than github ) and new values
   will be reassigned only if there were null / undefined / '' before new value ) 
   */
}

```

## License

[MIT](LICENSE.txt) license.

## From Developer

Made with ❤️ by [BeOrNot2Be][link:beornot2be]. I always happy to receive your feedback! Please feel free to give new ideas and help me to implement mine.

[link:beornot2be]: https://github.com/BeOrNot2Be
