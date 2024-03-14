import { useParams, useSearchParams } from "react-router-dom";

function City() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { id } = useParams();
  return (
    <>
      <h1>CITY {id}</h1>
      <p>
        Position: {lat}, {lng}
      </p>
    </>
  );
}

export default City;
