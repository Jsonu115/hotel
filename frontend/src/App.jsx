import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Rooms from './Pages/Rooms'
import Gallery from './Pages/Gallery'
import Dinning from './Pages/Dinning'
import News from './Pages/News'
import ContactUs from './Pages/ContactUs'
import ScrollTop from './Components/ScrollTop'
function App() {
  
  return (
    <>
   <Router>
    <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path ="/about" element={<About />} />
       <Route path ="/rooms" element={<Rooms />} />
       <Route path= "/gallery" element={<Gallery />} />
       <Route path="/dinning" element={<Dinning />} />
       <Route path="/news" element={<News />} />
       <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
