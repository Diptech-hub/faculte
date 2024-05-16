import { FC } from 'react';
import "../styles/header.css"

interface Props {
  text1: string;
  text2: string;
}

const Header: FC<Props> = ({ text1, text2 }) => {
  return (
    <div className="header">
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

export default Header;