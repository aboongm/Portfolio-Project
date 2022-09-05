const data = [
  {
    id: 'portfolio-1',
    name: 'Booking App',
    job: {
      client: 'Microverse',
      role: 'Full Stack Dev',
      year: '2022',
    },
    description: {
      summary:
        'This app uses a Rails back-end as an API to send doctor details and appointment data to the react frontend of a booking application.',

      portfolio:
        'This app uses a Rails back-end as an API to send doctor details and appointment data to the react frontend of a booking application.',
    },
    image: {
      mobile: './assets/screenshots/mobile-booking-app.png',
      desktop: './assets/screenshots/desktop-booking-app.png',
    },
    technologies: {
      html: 'ReactJS',
      css: 'Rails',
      javascript: 'PostgreSQL',
    },
    card: 'card-img-left',
    source: 'https://github.com/aboongm/booking-app-frontend',
    live: 'https://booking-app1.netlify.app',
  },
  {
    id: 'portfolio-2',
    name: 'Rails Budget App',
    job: {
      client: 'Microverse',
      role: 'Full Stack Dev',
      year: '2022',
    },
    description: {
      summary:
        'Rails Budget App allows a user to create categories and items in them to track expenses',
      portfolio:
        'The Ruby on Rails capstone project builds a mobile web application where users can manage their budget: They have a list of transactions associated with a category, so that they can see how much money they spent and on what.The Rails application that allowed the users to - register and log in, so that the data is private to them, create categories and add expenses on each of these categories, and see the expenses on each category.',
    },
    image: {
      mobile: './assets/screenshots/desktop-budget-app.png',
      desktop: './assets/screenshots/desktop-budget-app.png',
    },
    technologies: {
      html: 'Ruby',
      ror: 'Ruby On Rails',
      css: 'PostgreSQL',
      javascript: 'RSpec',
    },
    card: 'card-img-right',
    source: 'https://github.com/aboongm/rails-buget-app',
    live: 'https://rails-budget-app.herokuapp.com/',
  },
  {
    id: 'portfolio-3',
    name: 'Space Travelers Hub',
    job: {
      client: 'Microvers',
      role: 'Front End Dev',
      year: '2022',
    },
    description: {
      summary:
        "This is a Space Traveler's Hub website. The website has 3 pages that list the rockets, the missions, and the reserved rockets and booked missions.",
      portfolio:
        "This is a Space Traveler's Hub website. The website has 3 pages that list the rockets, the missions, and the reserved rockets and booked missions.",
    },
    image: {
      mobile: './assets/screenshots/mobile-space-travelers.png',
      desktop: './assets/screenshots/desktop-space-travelers.png',
    },
    technologies: {
      html: 'ReactJS',
      ror: 'Redux',
      css: 'Redux-thunk',
      javascript: 'Bootstrap',
    },
    card: 'card-img-left',
    source: 'https://aboongm.github.io/space-travelers-hub/',
    live: 'https://github.com/aboongm/space-travelers-hub',
  },
  {
    id: 'portfolio-4',
    name: 'Movie List',
    job: {
      client: 'Microverse',
      role: 'Front End Dev',
      year: '2022',
    },
    description: {
      summary:
        'This is a TV Shows web site source from TVmaze API. In the website, a user can click on heart icon and get it recorded in Involvement API. Similarly, a user can write comment and get it recorded in Involvement API.',
      portfolio:
        'This is a TV Shows web site source from TVmaze API. In the website, a user can click on heart icon and get it recorded in Involvement API. Similarly, a user can write comment and get it recorded in Involvement API.',
    },
    image: {
      mobile: './assets/screenshots/desktop-movie-list.png',
      desktop: './assets/screenshots/desktop-movie-list.png',
    },
    technologies: {
      html: 'JavaScript',
      ror: 'HTML',
      css: 'CSS',
      javascript: 'Webpack',
    },
    card: 'card-img-left',
    source: 'https://github.com/aboongm/Kanban-Board-Capstone-Project',
    live: 'https://aboongm.github.io/Kanban-Board-Capstone-Project/',
  },
];

const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const navigation = document.querySelector('.nav-ul');
const textPortfolio = document.querySelector('.nav-text-1');
const about = document.querySelector('.nav-text-2');
const contact = document.querySelector('.nav-text-3');
const right1 = document.querySelector('#right-1');
const right2 = document.querySelector('#right-2');
const right3 = document.querySelector('#right-3');
const down1 = document.querySelector('#down-1');
const down2 = document.querySelector('#down-2');
const down3 = document.querySelector('#down-3');
const languages = document.querySelector('.language-list');
const frameworks = document.querySelector('.frameworks-2');
const skills = document.querySelector('.skills-2');

right1.addEventListener('click', (e) => {
  e.preventDefault();
  down1.classList.remove('hide');
  languages.classList.remove('hide');
  right1.classList.add('hide');
});

down1.addEventListener('click', (e) => {
  e.preventDefault();
  right1.classList.remove('hide');
  down1.classList.add('hide');
  languages.classList.add('hide');
});

