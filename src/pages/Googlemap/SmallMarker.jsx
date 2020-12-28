import React from 'react';
import './Marker.css';

const Marker = (props) => {
    return (
      <div className={props.name}
        style={{ cursor: 'pointer'}}
        title="adfsafas">
      </div>
    );
  };

  export default Marker;