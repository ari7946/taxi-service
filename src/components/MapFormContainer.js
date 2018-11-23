import React from 'react';
import TaxiForm from './TaxiForm';
import { Container } from 'reactstrap';

class MapFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: "",
      points: [undefined, undefined],
    }
  }

  componentDidMount() { 
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
    document.body.appendChild(script);
    script.async = true;

    script.onload = () => {
      let tomtom = window.tomtom;
      let map = tomtom.L.map('map', {
        source: 'vector',
        key: process.env.REACT_APP_API_KEY,
        center: [33.8417078, -118.0895015],
        basePath: '/sdk',
        zoom: 15,
      })

      // ! Zoom control
      map.zoomControl.setPosition('topright');
      map.zoomControl.setPosition('topright');

      // ! Settings for bottom right icon
      var unitSelector = tomtom.unitSelector.getHtmlElement(tomtom.globalUnitService);
      var languageSelector = tomtom.languageSelector.getHtmlElement(tomtom.globalLocaleService, 'search');
      var unitRow = document.createElement('div');
      var unitLabel = document.createElement('label');
      unitLabel.innerHTML = 'Unit of measurement';
      unitLabel.appendChild(unitSelector);
      unitRow.appendChild(unitLabel);
      unitRow.className = 'input-container';
      var langRow = document.createElement('div');
      var langLabel = document.createElement('label');
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

      // ! Creating route inputs widget
      var routeInputsInstance = tomtom.routeInputs().addTo(map);

      // ! Creating route widget
      var routeOnMapView = tomtom.routeOnMap({
        generalMarker: {draggable: false}
      }).addTo(map);

      // ! Creating route summary widget
      var routeSummaryInstance = tomtom.routeSummary({
        size: [150, 80],
        position: 'topleft',
        imperialDistance: true,
      }).addTo(map);

      // ! Connecting the route inputs widget with the route widget
      routeInputsInstance.on(routeInputsInstance.Events.LocationsFound, (eventObject) => {
          // summary will be used to update state
        routeOnMapView.draw(eventObject.points);
        console.log("eventObject LocationsFound", eventObject)

        this.setState({
          points: eventObject.points,
        })

      });
      routeInputsInstance.on(routeInputsInstance.Events.LocationsCleared, (eventObject) => {
        routeSummaryInstance.hide();
        routeOnMapView.draw(eventObject.points);

        console.log("]eventObject LocationsCleared", eventObject)

        this.setState({
          points: eventObject.points,
        })
      });

      // ! Connecting the route widget with the route summary widget
      routeOnMapView.on(routeOnMapView.Events.RouteChanged, (eventObject) => {
        routeSummaryInstance.updateSummaryData(eventObject.object);
        routeSummaryInstance.hide();
        console.log("eventObject RouteChanged", eventObject)
        this.setState({
          distance: (eventObject.object.lengthInMeters * 0.000621371192).toFixed(2),
        })

      });

      // ! Update the searchbox inputs when the user drag the markers
      // routeOnMapView.on(routeOnMapView.Events.MarkerDragEnd, (eventObject) => {
      //   var location = eventObject.markerIndex === 0 
      //     ? routeInputsInstance.searchBoxes[0] 
      //     : routeInputsInstance.searchBoxes.slice(-1)[0];
      //   location.setResultData(eventObject.object);
      //   routeSummaryInstance.hide();

      //   this.setState({
      //     distance: eventObject.object.lengthInMeters
      //   })
      // });
    };
  }

  render() {
    console.log("this.state", this.state)
    return (
      <Container>
        {!this.state.points[0] && !this.state.points[1] ? (
          <p className="mb-0 mt-4">Please Select <span className="main-color">Starting Point</span> and <span className="main-color">Destination</span></p>
        ) : (
          !this.state.points[0] ? (
            <p className="mb-0 mt-4">Please Select <span className="main-color">Starting Point</span></p>
          ) : (
            !this.state.points[1] ? (
              <p className="mb-0 mt-4">Please Select <span className="main-color">Destination</span></p>
            ) : (
              <p className="mb-0 mt-4"><span className="main-color">Thank you!</span> Fill out the form below to book a Taxi.</p>
            )
          ) 
        )}
        <div id='map'></div>
        {(this.state.points[0] && this.state.points[1]) && (
          <>
            <h5 className="mt-3"><span className="main-color">Total Distance: {this.state.distance} miles</span></h5>
            <h5><span className="main-color">Estimated Price: ${(this.state.distance * 10.5).toFixed(2)}</span></h5>
          </>   
        )}
        <TaxiForm distance={this.state.distance} points={this.state.points}/>
      </Container>
    )
  }
} 

export default MapFormContainer;