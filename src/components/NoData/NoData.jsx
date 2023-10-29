import noData from  '../../assets/noData.png'
const NoData = () => {
  return (
    <>
        <section className="no-data-section">
      <div className="no-data-container flex flex-col items-center justify-center h-[50vh] lg:h-[90vh]">
        <h2 className='text-gray-500 font-semibold font-serif'>There is no data currently...</h2>
        <figure className='w-[200px]'>
          <img src={noData} alt="" className='w-full' />
        </figure>
      </div>
    </section>
    </>
   
    
  )
}

export default NoData
