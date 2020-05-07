import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import AppSection from './AppSection';
// import Card from './Card';

import CardSection from './CardSection';


const App = () => {
  return(
    <div>
      <Navbar/>
      <HeroSection/>
       <AppSection/> 
        <div className='container'>
        <div className='row'>
         <div className='col-6'><CardSection/></div>
         <div ><CardSection/></div>
         <div ><CardSection/></div>
         <div ><CardSection/></div>
         <div ><CardSection/></div>         
       </div>
        </div>
      <Footer/> 
    </div>
  )
}


export default App;