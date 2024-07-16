import { CORE_CONCEPTS, EXAMPLES } from "../src/utility/data.js";
import Header from "../src/components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import Card from "./components/Card/Card.jsx";
import { useState } from "react";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton); // components, jsx, props, state
    // console.log(EXAMPLES[selectedTopic]);
  }

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
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            {/* <TabButton
              onSelect={handleSelect(function () {
                return "any text for identification of the button";
              })}
            >
              xyz
            </TabButton> */}
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
        </section>
        {!selectedTopic && <p>Please select a topic</p>}
        {selectedTopic && (
          <section id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </section>
        )}

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
