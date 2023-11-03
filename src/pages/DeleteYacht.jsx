import DeleteTable from '../components/DeleteTable/DeleteTable';
import { useDispatch, useSelector } from 'react-redux';
import { deleteYacht } from '../redux/yachtSlice';
import NoData from '../components/NoData/NoData';
import Loading from '../components/Loading/Loading';
const DeleteYacht = () => {
  const yachts = useSelector((state) => state.yacht.values);
  const loading = useSelector((state) => state.yacht.loading);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteYacht(id));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : yachts.length < 1 ? (
        <NoData />
      ) : (
        <section className="delete-section pt-0 lg:pt-20">
          <div className="delete-container h-[100vh] pt-[4rem] lg:ms-[20%] lg:flex lg:h-[50vh] lg:flex-col lg:items-center lg:pt-0">
            <h1 className="mx-auto w-[50%] border-b-4 border-black border-b-primary pb-2 text-center text-2xl font-bold tracking-wider lg:w-[25%]">
              Delete Yachts
            </h1>
            <DeleteTable yachts={yachts} loading={loading} handleClick={handleClick} />
          </div>
        </section>
      )}
    </>
  );
};

export default DeleteYacht;

