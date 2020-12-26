import { useImperativeHandle } from 'react'
import config from '../config'
import TokenService from '../services/token-service'

    const ItemApiService = {
  //   getItem(itemId) {
  //     return fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
  //         headers: {
  //             'authorization': `bearer ${TokenService.getAuthToken()}`,
  //         },
  //     })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },

//    getUserItems() {
//       return fetch(`${config.API_ENDPOINT}/items/${userId}`, {
//       headers: {
//                 'authorization': `bearer ${TokenService.getAuthToken()}`,
//                },
//   })
//   .then(res =>
//     (!res.ok)
//       ? res.json().then(e => Promise.reject(e))
//       : res.json()
//   )
// },

  postitem(newItem) {
      return fetch(`${config.API_ENDPOINT}/items/`, {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify(newItem)
      })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  
  }
}

export default ItemApiService