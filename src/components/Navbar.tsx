// Import necessary hooks and assets
import { useEffect, useState } from 'react'; // useEffect and useState hooks for managing component states
import { Link } from 'react-router-dom'; // For navigation between pages

// Import styles, constants, and assets
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  // State management for active section, mobile menu toggle, and scroll position
  const [active, setActive] = useState(''); // Track the currently active section (for highlighting in the menu)
  const [toggle, setToggle] = useState(false); // State for toggling the mobile menu on and off
  const [scrolled, setScrolled] = useState(false); // State to change navbar background color when scrolling

  // useEffect hook to track scroll position and adjust navbar background color
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the vertical scroll position
      if (scrollTop > 100) {
        setScrolled(true); // Set background color if scrolled more than 100px
      } else {
        setScrolled(false); // Reset background color when at the top of the page
      }
    };

    // Add scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      {/* Navbar container with dynamic background based on scroll */}
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(''); // Reset active section when logo is clicked
            window.scrollTo(0, 0); // Scroll back to the top
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Yunus &nbsp;
            <span> | TechyForge</span>
          </p>
        </Link>

        {/* Desktop navigation links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)} // Set active section on click
            >
              <a href={`#${nav.id}`}>{nav.title}</a>{' '}
              {/* Anchor links to section IDs */}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu} // Toggle between open and close icons based on state
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)} // Toggle the menu visibility on click
          />

          {/* Mobile dropdown menu */}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex' // Hide or show menu based on toggle state
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle); // Close the menu when a link is clicked
                    setActive(nav.title); // Set the clicked item as active
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>{' '}
                  {/* Anchor links to section IDs */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export the Navbar component
export default Navbar;
