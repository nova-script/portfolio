import './assets/css/stars.css';
import './assets/css/base.css';

/* Custom Components */
import AnimatedRoutes from './components/AnimatedRoutes';

/* React */
import { useContext } from 'react';

/* React Router */
import { 
  BrowserRouter,
  HashRouter,
} from "react-router-dom";

/* React  */

function App() {

  return (
    <div className="App">
      <HashRouter>
        <AnimatedRoutes/>
      </HashRouter>
    </div>
  );
}

export default App;
