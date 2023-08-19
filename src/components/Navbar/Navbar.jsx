import { useState, useEffect } from 'react';
import './Navbar.scss'
import { NavDesk, NavMobile } from '../../components'

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(prevScrollY > currentScrollY);
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);
  return (
    <header className={isVisible ? 'navbar' : 'navbar hidden'}>
      <NavMobile />
      <NavDesk />
    </header>
  )
}

export default Navbar