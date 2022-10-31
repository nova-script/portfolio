import '../assets/css/portfolio.css';

/* React Router */
import { 
  Link,
} from "react-router-dom";

/* React Full Page */
import ReactPageScroller from 'react-page-scroller';

/* Framer Motion */
import { motion } from 'framer-motion';

/* Images */
import hollowExample from '../assets/img/portfolio/hollow-example.png';
import coding55Example from '../assets/img/portfolio/coding55-example.png';
import panyartExample from '../assets/img/portfolio/panyart-example.png';
import ledshowExample from '../assets/img/portfolio/ledshow-example.png';

function Portfolio() {
  return (
    <motion.div
    initial={{opacity: 0, x: 100}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: -100}}
    transition={{duration: 1}}
  >
    <div class="stars-container">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>

    <ReactPageScroller>
      <div class="container pt-5 home_container">
        <Link to='/' className='pl-4 mt-5'>
          <a class="scroll-left ml-0"></a> 
        </Link>
        <div class="row align-items-center row_container">
          <div class="col-6">
            <h1><strong>My Portfolio</strong>
            </h1>
            <h5 class="my-4">
            <strong>
              Here you can check my projects out and read their source code (if it's available)!
              <br/><br/>
              Just keep scrolling all the way down!
              ;)
            </strong>
            </h5>
            <br/>
            <a class="scroll-down ml-1"></a>
          </div>
        </div>
      </div>

      <div class="container home_container" id="zabuza">
        <div class="row align-items-center justify-content-center row_container">
          <div class="col-6">
            <h1><strong>Hollow</strong>
            </h1>
            <div class="content">
              <a href="https://hollow.pt/" target="_blank">
                <div class="content-overlay"></div>
                <img class="content-image img-fluid" src={hollowExample}/>
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Hollow</h3>
                  <p class="content-text">Online classes plataform.</p>
                  <span class="badge badge-dark mr-2">Django</span>
                  <span class="badge badge-dark mr-2">Bootstrap</span>
                  <span class="badge badge-dark mr-2">PostgreSQL</span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6">
            <h1><strong>Coding55</strong>
            </h1>
            <div class="content">
              <a href="https://coding55.com/pt-br/" target="_blank">
                <div class="content-overlay"></div>
                <img class="content-image img-fluid" src={coding55Example}/>
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Coding55</h3>
                  <p class="content-text">Digital web development agency.</p>
                  <span class="badge badge-dark mr-2">Django</span>
                  <span class="badge badge-dark mr-2">Bootstrap</span>
                  <span class="badge badge-dark mr-2">PostgreSQL</span>
                </div>
              </a>
            </div>
          </div>
          <div className='col-1 pl-5'>
          <a class="scroll-down mb-5"></a>
          </div>
        </div>
      </div>

      <div class="container home_container" id="zabuza">
        <div class="row align-items-center justify-content-center row_container">
          <div class="col-6">
            <h1><strong>LEDSHOW</strong>
            </h1>
            <div class="content">
              <a href="https://ledshow.app/" target="_blank">
                <div class="content-overlay"></div>
                <img class="content-image img-fluid" src={ledshowExample}/>
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">LEDSHOW</h3>
                  <p class="content-text">Publicity startup landing page.</p>
                  <span class="badge badge-dark mr-2">Django</span>
                  <span class="badge badge-dark mr-2">Bootstrap</span>
                  <span class="badge badge-dark mr-2">PostgreSQL</span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-6">
            <h1><strong>Panyart</strong>
            </h1>
            <div class="content">
              <a href="https://panyart.studio/" target="_blank">
                <div class="content-overlay"></div>
                <img class="content-image img-fluid" src={panyartExample}/>
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Panyart</h3>
                  <p class="content-text">Digital artist portfolio.</p>
                  <span class="badge badge-dark mr-2">React</span>
                  <span class="badge badge-dark mr-2">Bootstrap</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      </ReactPageScroller>
    </motion.div>
  );
}

export default Portfolio;
