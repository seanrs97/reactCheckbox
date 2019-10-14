import React from "react";

function ContentCard(props){
    console.log(props)
    return (
        <div className = "contact-card">
            <img src = {props.contact.imgUrl}/>
            <h3> {props.contact. name}</h3>
            <p> Phone Number: {props.contact.phone}</p>
            <p> Email Address: {props.contact.email}</p>
        </div>
    );
}

export default ContentCard;