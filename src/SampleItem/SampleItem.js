import React from 'react'
import { Link } from 'react-router-dom'
import { findItem } from '../items-helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ApiContext from '../ApiContext';
const star = <FontAwesomeIcon icon={faStar} />;



export default class SampleItem extends React.Component{
    static defaultProps ={
        match: {
            params: {}
          }
    }

    static contextType = ApiContext;

    render(){
        const {landingitems=[]} = this.context
        const {itemId}= this.props.match.params
        const item = findItem(landingitems, itemId)

        return(
            <ApiContext.Consumer>
                {(context) => (
                <div className='MyItem'>
                  <Link to={`/`}>
                        Back
                    </Link>
                    <br /><br />
                    <img src={item.image} alt={item.title} />
                    <br />
                    <h3 className='MyItem_title'>
                            {item.title}
                  <i style={{visibility: item.favorite ? 'visible' : 'hidden'}}>{star}</i>
                    </h3>
                    <h4>Season(s)</h4>
                    <h5>{item.season}</h5>
                    <h4>Category</h4>
                    <h5>{item.category}</h5>
                </div>
                )}
            </ApiContext.Consumer>
        )
    }
}