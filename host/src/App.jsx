import AppA from "Components/App";
import Button from "Components/Button";

const App = () => (
  <div className="p-4 bg-green-100">
    <p>Core application here</p>

    <div className="rounded-mg bg-pink-100 p-4">
      <AppA />
    </div>

    <Button />
  </div>
);

export default App;
