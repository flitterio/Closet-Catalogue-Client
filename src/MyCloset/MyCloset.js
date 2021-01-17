import React, {Component} from 'react';
import {Link } from 'react-router-dom'
import ApiContext from '../ApiContext';
import './MyCloset.css'
import NewItemButton from '../NewItemButton/NewItemButton';
import TokenService from '../services/token-service';
import config from '../config';
import SearchBar from '../SearchBar/SearchBar';

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
            const resitems = responseJson
            this.props.updateContextState(resitems)
         })

    

    .catch(error => {
        console.error(error)
        this.setState({error})
    })

}
    render(){
        const {items=[]} = this.context
            
        return(
        <article id="my-closet">
            <div className='add-item'>
                <NewItemButton
                    tag={Link}
                    to='/new-item'
                    type='button'
                    id='buttonstyle'
                    className='NewItem_button-container'>
                        ADD ITEM 
                    </NewItemButton>
                </div>
                    <SearchBar />
        </article>
        )
    }
}
export default MyCloset;