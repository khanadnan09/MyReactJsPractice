import './App.css';
import IncDec from './components/IncDec';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import Gettime from './components/Gettime';
import Digitalclock from './components/Digitalclock';
import Todolist from './components/Todolist';
import Accordians from './components/Accordians';
import Netflix from './components/Netflix';
import Cart from './components/Cart';
import Covidapi from './components/Covidapi';
import HistoryHook from './components/HistoryHook';
import Error404 from './components/Error404';
import Filterimage from './components/Filterimage';
import Newspage from './components/Newspage';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><IncDec /><HistoryHook /></Route>
          <Route exact path="/Gettime"><Gettime /><HistoryHook /></Route>
          <Route exact path="/Digitalclock"><Digitalclock /><HistoryHook /></Route>
          <Route exact path="/Todolist"><Todolist /><HistoryHook /></Route>
          <Route exact path="/Accordians"><Accordians /><HistoryHook /></Route>
          <Route exact path="/Netflix"><Netflix /><HistoryHook /></Route>
          <Route exact path="/Cart"><Cart /><HistoryHook /></Route>
          <Route exact path="/covidapi"><Covidapi /><HistoryHook /></Route>
          <Route exact path="/Filterimage"><Filterimage/><HistoryHook /></Route>
          <Route exact path="/Newspage/business" key="b"><Newspage category="business"/></Route>
          <Route exact path="/Newspage/entertainment" key="e"><Newspage category="entertainment"/></Route>
          <Route exact path="/Newspage/general" key="gen"><Newspage category="general"/></Route>
          <Route exact path="/Newspage/health" key="he"><Newspage category="health"/></Route>
          <Route exact path="/Newspage/science" key="sci"><Newspage category="science"/></Route>
          <Route exact path="/Newspage/sports" key="sports"><Newspage category="sports"/></Route>
          <Route exact path="/Newspage/technology" key="tech"><Newspage category="technology"/></Route>
          <Route><Error404/></Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
