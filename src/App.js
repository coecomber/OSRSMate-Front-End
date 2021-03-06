import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreatePost from './components/posts/CreatePost'
import Profile from './components/profile/Profile'
import Highscores from './components/highscore/Highscore'
import QuestCalc from './components/QuestCalc/QuestCalc'
import AchievementCalc from './components/AchievementCalc/AchievementCalc'
// import { Jumbotron } from './components/Jumbotron/GlobalJumbotron'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Jumbotron /> */}
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/post/:id' component={PostDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/profile' component={Profile} />
          <Route path='/createpost' component={CreatePost} />
          <Route path='/highscores' component={Highscores} />
          <Route path='/questcalc' component={QuestCalc} />
          <Route path='/achievementcalc' component={AchievementCalc} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
