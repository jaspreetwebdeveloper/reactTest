import React from 'react';
import './HoverHandler.css';

const HoverHandler = (props:any) => {
  return (
    <div className="hover">
        <div className="hover__no-hover">{props.children}</div>
        <div className="hover__hover">{props.onHover}</div>
    </div>
  )
}

export default HoverHandler;
