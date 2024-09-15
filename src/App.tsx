
import { styled } from 'styled-components';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import Menu from './Components/Menu';
import About from './Components/About';
import Location from './Components/Location';


function App() {


  return (
    <>
      <div>
        <Navbar />
        <Section id="home">
          <Home />
        </Section>
        <Section id="menu">
          <Menu />
        </Section> 
        <Section id="about">
          <About />
        </Section> 
        <Section id="location">
          <Location />
        </Section> 
     
       
      </div>
    </>
  )
}

export default App

const Section = styled.section`
display: flex;
width: 100%;
height: 100vh;
background-color: #1F2020;
`