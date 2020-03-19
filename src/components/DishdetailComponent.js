import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import CommentForm from "./CommentFormComponent";

class Dishdetail extends Component {
  renderComments(comments, addComment, dishId) {
    if (comments == null) {
      return <div></div>;
    }
    const cmnts = comments.map(comment => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit"
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{cmnts}</ul>
        <CommentForm dishId={dishId} addComment={addComment}></CommentForm>
      </div>
    );
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const dish = this.props.dish;
    const comments = this.props.comments;
    if (dish == null) {
      return <div></div>;
    }
    const dishItem = this.renderDish(dish);
    const commentItem = this.renderComments(
      comments,
      this.props.addComment,
      this.props.dish.id
    );
    return (
      <div className="row">
        {dishItem}
        {commentItem}
      </div>
    );
  }
}

export default Dishdetail;
