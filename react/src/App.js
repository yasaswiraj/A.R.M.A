import React from "react";
import "../css/Form.css";
//import UserForm from "./userForm";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import FacultyRegister from "./FacultyRegistration";
import FacultyLogin from "./FacultyLogin";

//Dashboard Routes
import Dashboard from "./modules/Dashboard/Dashboard";
import TemplateDetails from "./modules/Dashboard/TemplateDetails";
import Remarks from "./modules/Dashboard/Remarks";
import TemplateList from "./modules/Dashboard/TemplateList";
import ViewStatus from "./modules/Dashboard/ViewStatus";

import {ProtectedRoute} from "./protected.route"

//LetterTemplates
import Camp from "./LetterTemplates/Camp";
import Econ from "./LetterTemplates/Eventconduct";
import Evenue from "./LetterTemplates/Eventvenue";
import Tatten from "./LetterTemplates/Attendanceteam";
import Patten from "./LetterTemplates/AttendanceParticipants";
import Emeet from "./LetterTemplates/conductmeet";
import Profile from "./Profile";
import CreateRequest from "./CreateRequest";
import EditCreateRequest from "./EditCreateRequest";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/Dashboard/CreateRequest" component={CreateRequest} />
            <Route path="/Dashboard/EditCreateRequest" component={EditCreateRequest} />
            <Route path="/facultylogin" component={FacultyLogin} />
            <Route path="/facultyregister" component={FacultyRegister} />



            <Route path="/campaining" component={Camp} />
            <Route path="/conduct" component={Econ} />
            <Route path="/venue" component={Evenue} />
            <Route path="/conductmeet" component={Emeet}/>
            <Route path="/TeamAttendance" component={Tatten} />
            <Route path="/ParticipantsAttendance" component={Patten} />

            <ProtectedRoute path="/campaining" component={Camp} />
            <ProtectedRoute path="/conduct" component={Econ} />
            <ProtectedRoute path="/venue" component={Evenue} />
            <ProtectedRoute path="/TeamAttendance" component={Tatten} />
            <ProtectedRoute path="/ParticipantsAttendance" component={Patten} />

            <Login />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;