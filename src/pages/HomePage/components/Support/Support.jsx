import { useEffect } from "react";
import supportimg from "../../../../assets/supporting.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Support() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Student Support</small>
          <h2>Find help with Dorm:Navigation</h2>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div data-aos="fade-down" data-aos-duration="2500" className="singleInfo">
              <span className="number">01</span>
              <h4>Dormitory Options</h4>
              <p>
                Explore our range of on-campus living spaces designed to suit different preferences
                and budgets. Our dormitories offer comfortable, secure, and conveniently located
                housing to enrich your university experience.{" "}
              </p>
            </div>

            <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Room Features and Amenities</h4>
              <p>
                Discover the amenities and features that come with each dormitory option. From fully
                furnished rooms to high-speed internet access and communal living areas, find out
                what makes each dormitory unique.
              </p>
            </div>

            <div data-aos="fade-down" data-aos-duration="4500" className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Application Process</h4>
              <p>
                Get detailed information on how to apply for dormitory housing, including
                application deadlines, eligibility criteria, and the selection process. Start your
                journey to finding your home away from home with us.{" "}
              </p>
            </div>
          </div>

          <div className="imgDiv">
            <img data-aos="fade-left" data-aos-duration="4500" src={supportimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
