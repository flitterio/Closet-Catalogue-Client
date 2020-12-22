import React from 'react'
import { Link } from 'react-router-dom'
import './MyItem.css'
import ApiContext from '../ApiContext'
import { findItem } from '../items-helpers'


export default class Item extends React.Component{
    static contextType = ApiContext;

//delete when API connected
    /*handleClickDelete = e => {
        e.preventDefault()
        const itemId = this.props.id


    } */

    render(){
        const {items=[]} = this.context
        const {itemId}= this.props.match.params
        const item = findItem(items, itemId);

        return(
            <ApiContext.Consumer>
                {(context) => (
                <div className='MyItem'>
                    <img src={item.image} alt={item.title} />
                    <br />
                    <h3 className='MyItem_title'>
                            {item.title}
                    </h3>
                    <h4>{item.season}</h4>
                    <h4>{item.category}</h4>
                    <h4>{item.favorite}</h4>

                </div>
                )}
            </ApiContext.Consumer>
        )
    }
}