import { Fragment } from "react";
import Header from "./Components/Header/Header";
import { Switch, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Admin from "./Components/Admin/Admin";
import Login from "./Components/Login/Login";

function App() {
  return(
   <Fragment>
     <div className="container">
       <Header />
     </div>

     <div className="container">
       <Switch>
         <Route path='/' exact>
           <Login />
         </Route>
         <Route path='/home' exact>
           <Home></Home>
         </Route>
         <Route path='/profile'>
           <Profile />
         </Route>
         <Route path='/admin'>
           <Admin></Admin>
         </Route>
       </Switch>
     </div>
   </Fragment>
  )
}
export default App;
