import React from 'react'
import { Link } from 'react-router-dom'
import './MyItem.css'
import ApiContext from '../ApiContext'
import { findItem } from '../items-helpers'
import TokenService from '../services/token-service'
import config from '../config'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const star = <FontAwesomeIcon icon={faStar} />;



export default class Item extends React.Component{
    static defaultProps ={
        onDeleteItem: () => {},
        match: {
            params: {}
          }
    }

    static contextType = ApiContext;

    handleClickDelete = e => {
        e.preventDefault()
        const {itemId} = this.props.match.params
       
     fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
          })
          .then( res => {
            if(!res.ok) 
              return res.json().then(e =>  Promise.reject(e))
                return res
          })
          .then(() => {
            this.context.deleteItem(itemId)
            this.props.onDeleteItem(itemId)
            window.location.href='/my-closet'
            })
          .catch(error => {
            console.error({error})
          })
          }


    render(){
        const {items=[]} = this.context
        const {itemId}= this.props.match.params
        const item = findItem(items, itemId);

        return(
            <ApiContext.Consumer>
                {(context) => (
                <div className='MyItem'>
                  <div className='back-button' id='buttonstyle'>
                      <Link to={`/my-closet`} id='buttonstyle'>
                          BACK
                      </Link>
                    </div>
                    <br /><br />
              <div className="item-container">
                <div className='item-detail'>
                    <img src={item.image} alt={item.title} />
                    </div>
                <div className='item-detail'>
                    <h3 className='title'>
                            {item.title}
                  <i id="star" style={{visibility: item.favorite ? 'visible' : 'hidden'}}>{star}</i>
                    </h3>
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
                    <Link to={`/edit-item/${itemId}`} id='buttonstyle' className="edit-item">
                        EDIT ITEM
                    </Link>
                    <button id="delete" type='button' className="category-item" onClick={this.handleClickDelete} >Delete Item </button>
                </div>
                )}
            </ApiContext.Consumer>
        )
    }
}