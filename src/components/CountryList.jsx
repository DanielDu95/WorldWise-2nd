import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="fine" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.countryName).includes(city.country))
      return [...arr, { countryName: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.countryName} />
      ))}
    </ul>
  );
}

export default CountryList;
