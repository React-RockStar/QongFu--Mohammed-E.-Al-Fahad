import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import SmallMarker from './SmallMarker';
import Topbar from '../../components/topbar';


const SimpleMap = () => {
    const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
    const [zoom, setZoom] = useState(11);
    return (
        
        <div style={{ height: '100vh', width: '100%' }}>
          <Topbar/>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8&libraries=geometry,drawing,places' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={11.0168}
            lng={76.9558}
            name="marker"
            color="blue"
          />

          <SmallMarker
            lat={11.132179}
            lng={77.114}
            name="smallmarker1"
            color="blue"
          />
          <SmallMarker
            lat={11.132179}
            lng={77.134703}
            name="smallmarker2"
            color="blue"
          />
          <SmallMarker
            lat={11.132179}
            lng={77.154}
            name="smallmarker3"
            color="blue"
          />
          <SmallMarker
            lat={11.132179}
            lng={77.174}
            name="smallmarker4"
            color="blue"
          />

          <SmallMarker
            lat={11.132179}
            lng={77.194}
            name="smallmarker5"
            color="blue"
          />

          <SmallMarker
            lat={11.22179}
            lng={77.214}
            name="smallmarker6"
            color="blue"
          />
          <Marker
            lat={11.22179}
            lng={77.314}
            name="marker1"
            color="blue"
          />

        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;