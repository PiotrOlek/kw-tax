import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <Services />
      <Work />
      <Contact />
      <Footer />
      <Footer2 />
      <Footer2 />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
