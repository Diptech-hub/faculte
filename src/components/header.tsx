import { FC } from 'react';

interface Props {
  text1: string;
  text2: string;
}

const Header: FC<Props> = ({ text1, text2 }) => {
  return (
    <div>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

export default Header;