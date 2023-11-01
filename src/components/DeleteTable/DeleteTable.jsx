import './DeleteTable.css'
import PropTypes from 'prop-types'

const DeleteTable = ({yachts, handleClick}) => {
    return (
      <div className="w-full mx-auto mt-10">
      <table className="table w-full lg:w-[80%] mx-auto border-2">
        <thead>
          <tr className="border-2 bg-primary/80 text-white">
            <th className="p-3 font-semibold text-md">Name</th>
            <th className="p-3 font-semibold text-md">Model</th>
            <th className="p-3 font-semibold text-md">Fee Per Day</th>
            <th className="p-3 font-semibold text-md">Action</th>
          </tr>
        </thead>
        <tbody>
          {yachts.map((yacht) => (
            <tr key={yacht.id} className="table-row">
              <td className="text-center border-b py-3 text-sm">{yacht.name}</td>
              <td className="text-center border-b py-3 text-sm">{yacht.model}</td>
              <td className="text-center border-b py-3 text-sm">$ {yacht.fee_per_day}</td>
              <td className="text-center border-b border-b-white py-3 text-sm bg-red-500 text-white">
                <button onClick={() => handleClick(yacht.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>   
      </div> 
  )
}


DeleteTable.propTypes = {
  yachts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};


export default DeleteTable
