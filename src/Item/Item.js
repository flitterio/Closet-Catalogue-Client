import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import {ApiContext }from '../ApiContext'

export default class Item extends React.Component{
    static defaultProps ={
        onDeleteItem: () => {},
    }
    static contextType =ApiContext;

//delete when API connected
    /*handleClickDelete = e => {
        e.preventDefault()
        const itemId = this.props.id


    } */

    render(){
        const {id, title, image} = this.props
        console.log({image});
        return(
            <div className='Item'>
                <img src={image} alt={title} />
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