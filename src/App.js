import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

//Error Pages Imports
import E403 from './Pages/ErrorPages/E403';
import E404 from './Pages/ErrorPages/E404';
import E503 from './Pages/ErrorPages/E503';
import EUnder from './Pages/ErrorPages/EUnder';
//Error Pages Imports End

//Reactstrap Imports
import { Container } from 'reactstrap';

//Container Components
import Layout from './Container/Layout';

import './i18n';

const loading = (
  <div className="pt-3 text-center">
      Yükleniyor
  </div>
)

export default function App() {
  return (
        <HashRouter>
            <React.Suspense fallback={loading}>
              <Switch>
                <React.Fragment>
                <Route exact path="/403" name="Page 404" render={props => <E403 {...props}/>} />
                <Route exact path="/404" name="Page 404" render={props => <E404 {...props}/>} />
                <Route exact path="/503" name="Page 404" render={props => <E503 {...props}/>} />
                <Route exact path="/under" name="under" render={props => <EUnder {...props}/>} />
                <Container style={{marginLeft: '15%'}}>
                  <Route path="/" name="Home" render={props => <Layout {...props}/>} />
                </Container>
                </React.Fragment>
              </Switch>
            </React.Suspense>
        </HashRouter>
  )

}