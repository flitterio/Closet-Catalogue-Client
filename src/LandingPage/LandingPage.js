import React, {Component} from 'react';
import {Link } from 'react-router-dom'
import {ApiContext} from '../ApiContext';
import './LandingPage.css'
import NewItemButton from '../NewItemButton/NewItemButton';
import {getClosetItems} from '../items-helpers';
import Item from '../Item/Item';

class LandingPage extends Component {
static defaultProps ={
    match: {
        params: {}
    }
}
static contextType = ApiContext;
render(){
    const userId = 1;
    const {items=[]} = this.context;
    const closetItems = getClosetItems(items, userId);

    return(
    <div className="landingpage_content">
         <section>
            <h2>How it works</h2>
            <p>Imagine online shopping, but with everything you already know. With Closet Catalogue, users create a full catalogue of their closet items for easy browsing. Give your items titles, upload images, categorize them by style, size, and season. scroll down to check out a sample catalogue and add an item of your own. </p>
        </section>
        <br />
        <article id="sample catalogue">
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
    </div>

    );
}
}

export default LandingPage;