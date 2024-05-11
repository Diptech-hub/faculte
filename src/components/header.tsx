import { FC } from 'react';

interface Props {
  paragraph1: string;
  paragraph2: string;
}

const Header: FC<Props> = ({ paragraph1, paragraph2 }) => {
  return (
    <div>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
};

export default Header;