import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios"
import "./join-plan-component.css"

function JoinPlan() {

  const [joinState, setJoinState] = useState({
    joinPlanCode: 0
  })

  const onCodeChange = (e) => {
    setJoinState((prevData) => {
      return {
        ...prevData,
        joinPlanCode: e.target.value
      }
    })
  }

  /*const handleSubmit = (e) => {
    e.preventDefault();

    const checkData = { 
      params: {
        code: joinState.joinPlanCode
      }
    }

    axios.get("https://mern-planable.herokuapp.com/join-plan", checkData)
    .then((response) => {
      if (response.data.length == 1) {
        window.location = `/plan/${joinState.joinPlanCode}`;
      }
      else if (response.data.length == 0) {
        alert("Plan not found!");
      }
      console.log(response)
    })

    console.log(checkData)
  }*/

  return (
    <div className="container">
      <div className='join-table'>
        <div className='join-title'>
          Join a Plan
        </div>
        <form className='form'>
        
        <label>Plan Code</label>
        <br />
        <input type="number" 
              className='joinInput'
              onChange={onCodeChange}
              placeholder="E.g. 1234"
          />
        <br />
        <Link to={`/plan/${joinState.joinPlanCode}`} 
              style={{ textDecoration: 'none' }}
              className="join-input-submit" >Join
        </Link>  
        <Link to="/" 
              style={{ textDecoration: 'none' }} 
              className="home-btn">Cancel
        </Link>
        </form>
        </div>
    </div>
  );
}

export default JoinPlan;