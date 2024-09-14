
import { styled } from 'styled-components';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';


function App() {


  return (
    <>
      <div>
        <Navbar />
        <Section id="home">
          <Home />
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
