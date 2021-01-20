import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <h1 className="error">404</h1>
            <h3>The Page You Requested Does Not Exist</h3>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>
    }
}
export default NotFoundPage;