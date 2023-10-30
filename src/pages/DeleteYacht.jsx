import DeleteTable from "../components/DeleteTable/DeleteTable"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteYacht, fetchYachts } from "../redux/yachtSlice";
import NoData from "../components/NoData/NoData";
import Loading from "../components/Loading/Loading";
const DeleteYacht = () => {
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
        {loading ? <Loading/> : (
          yachts.length < 1 ? <NoData/> : (
            <section className="delete-section lg:pt-20 pt-0">
          <div className="delete-container lg:ms-[20%] pt-[10rem] lg:pt-0 h-[100vh] lg:flex lg:flex-col lg:justify-end lg:h-[50vh]  lg:items-center">
            <h1 className="text-center text-2xl font-bold tracking-wider border-b-primary border-b-4 border-black w-[50%] lg:w-[15%] mx-auto pb-2">Delete Yachts</h1>
            <DeleteTable yachts={yachts} loading={loading} handleClick={handleClick} />
          </div>
        </section>
          )
          
        )}
      </>
      
    
   
  )
}

export default DeleteYacht
