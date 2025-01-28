import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, live }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <button className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {/* Use an anchor tag for the Live link */}
          <a href={live} target="_blank" rel="noopener noreferrer">
            <button>Live</button>
          </a>
        </div>
      </button>
    </Col>
  );
};
