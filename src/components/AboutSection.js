import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true.</h2>
          </div>
        </div>
        <p>Contact us for any photography and videography ideas you may have. We have amazing skills.</p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="Homepage" />
      </div>
    </div>
  );
};

export default AboutSection;
