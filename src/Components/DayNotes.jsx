import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const DayNotes = (props) => {

const [newToDo, setNewToDo] = useState ("");
const [currentToDos, setCurrentToDos] = useState([]);

const [isChecked, setIsChecked] = useState(false);


const addTodo = (e) => {
    e.preventDefault();
    setCurrentToDos([...currentToDos, newToDo])

    props.toDoFunc(newToDo)

    setNewToDo("");
    console.log(newToDo)
}

const lineThrough = {
    textDecoration: 'line-through'
}

const noLineThrough = {
    textDecoration: 'none'
}


const history = useHistory();

    return(
        <div className="main">
        <section className="signup">
            <div className="custom-container" style={{width:"500px", height:"300px", margin:"0 auto"}}>
            <button type="button" style = {{width:"80px", height:"40px", backgroundColor:"midnightblue", color:"white", float:"left", marginLeft:"5px", marginTop:"5px", borderRadius:"10px"}} className="btn mb-4" onClick = {()=> history.push('/')}>Home</button>
                <div className="signup-content">
                    <div className="signup-form" style={{margin:"0 auto", marginLeft:"40px"}}>
                    <h3>To Dos</h3>
                        <div className='row'>
                            <div>
                                <form onSubmit={addTodo}>
                                <input 
                                type ="text"
                                placeholder="Add New To Do"
                                onChange={(e)=> setNewToDo(e.target.value)}
                                value={newToDo}
                                className='form-control'
                                style={{marginBottom:"20px"}}
                                />
                            <input type="Submit" value="Add" className="btn btn-small" style={{marginBottom:"10px", backgroundColor:"midnightblue", color:"white"}}/>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </section>

                { props.taskInfo.length > 0 ? props.taskInfo.map( (toDos, index) => {
                    
                return (
                    <>
                        <div className="card" style={{width:"200px", margin:"0 auto", padding:"10px", borderRadius:"10px", marginBottom:"10px"}}>
                                    <input type="checkbox" checked={isChecked} onChange = { e => setIsChecked(e.target.checked)}/>
                                    <h5 style={isChecked ? lineThrough:noLineThrough}> {toDos} </h5>
                                    <button className="btn btn-small" style={{backgroundColor:"midnightblue", color:"white", width:"100px", margin:"0 auto", marginTop:"5px"}} onClick ={() => props.deleteTask(index)}>Complete</button>
                        </div>
                    </>
                    )
                    }
                    ) 
                    : ""
                    }
                </div>

    );
}

export default DayNotes;