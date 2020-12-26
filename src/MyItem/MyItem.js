import React from 'react'
import { Link } from 'react-router-dom'
import './MyItem.css'
import ApiContext from '../ApiContext'
import { findItem } from '../items-helpers'
import TokenService from '../services/token-service'
import config from '../config'


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
                    <img src={item.image} alt={item.title} />
                    <br />
                    <h3 className='MyItem_title'>
                            {item.title}
                    </h3>
                    <h4>{item.season}</h4>
                    <h4>{item.category}</h4>
                    <h4>{item.favorite}</h4>
                    <button type='button' onClick={this.handleClickDelete} >Delete Item </button>
                </div>
                )}
            </ApiContext.Consumer>
        )
    }
}