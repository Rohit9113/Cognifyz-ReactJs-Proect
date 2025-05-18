import React, { useState } from 'react';
import Nav from './Components/Navbar/Nav.jsx';
import TastOne from './Components/Main_Pages/TaskOne.jsx';
import TaskTwo from './Components/Main_Pages/TaskTwo.jsx';
import TaskFive from './Components/Main_Pages/TaskFive.jsx';
import TaskSix from './Components/Main_Pages/TaskSix.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  // global background color
  const [bgColor, setBgColor] = useState('#ffffff');
  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="min-h-screen transition-all duration-500">
        <Nav />
        <TastOne />
        <TaskTwo setBgColor={setBgColor}/>
        <TaskFive />
        <TaskSix />
        <Footer />
      </div >
    </>
  );
}

export default App;
