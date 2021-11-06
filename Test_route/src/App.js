import AllMeetups from "./pages/AllMeetups";
import Favorate from "./pages/Favorate";
import NewMeetup from "./pages/NewMeetup";
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path='/' exact component={AllMeetups} />
        
      <Route path='/favorate/' exact strict component={Favorate} />
      <Route path='/new-meetup'>
        <NewMeetup />
      </Route>
    </div>
  );
}

export default App;
