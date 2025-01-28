import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/react.png";
import meter5 from "../assets/img/tailwind.png";
import meter6 from "../assets/img/nodejs.png";
import meter7 from "../assets/img/expressjs.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="iitem">
                  <img src={meter2} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="items">
                  <img src={meter3} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="itemm">
                  <img src={meter4} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="iteem">
                  <img src={meter5} alt="Image" />
                  <h5>Tailwing CSS</h5>
                </div>
                <div className="ittem">
                  <img src={meter6} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Express JS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
