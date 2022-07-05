import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios"
import "./join-plan-component.css"

function JoinPlan() {

  const [joinState, setJoinState] = useState({
    joinPlanName: "",
    joinPlanCode: 0
  })

  const onNameChange = (e) => {
    setJoinState((prevData) => {
      return {
        ...prevData,
        joinPlanName: e.target.value
      }
    })
  }

  const onCodeChange = (e) => {
    setJoinState((prevData) => {
      return {
        ...prevData,
        joinPlanCode: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkData = { 
      params: {
        name: joinState.joinPlanName,
        code: joinState.joinPlanCode
      }
    }

    axios.get("http://localhost:5000/join-plan", checkData)
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
  }

  return (
    <div className="container">
      <div className='table'>
        <div className='join-title'>
          Join a Plan
        </div>
        <form className='form' onSubmit={handleSubmit}>
        <label>Plan Name</label>
        <br />
        <input type="text"
              className='joinInput'
              onChange={onNameChange}
              placeholder="E.g. Cafe plan"
          />
        <br />
        <label>Plan Code</label>
        <br />
        <input type="number" 
              className='joinInput'
              onChange={onCodeChange}
              placeholder="E.g. 1234"
          />
        <br />
        <input className="join-input-submit" 
              type="submit" 
              value="Join"
          />
        <Link to="/" style={{ textDecoration: 'none' }} className="home-btn">Cancel
        </Link>
        </form>
        </div>
    </div>
  );
}

export default JoinPlan;