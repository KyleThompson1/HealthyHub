import './App.css';
import { Homepage } from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateAccountpage } from './Pages/CreateAccountpage';
import { SignInpage } from './Pages/SignInpage';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { MissionStatement } from './Pages/MissionStatement';
import { Recipes } from './Components/Recipes/Recipes';

//REMEBER IMPORT FOR Font Awesome for social media icons
import '@fortawesome/fontawesome-free/css/all.min.css';


export const App = () => {
  return (


    <div>
    <div className='lilita-one-regular'>

      <Router>
        <Routes>

          {/* Add other routes as needed */}

          <Route path='/' element={<Homepage />} /> {/* Default route */}
          <Route path='/create-account' element={<CreateAccountpage />} />
          <Route path='/sign-in' element={<SignInpage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/mission' element={<MissionStatement />} />

        </Routes>
      </Router>

    </div>
    </div>
  );
}