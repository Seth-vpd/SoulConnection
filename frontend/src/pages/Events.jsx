import React, { useState, useEffect } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment";
import styles from "./Events.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import CircularProgress from "@mui/material/CircularProgress";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const Events = () => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //do the fetch here to get the events data needed.
  async function fetchData() {
    try {
      console.log(`requete EVENTS to backend`);
      const response = await fetch(`http://localhost:3000/events`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const dataEvents = response.data.map(event => ({
        id: event.id,
        title: event.name,
        start: new Date(event.date),
        end: new Date(moment(event.data).add(event.duration, "hours").toDate()),
        location_x: event.location_x,
        location_y: event.location_y,
        location_name: event.location_name
      }));
      setEvents(dataEvents);
      setLoading(false);
    } catch (error) {
      setError("Error occurs during data retrieving!");
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };


  return (
    <div className={styles.container}>
      <div className={styles.headContainer}>
        <h1>Events</h1>
        <button className={styles.addEvent}>Add New Event</button>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.EventCalendar}>
          {loading ? (<CircularProgress sx={{ display: "block", margin: "0 auto" }} />) : (<p>Data loaded successfully !</p>)}
          {error}
          <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 400 }}
              views={["month", "week", "day", "agenda"]}
              defaultView="month"
              popup
              eventPropGetter={(event) => ({
                style: {
                  backgroundColor: 'red',
                  color: 'white',
                  borderRadius:'5px',
                  padding: '5px'
                }
              })}
              onSelectEvent={handleSelectEvent}
          />
        </div>
        <div className={styles.EventMap}>
          {selectedEvent ? (
              <MapContainer
                center={[selectedEvent.location_x, selectedEvent.location_y]}
                zoom={13}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>{selectedEvent.location_name}</Popup>
                </Marker>
              </MapContainer>) : (
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>Default Location</Popup>
                </Marker>
              </MapContainer>)//(<p>Select an event to see its location on the map.</p>)
            }
        </div>
      </div>
    </div>
  );
};

export default Events;
