import  { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from "react-icons/fa";

const ScrollBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
   
    <Button className="bg-main-color py-2 px-3 border-none m-0 position-fixed" onClick={scrollToTop} style={{ display: showButton ? 'block' : 'none' ,bottom: "10px" ,right: "10px" }}>
        <FaArrowUp /></Button>

  );
};

export default ScrollBtn;