import footer from "../partials/footer.hbs";
document.body.insertAdjacentHTML("beforeend", footer());


import './js/components/menu.json';
import './footter.css';
import teamCardTemplate from '../partials/footter.hbs';
import Galja from '../images/Galja.jpg';
import Denis from '../images/Denis.jpg';
import Oleg from '../images/Oleg.jpg';
import Luda from '../images/Luda.jpg';
import Vanja from '../images/Vanja.jpg';
import Vika from '../images/Vika.jpg';
import Georgij from '../images/Georgij.jpg';
import Julija from '../images/Julija.jpg';
import fb from '../images/facebook.svg';
import insta from '../images/instagram.svg';
import linkedin from '../imagesn/linkedin-logo.svg';

const refs = {
  mainHeaderBg: document.querySelector('.main_header-bg'),
  headerInput: document.querySelector('.search-form_wrapper'),
  headerBtn: document.querySelector('.btn'),
  activeLink: document.querySelector('.nav__home'),
  activeLinkLibrary: document.querySelector('.nav__library'),
  homeLink: document.querySelector('.nav__home'),
  libraryLink: document.querySelector('.nav__library'),
};

const teamMarkup = items
  .map(item => {
    return teamCardTemplate(item);
  })
  .join('');

const list = document.querySelector('.footer-description__link');

list.addEventListener('click', showCards);

function showCards() {
  const galleryList = document.querySelector('.js-gallery_list');
  galleryList.innerHTML = markup;
  const divPagination = document.querySelector('#pagination');
  divPagination.style.padding = 0;
  divPagination.innerHTML = ' ';
  const cardItem = document.querySelector('.js-cardItem');
  cardItem.innerHTML = '';
  refs.mainHeaderBg.classList.remove('main_header-bg');
  refs.mainHeaderBg.classList.remove('main_header-bg-btn');
  refs.mainHeaderBg.classList.add('main_header-bg-card');
  refs.headerInput.innerHTML = '';
  refs.headerBtn.innerHTML = '';
  refs.activeLinkLibrary.classList.remove('nav__btn--active');
  refs.activeLink.classList.remove('nav__btn--active');
}

const markup = `<section class="cards">
<div class="container">
    <h2 class="services_title">наша команда</h2>
    <ul class="services-list">

    <li class="services-item">
    <div class="pic">
        <img class="services-img" src="${Galja}" alt="Galja" width="260" height="300">
    </div>
    <div class="content">
        <h3 class="services-item__title">Pavlo Chenchovyi</h3>
        <p class="services-item__description">Team Lead</p>
        <p class="services-item__email">puvelko@gmail.com</p>                  
        <ul class="social">
        <li class="cl_li">
            <a target="_blank" href="#" class="fa fa-facebook">
                <img class="" src="${insta}" width="36" height="16" alt="image description">
            </a>
        </li>
        <li class="cl_li">
            <a target="_blank" href="#" class="fa fa-twitter">
                <img class="" src="${fb}" width="16" height="16" alt="image description">
            </a>
        </li>
        <li class="cl_li">
            <a target="_blank" href="#" class="fa fa-linkedin">
                <img class="" src="${linkedin}" width="16" height="16" alt="image description">
            </a>
        </li>
    </ul>
    </div>                                    
</li>
        
        <li class="services-item">
            <div class="pic">
                <img src="${Denis}" alt="Denis" width="260" height="300" class="services-img" >
            </div>
            <div class="content">
                <h3 class="services-item__title">Liza Domasheva</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">lizidomasheva@gmail.com</p>                  
                <ul class="social">
            <li class="cl_li">
                <a target="_blank" href="https://www.instagram.com/lizi_domasheva/" class="fa fa-facebook">
                    <img class="" src="${insta}" width="36" height="16" alt="">
                </a>
            </li>
            <li class="cl_li">
                <a target="_blank" href="https://www.facebook.com/elizaveta.domasheva" class="fa fa-twitter">
                    <img class="" src="${fb}" width="16" height="16" alt="">
                </a>
            </li>
            <li class="cl_li">
                <a target="_blank" href="https://www.linkedin.com/in/yelyzaveta-domasheva/" class="fa fa-linkedin">
                    <img class="" src="${linkedin}" width="16" height="16" alt="">
                </a>
            </li>
        </ul>
            </div>
           
        </li>

       

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Oleg}" alt="Oleg" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Kateryna Myronova</h3>
                <p class="services-item__description">Scrum Master</p>
                <p class="services-item__email">katrin.myronova@gmail.com</p>                  
                <ul class="social">
            <li class="cl_li">
                <a target="_blank" href="https://www.instagram.com/katrusya_a/" class="fa fa-facebook">
                    <img class="" src="${insta}" width="36" height="16" alt="image description">
                </a>
            </li>
            <li class="cl_li">
                <a target="_blank" href="https://www.facebook.com/katrin.mironova.18" class="fa fa-twitter">
                    <img class="" src="${fb}" width="16" height="16" alt="image description">
                </a>
            </li>
            <li class="cl_li">
                <a target="_blank" href="https://www.linkedin.com/in/kateryna-myronova-7697bb1a/" class="fa fa-linkedin">
                    <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                </a>
            </li>
        </ul>
            </div>
            
        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Luda}" alt="Luda" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Natasha Maydannik</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">nattuardy@gmail.com</p>                 
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="#" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="#" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>
        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Vanja}" alt="Vanja" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Irina Ilina</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">irynailina@gmail.com</p>                 
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="https://www.instagram.com/irynailina/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.facebook.com/irene.ilina/" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.linkedin.com/in/iryna-ilina-55564492/" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Vika}" alt="Vika" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Olia Melnyk</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">olgamelnyk10111989@gmail.com</p>                  
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="#" class="fa fa-linkedin">
                        <img class="" src="${Georgij}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Fahriddin}" alt="Fahriddin Nomanjanov" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Fahriddin</h3>
                <h3 class="services-item__title">Nomanjanov</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">fahriddinnomanjanov@gmail.com</p>                  
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="https://www.instagram.com/nomanjanov_07/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.facebook.com/fahriddin.nomanjanov" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.linkedin.com/in/fahriddin-nomanjanov-5958551a3/" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Misha}" alt="Mykhail Dyatel" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Mykhail Dyatel</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">misha.dyatel@gmail.com</p>                  
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="https://www.instagram.com/mishadyatel/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.facebook.com/misha.dyatel" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

    </ul>
</div>
</section>`;
