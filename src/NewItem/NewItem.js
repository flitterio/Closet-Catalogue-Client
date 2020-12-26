//NEED TO IMPLEMENT THE POST TO API, NEED TO FIX BEARER TOKEN


import React, {Component} from 'react';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';
import './NewItem.css';
import {groupedOptions, seasons} from '../options';
import Select from 'react-select';
import config from '../config';
import TokenService from '../services/token-service';



class NewItem extends Component {
      static contextType = ApiContext;
      
      state ={
          error: null,
          cloudinary_url: '',
          season: [],
          category: '',
          favorite: false
      };
    
      handleCategoryChange = (e) => {
          this.setState({
              category: Array.isArray(e) ? e.map(x=> x.value) : []
          })
      }
      
      handleFavoriteChange = (e) => {
          this.setState({
              favorite: true
          })
      }
    handleSeasonChange = (e) => {
          this.setState({
              season: Array.isArray(e) ? e.map(x=> x.value) : []
          })
      }

    handleSubmit = (event) => {
        event.preventDefault();
        const {title, image, season, category, favorite} = event.target
        
        const newItem = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            title: title.value,
            image: this.state.cloudinary_url,
            season: this.state.season,
            category: this.state.category,
            favorite: favorite.value,

        }

        newItem.propTypes={
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string,
            season: PropTypes.string,
            category: PropTypes.string,
            favorite: PropTypes.bool
        }

        this.setState({ error: null })
        fetch(`${config.API_ENDPOINT}/items`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newItem),
        })
        .then(res => {
            if (!res.ok) {
              return res.json().then(error => Promise.reject(error))
              }
          })
           .then(data => {
        //       id.value= ''
        //     title.value = ''
        //     image.value =''
        //     season.value = ''
        //     category.value =''
        //      favorite.value =''
              window.location.href='/my-closet'
           })
          
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
      }

    showWidget = (event) => {
        event.preventDefault()
        let widget = window.cloudinary.createUploadWidget({ 
           cloudName: `francescalitterio`,
           uploadPreset: `ojrefdmo`}, 
        (error, result) => {
          if (!error && result && result.event === "success") { 
          this.setState({cloudinary_url: result.info.url}) 
          console.log('cloudinaryurl', this.state.cloudinary_url)
        }});
        widget.open()
      }

    render(){
        const { error } =this.state
        return(
          <div className="NewItem_Form">
              <h1>
                    New Item
                </h1>
            <section>
                <form action="upload.php" method="post" encType="multipart/form-data" id="register" onSubmit={this.handleSubmit}>

            <section className="image">
                 <img id="image" width="50" height="50" src={this.state.cloudinary_url} value={this.state.cloudinary_url} alt="preview of image"/>

                <button onClick={this.showWidget}> Upload Image </button>
                <br /><br />
            </section>

                   <label htmlFor="title">
                       Title
                   </label>
                   <input id="title" name="title" type="text" placeholder="Title" required />

                <br /><br />
                   <section className="season" >
                        <label htmlFor="season">
                            Season(s)
                        </label>
                    <br />
                    <Select  
                        id="season"
                        options={seasons}
                        onChange={this.handleSeasonChange}
                        isMulti
                        isClearable/>

                    <br /><br />
                    </section>
                    <section className="categories">
                        <label htmlFor="categories">
                            Category
                        </label>
                        <br />
                        <Select id="category"
                            options={groupedOptions}
                            onChange={this.handleCategoryChange}
                            isMulti
                            isClearable
                        />
                    <br /><br />
                    </section>

                <input id="favorite" type="checkbox" value='true' onChange={this.handleFavoriteChange} /> Favorite?
                    

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