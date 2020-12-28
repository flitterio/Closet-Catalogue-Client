import React, {Component} from 'react';
import {Link } from 'react-router-dom'
import './LandingPage.css'
import NewItemButton from '../NewItemButton/NewItemButton';
import Item from '../Item/Item';

class LandingPage extends Component {
static defaultProps ={
    match: {
        params: {}
    }
}
state={
          items: [
                    {
                id: 1,
                userId: 1,
                title: 'Maroon Shirt',
                image: 'https://res.cloudinary.com/francescalitterio/image/upload/v1607381580/maroon-shirt_knqzwj.jpg',
                season: 'Fall, Winter',
                category: 'Top',
                favorite: true,
              },
              {
                id: 2,
                userId: 1,
                title: 'Boyfriend Jeans',
                image: 'https://res.cloudinary.com/francescalitterio/image/upload/v1607477171/boyfriend-jeans_ijlxo8.jpg',
                season: 'Fall, Spring',
                category: 'Bottom',
                favorite: true,
              },
              {
                id: 3,
                userId: 1,
                title: 'Gray Beanie',
                image: 'http://res.cloudinary.com/francescalitterio/image/upload/v1609120297/wkk4acee2wtss4qfzigt.jpg',
                season: 'Winter, Fall',
                category: 'Accessories',
                favorite: false,
              },
              {
                id: 24,
                userId: 1,
                title: 'Blue Tshirt',
                image: 'http://res.cloudinary.com/francescalitterio/image/upload/v1609117863/kujynabf5xbzeigpieev.jpg',
                season: 'Spring, Summer',
                category: 'Top',
                favorite: false,
              },

            {    id:37,
                userId:1,
                title: 'Black Leggings',
                image: 'http://res.cloudinary.com/francescalitterio/image/upload/v1609132599/eifql0ydtyfdvozhplbw.jpg',
                season: 'Winter, Summer, Spring, Fall',
                cateogry: 'Bottom',
                favorite:false
            },

            {
                id:29,
                userId:1,
                title: 'Black Jeans',
                image: 'http://res.cloudinary.com/francescalitterio/image/upload/v1609132176/xjwadkdu3byvj53erk5o.jpg',
                season: 'Winter, Spring, Summer, Fall',
                category: 'Bottom',
                favorite:false
            },

            {
                id:26,
                userId:1,
                title: 'Denim Skirt',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609131641/dzo0xm6xotko3u52slpj.jpg',
                season: 'Fall, Summer, Spring',
                category: 'Bottom',
                favorite:false
            },
            {
                id:27,
                userId:1,
                title: 'Beige Workout Top',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609131691/lbwk4mvphwcyyldrx9th.jpg',
                season: 'Winter, Spring, Summer, Fall',
                category:'Athletic',
                favorite:false
            },
            {
                id:28,
                userId:1,
                title: 'Green Romper',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609132136/b4v4qu56kcjplyrapxce.jpg',
                season: 'Summer, Fall',
                category:'Dress',
                favorite:false
            },
            {
                id:30,
                userId:1,
                title:'White Turtleneck Crop',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609132214/yosxrakcqq3pmxc1o77e.jpg',
                season:'Winter, Fall',
                category:'Top',
                favorite:false    
            },
            {
                id:31,
                userId:1,
                title:'Green Pantsuit',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609132267/f0q4uspjfb0x80rzdnmt.jpg',
                season: 'Winter, Spring, Summer, Fall',
                category:'Dress',
                favorite:false
            },
            {
                id:32,
                userId:1,
                title:'Maroon Crop Sweater',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609132307/ml4b37qymmntsbjwh6az.jpg',
                season: 'Winter, Fall',
                category:'Top',
                favorite:false
            },
            {
                id:33,
                userId:1,
                title:'Running Sneakers',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609132343/ix6fsguwyuabf4vomian.jpg',
                season:'Winter, Summer, Spring, Fall',
                category:'Shoes',
                favorite:false
            },
            {
                id:34,
                userId:1,
                title:'Hunter Boots',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609132395/ovnq5pfzd8gxvvxernpo.jpg',
                season:'Spring, Summer, Fall',
                category:'Shoes',
                favorite:false
            },
            {
                id:35,
                userId:1,
                title:'Thinkful Hoodie',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609132441/su3epvei2yhzj7cgbkc3.jpg',
                season:'Winter, Summer, Spring, Fall',
                category: 'Top',
                favorite:false
            },
            {
                id:38,
                userId:1,
                title:'Panda Pjs',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609132671/f0qfae1pbu7lvo6chzpb.jpg',
                season:'Winter, Spring, Summer, Fall',
                category:'Sleepwear',
                favorite:false
            },
            {
                id:39,
                userId:1,
                title:'Panda Socks',
                image:'http://res.cloudinary.com/francescalitterio/image/upload/v1609132758/offggdj5yb5pwc3w9zcr.png',   
                season:" ",
                category:'Undergarments',
                favorite:true
            },
          ]
          
      }



render(){
const {items=[]} = this.state
    return(
    <div className="landingpage_content">
         <section>
            <h2>How it works</h2>
            <p>Imagine online shopping, but with everything you already own. With Closet Catalogue, users create a full catalogue of their closet items for easy browsing. Give your items titles, upload images, categorize them by style, and season. Scroll down to check out a sample catalogue and create a free account to access exclusive features(adding items and searching your catalogue!). </p>
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
    </div>

    );
}
}

export default LandingPage;