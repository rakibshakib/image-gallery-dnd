import "./styles/main.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DaraggableImages from "./components/test";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <DaraggableImages />
      </DndProvider>
      {/* <SingleImage />{" "} */}
    </>
  );
}

export default App;
