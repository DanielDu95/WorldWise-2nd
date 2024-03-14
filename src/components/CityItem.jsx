import { Link, NavLink } from "react-router-dom";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  const { lat, lng } = position;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));
  return (
    <li>
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h2 className={styles.name}>{cityName}</h2>
        <time className={styles.date}>{formatDate(date)}</time>
      </Link>
    </li>
  );
}

export default CityItem;
