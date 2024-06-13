// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import Header from "./Header";
// import Product from "./Product";
// import Login from "./login";
// function App() {
// return (
//   <div className="app">
//     <Router>
//       <Switch>
//       <Route path="/Login">
//       <Login />
//       </Route>
//         <Route path="/">
//           <Header />
//           <Home />
//           <Product />
//         </Route>``
//       </Switch>
//     </Router>
//   </div>
// );
// }

// useEffect(() => {
//   // will only run once when the app component loads...

//   auth.onAuthStateChanged((authUser) => {
//     console.log("THE USER IS >>> ", authUser);

//     if (authUser) {
//       // the user just logged in / the user was logged in

//       dispatch({
//         type: "SET_USER",
//         user: authUser,
//       });
//     } else {
//       // the user is logged out
//       dispatch({
//         type: "SET_USER",
//         user: null,
//       });
//     }
//   });
// }, []);
// export default App;
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Product from "./Product";
import Login from "./login";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);

export default App;