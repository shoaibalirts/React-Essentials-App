export default function CoreConcept({ image, title, description }) {
  console.log(image, title, description);
  console.log("---------------");

  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
