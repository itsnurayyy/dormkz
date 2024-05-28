import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck } from 'react-icons/bs'
import { BsFillBookmarkFill } from 'react-icons/bs'

const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Make memories of the World</h2>
          <button className='btn'>View All</button>
        </div>
        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon' />
            </div>
            <span className="cardTitle">Find Your Perfect Space</span>
            <p>Book your ideal dorm room easily with options that cater to all your needs. </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon' />
            </div>
            <span className="cardTitle">Secure and Comfortable</span>
            <p>Your safety is our priority. Enjoy peace of mind with on-site assistance to ensure a comfortable stay in our dormitories.</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsFillBookmarkFill className='icon' />
            </div>
            <span className="cardTitle">Affordable Living</span>
            <p>Experience campus life without the financial stress. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
