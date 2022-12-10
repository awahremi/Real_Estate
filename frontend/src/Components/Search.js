import { useEffect, useState } from "react";
import "./CSS/Search.css";

const Search = ({ setProperties }) => {
  const [region, setRegion] = useState("");
  const [town, setTown] = useState("");
  const [rent, setRent] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000000000);

  const [search, setSearch] = useState(false);

  useEffect(() => {
    console.log(rent);
    fetch(
      `http://localhost:5000/api/properties?region=${region}&town=${town}&for=${rent}&price=${maxPrice}`
    )
      .then((response) => response.json())
      .then((data) => setProperties(data.properties));
  }, [search]); //Don't forget second parameter of empty array, so you don't enter into infinite loop or get an error

  return (
    <div className="search-container">
      <div className="search-container-form">
        <select
          value={region}
          onChange={(event) => setRegion(event.target.value)}
          placeholder="Search by region"
          name="region"
          id="region"
        >
          <option value="">Select region</option>
          <option value="Adamawa">Adamawa</option>
          <option value="Center">Center</option>
          <option value="East">East</option>
          <option value="Far North">Far North</option>
          <option value="Littoral">Littoral</option>
          <option value="North">North</option>
          <option value="North West">North West</option>
          <option value="South">South</option>
          <option value="South West">South West</option>
          <option value="West">West</option>
        </select>
        <input
          onChange={(event) => setTown(event.target.value)}
          value={town}
          placeholder="Search by town"
        />
        <div onChange={(event) => setRent(event.target.value)}>
          <input type="radio" value="rent" name="rent" /> For rent
          <input type="radio" value="sell" name="rent" /> For sale
        </div>

        <input
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
          type="number"
          placeholder="Max price"
        />
        <button onClick={() => setSearch(!search)}>Search</button>
      </div>
    </div>
  );
};

export default Search;
