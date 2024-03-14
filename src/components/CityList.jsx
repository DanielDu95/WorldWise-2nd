import CityItem from "./CityItem";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import Message from "./Message";
function CityList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add some cities that you have traveled" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
