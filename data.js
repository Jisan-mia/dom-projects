const projectList = [
  {
    id: 1,
    name: "Counter",
    description: "A simple counter project with reset counter functionality.",
    image: "./1.jpg",
    url: "./projects/1-counter/",
    github: "https://github.com/Jisan-mia/dom-projects/tree/main/projects/1-counter",
    difficulty: "Junior",
    tags: ['html', 'css', 'js']
  },
  {
    id: 2,
    name: "DadJokes",
    description: "Getting random dad jokes by calling an api in asynchronous manner.",
    image: "https://user-images.githubusercontent.com/61211600/227638840-8a1cacbf-66ef-42b4-8299-94cae227f8c3.png",
    url: "./projects/2-dad-jokes/",
    github: "",
    difficulty: "Intermediate",
    tags: ['html', 'css', 'js']
  },
  {
    id: 3,
    name: "Form Validation",
    description: "Client side form validation using JavaScript. In addition, it has a success registration message and preview submitted form(readonly).",
    image: "https://user-images.githubusercontent.com/61211600/227637515-9b6ac298-b597-4f64-a079-523969d7c57c.png",
    url: "./projects/3-form-validation/",
    github: "",
    difficulty: "Advanced",
    tags: ['html', 'css', 'js']
  },
  {
    id: 4,
    name: "Random User",
    description: "This is a random user generator web app. In this project I used API to generate random user info. Every time you reload page/click generate btn, you'll see a new user.",
    image: "https://user-images.githubusercontent.com/61211600/226713753-57126216-7002-4731-856a-bb758a38917f.png",
    url: "./projects/4-random-user/",
    github: "",
    difficulty: "Advanced",
    tags: ['html', 'css', 'js']
  },
  {
    id: 5,
    name: "Morse Code Translator",
    description: "It's easy to use Morse Code Translator, translate Morse code to text, and text to Morse code.",
    image: "https://user-images.githubusercontent.com/61211600/226718850-e47538fa-6a18-40bd-be64-e815643636c7.png",
    url: "./projects/5-morse-translator/",
    github: "",
    difficulty: "Advanced",
    tags: ['html', 'css', 'js']
  },
  {
    id: 6,
    name: "Basic Calculator",
    description: "JavaScript Calculator App",
    image: "https://user-images.githubusercontent.com/61211600/227637921-7d2cda5a-fc6d-4697-b358-fb69a7fdc727.png",
    url: "./projects/6-basic-calculator/",
    github: "",
    difficulty: "Junior",
    tags: ['html', 'css', 'js']
  },
  {
    id: 7,
    name: "Normal Calculator",
    description: "JavaScript Calculator App",
    image: "https://user-images.githubusercontent.com/61211600/227634200-8c2b890e-9431-45e4-b321-06f2cd2904e3.png",
    url: "./projects/7-normal-calculator/",
    github: "",
    difficulty: "Intermediate",
    tags: ['html', 'css', 'js']
  },
  {
    id: 8,
    name: "Scientific Calculator",
    description: "JavaScript Calculator App",
    image: "https://user-images.githubusercontent.com/61211600/227635225-00dc2804-0793-4b30-b00d-847932d3e59f.png",
    url: "./projects/8-scientific-calculator/",
    github: "",
    difficulty: "Advanced",
    tags: ['html', 'css', 'js']
  },
  {
    id: 9,
    name: "Simple Todo App",
    description: "It's a kinda TODO site where anyone can add todo, complete, and delete them. I've worked with the date object too in this project.",
    image: "https://user-images.githubusercontent.com/61211600/227636791-d716e1ba-03b3-4791-9b87-4dee1417b68c.png",
    url: "./projects/9-js-todo/",
    github: "",
    difficulty: "Advanced",
    tags: ['html', 'css', 'js']
  },
   {
    id: 10,
    name: "Profile Form & Card",
    description: "This is a dynamic form with profile card using JavaScript. Also one profile can be deleted.",
    image: "https://user-images.githubusercontent.com/61211600/227640503-4c790b14-b1f7-4621-a896-8bcc339ca451.png",
    url: "./projects/10-profile-form/",
    github: "",
    difficulty: "Advanced",
    tags: ['html', 'css', 'js']
  },
  {
    id: 11,
    name: "PC Component Filtering",
    description: "It is a filtering web app using JavaScript. There are some computer parts which user can filter and know about specific part of a computer like input devices, output devices etc.",
    image: "https://user-images.githubusercontent.com/61211600/226866923-a7be7817-aa6f-45eb-9ce3-9ead695c999e.png",
    url: "./projects/11-pc-component-filter/",
    github: "",
    difficulty: "Advanced",
    tags: ['html', 'css', 'js']
  },
  {
    id: 12,
    name: "Weather App",
    description: "It is a weather web app where user can see current weather by searching city name. I used an API for weather and developed in JavaScript.",
    image: "https://user-images.githubusercontent.com/61211600/226870816-a5727d16-9734-4bea-9f1f-2058c1192640.png",
    url: "./projects/12-weather-app/",
    github: "",
    difficulty: "Advanced",
    tags: ['html', 'css', 'js']
  },
  {
    id: 13,
    name: "Testimonial Slider",
    description: "Created this testimonials section of a website using JavaScript and it was really fun coding this project.",
    image: "https://user-images.githubusercontent.com/61211600/226871813-30dbfa81-7975-438d-b6f8-bd432c99d318.png",
    url: "./projects/13-testimonial-slider/",
    github: "",
    difficulty: "Advanced",
    tags: ['html', 'css', 'js']
  },
  {
    id: 14,
    name: "Animation on Scroll",
    description: "I use the scroll event in this project. Basically when you scroll down new content will show up with animation.",
    image: "https://user-images.githubusercontent.com/61211600/227641486-a57d1659-3abd-44ec-a690-32deed64ef69.png",
    url: "./projects/14-animation-on-scroll/",
    github: "",
    difficulty: "Junior",
    tags: ['html', 'css', 'js']
  },
  {
    id: 15,
    name: "Search Field Reveal",
    description: "A simple implementation of classList toggle method. Also, css transition and transform property were utilized for animation.",
    image: "https://user-images.githubusercontent.com/61211600/227642154-4d74112b-a2b5-4151-8833-abf1a4966b71.png",
    url: "./projects/15-search-field-reveal/",
    github: "",
    difficulty: "Junior",
    tags: ['html', 'css', 'js']
  },
  {
    id: 16,
    name: "Question List & Progress",
    description: "This javascript project utilizes common use cases of DOM APIs like selecting elements, creating element, and updating the ui.",
    image: "https://user-images.githubusercontent.com/61211600/227620473-ceb4aedb-07ff-4e19-b9e5-9ff5d26358d0.png",
    url: "./projects/16-question-list-progress/",
    github: "",
    difficulty: "Junior",
    tags: ['html', 'css', 'js']
  },
];

export { projectList };

