import { useNavigate, useSearchParams } from "react-router-dom";
import Form from "./Form";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("/app/form");
      }}
    >
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>

      <button onClick={() => setSearchParams({ lat: 29, lng: 30 })}>
        CHANGE POSITION
      </button>
    </div>
  );
}

export default Map;
