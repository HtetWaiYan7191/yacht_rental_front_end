import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconLink from '../IconLink/IconLink';

const YachtCard = ({ yacht }) => {
  return (
    <div className="yacht-card h-[600px] pb-10 lg:h-[700px] group">
      <Link to={`/details/${yacht.id}`}>
        <figure className="h-[40%] w-full lg:h-[50%]">
          <img
            src={yacht.image}
            alt={yacht.image}
            className="h-[100%] w-full rounded-md object-cover border border-transparent transition duration-300 ease-in-out group-hover:border-primary group-hover:border-4"
          />
        </figure>
      </Link>
      <h2 className="mt-3 text-center text-2xl font-semibold tracking-wider">{yacht.name}</h2>
      <div className="dot-line mx-auto w-[80%] text-center text-lg font-bold text-gray-500">
        . . . . . . . . . . . . . .
      </div>
      <footer className="mt-10">
        <p className="px-2 text-center text-gray-400">
          {yacht.description}
        </p>
        <IconLink />
      </footer>
    </div>

  );
};

YachtCard.propTypes = {
  yacht: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default YachtCard;
