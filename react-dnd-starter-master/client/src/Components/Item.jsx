import React, {Fragment, useState, useRef } from "react";
import {useDrag, useDrop} from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";

const Item = ({item, index, moveItem,status}) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover (item,monitor){
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex){
                return;
            }

            const hoveredRect =  ref.current.getBoundClientRect();
            const hoverMiddley = (hoveredRect.bottom - hoveredRect.top) /2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddley){
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY < hoverMiddley){
                return;
            }
            moveItem(dragIndex,hoverIndex);
            item.index = hoverIndex;
        }
    });
    const [{isDragging }, drag] = useDrag({
        item: {type: ITEM_TYPE, ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setshow] = useState(false);

    const onOpen = () => setShow (true);

    const onClose = () => setshow (false);

    drag(drop(ref));
     
    return (
        <Fragment>
             <div
                 ref = {ref}
                 style = {{opacity: isDragging ? 0: 1}}
                 className={"item"}
                 onClick={onOpen} 
                 >
             </div>
             <div  className={"color-bar"} style={{backgroundcolor:status.color}} >
             <p className={"item-title"}>{item.content}</p>
             <p className={"item-status"}>{item.icon}</p> 

             </div>
             <window>
                 item = {item}
                 onClose = {onClose}
                 show = {show}

             </window>
             
        </Fragment>
    )
    
};

export default ITEM_TYPE;
