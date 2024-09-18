import img from "../../assets/Image.png";
import "./index.css";

function Card() {
  return (
    <div className="card mb-3" style={{ maxWidth: "1200px" }}>
      <div
        className="row g-0 "
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
