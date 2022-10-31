import '../assets/css/home.css';

/* React Router */
import { 
  Link,
} from "react-router-dom";

/* Framer Motion */
import { motion } from 'framer-motion';

function Home() {
  return (
      <motion.div className="home"
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
    <div class="container home_container">
      <div class="row align-items-center row_container">
        <div class="col-6">
          <h3>
            <a href='https://github.com/joseguilherme-dev' className='text-white' target='_blank'><i class="fab fa-github-square mr-3"></i></a>
            <a href='https://dev.to/joseguilhermefmoura/' className='text-white' target='_blank'><i class="fab fa-dev mr-3"></i></a>
            <a href='https://www.linkedin.com/in/joseguilhermefmoura/' className='text-white' target='_blank'><i class="fab fa-linkedin mr-3"></i></a>
          </h3>
          <h1><strong>
            José Guilherme,<br/>
            Full-Stack Developer.</strong>
          </h1>
          <h5 class="my-4">
          <strong>Hi! I produce elegant, performant and accessible digital
            experiences at Brasília, Brazil.</strong>
          </h5>
          <div className='row m-0 p-0'>
            <div className='col-4 m-0 p-0 mr-3'>
                    <Link to='portfolio' class="fancy" href="#">
                      <span class="top-key"></span>
                      <span class="text">Portfolio</span>
                      <span class="bottom-key-1"></span>
                      <span class="bottom-key-2"></span>
                    </Link>
                </div>
                <div className='col-4 m-0 p-0'>
                    <Link to='curriculum' class="fancy" href="#">
                      <span class="top-key"></span>
                      <span class="text">Curriculum</span>
                      <span class="bottom-key-1"></span>
                      <span class="bottom-key-2"></span>
                    </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Home;
