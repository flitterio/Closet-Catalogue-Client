import React, {Component} from 'react';
import ApiContext from '../ApiContext';
import Proptypes from 'prop-types';
import './NewItem.css';
import {groupedOptions} from '../options';
import Select from 'react-select';


class NewItem extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const {title, image, season, catagory, favorite} = event.target
        const newItem = {
            title: title.value,
            image: image.value,
            season: season.value,
            catagory: catagory.value,
            favorite: favorite.value
        }
        this.setState({
            ...newItem
        })
    }

    showWidget = () => {
    
        let widget = window.cloudinary.createUploadWidget({ 
           cloudName: `francescalitterio`,
           uploadPreset: `ojrefdmo`}, 
        (error, result) => {
          if (!error && result && result.event === "success") { 
          console.log(result.info.url); 
        }});
        widget.open()
      }

    render(){
        return(
          <div className="NewItem_Form">
              <h1>
                    New Item
                </h1>
            <section>
                <form action="upload.php" method="post" encType="multipart/form-data" id="register" onSubmit={this.handleSubmit}>

                <button onClick={this.showWidget}> Upload Image </button>
                <br /><br />

                   <label htmlFor="title">
                       Title
                   </label>
                   <input id="title" name="title" type="text" placeholder="Title" required />

                <br /><br />
                   <section className="season">
                        <label htmlFor="season">
                            Season(s)
                        </label>
                    <br />
                        <input id="season" type="checkbox" value="winter" />Winter 
                        
                        <input id="season" type="checkbox" value="spring" />Spring
                        
                        <input id="season" type="checkbox" value="summer" /> Summer
                        
                        <input id="season" type="checkbox" value="fall" />Fall 
                    <br /><br />
                    </section>
                    <section className="categories">
                        <label htmlFor="categories">
                            Category
                        </label>
                        <br />
                        <Select
                            options={groupedOptions}
                            isMulti
                        />
                    <br /><br />
                    </section>

                <input id="favorite" type="checkbox" value="favorite" /> Favorite?
                    

                <br /><br />
                    <input type="submit" value="Add Item" name="submit" />
                    <br /><br />
                    
            </form>
            </section>
          </div>
        )
    }
}

export default NewItem;