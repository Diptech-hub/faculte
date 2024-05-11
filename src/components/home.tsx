import NavBar from "../components/navBar"
import Hero from "../components/hero"
import Banner from "../components/banner"

const Home: React.FC = () => {
    return (
      <div>
        <NavBar/>
        <Hero />
        <Banner />
      </div>
    );
  }
  
  export default Home;