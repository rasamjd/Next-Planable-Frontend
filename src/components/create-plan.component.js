import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./create-plan-component.css"
import DatePicker from 'react-datepicker';
import axios from "axios"
import "react-datepicker/dist/react-datepicker.css";

function CreatePlan() {

  //this.onSubmit=this.onSubmit.bind(this);

  const [displayState, setDisplayState] = useState(0);

  const [createState, setCreateState] = useState({
    planName: "", 
    planCode: (Math.round(Math.random() * (10 ** 6))),
    planCreateDate: new Date()
    /*, planExpireDate: new Date*/
  });

  useEffect(() => {
    
  });

  const handleSubmit = () => {
    if (createState.planName.length > 2) {
      setDisplayState(1);

      const planData = {
        name : createState.planName,
        code : createState.planCode,
        date : createState.planCreateDate
      }

      axios.post("http://localhost:5000/create-plan", planData)
        .then((resault) => console.log(`Plan info posted successfully: ${resault}`))
        .catch((error) => console.log(error.response.data))
    }
    else {
      alert("You should pick a plan name with at least 3 characters!")
    }
  }

    const onChangeDate = (date) => {
      setCreateState((prevData) => {
        return {
          ...prevData,
          planCreateDate : date
        }
      })
      console.log(date)
    }

    const onChangeName = (e) => {
      setCreateState((prevData) => {
        return{
          ...prevData, 
          planName : e.target.value
        }
      })
  }

  if (displayState === 0) {
    return (
      <div className="container">
        <div className='createTable'>
          <div className='create-title'>
            Create a Plan
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <label>Plan Name</label>
            <br />
            <input className='create-input'
                  type="text"
                  onChange={onChangeName}
                  placeholder="E.g. Foorball plan"
              />
            <br />
            <label>Plan Code</label>
            <br />
            <input className='create-input' 
                  type="number" 
                  value={createState.planCode}
                  readOnly
              />
            <br />
            <label>Date</label>
            <br />
            <DatePicker className='datepicker' 
                        onChange={onChangeDate}
                        shouldCloseOnSelect={false}
                        //placeholderText="Pick a Start Date (optional)"
                        selected={createState.planCreateDate}
              />
            <br />
            <input className='create-input-submit' 
                  type="submit" 
                  value="Create"
              />
            <Link to="/" 
                  style={{ textDecoration: 'none' }} 
                  className="home-btn-create">Cancel
            </Link>
          </form>
        </div>
      </div>
    );
  }

  else if (displayState === 1) {
    return (
      <div className="container">
        <div className='table'>
          <div className='create-title'>
            Create a Plan
          </div>
          <div className='response'>
            <b>Plan created successfully!</b>
            <Link to="/" style={{ textDecoration: 'none' }} className="home-btn-after">Home
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePlan;