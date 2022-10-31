/* React Router */
import { 
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

/* Custom Components */
import Home from './Home'
import Curriculum from './Curriculum';
import Portfolio from "./Portfolio";

/* Framer Motion */
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="curriculum" element={<Curriculum />}/>
                <Route path="portfolio" element={<Portfolio/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;