import { NeighborhoodIndex } from "../../types";

export default function ListNeighborhoodItem({ text, id }: NeighborhoodIndex) {
  return (
    <div className="list-neighborhood" id={id}>
      <h3 dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
