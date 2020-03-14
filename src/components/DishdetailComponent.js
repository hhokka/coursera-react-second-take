import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  renderDish() {
    this.items = this.props.dish.comments.map((item, key) => (
      <ul className="list-unstyled">
        <li>{item.comment}</li>
        <li>
          -- {item.author} , {item.date}
        </li>
      </ul>
    ));
    return <div>{this.items}</div>;
  }

  render() {
    if (this.props.dish != null) {
      console.log(this.props.dish.comments[0]);
      return (
        <div>
          <div>
            <Card>
              <CardImg
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody>
                <CardText>{this.renderDish()}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    } else {
      return <div className="col-12 col-md-5 m-1"></div>;
    }
  }
}

export default Dishdetail;
