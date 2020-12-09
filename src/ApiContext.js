import React from 'react';


export const ApiContext = React.createContext({
    items: [
        {
            id: 1,
            userId: 1,
            title: 'Maroon Shirt',
            image: 'https://res.cloudinary.com/francescalitterio/image/upload/v1607381580/maroon-shirt_knqzwj.jpg',
            season: 'fall',
            size: 'medium',
            category: 'tops, t-shirts',
            favorite: true,
          },
          {
            id: 2,
            userId: 1,
            title: 'Boyfriend Jeans',
            image: 'https://res.cloudinary.com/francescalitterio/image/upload/v1607477171/boyfriend-jeans_ijlxo8.jpg',
            season: 'fall, spring',
            size: '8',
            category: 'pants, jeans',
            favorite: true,
          },
          {
            id: 3,
            userId: 1,
            title: 'Gray Beanie',
            image: ' ',
            season: 'winter',
            size: ' ',
            category: 'accessories, hats',
            favorite: false,
          },
    ],

    users:[
        {
            id: 1,
            fname: 'Example',
            lname: 'User',
            email: "exampleuser@example.com",
            username: "exampleuser",
            password: 'password'
        },

        {
            id: 123,
            fname: 'Francesca',
            lname: 'Litterio',
            email: 'francesca@litterio.net',
            username: 'flitterio',
            password: 'Abc123!',
    
          },
    ],

    addItem: () => {},
    deleteItem: () => {},
    deleteUser: () => {}
})