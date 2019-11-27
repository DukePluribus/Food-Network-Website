"use strict";

import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CardList extends Component {
  render() {
    let foodCards = this.props.foodItems.map((foodItem, index) => {
      let card = (
        <FoodCard
          key={foodItem.mealID}
          id={foodItem.mealID}
          name={foodItem.mealName}
          price={foodItem.mealPrice}
          description={foodItem.mealDescription}
          imgUrl={foodItem.mealImagePath}
          imgAlt={foodItem.imgAlt}

          getMealById={this.props.getMealById}
        />
      );

      if (index % 4 == 0) {
        return (
          <React.Fragment>
            <div class="w-100"></div>
            {card}
          </React.Fragment>
        );
      } else {
        return card;
      }
    });

    return (
      <div class="container mt-5 py-3">
        <div class="row justify-content-center">{foodCards}</div>
      </div>
    );
  }
}

class FoodCard extends Component {
  render() {
    const { id, name, price, description, imgUrl, imgAlt } = this.props;
    return (
      <span className="mx-3 mt-1 col-md-4 col-sm-6 col-xl-2 listing">
        <img
          src={imgUrl}
          alt={imgAlt}
          style={{ width: "175px", height: "175px" }}
          
          onClick = {() => this.props.getMealById(this.props.id)}
          data-toggle="modal"
          data-target="#exampleModalCenter"
        />
        <div id="card-text" className="listingText pl-2 pt-1">
          <div className="text-left">
            <div className="">
              {name}
            </div>
            <div className="font-weight-bold pt-1 pl-1">
              ${price}
            </div>
          </div>
        </div>
        {/* <ListGroup> */}
          {/* <ListGroup.Item>ID: {id}</ListGroup.Item> */}
          {/* <ListGroup.Item>Name: {name}</ListGroup.Item>
          <ListGroup.Item>Price: {price}</ListGroup.Item>
        </ListGroup> */}
      </span>
    );
  }
}

export default CardList;