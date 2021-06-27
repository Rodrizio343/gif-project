import React from 'react';
import './App.css';
import {Link, Route} from 'wouter';
import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResults/SearchResult';
import Detail from './pages/Detail/Detail';
import StaticContext from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext';


function App() {
  return (
    <StaticContext.Provider value={{name: 'esto-es-con-provider', status: true}}>
      <div className="App">
      <section className="App-content">
        <Link to="/">Ir a home</Link>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword/:rating?" component={SearchResult}/>
          <Route path="/gif/:id" component={Detail}/>
          <Route path="/404" component={() => <h1>404 ERROR :(</h1>} />
        </GifsContextProvider>
      </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
