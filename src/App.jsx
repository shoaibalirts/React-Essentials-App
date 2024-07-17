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

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <section id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </section>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => (
              <CoreConcept key={item.title} {...item} />
            ))}
            {/* <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Component wraps another component is composition */}
            <TabButton
              onSelect={() => handleSelect("components")}
              isSelected={selectedTopic === "components" ? true : false}
            >
              Components
            </TabButton>
            {/* <TabButton
              onSelect={handleSelect(function () {
                return "any text for identification of the button";
              })}
            >
              xyz
            </TabButton> */}
            <TabButton
              onSelect={() => handleSelect("jsx")}
              isSelected={selectedTopic === "jsx" ? true : false}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("props")}
              isSelected={selectedTopic === "props" ? true : false}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("state")}
              isSelected={selectedTopic === "state" ? true : false}
            >
              State
            </TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
