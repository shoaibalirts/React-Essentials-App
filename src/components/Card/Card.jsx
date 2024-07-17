import "./Card.css";
export default function Card({ children, name }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      {children}
    </div>
  );
}
