import React from "react";
import MOdal from "react-modal";

MOdal.setAppElement ("#app");

const Window = ({show, onClose, item}) => {
    return(
        <MOdal
            isOpen={show}
            onRequestClose={onClose}
            overlayClassName={"overlay"}
            >
                <div className={"close-btn-ctn"}>
                    <h1 style= {{flex: "1 90%"}}>{item.title}</h1>
                    <button className={"close-btn"} onClick={onCLose}>X</button>
                </div>
                <div>
                    <h2>Description</h2>
                    <p>{item.content}</p>
                    <h2>Status</h2>
                    <p>{item.icon} {`${item.status.charAt(0).toUppercase()}${item.status.slice}`}</p>
                </div>
        </MOdal>
    );
};

export default Window;