import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
    console.log("DishDetail Component's constructor is invoked");
  }
  componentDidMount() {
    console.log("DishDetail Component's componentDidMount is invoked");
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(commentsArray) {
    const comments = commentsArray.map(comment => {
      return (
        <div>
          <div key={comment.id}>{comment.comment}</div>
        </div>
      );
    });
    return (
      <div>
        <h1>Comments</h1> {comments}
      </div>
    );
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    );
  }
}
export default DishDetail;
