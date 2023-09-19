import React from 'react';
import Traning from './views/pages/traning/Traning';
const Home = React.lazy(() => import('./views/pages/Home/Home'));
const Contact = React.lazy(() => import('./views/pages/Contact/Contact'));
const Careers = React.lazy(() => import('./views/pages/Careers/Careers'));
const Employees = React.lazy(() => import('./views/pages/Employees/Employees'));
const About = React.lazy(() => import('./views/pages/About/About'));
const Training = React.lazy(() => import('./views/pages/traning/Traning'));
const Services = React.lazy(() => import('./views/pages/Services/Services'));
const Logistics = React.lazy(() => import('./views/pages/Logistics/Logistics'));
const SeaportE = React.lazy(() => import('./views/pages/SeaportE/SeaportE'));
const News = React.lazy(() => import('./views/pages/News/News'));
const Fms = React.lazy(() => import('./views/pages/Fms/Fms'));
const TransparencyInCoverage = React.lazy(() => import('./views/pages/TransparencyInCoverage/TransparencyInCoverage'));

const ServiceBanner = React.lazy(() => import("./views/pages/Services/ServiceBanner"));
const Capabilities = React.lazy(() => import("./views/pages/Services/Capabilities"));
const Analysis = React.lazy(() => import("./views/pages/Services/Analysis"));
const ServiceInstructional = React.lazy(() => import("./views/pages/Services/ServiceInstructional"));
const ServiceAdministrative = React.lazy(() =>import("./views/pages/Services/ServiceAdministrative"));
const Conversion = React.lazy(() => import("./views/pages/Services/Conversion"));
const Experience = React.lazy(() => import("./views/pages/Services/Experience"));


const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/contact', exact: true, name: 'Contact', component: Contact },
    { path: '/careers', exact: true, name: 'Careers', component: Careers },
    { path: '/employees', exact: true, name: 'Employees', component: Employees },
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/about/:id', exact: true, name: 'About', component: About },
    { path: '/training', exact: true, name: 'Training', component: Training },
    { path: '/training/:id', exact: true, name: 'Training', component: Training },
    { path: '/services', exact: true, name: 'Services', component: Services },
    { path: '/services/:id', exact: true, name: 'Services', component: Services },
   
    { path: '/logistics', exact: true, name: 'Logistics', component: Logistics },
    { path: '/seaporte', exact: true, name: 'SeaportE', component: SeaportE },
    { path: '/news', exact: true, name: 'News', component: News },
    { path: '/news/:id', exact: true, name: 'News', component: News },
    { path: '/fms', exact: true, name: 'Fms', component: Fms },
    { path: '/transparency-in-coverage', exact: true, name: 'TransparencyInCoverage', component: TransparencyInCoverage },

]

export default routes;