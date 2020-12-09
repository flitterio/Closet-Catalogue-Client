import React, {Component} from 'react';
import {Link } from 'react-router-dom'
import {ApiContext} from '../ApiContext';
import './MyCloset.css'
import NewItemButton from '../NewItemButton/NewItemButton';
import {getClosetItems} from '../items-helpers';
import Item from '../Item/Item';

class MyCloset extends Component {
    static defaultProps ={
        match: {
            params: {}
        }
    }
    static contextType = ApiContext
    render(){
        const userId = 1
        const {items=[]} = this.context
        const closetItems = getClosetItems(items, userId)
            
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
                {closetItems.map(item =>
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