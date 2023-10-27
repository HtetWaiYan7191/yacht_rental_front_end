import { Empty } from 'antd'; 
import './NoData.css'
import Navbar from '../Navbar/Navbar';
const NoData = () => {
  return (
    <>
        <section className="no-data-section">
      <div className="no-data-container">
      <Empty description="Hello, There is no yachts available right now " className='text-md tracking-wide font-semibold capitalize'/> 
      </div>
    </section>
    </>
   
    
  )
}

export default NoData
