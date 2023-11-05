import StateProvider from "./context/Store";
import DaraggableImages from "./components/GalleryLaout";
import ActionBar from "./components/ActionBar";

function App() {
  return (
    <StateProvider>
      <div className="container">
        <ActionBar />
        <DaraggableImages />
      </div>
    </StateProvider>
  );
}

export default App;
