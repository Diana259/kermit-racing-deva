import React from 'react'
import CoverSlider from '../components/cover-slider';
import Events from '../components/Events';
import styled from 'styled-components'

export const EventsGrid= styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
     margin: 0px 20px;
     margin-bottom:40px;
    `
export default function EventsPage() {
  const FutureEvents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  `
  return (
    <>
    <CoverSlider></CoverSlider>
    <EventsGrid>
    <FutureEvents>
    <h3>EVENIMENTE VIITOARE</h3>
    <p>Momentan nu există evenimente.</p>
    </FutureEvents>
        <Events />
      </EventsGrid>
    </>
  )
}
