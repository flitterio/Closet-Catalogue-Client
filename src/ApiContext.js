import React from 'react';


export default React.createContext({
    items: [
        // {
        //     id: 1,
        //     userId: 1,
        //     title: 'Maroon Shirt',
        //     image: 'https://res.cloudinary.com/francescalitterio/image/upload/v1607381580/maroon-shirt_knqzwj.jpg',
        //     season: 'fall',
        //     category: 'tops, t-shirts',
        //     favorite: true,
        //   },
        //   {
        //     id: 2,
        //     userId: 1,
        //     title: 'Boyfriend Jeans',
        //     image: 'https://res.cloudinary.com/francescalitterio/image/upload/v1607477171/boyfriend-jeans_ijlxo8.jpg',
        //     season: 'fall, spring',
        //     category: 'pants, jeans',
        //     favorite: true,
        //   },
        //   {
        //     id: 3,
        //     userId: 1,
        //     title: 'Gray Beanie',
        //     image: ' ',
        //     season: 'winter',
        //     category: 'accessories, hats',
        //     favorite: false,
        //   },
        //   {
        //     id: 4,
        //     userId: 123,
        //     title: 'Colorful Romper',
        //     image: 'https://cloudinary.com/console/c-cdab744ed35084a2712b121d1d30c3/media_library/folders/home/asset/2f2da1899acd8feb2ecfec8bb9146913/manage',
        //     season: 'summer',
        //     category: 'romper',
        //     favorite: true,
        //   },
    ],
    addItem: () => {},
    deleteItem: () => {},
    deleteUser: () => {}
})