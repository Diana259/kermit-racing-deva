import { getAllEvents } from "../api/websiteApi";
import React, { useEffect, useState }  from 'react';
import Event from "./Event";
import { EventsGrid } from "../pages/EventsPage";

export default function Events() {
    const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  const getData = async () => {
    setLoading(true);

    const data = await getAllEvents();

    setLoading(false);
    setEvents(data);
  }

   getData();
  }, []);

  if(loading){
    return <div>Loading...</div>
  }
  return (
      <>
      <EventsGrid>
    {events.map(event => (
      <Event key={event.id} event={event}/>
    ))}
    </EventsGrid>
      </>
  )
}
