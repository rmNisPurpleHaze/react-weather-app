import s from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <h1 className={s.title}>Прогноз погоди</h1>
        <form className={s.form} id="form">
          <input
            id="inputCity"
            className={s.input}
            type="text"
            placeholder="Введіть назву міста"
          />
          <button className={s.btn}>Показати</button>
        </form>
      </header>
    </div>
  );
};
export default Header;
