/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router'

const Details = () => {
  const {id} = useParams();
  return (
    <div>
        <h1 className='text-black '>this is {id} page</h1>
    </div>
  )
}

export default Details
