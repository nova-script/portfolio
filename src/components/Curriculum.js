import '../assets/css/curriculum.css';

/* Framer Motion */
import { motion } from 'framer-motion';

/* Custom Components */
import CurriculumGeneralInfo from './CurriculumGeneralInfo';
import CurriculumMainContent from './CurriculumMainContent';

/* React Router */
import { 
  Link,
} from "react-router-dom";

function Curriculum() {
  return (
    <motion.div
        className="curriculum"
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={{duration: 1}}>
    <div className="container mb-5 mt-5">
      <div className='row my-5'>
        <div className='col-12 pl-5'>
          <Link to='/' className='pl-5'>
            <a class="scroll-left ml-3"></a> 
          </Link>
          
        </div>
      </div>
        <div className="row mt-5">
            <CurriculumGeneralInfo/>
            <CurriculumMainContent/>
        </div>
    </div>
    </motion.div>
  );
}

export default Curriculum;
