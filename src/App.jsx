import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

import { useEffect, useState } from 'react'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Product from './components/Products/Product';

function App() {
  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrdrPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(()=> {
    Aos.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, [])

  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200' >
       <Navbar handleOrdrPopup={handleOrdrPopup} />
       <Hero  handleOrdrPopup={handleOrdrPopup}/>
       <Product />
       <Banner />
    </div>
    </>
  )

}

export default App
