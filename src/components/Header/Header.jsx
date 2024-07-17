import image1 from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
let description = reactDescriptions[genRandomInt(2)];

export default function Header() {
  return (
    <header>
      <img src={image1} alt="Stylized atom" />

      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
