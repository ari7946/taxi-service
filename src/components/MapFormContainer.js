import React from 'react';
import TaxiForm from './TaxiForm';
import About from './About';
import { Container, Badge, Row, Col } from 'reactstrap';

function reducer(state, action) {
  if (action.type === 'locationsFound') {
    return {
      ...state,
      points: action.points,
      startAddress: action.startAddress,
      endAddress: action.endAddress,
    } 
  } else if (action.type === 'locationsCleared') {
    console.log('action', action)
    return { 
      ...state,
      points: action.points,
      startAddress: action.startAddress,
      endAddress: action.endAddress,
    } 
  } else if (action.type === 'routeChanged') {
    //convert meters to miles
    let distance = (action.distance * 0.000621371192).toFixed(1);
    //price set at 2.95 per mile
    let price = (distance * 2.95).toFixed(2);

    return {
      ...state,
      distance,
      price,
    }
  }
}

const initialState = {
  distance: "",
  points: [null, null],
  startAddress: '',
  endAddress: '',
  price: null,
}

function MapFormContainer() {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState
  )

  React.useEffect(() => { 
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
    document.body.appendChild(script);
    script.async = true;

    script.onload = () => {
      const tomtom = window.tomtom;
      const map = tomtom.L.map('map', {
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
      const unitSelector = tomtom.unitSelector.getHtmlElement(tomtom.globalUnitService);
      const languageSelector = tomtom.languageSelector.getHtmlElement(tomtom.globalLocaleService, 'search');
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

      // ! Creating route inputs widget
      const routeInputsInstance = tomtom.routeInputs().addTo(map);

      // ! Creating route widget
      const routeOnMapView = tomtom.routeOnMap({
        generalMarker: {draggable: false}
      }).addTo(map);

      // ! Creating route summary widget
      const routeSummaryInstance = tomtom.routeSummary({
        size: [150, 80],
        position: 'topleft',
        imperialDistance: true,
      }).addTo(map);

      // ! Connecting the route inputs widget with the route widget
      routeInputsInstance.on(routeInputsInstance.Events.LocationsFound, (eventObject) => {
          // summary will be used to update state
        routeOnMapView.draw(eventObject.points);
        console.log("eventObject LocationsFound", eventObject)
        console.log("First input value", eventObject.target.searchBoxes[0].input.value)
        console.log("Second input value", eventObject.target.searchBoxes[1].input.value)
  
    //TODO change setState to reducer
        dispatch({
          type: "locationsFound",
          points: eventObject.points,
          startAddress: eventObject.target.searchBoxes[0].input.value,
          endAddress: eventObject.target.searchBoxes[1].input.value,
        })

      });
      routeInputsInstance.on(routeInputsInstance.Events.LocationsCleared, (eventObject) => {
        routeSummaryInstance.hide();
        routeOnMapView.draw(eventObject.points);

        console.log("eventObject LocationsCleared", eventObject)
        
      //TODO change setState to reducer
        dispatch({
          type: 'locationsCleared',
          points: eventObject.points,
          startAddress: eventObject.target.searchBoxes[0].input.value,
          endAddress: eventObject.target.searchBoxes[1].input.value,
        })
      });

      // ! Connecting the route widget with the route summary widget
      routeOnMapView.on(routeOnMapView.Events.RouteChanged, (eventObject) => {
        routeSummaryInstance.updateSummaryData(eventObject.object);
        routeSummaryInstance.hide();
        console.log("eventObject RouteChanged", eventObject)

        //TODO change setState to reducer
        dispatch({
          type: 'routeChanged',
          distance: eventObject.object.lengthInMeters,
        })

      });
    };
    console.log('yes')
  }, [])

    //console.log("this.state", this.state)
    //let price = (this.state.distance * 2.95).toFixed(2)
    return (
      <Container>
        <Row>
          <Col sm="8">
            {!state.points[0] && !state.points[1] ? (
              <h4 className="mb-0">Please Select <Badge color="dark">Starting Point</Badge> and <Badge color="danger">Destination</Badge></h4>
            ) : (
              !state.points[0] ? (
                <h4 className="mb-0">Please Select <Badge color="dark">Starting Point</Badge></h4>
              ) : (
                !state.points[1] ? (
                  <h4 className="mb-0">Please Select <Badge color="danger">Destination</Badge></h4>
                ) : (
                  <h4 className="mb-0"><Badge color="success">Thank you!</Badge> Fill out the form to book a Taxi.</h4>
                )
              ) 
            )}

            <div className="mt-1" id='map'></div>
          </Col>

          <Col sm="4">
            {state.startAddress && (
              <h5 className="lead"><Badge className="mt-2" color="dark">Starting Point: </Badge> {state.startAddress}</h5>
            )}
            {state.endAddress && (
              <h5 className="lead"><Badge className="mt-0" color="danger">Destination: </Badge> {state.endAddress}</h5>
            )}

            {(state.points[0] && state.points[1]) && (
              <>
                <h5><Badge color="info">Distance: </Badge> <em>{state.distance} miles</em></h5>
                <h5><Badge color="success">Price: </Badge> ${state.price}</h5>
              </>   
            )}
            <TaxiForm distance={state.distance} price={state.price} />
          </Col>

        </Row>
      </Container>
    )
} 

export default MapFormContainer;