import {Navigate, Route, Routes} from "react-router-dom";
import NewPaste from "./pages/new-paste/edit-paste.tsx";
import {useContext} from "react";
import {AppContext} from "./store";
import ErrorModal from "./components/error-modal.tsx";
import LoadingModal from "./components/loading-modal.tsx";
import ViewPaste from "./pages/view-paste";

function App() {
  const {loading, error} = useContext(AppContext);
  return (
    <div className="bg-nord6 w-screen min-h-screen flex flex-col items-center py-24 overflow-x-hidden">
      {error && <ErrorModal/>}
      {loading && <LoadingModal/>}
      <Routes>
        <Route path="/" element={<Navigate to="/edit/new"/>}/>
        <Route path="/edit/:_id" element={<NewPaste/>}/>
        <Route path="/view/:_id" element={<ViewPaste/>}/>
      </Routes>
    </div>
  );
}

export default App;