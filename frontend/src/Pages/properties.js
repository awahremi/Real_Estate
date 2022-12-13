import { useState } from "react";
import Search from "../Components/Search";

const Properties = () => {
  const [properties, setProperties] = useState(null);

  return (
    <div>
      <Search setProperties={setProperties} />
      {properties?.map((property, i) => {
        return (
          <div style={{ border: "1px solid black" }} key={i}>
            <p>{property.name}</p>
            <p>{property.description}</p>
            <p>{property.region}</p>
            <p>{property.town}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Properties;
