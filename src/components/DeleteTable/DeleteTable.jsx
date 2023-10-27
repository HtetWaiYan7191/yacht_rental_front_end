import { useDispatch, useSelector } from "react-redux";
import { deleteYacht, fetchYachts } from "../../redux/yachtSlice";
import { useEffect } from "react";
import './DeleteTable.css'
import Loading from "../Loading/Loading";
import NoData from "../NoData/NoData";
const DeleteTable = () => {
    const yachts = useSelector((state) => state.yacht.values);
    const loading = useSelector((state) => state.yacht.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchYachts());
      }, [dispatch]);

    const handleClick = (id) => {
        dispatch(deleteYacht(id))
    }
    
    return (
        <>
        {loading ? (
          <Loading />
        ) : (
          yachts.length < 1 ? (
            <NoData />
          ) : (
            <table className="table w-[90%] lg:w-[40%] mx-auto border-2 mt-10">
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
          )
        )}
      </>
      
   
  )
}

export default DeleteTable
