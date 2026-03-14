import {BrowserRouter,Routes,Route} from "react-router-dom";

import HomePage from "./pages/HomePage";
import JobListingsPage from "./pages/JobListingsPage";
import EmployerDashboard from "./pages/EmployerDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<HomePage/>}/>

<Route path="/jobs" element={<JobListingsPage/>}/>

<Route path="/employer" element={<EmployerDashboard/>}/>

<Route path="/candidate" element={<CandidateDashboard/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;