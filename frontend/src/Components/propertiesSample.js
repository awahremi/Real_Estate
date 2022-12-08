import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SampleProperties.css"

const PropertiesSample = () => {
    const [properties, setProperties ] = useState(null)
    useEffect(() => {
        fetch("http://localhost:5000/api/properties")
        .then((response) => response.json())
        .then((data) => setProperties(data.properties));
    }, []); // beware of infinite loop. dont forget second parameter []
    
    return(
        <div className="sample-properties">
            <div className="sample-properties-header">
                <h3>Favorite Rated Properties</h3>
                <Link to={"/properties"}></Link>
            </div>
        <hr />
            <br/>
            <br/>
        <div className="sample-properties-container"> 
            {properties?.map((property, i ) =>{
                if (i <= 2) {
                    return (
                        <Link to={`properties/${property.propertyId}`}>
                            <div className="property">
                                <img src={property.images[0]} alt="property"/>
                                <p className="property-name">{property.name}</p>
                                <p className="property-description">{property.description}</p>
                                <p className="property-price">{property.price}  XAF</p>

                                <p className={property.for =="rent"
                                ? "property-rent"
                                :"property-sale"}>
                                   for {property.for}</p>
                            </div>
                        </Link>
                    )
                }
            })}   
        </div>
        <hr/>
        </div>
        
    )
}

export default PropertiesSample;