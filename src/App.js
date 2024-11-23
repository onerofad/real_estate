import './App.css';
import { createMedia } from '@artsy/fresnel'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Home from './components/desktop/Home';

const {MediaContextProvider, Media} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  }
})

function App() {

  return (

    <MediaContextProvider>
      <Media at='monbile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home mobile />} />
          </Routes>
        </BrowserRouter>
        
      </Media>

      <Media greaterThan="mobile">
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
   
  );
}

export default App;
