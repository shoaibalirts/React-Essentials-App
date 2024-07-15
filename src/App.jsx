import { CORE_CONCEPTS } from "../src/utility/data.js";
import Header from "../src/components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
console.log(CORE_CONCEPTS);
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
        <section></section>
      </main>
    </div>
  );
}

export default App;
