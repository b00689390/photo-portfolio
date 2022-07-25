//Import Icons
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import home2 from "../img/home2.png";

const cards = [
  { icon: clock, h1Text: "Efficient", pText: "Lorem ipsum dolor sit amet." },
  { icon: teamwork, h1Text: "Teamwork", pText: "Lorem ipsum dolor sit amet." },
  {
    icon: diaphragm,
    h1Text: "Diaphragm",
    pText: "Lorem ipsum dolor sit amet.",
  },
  { icon: money, h1Text: "Money", pText: "Lorem ipsum dolor sit amet." },
];

const ServicesSecton = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services.
        </h2>

        <div className="grid cols-2 gap-8">
          {cards.map((card) => {
            return (
              <div className="card">
                <div className="icon">
                  <h1>{card.h1Text}</h1>
                  <div className="image">
                    <img src={card.icon} alt={card.pText} />
                  </div>
                  <p>{card.pText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="image">
        <img src={home2} alt="Services" />
      </div>
    </div>
  );
};

export default ServicesSecton;
