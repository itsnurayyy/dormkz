import sdu from '../../../../assets/sdu.png'
import nazarbayev from '../../../../assets/nazarbayev.jpg'
import astanait from '../../../../assets/astanait.jpg'
import kaznu from '../../../../assets/kaznu.jpg'
import sd from '../../../../assets/sdu-logo.jpg'
import nu from '../../../../assets/nu-logo.png'
import aitu from '../../../../assets/aitu-logo.png'
import kazakh from '../../../../assets/kaznu-logo.jpg'


const travelers = [
  {
    id: 1,
    destinationImage: sdu,
    travelerImage: sd,
    travelerName: 'Suleiman Demirel University',
    socialLink: '@SDU'
  },
  {
    id: 2,
    destinationImage: nazarbayev,
    travelerImage: nu,
    travelerName: 'Nazarbayev University',
    socialLink: '@Nazarbayev'
  },
  {
    id: 3,
    destinationImage: astanait,
    travelerImage: aitu,
    travelerName: 'Astana IT university',
    socialLink: '@astanait'
  },
  {
    id: 4,
    destinationImage: kaznu,
    travelerImage: kazakh,
    travelerName: 'Kazakh National University',
    socialLink: '@KazNU'
  }
]

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top Dormitories</h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelersDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travelers
