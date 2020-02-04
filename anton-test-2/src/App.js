import React from 'react';
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Content from './components/content/content'
import Footer from "./components/footer/footer";
import './App.scss';

const App = () => {
  return (
    <div className="App">
        <Header/>
        <div className='middleContent'>
            <Sidebar/>
            <Content/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
