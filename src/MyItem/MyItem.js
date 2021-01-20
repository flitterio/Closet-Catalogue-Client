import React from 'react'
import { Link } from 'react-router-dom'
import './MyItem.css'
import ApiContext from '../ApiContext'
import { findItem } from '../items-helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import config from '../config'
import TokenService from '../services/token-service'


const star = <FontAwesomeIcon icon={faStar} />;




export default class Item extends React.Component{
  static contextType = ApiContext; 

  static defaultProps ={
        onDeleteItem: () => {},
        match: {
            params: {}
          }
    }

    state ={
      deleteWarning: false,
    };

    
    componentDidMount() {
      this.setState({deleteWarning: false})
    }

    showFavorite = (favorite) => {
      if(favorite === true)
        return  <i id="star">{star}</i>
    } 

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



  cancelDelete = (e) => {
      window.location.href='/my-closet'
  }

    deleteClicked = (e) => {
      e.preventDefault()
      this.setState({deleteWarning: true})
    }
    
    showDeleteWarning = () =>{
       if(this.state.deleteWarning === true){
      return(
        <>
        <h2>Are you sure you want to delete your item?</h2>
        <div className='MyItem-buttons'>  
            <input type='button'  id='clear' value='CANCEL' onClick={this.cancelDelete} />

            <button id="delete" type='button' className="category-item" onClick={this.handleClickDelete} >Delete Item </button>

        </div> 
        </>
        ) 
      }
    }


    render(){
        const {items=[]} = this.context
        const {itemId}= this.props.match.params
        const item = findItem(items, itemId);

        return(
            <ApiContext.Consumer>
                {(context) => (
                <div className='MyItem'>
                  <div >
                      <Link to={`/my-closet`} className='back-button' id='buttonstyle'>
                          BACK
                      </Link>
                    </div>
                  {this.showDeleteWarning()}
              <div className="item-container">
                <div className='item-detail'>
                    <img src={item.image} alt={item.title} id='item-image'/>
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
                <div className='MyItem-buttons'>
                    <Link to={`/edit-item/${itemId}`} id='buttonstyle' className="edit-item">
                        EDIT ITEM
                    </Link>
                    <button id="delete" type='button' className="category-item" onClick={this.deleteClicked} >Delete Item </button>
                </div>
                </div>
                )}
            </ApiContext.Consumer>
        )
    }
}