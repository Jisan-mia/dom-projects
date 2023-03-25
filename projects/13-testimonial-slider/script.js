const testimonials = [
  {
    id: 1,
    name: "Jason smith",
    job: "Web Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag moon tote bag street art shabby chic..",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//find potential elements
const name = document.querySelector(".name");
const jobTitle = document.querySelector(".job-title");
const img = document.querySelector(".profile-img");
const txt = document.querySelector(".testimonial-text");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentItem = 0;

//load inital item when the page loaded first time

window.addEventListener("DOMContentLoaded", function () {
  const item = testimonials[currentItem];
  name.textContent = item.name;
  jobTitle.textContent = item.job;
  img.src = item.img;
  txt.textContent = item.text;
});

// show testimonials
const showTestimonials = (testimonialItem) => {
  const item = testimonials[testimonialItem];
  name.textContent = item.name;
  jobTitle.textContent = item.job;
  img.src = item.img;
  txt.textContent = item.text;
};

//next button event listener
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  showTestimonials(currentItem);
});

//prev button event listener
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  showTestimonials(currentItem);
});
