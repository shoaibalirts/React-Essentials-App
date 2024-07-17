import { EXAMPLES } from "../utility/data.js";
import TabButton from "./TabButton/TabButton.jsx";
import Section from "./Section.jsx";
import { useState } from "react";
export default function Examples() {
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
    <Section id="examples" title="Examples">
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
      {tabContent}
    </Section>
  );
}
