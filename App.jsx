import "./App.css";
import FeatureFlags from "./components/Feature flag";
import FeatureFlagGlobalState from "./components/Feature flag/context";
function App() {
  return (
    <div className="App">
     
      {/* Feature Flag  */}

      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>

    </div>
  );
}

export default App;
