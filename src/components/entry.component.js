import { Link } from 'react-router-dom';
import "./entry-component.css"

function Entry() {
    return (
      <div className="container">
        <div className="title">
          Planable
          </div>
          <p className="description">
            Create or Join a plan with people you're looking forward to have a meeting with.
            Review other timings and add your own schedule. Find the best time simply.
          </p>
          <div className="btns">
            <div className="join-div">
              <Link to="/join-plan" style={{ textDecoration: 'none' }} className="join btn">Join Plan
              </Link>
              <br />
            <p className='ep'>Join an already created Plan easily</p>
            </div>
            <div className="create-div">
              <Link to="/create-plan" style={{ textDecoration: 'none' }} className="create btn">Create Plan
              </Link>
              <br />
              <p className='ep'>Create a Plan and share it with others so that they can also join</p>
            </div>
          </div>
          <div className="footer">
          Made using MERN Stack    
          </div>
      </div>
    );
}

export default Entry;