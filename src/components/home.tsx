import NavBar from "../components/navBar"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Footer from "../components/footer"
import Tutor from "../components/tutor"
import Explore from "../components/explore"

const Home: React.FC = () => {
    return (
      <div>
        <NavBar/>
        <Hero />
        <Banner />
        <Explore />
        <Tutor />
        <Footer />
      </div>
    );
  }
  
  export default Home;