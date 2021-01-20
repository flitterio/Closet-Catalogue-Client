import React, {Component} from 'react';
import {Link } from 'react-router-dom'
import './LandingPage.css'
import NewItemButton from '../NewItemButton/NewItemButton';
import ApiContext from '../ApiContext';

class LandingPage extends Component {

static contextType = ApiContext;

render(){
const {landingitems=[]} = this.context
    return(
    <div className="landingpage_content">
         <section>
            <h2 className='welcome'>WELCOME TO CLOSET CATELOGUE</h2>
            <p className='opening-p'> Imagine online shopping, but with everything you already own. With Closet Catalogue, you can create a catalogue of your closet items for easy browsing. Give your items titles, upload images, categorize them by style, and season. Scroll down to check out a sample catalogue and create a free account to access exclusive features(adding items and searching your catalogue!). </p>
        </section>
        <br />
        <article id="sample catalogue">
            
            <NewItemButton id="buttonstyle"
                tag={Link}
                to='/new-item'
                type='button'
                className='NewItem_button-container'>
                    ADD ITEM 
                </NewItemButton>
            <div className='group'>
                {landingitems.map(item =>
                    <div className='sample-item' key={item.id}>
                        <Link to={`/sample-item/${item.id}`} >
                            <img src={item.image} alt={item.title} />
                        </Link>

                        <br />
                        <h3 className='Item_title'>
                            <Link to={`/sample-item/${item.id}`}>
                                {item.title}
                            </Link>
                        </h3>
                            </div>
                         )}
                </div>
        </article>
    </div>

    );
}
}

export default LandingPage;