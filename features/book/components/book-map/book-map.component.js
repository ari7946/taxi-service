import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { locationsCleared, locationsFound, routeChanged } from '../../redux/book.actions';

import { MapContainer as MapWrapper } from './book-map.styles';

const Map = ({ locationsCleared, locationsFound, routeChanged }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.NEXT_PUBLIC_URL + '/sdk/tomtom.min.js';
    document.body.appendChild(script);
    script.async = true;

    script.onload = () => {
      const tomtom = window.tomtom;
      const map = tomtom?.L?.map('map', {
        source: 'vector',
        key: process.env.NEXT_PUBLIC_MAP_KEY,
        center: [33.8417078, -118.0895015],
        basePath: '/sdk',
        zoom: 13,
      });

      // ! Zoom control
      map.zoomControl.setPosition('topright');
      map.zoomControl.setPosition('topright');

      // ! Settings for bottom right icon
      const unitSelector = tomtom.unitSelector.getHtmlElement(tomtom.globalUnitService);
      const languageSelector = tomtom.languageSelector.getHtmlElement(
        tomtom.globalLocaleService,
        'search'
      );
      const unitRow = document.createElement('div');
      const unitLabel = document.createElement('label');
      unitLabel.innerHTML = 'Unit of measurement';
      unitLabel.appendChild(unitSelector);
      unitRow.appendChild(unitLabel);
      unitRow.className = 'input-container';
      const langRow = document.createElement('div');
      const langLabel = document.createElement('label');
      langLabel.innerHTML = 'Search language';
      langLabel.appendChild(languageSelector);
      langRow.appendChild(langLabel);
      langRow.className = 'input-container';

      // ! Control Panel
      tomtom
        .controlPanel({
          position: 'bottomright',
          title: 'Settings',
          collapsed: true,
        })
        .addTo(map)
        .addContent(unitRow)
        .addContent(langRow);

      // ! Create route inputs widget
      const routeInputsInstance = tomtom.routeInputs().addTo(map);

      // ! Create route widget
      const routeOnMapView = tomtom
        .routeOnMap({
          generalMarker: { draggable: false },
        })
        .addTo(map);

      // ! Create route summary widget
      const routeSummaryInstance = tomtom
        .routeSummary({
          size: [150, 80],
          position: 'topleft',
          imperialDistance: true,
        })
        .addTo(map);

      // ! Connect the route inputs widget with the route widget
      routeInputsInstance.on(routeInputsInstance.Events.LocationsFound, (eventObject) => {
        // summary will be used to update state
        routeOnMapView.draw(eventObject.points);
        // console.log("eventObject LocationsFound", eventObject)
        // console.log("First input value", eventObject.target.searchBoxes[0].input.value)
        // console.log("Second input value", eventObject.target.searchBoxes[1].input.value)

        locationsFound({
          startAddress: eventObject.target.searchBoxes[0].input.value,
          endAddress: eventObject.target.searchBoxes[1].input.value,
        });
      });
      routeInputsInstance.on(routeInputsInstance.Events.LocationsCleared, (eventObject) => {
        routeSummaryInstance.hide();
        routeOnMapView.draw(eventObject.points);
        // console.log("eventObject LocationsCleared", eventObject)

        locationsCleared({
          startAddress: eventObject.target.searchBoxes[0].input.value,
          endAddress: eventObject.target.searchBoxes[1].input.value,
        });
      });

      // ! Connect the route widget with the route summary widget
      routeOnMapView.on(routeOnMapView.Events.RouteChanged, (eventObject) => {
        routeSummaryInstance.updateSummaryData(eventObject.object);
        routeSummaryInstance.hide();
        // console.log("eventObject RouteChanged", eventObject)

        routeChanged({
          distance: eventObject.object.lengthInMeters,
        });
      });
    };
  }, [locationsCleared, locationsFound, routeChanged]);

  return <MapWrapper id="map" />;
};

const mapDispatchToProps = (dispatch) => ({
  locationsCleared: (options) => dispatch(locationsCleared(options)),
  locationsFound: (options) => dispatch(locationsFound(options)),
  routeChanged: (options) => dispatch(routeChanged(options)),
});

export default connect(null, mapDispatchToProps)(Map);
