import React, { useState } from "react";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";
import { Link, useParams } from "react-router-dom";

function TripsList() {
  const { diff } = useParams();
  const [query, setQuery] = useState("");
  const trips = tripsData
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
    .filter((trip) => {
      if (diff == null) {
        return true;
      }
      return trip.difficulty == diff;
    })
    .map((trip, index) => <TripItem trip={trip} key={index} />);
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <center>
          <Link to="/tripsList/easy">
            <button className="btn btn-primary btn-xl">Easy</button>
          </Link>

          <Link to="/tripsList/moderate">
            <button className="btn btn-primary btn-xl">Moderate</button>
          </Link>

          <Link to="/tripsList/hard">
            <button className="btn btn-primary btn-xl">Hard</button>
          </Link>
        </center>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">{trips}</div>
      </div>
    </section>
  );
}

export default TripsList;
