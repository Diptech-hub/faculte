import NavBar from "../components/navBar"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Footer from "../components/footer"
import Tutor from "../components/tutor"
import Explore from "../components/explore"
import Faculte from "../components/newFaculte"

const Home: React.FC = () => {
    return (
      <div>
        <NavBar/>
        <Hero />
        <Banner />
        <Faculte />
        <Explore />
        <Tutor />
        <Footer />
      </div>
    );
  }
  
  export default Home;