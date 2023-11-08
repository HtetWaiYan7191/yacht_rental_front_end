import './Loading.css'

const Loading = () => {
  return (
    <section className="loading-section  backdrop-blur-md">
        <div className="loading-container">
            <i className="fas fa-spinner text-black font-bold text-3xl spinner"></i>
        </div>
    </section>
  )
}

export default Loading
