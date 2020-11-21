import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Nav/NavContainer';
import { Route, Switch } from "react-router";
import SignIn from "./components/SignIn/SingIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import SideNav from './components/SideNav/SideNav';
import ContentContainer from './components/Content/ContentContainer';

function App() {
  return (
    <div className="App">
      <NavContainer />
      <div className="d-flex">
        <Switch>
          <Route path="/signIn" render={() => <SignIn />} />
          <Route path="/" render={() => <SideNav />} />
        </Switch>
        <ContentContainer />
      </div>
    </div>
  );
}

export default App;
