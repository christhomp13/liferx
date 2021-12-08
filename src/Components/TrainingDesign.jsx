import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { useHistory } from 'react-router-dom';
import dateFormat, { masks } from "dateformat";

const TrainingDesign = (props) => {

const history = useHistory();

const [seshDay, setSeshDay] = useState ("");
const [warmup,setWarmup] = useState ("");
const [partA, setPartA] = useState ("");
const [partB, setPartB] = useState ("");
const [partC, setPartC] = useState ("");
const [notes, setNotes] = useState ("");

const [trainingSesh, setTrainingSesh] = useState ([]);

const seshSubmit = (e) =>{
    e.preventDefault();
    let dailySesh = {day:seshDay, warm: warmup, firstpart: partA, secondpart: partB, thirdpart: partC, seshnotes: notes};
    setTrainingSesh([...trainingSesh, dailySesh]);
    dailySesh.day = dateFormat(dailySesh.day, "fullDate");

    props.trainingSessionFunc(dailySesh)

    setSeshDay("");
    setWarmup("");
    setPartA("");
    setPartB("");
    setPartC("");
    setNotes("");
}


    return (

        <div className="main">
        <section className="signup">
            <div className="custom-container">
            <button type="button" style = {{width:"80px", height:"40px", backgroundColor:"forestgreen", color:"white", float:"left", marginLeft:"10px", marginTop:"10px", borderRadius:"10px"}} className="btn mb-4" onClick = {()=> history.push('/')}>Home</button>
                <div className="signup-content">
                    <div className="signup-form" style={{margin:"0 auto"}}>
                        <h1 style={{color:"white", backgroundColor:"forestgreen", borderRadius:"10px", width:"300px", margin:"0 auto", marginBottom:"20px", marginLeft:"50px"}}className="form-title">Training Lab</h1>
                        <form onSubmit = {seshSubmit}>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray",color:"white", borderRadius:"5px", width:"100px"}}>Day</h5>
                                <input type="datetime-local" className="form-control" style={{width:"400px"}} onChange = { (e) => setSeshDay(e.target.value)} value = {seshDay}/>
                            </div>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray", color:"white", borderRadius:"5px", width:"100px"}}>Warm-Up</h5>
                                <textarea className="form-control" id="text area" rows ="1" style={{width:"400px"}} onChange = { (e) => setWarmup(e.target.value)} value = {warmup}/>       
                            </div>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray", color:"white", borderRadius:"5px", width:"100px" }}>Part A</h5>
                                <textarea  className="form-control" id="text area 2" rows ="1" style={{width:"400px"}} onChange = { (e) => setPartA(e.target.value)} value = {partA}/>       
                            </div>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray", color:"white", borderRadius:"5px", width:"100px"}}>Part B</h5>
                                <textarea  className="form-control" id="text area 2" rows ="1" style={{width:"400px"}} onChange = { (e) => setPartB(e.target.value)} value = {partB}/>
                            </div>
                            <div className="form-group">
                                <h5 style={{backgroundColor:"slategray", color:"white", borderRadius:"5px", width:"100px"}}>Part C</h5>
                                <textarea  className="form-control" id="text area 2" rows ="1" style={{width:"400px"}} onChange = { (e) => setPartC(e.target.value)} value = {partC}/>
                            </div>
                            <button type="submit" className="btn mt-2 mb-3" style={{marginRight:"130px", backgroundColor:"forestgreen",color:"white"}}>Submit Training Sesh</button>
                        </form>
                </div>                       
                </div>

            { props.seshInfo.length > 0 ? props.seshInfo.map( (theSesh, index) => {

                    return (
                    <>
                            <Accordion style={{width:"500px", margin:"0 auto"}}>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>{theSesh.day}</Accordion.Header>
                            <Accordion.Body style={{textAlign:"left"}}>
                                    <p>{theSesh.day}</p>
                                    <p>{theSesh.warm}</p>
                                    <p>{theSesh.firstpart}</p>
                                    <p>{theSesh.secondpart}</p>
                                    <p>{theSesh.thirdpart}</p>
                                    <p>{theSesh.seshnotes}</p>
                                    <button type="button" className="btn btn-outline-primary" onClick = { () => props.seshComplete(index)}>Complete</button>
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

export default TrainingDesign;