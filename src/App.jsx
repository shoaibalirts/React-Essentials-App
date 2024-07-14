import MainGoal from "./MainGoal";

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code>
        <MainGoal
          goal={"Build a MainGoal component and insert it below this text."}
        />
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code>
        <MainGoal
          goal={
            "component should simply output some text that describes your main course goal (e.g., "
          }
        />
        &quot;
        <MainGoal goal={"My main goal: Learn React in great detail"} />
        &quot;).
      </p>
      <p>
        <strong>
          <MainGoal goal={"Important"} />:
        </strong>{" "}
        <MainGoal goal={"You custom component must contain the text"} />
        &quot;
        <MainGoal goal={"My main goal"} />
        :&quot;
      </p>
      <p>
        <strong>
          <MainGoal goal={"Also important:"} />
        </strong>{" "}
        <MainGoal goal={"For the automatic checks to succeed, you"} />{" "}
        <strong>must export</strong>{" "}
        <MainGoal
          goal={
            "your custom component function! Not as a default but simply by adding the "
          }
        />
        <code>export</code>{" "}
        <MainGoal goal={"keyword in front of your function (e.g., "} />{" "}
        <code>
          <MainGoal goal={"export function YOUR_COMPONENT_NAME"} />
        </code>
        ).
      </p>
      {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
      {/* OUTPUT YOUR COMPONENT HERE */}
    </div>
  );
}

export default App;
