import React, {Component} from 'react';
import {Link } from 'react-router-dom'
import ApiContext from '../ApiContext';
import './MyCloset.css'
import NewItemButton from '../NewItemButton/NewItemButton';
//import {getClosetItems} from '../items-helpers';
import Item from '../Item/Item';
import TokenService from '../services/token-service';
import config from '../config';

class MyCloset extends Component {
    state={
        error: null,
    }
    static defaultProps ={
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    componentDidMount() {
        console.log(TokenService.getAuthToken())
        fetch(`${config.API_ENDPOINT}/items`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            if(!res.ok) {
            return res.json().then(error => Promise.reject(error))
            }
            return res.json();
        })
         .then(responseJson => {
            console.log('responsejson', responseJson)
            this.setState({items: responseJson})
         })
        //console.log('res.json',res.json())
    

    .catch(error => {
        console.error(error)
        this.setState({error})
    })

}
    render(){
        //const userId = 1
        const {items=[]} = this.context
        //const closetItems = getClosetItems(items, userId)
            
        return(
        <article id="my catalogue">
            <NewItemButton
                tag={Link}
                to='/new-item'
                type='button'
                className='NewItem_button-container'>
                    Add Item 
                </NewItemButton>
            <div className='group'>
                {items.map(item =>
                    <div className='item' key={item.id}>
                        <Item 
                            id={item.id}
                            image={item.image}
                            title={item.title}
                                />
                            </div>
                         )}
                </div>
        </article>
        )
    }
}

export default MyCloset;