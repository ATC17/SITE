let nav = document.querySelector(".navbar");
let rgpdAccepted = false;

window.addEventListener("scroll", function() { 
  var logo = document.querySelector(".logo") || document.querySelector(".logo-next");
  var stickyLogo = document.querySelector(".sticky-logo"); 
  if (window.pageYOffset > logo.offsetHeight) { 
      stickyLogo.style.display = "block";
  } else { 
      stickyLogo.style.display = "none";
  } 
});

function scrollToTop() { 
  window.scrollTo({ top: 0, behavior: "smooth" }); 
}

function changeLanguage(language) {
  let currentPage = window.location.pathname.split('/').pop();
  let currentDir = window.location.pathname.split('/')[1];
  
  localStorage.setItem("selectedLanguage", language);

  let newDir = language === 'FR' ? 'fr' : 'en';

  if (currentDir === newDir) {
    return; 
  }

  window.location.href = `/${newDir}/${currentPage}`;
}

window.onload = function() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || 'FR';
  const currentDir = window.location.pathname.split('/')[1];
  const isEnglish = currentDir === 'en' || selectedLanguage === 'EN';

  const targetElement = document.querySelector(`.language-option[onclick="changeLanguage('${isEnglish ? 'EN' : 'FR'}')"]`);
  targetElement.classList.add('selected');

  document.querySelectorAll('.navbar__menu li a').forEach(link => {
    const originalHref = link.getAttribute('href').split('/').pop();
    const newDir = isEnglish ? 'en' : 'fr';
    link.setAttribute('href', `/${newDir}/${originalHref}`);
  });
};

