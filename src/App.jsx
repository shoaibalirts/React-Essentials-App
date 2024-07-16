import { CORE_CONCEPTS } from "../src/utility/data.js";
import Header from "../src/components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import Card from "./components/Card/Card.jsx";
import { useState } from "react";
console.log(CORE_CONCEPTS);
function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    /*
    const TabContent = document.getElementById("tab-content");
    console.log(TabContent);
    TabContent.innerHTML = "";
    if (selectedButton === "components") {
      TabContent.append(CORE_CONCEPTS[0].description);
    } else if (selectedButton === "jsx") {
      TabContent.append(CORE_CONCEPTS[1].description);
    } else if (selectedButton === "props") {
      TabContent.append(CORE_CONCEPTS[2].description);
    } else if (selectedButton === "state") {
      TabContent.append(CORE_CONCEPTS[3].description);
    } else if (selectedButton === "xyz") {
      TabContent.append("XYZ");
      console.log("xyz");
    }
      */
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
                return "xyz";
              })}
            >
              xyz
            </TabButton> */}
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
        </section>
        {/* <section id="tab-content"></section> */}
        {selectedTopic}
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
