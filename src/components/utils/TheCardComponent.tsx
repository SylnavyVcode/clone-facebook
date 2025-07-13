import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Button } from "../ui/Button";

export default function CardBox(props: { image: string; image_alt: string; title: string | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string; }) {
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
