
import { Routes ,Route} from 'react-router-dom'
// import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainHome from './components/MainHome';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BlogList from './pages/BlogList';
import SingleBlog from './pages/SingleBlog';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </div>
  );
}



export default App
