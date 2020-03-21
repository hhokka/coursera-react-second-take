import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import CommentForm from "./CommentFormComponent";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

class Dishdetail extends Component {
  renderComments(comments, postComment, dishId) {
    if (comments == null) {
      return <div></div>;
    }
    const cmnts = comments.map(comment => {
      return (
        <Fade in>
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
        </Fade>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{cmnts}</ul>
        <CommentForm dishId={dishId} postComment={postComment}></CommentForm>
      </div>
    );
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateY(-50%)"
            }}
          >
            <Card>
              <CardImg top src={baseUrl + dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </FadeTransform>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
      );
    } else if (this.props.dish != null) {
      const dish = this.props.dish;
      const comments = this.props.comments;
      /*  if (dish == null) {
      return <div></div>;
    } */
      const dishItem = this.renderDish(dish);
      const commentItem = this.renderComments(
        comments,
        this.props.postComment,
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
}

export default Dishdetail;
