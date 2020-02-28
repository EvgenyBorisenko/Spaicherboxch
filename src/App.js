import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Produkte from './Components/Produkte/Produkte';
import Preise from './Components/Preise/Preise';
import UberUns from './Components/UberUns/UberUns';
import Sicherheit from './Components/Sicherheit/Sicherheit';
import Support from './Components/Support/Support';
import Footer from './Components/Footer/Footer';
import HomeSpeicherbox from './Components/HomeSpeicherbox/HomeSpeicherbox';
import MultiuserSpeicherbox from './Components/MultiuserSpeicherbox/MultiuserSpeicherbox';
import HomeDetails from './Components/HomeDetails/HomeDetails';
import FamilyDetails from './Components/FamilyDetails/FamilyDetails';
import VereinDetails from './Components/VereinDetails/VereinDetails';
import BusinessDetails from './Components/BusinessDetails/BusinessDetails';
import ResellerDetails from './Components/ResellerDetails/ResellerDetails';
import UserPage from './Components/UserPage/UserPage';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/produkte" component={Produkte} />
        <Route path="/preise" component={Preise} />
        <Route path="/uberuns" component={UberUns} />
        <Route path="/sicherheit" component={Sicherheit} />
        <Route path="/support" component={Support} />
        <Route path="/bestellen/home" component={HomeSpeicherbox} />
        <Route path="/bestellen/multiuser" component={MultiuserSpeicherbox} />
        <Route path="/home" component={HomeDetails} />
        <Route path="/family" component={FamilyDetails} />
        <Route path="/verein" component={VereinDetails} />
        <Route path="/business" component={BusinessDetails} />
        <Route path="/reseller" component={ResellerDetails} />
        <Route path="/dashboard" component={UserPage} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(App);
