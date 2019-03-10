import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-thumbnail">
                <img class="card-img" alt={props.name} src={props.image} id={props.id} 
                 onClick = {(event) => props.clickImage(props.id)} />
            </div>
        </div>
    );
}

export default CharacterCard;