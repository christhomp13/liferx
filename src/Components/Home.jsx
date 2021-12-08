import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = (props) => {

const history = useHistory();

const [quote, setQuote]= useState("")
const [author, setAuthor] = useState("")

useEffect(() => {
    axios.get("https://type.fit/api/quotes")
        .then(res => {
            const data = res.data;
            const quoteNum = Math.floor(Math.random() * data.length);
            const randomQuote = data[quoteNum];

            setQuote(randomQuote.text);
            setAuthor(randomQuote.author);
        })
        .catch(err => console.log(err));
}, []);

    return (
        

        <div className="header_hero">
            <div className="single_hero bg_cover d-flex align-items-center">
                <div className="container" style={{borderRadius:"20px"}}>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-10">
                        <div className="card mb-4" style={{width:"300px", margin:"0 auto", backgroundColor: "rgba(0,0,0,.4)", color:"white"}}>
                        <div className="card-body">
                            <h5> { quote ? quote : ""}</h5>
                            <h3> { author ? author : ""}</h3>
                        </div>
                    </div>
                            <div className="hero_content text-center rounded-3 pb-4" style={{backgroundColor: "rgba(0,0,0,.4)"}}>
                                <h1 style={{color:"white", backgroundColor:"#228b22ab", width:"200px", borderRadius:"5px", margin:"0 auto", marginBottom:"30px"}}>Life Rx</h1>
                                    <button type="button" style={{display: "block", margin:"0 auto", marginBottom:"10px"}} className="btn btn-primary"  onClick = {()=> history.push('/dailygame')}>Daily Scoreboard <span className="badge badge-danger">{props.boardLength}</span> </button>
                                    <button type="button" style={{display: "block", margin:"0 auto", marginBottom:"10px"}}className="btn btn-primary" onClick = {()=> history.push('/trainingdesign')}>Training Lab <span className="badge badge-danger">{props.trainingSesh}</span></button>
                                    <button type="button" style={{display: "block", margin:"0 auto"}}className="btn btn-primary"  onClick = {()=> history.push('/daynotes')}>To-Dos <span className="badge badge-danger">{props.toDoList}</span></button>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
    );
}

export default Home;