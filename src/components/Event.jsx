import  styled  from 'styled-components'
import React from 'react'

export default function Event({ event }) {
    const EventBody = styled.div`
    display: flex;
    background-color:rgb(101, 199, 71);
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    cursor: pointer;
    transition: box-shadow .2s;

     &:hover {
       box-shadow: 0px 0px 3px 4px rgba(0, 0, 0, 0.5);
     }
    `

    const Info = styled.div`
    display: flex;
    flex-direction:column;
    padding: 20px;
    `
    const EventDate = styled.span`
    color: black;
    `
    const EventTitle = styled.h2`
    color: black;
    font-weight:400px;
    `
    const EventImgage = styled.img`
    border-radius: 12px;
    width: 250px;
    margin: 10px;
    `
    const Content = styled.p`
    `
    return (
        <EventBody>
            <EventImgage src={event.image} alt={event.title} />
            <Info>
            <EventDate>{event.date}</EventDate>
            <EventTitle>{event.title}</EventTitle>
            <Content>{event.content}</Content>
            </Info>
        </EventBody>
    )
}
