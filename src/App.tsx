import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibilty] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert color="dark" onClose={() => setAlertVisibilty(false)}>
          Alert
        </Alert>
      )}
      <Button
        color="dark"
        onClick={() => {
          setAlertVisibilty(true);
        }}
      >
        Show Alert
      </Button>
    </div>
  );
}

export default App;
