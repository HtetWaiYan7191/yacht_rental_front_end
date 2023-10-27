import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import IconLink from '../IconLink/IconLink'
const YachtCard = ({yacht}) => {  
  return (
    <Link className='w-full' to={`/detail/${yacht.id}`}>
    <div className='yacht-card h-[600px] lg:h-[700px] pb-10 '>
        <figure className='w-full h-[40%] lg:h-[50%]'>
          <img src={yacht.image} alt={yacht.image} className='w-full h-[100%] object-cover rounded-md' />
        </figure>
        <h2 className='font-semibold text-center mt-3 text-2xl tracking-wider'>{yacht.name}</h2>
        <div className='dot-line text-center w-[80%] mx-auto text-gray-500 text-lg font-bold '>. . . . . . . . . . . . . . </div>

        <footer className="mt-10">
                <p className="text-center text-gray-400 px-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellendus aperiam doloribus nemo, veritatis, odit temporibus reprehenderit culpa error illum minus iste eligendi alias explicabo maiores impedit mollitia corrupti praesentium!</p>
                <IconLink/>
            </footer>
    </div>
    </Link>
  )
}

YachtCard.propTypes = {
  yacht: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default YachtCard
