import Button from "./utils/TheButtonComponent";

export default function CardBox(props) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={props.image || "https://placeimg.com/400/225/arch"}
          alt={props.image_alt || "Card Image"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>
          {props.description || "This is a default description for the card."}
        </p>
        <div className="card-actions justify-end">
          <Button className="btn btn-primary">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
