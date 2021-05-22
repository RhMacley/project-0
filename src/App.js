import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import GlobalStyle from './styles/globalStyle';
import SideBar from './components/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Products/Products'
import Sales from './pages/Sales/Sales'
import { Layout } from './styles/Layout';



function App() {
  return (
    <>
        <Router>
        <GlobalStyle />
        <Layout>
        <SideBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/products' component={Products}/>
          <Route path='/sales' component={Sales}/>
        </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
