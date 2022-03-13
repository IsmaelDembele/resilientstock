import Pagination  from "./components/Pagination";
import AddNew from "./components/AddNew";
import DisplayIndice from "./components/DisplayIndice";
import { PageContextProvider } from "./context";

function App() {
  return (
    <PageContextProvider>
      <div className="container">
        <AddNew />
        <DisplayIndice />
      </div>
      <Pagination />
    </PageContextProvider>
  );
}

export default App;
