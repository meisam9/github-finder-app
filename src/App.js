import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Footer from './components/layout/Footer';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvier } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvier>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar/>
            <main className='container mx-auto px-3 pb-12'>
              <Alert/>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/user/:login' element={<User/>}/>
                <Route path='/*' element={<NotFound/>}/>
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
      </AlertProvier>
    </GithubProvider>
  );
}

export default App;
