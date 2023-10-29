import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element }) => {
  const authToken = sessionStorage.getItem('authToken');

  if (authToken) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
}