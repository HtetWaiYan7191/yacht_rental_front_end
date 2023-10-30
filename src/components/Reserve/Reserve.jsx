import './Reserve.css';

const Reserve = () => {

  return (
    <>
      <div className='form-container'>
        <div className='reservation-title'>
          <h1> Yacht is availbale and ready to be reserved!</h1>
          <hr />
          <p style={{ paddingTop: '5px' }}>
            {' '}
            Please fill the form below to reserve the yacht and enjoy, you can
            reserve the yacht.
          </p>
        </div>
        <form>
          <input
            type='date'
            placeholder='Start Date'
          />
          <input
            type='date'
            placeholder='End Date'
          />
          <input
            type='text'
            placeholder='City'
          />
            <input
              type='text'
              placeholder='Yacht Name'
            />
          <button type='submit' className='reserve-button'>
            Reserve Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Reserve;
