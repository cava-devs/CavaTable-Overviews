import React from 'react';
import icons from '../icons.jsx';

const RestaurantInfo = (props) => (
  <div id="restaurantInfo" className="container">
    <div className="row">
      <div className="col">
        <div className="infoSection">
          {icons.diningStyle}
          <span className="infoTitle">Dining Style</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.cuisine}
          <span className="infoTitle">Cuisine</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.hoursOfOperation}
          <span className="infoTitle">Hours of Operation</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.phoneNumber}
          <span className="infoTitle">Phone Number</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.website}
          <span className="infoTitle">Website</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.paymentOptions}
          <span className="infoTitle">Payment Options</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.dressCode}
          <span className="infoTitle">Dress Code</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.executiveChef}
          <span className="infoTitle">Executive Chef</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
      </div>
      <div className="col">
        <div className="infoSection">
          {icons.address}
          <span className="infoTitle">Address will go here!</span>
        </div>
        <div className="infoSection">
          {icons.neighborhood}
          <span className="infoTitle">Neighborhood</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.crossStreet}
          <span className="infoTitle">Cross Street</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.parkingDetails}
          <span className="infoTitle">Parking Details</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
        <div className="infoSection">
          {icons.publicTransit}
          <span className="infoTitle">Public Transit</span>
          <div className="infoContent">
            Content will go here!
          </div>
        </div>
      </div>

    </div>

  </div>
);

export default RestaurantInfo;