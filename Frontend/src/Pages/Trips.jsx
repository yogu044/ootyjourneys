import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapPin, Users, Calendar, X } from "lucide-react"; 
import "../css/trip.css";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((res) => {
        setTrips(res.data);
      })
      .catch((err) => {
        console.error("Error fetching trips:", err);
      });
  }, []);

  return (
    <div>
      <div className="trip">
        <h2>Available Activites</h2>
        <p>
          Explore our collection of beautiful Ooty destinations and experiences
        </p>
      </div>

      <section className="available">
        {trips.map((f, index) => (
          <div
            key={index}
            className="available-grid"
            onClick={() => setSelectedTrip(f)} 
          >
            <img src={f.src} alt={f.title} />
            <h3>{f.title}</h3>
            <div className="trip-info">
              <p>{f.description}</p>
            </div>
          </div>
        ))}
      </section>

     
      {selectedTrip && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => setSelectedTrip(null)}
            >
              <X />
            </button>
            <img src={selectedTrip.src} alt={selectedTrip.title} />
            <h2>{selectedTrip.title}</h2>
            <div className="trip-info">
             <p>{selectedTrip.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
