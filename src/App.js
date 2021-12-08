import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DailyGame from './Components/DailyGame';
import Home from './Components/Home';
import TrainingDesign from './Components/TrainingDesign';
import DayNotes from './Components/DayNotes';

function App() {

  const [scoreboardInfo, setScoreboardInfo] = useState([]);
  const [trainingSessions, setTrainingSessions] = useState([]);
  const [toDos, setToDos] = useState([]);

  const handleScoreboardInfo = (scoreboard) => {
      setScoreboardInfo([...scoreboardInfo,scoreboard])
      console.log([scoreboardInfo])
  }

  const handleTrainingSessions = (session) => {
      setTrainingSessions([...trainingSessions, session])
      console.log([trainingSessions])
  }

  const handleToDos = (task) => {
    setToDos([...toDos, task])
    console.log([toDos])
  }

  const deleteTask = (index) =>{
    var copyToDo = [...toDos]
    copyToDo.splice(index, 1)
    setToDos(copyToDo)
}

  const completeScoreboard = (index) =>{
    var copyScoreboard = [...scoreboardInfo]
    copyScoreboard.splice(index, 1)
    setScoreboardInfo(copyScoreboard)
  }
  
  const trainingComplete = (index) =>{
    var copyTrainingSesh = [...trainingSessions]
    copyTrainingSesh.splice(index,1)
    setTrainingSessions(copyTrainingSesh)
  }

  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home boardLength={scoreboardInfo.length} trainingSesh = {trainingSessions.length} toDoList={toDos.length}/>
            </Route>
            <Route path="/dailygame">
              <DailyGame scoreboardFunc={handleScoreboardInfo} scoreInfo={scoreboardInfo} scoreboardComplete={completeScoreboard}/>
            </Route>
            <Route path="/trainingdesign">
              <TrainingDesign trainingSessionFunc = {handleTrainingSessions} seshInfo={trainingSessions} seshComplete={trainingComplete}/>
            </Route>
            <Route path="/daynotes">
              <DayNotes toDoFunc = {handleToDos} taskInfo ={toDos} deleteTask={deleteTask}/>
            </Route>
          </Switch>
    </BrowserRouter>
    </div>

  );
}


export default App;
