import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            className=" w-32 h-16 align-items-center justify-content-center"
          >
             <div class="flex items-center text-center">
            <CgWebsite style={{ marginRight: "5px" }} />
            <span className="flex justify-center items-center text-xl m-2">Demo</span>
            </div>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
