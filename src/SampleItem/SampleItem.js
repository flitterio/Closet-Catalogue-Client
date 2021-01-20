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

    showFavorite = (favorite) => {
        if(favorite === true)
          return  <i id="star">{star}</i>
      }

    render(){
        const {landingitems=[]} = this.context
        const {itemId}= this.props.match.params
        const item = findItem(landingitems, itemId)

        return(
            <ApiContext.Consumer>
                {(context) => (
                <div className='MyItem'>
                  <div >
                      <Link to={`/my-closet`} className='back-button' id='buttonstyle'>
                          BACK
                      </Link>
                    </div>

              <div className="item-container">
                <div className='item-detail'>
                    <img src={item.image} alt={item.title} />
                    </div>
                <div className='item-detail'>
                  <div className='fave-title'>
                    <h3 className='title'>
                            {item.title} 
                    </h3>
                    <div>
                      {this.showFavorite(item.favorite)}
                      </div>
                    </div>
                  </div>
                    <div className='item-detail'>
                  <div className="details">
                    <div className="season-item">
                      <h4>Season(s)</h4>
                      <h5>{item.season}</h5>
                    </div>
                    <div className="category-item">
                      <h4>Category</h4>
                      <h5>{item.category}</h5>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
                )}
            </ApiContext.Consumer>
        )
    }
}