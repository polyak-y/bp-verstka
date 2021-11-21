import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from 'HOC/ScrollToTop/ScrollToTop';
import router from 'router';
import 'App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          {
            router.map((route) => 
              <Route key={route.path} path={route.path} element={<route.component />} />
            )
          }
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
