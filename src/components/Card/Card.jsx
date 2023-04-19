import s from "./Card.module.css";

const Card = () => {
  return (
    <div className={s.card}>
      <h2 className={s.cardCity}>
        name <span>country</span>
      </h2>
      <div className={s.cardWeather}>
        <div className={s.cardValue}>
          temp<sup>°c</sup>
        </div>
        <img
          className={s.cardImg}
          src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg"
          alt="weather"
        ></img>
      </div>
      <div className={s.cardDesc}>condition</div>
    </div>
  );
};
export default Card;
