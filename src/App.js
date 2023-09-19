import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import './App.scss';
const TheLayout = React.lazy(() => import('./containers/TheLayout'));


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"> Loading... </div>
  </div>
);

const PageNotFound = () => {
  return (
    "page not found"
  )
}

function App() {
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/" name="Home" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/contact" name="Contact" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/careers" name="Careers" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/employees" name="Employees" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/about" name="About" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/about/:id" name="About" render={(props) => <TheLayout {...props} />} />
          
          <Route exact path="/training" name="Training" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/training/:id" name="Training" render={(props) => <TheLayout {...props} />} />
         
          <Route exact path="/services" name="Services" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/services/:id" name="Services" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/logistics" name="Logistics" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/seaporte" name="SeaportE" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/news" name="News" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/news/:id" name="News" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/fms" name="Fms" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/transparency-in-coverage" name="TransparencyInCoverage" render={(props) => <TheLayout {...props} />} />
          <Route exact path="/training/:experience-section"
          render={({ match }) => {   
            console.log(match.params,"paramsmmmmmmmmmmmmmmmmmmmmmmmmm");
            const currentCompanyId = match.params.companyId;   
            const currentCompany = ""   
            if (!currentCompany) {     return "<CompanyNotFound />";   }   
            return (     <div>       <h3>Welcome to the {currentCompany.name} Detail Page</h3>    
             </div>   );
        }}
      />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
