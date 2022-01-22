import React from 'react';

interface Props {
  title: string;
}

const ModalHeader: React.FC<Props> = ({ title }) => {
  return (
    <header className="text-lg text-center my-8 relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:-ml-5 after:w-10 after:h-0.5 after:bg-black">
      {title}
    </header>
  );
};

export default ModalHeader;
