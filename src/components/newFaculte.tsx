import "../styles/newFaculte.css"
import { IoMdArrowRoundForward } from "react-icons/io";
import Header from "../components/header";

const Faculte: React.FC = () => {
    return(
        <div className="faculte">
            <Header text1="New on Faculte" text2="Explore our newest programs, focused on delivering in-demand skills" />
            <div className="faculte__head">
                <a href="">Sciences</a>
                <a href="">Art</a>
                <a href="">Design</a>
                <a href="">Web Developments</a>
                <a href="">Business</a>
                <a href="">Digital Marketer</a>
                <a href="">See all <IoMdArrowRoundForward /></a>
            </div>
        </div>
    )
}

export default Faculte;

