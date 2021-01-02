import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import ApiContext from '../ApiContext'


export default class Item extends React.Component{
    static contextType =ApiContext;


    render(){
        const {id, title, image} = this.props
        return(
            <div className='Item'>

                <Link to={`/item/${id}`} >
                    <img src={image} alt={title} />
                 </Link>

                <br />
                <h3 className='Item_title'>
                    <Link to={`/item/${id}`}>
                        {title}
                    </Link>
                </h3>
            </div>
        )
    }
}