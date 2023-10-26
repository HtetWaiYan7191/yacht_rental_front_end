import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const YachtCard = ({yacht}) => {
  console.log(`this is from yacht ${yacht.name}`)
  return (
    <Link className='w-full' to={`/detail/${yacht.id}`}>
    <div className='yacht-card h-[300px] bg-gray-200'>
        <figure className='w-full h-[65%]'>
          <img src={yacht.image} alt={yacht.image} className='w-full h-[100%] object-cover rounded-md' />
        </figure>
        <h2 className='font-semibold text-center mt-2 text-3xl'>{yacht.model}</h2>
        <article className='text-center text-sm text-gray-400 mt-2'>{yacht.description}</article>
    </div>
    </Link>
  )
}

YachtCard.propTypes = {
  yacht: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default YachtCard
