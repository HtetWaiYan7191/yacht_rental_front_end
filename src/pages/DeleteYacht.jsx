import DeleteTable from "../components/DeleteTable/DeleteTable"

const DeleteYacht = () => {
  
  return (
         <section className="delete-section lg:pt-20 pt-0">
         <div className="delete-container  h-[100vh] lg:flex lg:flex-col lg:justify-end lg:h-[50vh] lg:items-center">
           <h1 className="text-center text-2xl font-bold tracking-wider border-b-primary border-b-4 border-black w-[50%] lg:w-[15%] mx-auto pb-2">Delete Yachts</h1>
           <DeleteTable/>
         </div>
       </section>
   
  )
}

export default DeleteYacht
