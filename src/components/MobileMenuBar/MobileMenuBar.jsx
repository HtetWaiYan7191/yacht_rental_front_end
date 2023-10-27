import './MobileMenuBar.css'; // Import your CSS file with animations
import PropTypes from 'prop-types';

const MobileMenuBar = ({toggleMenu, isOpen}) => {
  

  return (
    <div className={`container ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

MobileMenuBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired, // Function to toggle the menu
  isOpen: PropTypes.bool.isRequired,     // Boolean to indicate if the menu is open or closed
};

export default MobileMenuBar;
