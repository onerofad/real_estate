import './App.css';
import { createMedia } from '@artsy/fresnel'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Home from './components/desktop/Home';
import Projects from './components/desktop/Projects';
import RealEstate from './components/desktop/RealEstate';
import RealEstateDetail from './components/desktop/RealEstateDetail';

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
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home  />} />
            <Route path='projects' element={<Projects  />} />
            <Route path='realestate' element={<RealEstate  />} />
            <Route path='realestate_details' element={<RealEstateDetail />} />
          </Routes>
        </BrowserRouter>
        
      </Media>

      <Media greaterThan="mobile">
        <BrowserRouter>
        <Routes>
          <Route index element={<Home mobile />} />
          <Route path='projects' element={<Projects />} />
          <Route path='realestate' element={<RealEstate />} />
          <Route path='realestate_details' element={<RealEstateDetail />} />
        </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
   
  );
}

export default App;