function setCurrentLinkActive() {
  let links = document.querySelectorAll('.navbar__links');

  let currentPath = window.location.pathname.split('/');
  let currentPage = currentPath[currentPath.length - 1]; 

  links.forEach((link) => {
    let linkPath = link.getAttribute('href').split('/');
    let linkPage = linkPath[linkPath.length - 1];  

    console.log(`CurrentPage: ${currentPage}`);
    console.log(`LinkPage: ${linkPage}`);

    if (currentPage === linkPage) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setCurrentLinkActive();
});

function openMapsOptions(address) { 
  let modalBody = document.querySelector('#mapsOptions'); 
  modalBody.innerHTML = `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}" target="_blank">Google Maps</a><br><a href="http://maps.apple.com/?q=${encodeURIComponent(address)}" target="_blank">Apple Maps</a><br><a href="https://waze.com/ul?q=${encodeURIComponent(address)}" target="_blank">Waze</a>`; 
}

function openModalImage(imageSrc, imageName) {
  let modalId = imageName.toLowerCase() + "Modal";
  let modalImage = document.getElementById(imageName.toLowerCase() + "ModalImage");
  let modalTitle = document.querySelector("#" + modalId + " .modal-title");
  modalImage.src = imageSrc;
  modalImage.alt = imageName + " image";
  modalTitle.textContent = imageName;
  $('#' + modalId).modal('show'); 
}

const MIN_FONT_SIZE = 16;
const MIN_H1_SIZE = 20;
const MIN_H2_SIZE = 18;
const MIN_H3_SIZE = 20;
const MIN_ADDRESS_SIZE = 6;
const MIN_CONTACT_SPAN_SIZE = 6;
const MIN_CONTACT_P_SIZE = 5;

const baseSizesDesktop = {
  ".logo": { "width": 300 },
  ".logo-next": { "width": 200 },
  ".logo2": { "width": 200 },
  ".sticky-logo": { "width": 100 },
  ".whatsapp-logo": { 'width': 60 },
  ".activity-logo": { 'width': 100 },
  ".social-media .insta-logo, .social-media .fb-logo, .social-media .club-logo": { 'width': 38 },

  ".read-more-btn": { "paddingVertical": 4, "paddingHorizontal": 18, "fontSize": 17 }, 

  "hr": 10,

  "h1": 36,

  "h2": 32,
  ".title h2": 32,
  ".club-title h2": 32,

  "h3": 24,
  ".activity h3": 24,
  ".club-title h3": 24,
  ".event h3": 24,
  ".option h3": 24,
  ".text-container h3": 24,
  "club-page-card h3": 24,

  "h4": 22,

  ".navbar-links": 17,
  ".navbar__menu": { 'gap': 35 },
  ".header-no-bg-img": { 'height': 300 },

  ".club": { "margin": 10, "padding": 20, "borderRadius": 20 },
  ".club-page-card": { 'margin-bottom': 300 },

  ".description p": 17,
  ".activity p": 17,
  ".preview-description p": 17,
  ".full-description ul": 17,
  ".community p": 17,
  ".grid-logos p": 17,

  ".category span": 14,
  ".price" : 14,

  ".tarifs-container p": 17,
  ".club p, .club ul": 17,
  ".text-container ul": 17,

  "club-page-card p": 17,

  ".address p": 12,
  ".contact-info p": 12,
  ".contact-info span": 15
};

const baseSizesMobile = {
  ".logo": { "width": 300 },
  ".logo-next": { "width": 250 },
  ".logo2": { "width": 200 },
  ".sticky-logo": { "width": 130 },
  ".whatsapp-logo": { 'width': 60 },
  ".activity-logo": { 'width': 100 },
  ".social-media .insta-logo, .social-media .fb-logo, .social-media .club-logo": { 'width': 38 },

  ".read-more-btn": { "paddingVertical": 4, "paddingHorizontal": 18, "fontSize": 17 }, 

  "hr": 10,

  "h1": 40,

  "h2": 32,
  ".title h2": 32,
  ".club-title h2": 32,

  "h3": 24,
  ".activity h3": 32,
  ".club-title h3": 24,
  ".event h3": 24,
  ".option h3": 24,
  ".text-container h3": 24,
  "club-page-card h3": 24,

  "h4": 22,

  ".navbar-links": 17,
  ".navbar__menu": { 'gap': 35 },
  ".header-no-bg-img": { 'height': 500 },

  ".club": { "margin": 10, "padding": 20, "borderRadius": 20 },
  ".club-page-card": { 'margin-bottom': 300 },

  ".description p": 15,
  ".activity p": 12,
  ".preview-description p": 15,
  ".full-description ul": 15,
  ".community p": 15,
  ".grid-logos p": 15,

  ".category span": 14,
  ".price" : 14,

  ".tarifs-container p": 15,
  ".club p, .club ul": 15,
  ".text-container ul": 15,
  "club-page-card p": 15,

  ".addresses": 16,
  ".contact-info p": 14,
  ".contact-info span": 18
};

function debounce(func, wait = 100) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function adjustStyles() {

  const currentWidth = window.innerWidth;
  const baseWidth = 1000; 

  const baseSizes = currentWidth > 960 ? baseSizesDesktop : baseSizesMobile;

  const elementCache = {};

  for (let selector in baseSizes) {
    if (!elementCache[selector]) {
      elementCache[selector] = document.querySelectorAll(selector);
    }

    const elements = elementCache[selector];
    const baseSize = baseSizes[selector];

    let minSize = MIN_FONT_SIZE;

    if (typeof baseSize === 'number') {

      switch (selector) {
        case '.addresses':
          minSize = MIN_ADDRESS_SIZE;
          break;
        case '.contact-info span':
          minSize = MIN_CONTACT_SPAN_SIZE;
          break;
        case '.contact-info p':
          minSize = MIN_CONTACT_P_SIZE;
          break;
        case 'h1':
          minSize = MIN_H1_SIZE;
          break;
        case 'h2':
          minSize = MIN_H2_SIZE;
          break;
        case 'h3':
          minSize = MIN_H3_SIZE;
          break;
        default:
          break;
      }

      const newSize = Math.max(baseSize * (currentWidth / baseWidth), minSize);
      elements.forEach(el => el.style.fontSize = `${newSize}px`);
    } 
    else if (typeof baseSize === 'object') {

      elements.forEach(el => {
        for (let prop in baseSize) {
          let newSize = baseSize[prop] * (currentWidth / baseWidth);

          if (prop === 'fontSize' && selector !== '.addresses') {
            newSize = Math.max(newSize, MIN_FONT_SIZE);
          }

          switch (prop) {
            case 'paddingVertical':
              el.style.paddingTop = `${newSize}px`;
              el.style.paddingBottom = `${newSize}px`;
              break;
            case 'paddingHorizontal':
              el.style.paddingLeft = `${newSize}px`;
              el.style.paddingRight = `${newSize}px`;
              break;
            case 'fontSize':
            case 'width':
            case 'height':
            case 'gap':
              el.style[prop] = `${newSize}px`;
              break;
            case 'margin':
            case 'padding':
            case 'borderRadius':
              el.style[prop] = `${newSize}px`;
              break;
          }
        }
      });
    }
  }

  const addressesContainer = document.querySelector(".addresses");
  const addresses = addressesContainer ? addressesContainer.querySelectorAll(".address") : [];

  if (addresses.length === 0) return; 

  let containerWidth = addressesContainer.offsetWidth;
  let totalAddressWidth = Array.from(addresses).reduce((acc, address) => acc + address.offsetWidth, 0);
  
  let fontSize = parseFloat(getComputedStyle(addresses[0]).fontSize); 
  const MAX_FONT_SIZE = 3 * fontSize; 

  if (totalAddressWidth > containerWidth && fontSize > MIN_FONT_SIZE) {
      const scaleFactor = containerWidth / totalAddressWidth;
      fontSize = Math.max(fontSize * scaleFactor, MIN_FONT_SIZE);
  } else if (totalAddressWidth < containerWidth && fontSize < MAX_FONT_SIZE) {
      const scaleFactor = containerWidth / totalAddressWidth;
      fontSize = Math.min(fontSize * scaleFactor, MAX_FONT_SIZE);
  }
  
  addresses.forEach(address => {
      address.querySelector("h3").style.fontSize = `${fontSize}px`;
      address.querySelector("p").style.fontSize = `${fontSize}px`;
  });
}

adjustStyles();
window.addEventListener('resize', debounce(adjustStyles));

function adjustPseudoElementStyles() {
  const css = `
    .annual-course-img::before {
      width: ${350 * (window.innerWidth / 1000)}px;
      height: ${350 * (window.innerWidth / 1000)}px;
    }
  `;

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = css; // IE8 and below
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}

adjustPseudoElementStyles();

window.addEventListener('resize', debounce(adjustPseudoElementStyles));


function toggleDescription(descriptionId, buttonId) {
  var description = document.getElementById(descriptionId);
  var button = document.getElementById(buttonId);
  var clubContainer = description.parentElement; 

  if (description.style.display === "none") {
      description.style.display = "block";
      button.textContent = "Réduire";
      clubContainer.classList.add("club-active");
      clubContainer.style.height = clubContainer.scrollHeight + "px";
  } else {
      description.style.display = "none";
      button.textContent = "Lire la suite";
      clubContainer.classList.remove("club-active");
      clubContainer.style.height = "auto";
  }
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const annualServicesMenu = document.querySelector('#annual-services-page');
  const seasonalServicesMenu = document.querySelector('#seasonal-services-page');
  const contactMenu = document.querySelector('#contact-page');
  
  let scrollPos = window.scrollY;

  // Update these conditions according to your own scroll positions and page sections
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    annualServicesMenu.classList.remove('highlight');
    seasonalServicesMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    annualServicesMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    seasonalServicesMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    seasonalServicesMenu.classList.add('highlight');
    annualServicesMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos >= 2345) {
    contactMenu.classList.add('highlight');
    seasonalServicesMenu.classList.remove('highlight');
    annualServicesMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

document.addEventListener("DOMContentLoaded", () => {
  const pricingCards = document.querySelectorAll('.card');
  window.addEventListener('scroll', () => {
      pricingCards.forEach(card => {
          const cardTop = card.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;

          if (cardTop < screenHeight - 100) {
              card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
              card.style.opacity = '1'; 
          }
      });
  });
});