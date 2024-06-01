import NavBar from "../components/navBar"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Footer from "../components/footer"
import Tutor from "../components/tutor"
import Explore from "../components/explore"
import Faculte from "../components/newFaculte"
import Community from "../components/community"
import SignUp from "../components/signUp"

const Home: React.FC = () => {
    return (
      <div>
        <NavBar/>
        <Hero />
        <Banner />
        <Faculte />
        <Explore />
        <Community />
        <Tutor />
        <Footer />
        <SignUp />
      </div>
    );
  }
  
  export default Home;