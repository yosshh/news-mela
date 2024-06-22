import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";


const App = () => {
  const [Progress, setProgress] = useState(0)
  // pageSize=[10]
  //  c = 'yash'
  const APIKey = process.env.REACT_APP_NEWS_API;
  
  setProgress(Progress)

  return (
    <div>
    <Router>
      
        {/* hello my first class based Component{this.c} */}
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          Progress={Progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="business"
                pageSize={10}
                country="in"
                category="Business"
              />
            }
          ></Route>
          <Route
            exact
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="sports"
                pageSize={10}
                country="in"
                category="Sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="technology"
                pageSize={10}
                country="in"
                category="Technology"
              />
            }
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="Entertainment"
                pageSize={10}
                country="in"
                category="Entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="Health"
                pageSize={10}
                country="in"
                category="Health"
              />
            }
          ></Route>
          <Route
            exact
            path="/General"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="General"
                pageSize={10}
                country="in"
                category="General"
              />
            }
          ></Route>
          <Route
            exact
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="Science"
                pageSize={10}
                country="in"
                category="Science"
              />
            }
          ></Route>
        </Routes>
      
    </Router>
    </div>
  );
};
export default App