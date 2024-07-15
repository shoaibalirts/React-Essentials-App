import { CORE_CONCEPTS } from "../src/utility/data.js";
import Header from "../src/components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import Card from "./components/Card/Card.jsx";
console.log(CORE_CONCEPTS);
function handleSelect() {
  const TabContent = document.getElementById("tab-content");
  TabContent.innerHTML = "";
  TabContent.append(CORE_CONCEPTS[0].description);
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Component wraps another component is composition */}
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
        <section id="tab-content"></section>
        <section>
          <h1>Available Experts</h1>
          <Card name="Anthony Blake">
            <p>
              Blake is a professor of Computer Science at the University of
              Illinois.
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Anthony</a>
            </p>
          </Card>

          <Card name="Maria Miles">
            <p>
              Maria is a professor of Computer Science at the University of
              Illinois.
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Maria</a>
            </p>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default App;
