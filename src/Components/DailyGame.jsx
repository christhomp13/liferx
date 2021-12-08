import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Accordion from 'react-bootstrap/Accordion'
import { useHistory } from 'react-router-dom';
import dateFormat, { masks } from "dateformat";

const DailyGame = (props) => {


const history = useHistory();


const [day, setDay] = useState("")
const [gratitude, setGratitude] = useState("");
const [powerQuestion, setPowerQuestion] = useState("");
const [medStatus, setMedStatus] = useState("");
const [wins, setWins] = useState("");
const [lessons, setLessons] = useState("");

const [dailyScoreboard, setDailyScoreboard] = useState([]);

const scoreboardSubmit = (e) =>{
    e.preventDefault();
    let scoreboard = {day: day, grat: gratitude, pow: powerQuestion, med:medStatus, wins: wins, lessons: lessons}
    setDailyScoreboard([...dailyScoreboard, scoreboard])
    scoreboard.day = dateFormat(scoreboard.day, "fullDate");

    props.scoreboardFunc(scoreboard)

    setDay("");
    setGratitude("");
    setPowerQuestion("");
    setWins("");
    setLessons("");
}


    return (
            <div className="main">
            <section className="signup">
            <div className="custom-container">
            <button type="button" style = {{width:"80px", height:"40px", backgroundColor:"#0d6efd", color:"white", float:"left", marginLeft:"10px", marginTop:"10px", borderRadius:"10px"}} className="btn mb-4" onClick = {()=> history.push('/')}>Home</button>
                <div className="signup-content">
                    <div className="signup-form" style={{marginLeft:"200px"}}>
                        <h1 style={{color:"white", backgroundColor:"#0d6efd", borderRadius:"10px", width:"350px", margin:"0 auto", marginBottom:"20px", marginLeft:"50px"}}className="form-title">Daily Scoreboard</h1>
                        <form onSubmit = {scoreboardSubmit}>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray",color:"white", borderRadius:"5px", width:"100px"}}>Day</h5>
                                <input type="datetime-local" className="form-control" onChange={ (e) => setDay(e.target.value)} value={day}/>
                            </div>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray", color:"white", borderRadius:"5px", width:"200px"}}> I'm grateful for...?</h5>
                                <input type="text" className="form-control" onChange={ (e) => setGratitude(e.target.value)} value={gratitude} />
                            </div>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray", color:"white", borderRadius:"5px", width:"300px" }}>What am I most Excited for?</h5>
                                <input type="text" className="form-control" onChange={ (e) => setPowerQuestion(e.target.value)} value={powerQuestion}/>
                            </div>
                            <DropdownButton id="dropdown-basic-button" title="Meditate?">
                                <Dropdown.Item onClick= { (e) => setMedStatus('Yes, Mind gainz')}>Yes, mind gainz</Dropdown.Item>
                                <Dropdown.Item onClick= { (e) => setMedStatus('No, Build it in bruh')}>No, build it in bruh</Dropdown.Item>
                            </DropdownButton>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray", color:"white", borderRadius:"5px", width:"100px"}}>Wins:</h5>
                                <textarea className="form-control" id="text area" rows ="1" onChange={ (e) => setWins(e.target.value)} value = {wins}/>
                            </div>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray", color:"white", borderRadius:"5px", width:"100px"}}>Lessons</h5>
                                <textarea  className="form-control" id="text area 2" rows ="1" onChange={ (e) => setLessons(e.target.value)} value = {lessons}/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-3">Submit Scoreboard</button>
                        </form>
                </div>                       
                </div>

                { props.scoreInfo.length > 0 ? props.scoreInfo.map( (theScoreboard, index) => {
                    
                return (
                    <>
                            <Accordion style={{marginTop: "40px", marginLeft: "50px"}}>
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>{theScoreboard.day}</Accordion.Header>
                                 <Accordion.Body style={{textAlign:"left"}}>
                                    <p>I am grateful for {theScoreboard.grat}</p>
                                    <p>I am most excited about {theScoreboard.pow}</p>
                                    <p>{theScoreboard.med}</p>
                                    <p>Today's biggest wins are: {theScoreboard.wins}</p>
                                    <p>Today's most valuable lessons are: {theScoreboard.lessons}</p>
                                    <button type="button" className="btn btn-outline-primary" onClick ={() => props.scoreboardComplete(index)}>Complete</button>
                                 </Accordion.Body>
                                 </Accordion.Item>
                            </Accordion>
                    </>
                    )
                    }
                    ) 
                    : ""
                    }
            </div>
            </section>
        </div>
    );
}

export default DailyGame;