const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const navigation = document.querySelector('.nav-ul');
const textPortfolio = document.querySelector('.nav-text-1');
const about = document.querySelector('.nav-text-2');
const contact = document.querySelector('.nav-text-3');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  navigation.classList.toggle('show');
  hamburger.classList.add('hide');
  close.classList.remove('hide');
});

close.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  navigation.classList.remove('show');
});

textPortfolio.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

about.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

contact.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});
