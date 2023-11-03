import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchYachtDetails } from '../../redux/detailsSlice';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaSun, FaArrowAltCircleRight } from 'react-icons/fa';
import multicolor from '../../assets/multicolor.png';
import './Detail.css';

const Details = () => {
  const navigate = useNavigate();
  const trStyle = {
    textAlign: 'center',
    fontWeight: '400',
    fontStyle: 'italic',
  };
  const navigateToReservation = () => {
    navigate('/reserve', { state: yachtDetails });
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const yachtDetails = useSelector((state) => state.details.yachtDetails);
  const loading = useSelector((state) => state.details.isLoading);
  const hasErrors = useSelector((state) => state.details.hasErrors);

  useEffect(() => {
    console.log(`Fetching yacht details for id: ${id}`);
    dispatch(fetchYachtDetails(id));
  }, [dispatch, id]);

  if (hasErrors) {
    return <div>There was an error fetching yacht details.</div>; // Correct error message
  }

  if (loading || !yachtDetails) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  const annualPercentage = () => {
    // Generate a random number between 20 and 90
    const randomPercentage = Math.floor(Math.random() * 71) + 20;
    return randomPercentage;
  }

  const apr = annualPercentage();

  return (
    <>
      <div className="yacht-details-wrapper pt-[8rem]">
        <figure className="yacht-image mx-auto">
          <img src={yachtDetails.image} alt={yachtDetails.name} className='object-cover w-full' />
        </figure>
        <div className="yacht-details">
          <div>
            <h2 style={{ fontWeight: 'bold', paddingTop: '15px' }}>{yachtDetails.name}</h2>
            <p
              style={{
                padding: '0 0 16px 0',
                fontWeight: '600',
                fontSize: '12px',
              }}
            >
              {yachtDetails.description}{' '}
            </p>
          </div>

          <div className="yacht-details-table">
            <table>
              <tbody>
                <tr>
                  <td>Yacht Name</td>
                  <td style={trStyle}>{yachtDetails.name}</td>
                </tr>
                <tr>
                  <td>Yacht Model</td>
                  <td style={trStyle}>{yachtDetails.model}</td>
                </tr>
                <tr>
                  <td>Fee-Per-Day</td>
                  <td style={trStyle}>£{yachtDetails.fee_per_day}</td>
                </tr>
              </tbody>
            </table>

            <p>
              <strong style={{ fontSize: '1rem', padding: '0.5rem' }}> {apr}% APR</strong>
              <em>Representative</em>
            </p>
          </div>

          <div className="discover-more">
            <p
              style={{
                fontWeight: '600',
                padding: '0 0.5rem',
                fontSize: '12px',
              }}
            >
              {' '}
              DISCOVER MORE MODELS
              <span>
                <Link to={`/main`}>
                  {' '}
                  <FaAngleRight />{' '}
                </Link>
              </span>
              <img src={multicolor} alt="multicolor" className="multicolor" />
            </p>
          </div>
          <div className="yacht-details-button">
            <button onClick={navigateToReservation}>
              <span style={{ paddingRight: '15px', color: 'white' }}>
                {' '}
                <FaSun />{' '}
              </span>
              Reserve
              <span style={{ paddingLeft: '15px' }}>
                <FaArrowAltCircleRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