right2.addEventListener('click', (e) => {
  e.preventDefault();
  down2.classList.remove('hide');
  frameworks.classList.remove('hide');
  right2.classList.add('hide');
});

down2.addEventListener('click', (e) => {
  e.preventDefault();
  right2.classList.remove('hide');
  down2.classList.add('hide');
  frameworks.classList.add('hide');
});

right3.addEventListener('click', (e) => {
  e.preventDefault();
  down3.classList.remove('hide');
  skills.classList.remove('hide');
  right3.classList.add('hide');
});

down3.addEventListener('click', (e) => {
  e.preventDefault();
  right3.classList.remove('hide');
  down3.classList.add('hide');
  skills.classList.add('hide');
});

// hamburger menu
hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  navigation.classList.toggle('show');
  hamburger.classList.add('hide');
  close.classList.remove('hide');
  textPortfolio.classList.add('menu-text');
  about.classList.add('menu-text');
  contact.classList.add('menu-text');
});

close.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  navigation.classList.remove('show');
  close.classList.add('hide');
});

textPortfolio.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
  close.classList.add('hide');
});

about.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
  close.classList.add('hide');
});

contact.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
  close.classList.add('hide');
});

// popup
// dynamic html code from javascript
const portfolio = document.querySelector('#portfolio');
const modal = document.querySelector('#myModal');

portfolio.classList.add('works');

Array.from(portfolio.children).forEach((child, index) => {
  child.innerHTML = `
  <section class="${data[index].card}">
    <ul>
      <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
      <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2" /></li>
    </ul>
    <div class="block-1">
      <div class="text-group">
        <h2 class="lg-text-2">${data[index].name}</h2>
        <div class="client-info">
          <h3 class="client">${data[index].job.client}</h3>
          <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
          <h3 class="role">${data[index].job.role}</h3>
          <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
          <h3 class="year-label">${data[index].job.year}</h3>
        </div>
      </div>
      <h3 class="sm-text-2">${data[index].description.summary}</h3>
      <ul class="tags">
        <li>${data[index].technologies.html}</li>
        <li>${data[index].technologies.css}</li>
        <li>${data[index].technologies.javascript}</li>
      </ul>
      <div class="actions" id="${data[index].id}">
        <button class="btn" id="btn" type="button">See Project</button>
      </div>
    </div>
  </section>`;
});

// modals
Array.from(portfolio.children).forEach((item, index) => {
  item.firstElementChild.lastElementChild.lastElementChild.firstElementChild.addEventListener(
    'click',
    () => {
      modal.innerHTML = `
    <!-- Modal content -->
    <section class="modal-content">
      <div class="popup-text-group">
        <div class="text-group">
          <h2 class="popup-text-lg">${data[index].name}</h2>
          <div class="client-info">
            <h3 class="client">${data[index].job.client}</h3>
            <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
            <h3 class="role">${data[index].job.role}</h3>
            <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
            <h3 class="year-label">${data[index].job.year}</h3>
          </div>
        </div>
        <span class="close">&times;</span>
      </div>
      <ul>
        <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
        <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2 popup-img" /></li>
      </ul>
      <div class="popup-bottom">
        <p class="popup-text-sm">${data[index].description.portfolio}</p>
        <div class="popup-block">
          <ul class="tags ${data[index].id}">
          </ul>
          <div class="popup-actions">
            <a href="${data[index].live}">
            <button class="btn btnImg" id="btn" type="button">See Live
              <img src="./assets/btnIcon-1.svg" alt="icon" id="imgIcon" />
            </button>
            </a>
            <a href="${data[index].source}">
            <button class="btn btnImg" id="btn" type="button">See Source
              <img src="./assets/cat.svg" alt="icon" id="imgIcon" />
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    `;

      const ulList = document.querySelector('.popup-block .tags');

      Object.keys(data[index].technologies).forEach((e) => {
        ulList.innerHTML += `<li>${data[index].technologies[e]}</li>`;
      });

      modal.style.display = 'block';
      const span = document.getElementsByClassName('close')[0];
      span.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  );
});

// form validation
const form = document.querySelector('.form');
const emailInput = form.elements.email;

const INPUT_LOWERCASE = 'Error : Please enter a lowercase input';

function showMessage(input, message, type) {
  const msg = document.querySelector('.error-text');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidLowercase) {
  if (input.value === input.value.toLowerCase()) {
    return true;
  }
  return showError(input, invalidLowercase);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail(emailInput, INPUT_LOWERCASE);
  if (emailValid) {
    form.submit();
    saveUserDetails();
  }
});

// local storage
function saveUserDetails() {
  let formData = new FormData(form);
  let fullname = formData.get('fullname');
  let email = formData.get('email');
  let feedback = formData.get('feedback');
  let myFormData = { name: fullname, email: email, feedback: feedback };
  localStorage.setItem('myFormData', JSON.stringify(myFormData));
}

const stored = localStorage.getItem('myFormData');

function getUserDetails(localObj) {
  const userDetails = JSON.parse(localObj);
  console.log(userDetails);
  form.fullname.value = userDetails.name;
  form.email.value = userDetails.email;
  form.feedback.value = userDetails.feedback;
}

getUserDetails(stored);
