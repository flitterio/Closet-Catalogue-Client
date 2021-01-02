

import React, {Component} from 'react';
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';
import {seasons} from '../options';
import Select from 'react-select';
import config from '../config';
import TokenService from '../services/token-service';
import {findItem} from '../items-helpers'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class EditItem extends Component {
    static defaultProps ={
        // history: {
        //     goBack: ()=> { }
        // },
        match: {
            params: {}
          }
    }
    state ={
        error: null,
        title:'',
        cloudinary_url: '',
        season: [],
        category: '',
        favorite: ''
    };
      static contextType = ApiContext;

componentDidMount(){
        const {items=[]} = this.context
        const {itemId}= this.props.match.params
        const item = findItem(items, itemId);
        this.setState({
            title: item.title,
            cloudinary_url: item.image,
            season: item.season,
            category: item.category,
            favorite: item.favorite
        })
}
    
      handleCategoryChange = (event) => {
          this.setState({category: event.target.value});
      }
      

    handleFavoriteChange = (event) => {
         const current = this.state.favorite;
          const newVal = !current;
           console.log("CURRENT:", current); console.log("NEW:", newVal); 
           this.setState({ favorite: newVal }); 
        };
    handleSeasonChange = (e) => {
            this.setState({
                season: Array.isArray(e) ? e.map(x=> x.value) : []
            })
        }

    handleSubmit = (event) => {
        event.preventDefault();
        const {items=[]} = this.context
        const {itemId}= this.props.match.params
        const item = findItem(items, itemId);

    if(this.state.season !== item.season){
        const submitSeason = this.state.season.join(', ')
    
        const {title} = event.target
        
        const newItem = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            title: title.value,
            image: this.state.cloudinary_url,
            season: submitSeason,
            category: this.state.category,
            favorite: this.state.favorite,

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
        fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
            method: 'PATCH',
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
            toast.dark('Success, Item Edited! Redirecting to My Closet...', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(()=>{
            this.props.history.push('/my-closet');
            }, 4000)
           })
          
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
        } 
        
        else {
            const {title} = event.target
        
        const newItem = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            title: title.value,
            image: this.state.cloudinary_url,
            season: this.state.season,
            category: this.state.category,
            favorite: this.state.favorite,

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
        fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
            method: 'PATCH',
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
            toast.dark('Success, Item Edited! Redirecting to My Closet...', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(()=>{
            this.props.history.push('/my-closet');
            }, 4000)
           })
          
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
        }

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
        const {items=[]} = this.context
        const {itemId}= this.props.match.params
        const item = findItem(items, itemId);
        return(
          <div className="EditItem_Form">
              <ToastContainer />
              <h1>
                    Edit Item
                </h1>
            <section>
                <form action="upload.php" method="post" encType="multipart/form-data" id="register" onSubmit={this.handleSubmit}>

            <section className="image">
                 <img id="image" width="50" height="50" src={this.state.cloudinary_url} value={this.state.cloudinary_url} alt="preview of image"/>

                <button onClick={this.showWidget}> Upload New Image </button>
                <br /><br />
            </section>

                   <label htmlFor="title">
                       Change Title
                   </label>
                   <input id="title" name="title" type="text" placeholder={this.state.title} defaultValue={this.state.title} required />

                   <section className="season" >
                        <label htmlFor="season">
                            Change Season(s)
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
                           Change Category
                        </label>
                        <br />
                        <select value={this.state.category}
                        onChange={this.handleCategoryChange}
                         name="category" id="category" form="category">
                            <option value='' >Category...</option>
                            <option value="Top">Tops</option>
                            <option value="Bottom">Bottoms</option>
                            <option value="Dress/Romper/Pantsuit/Jumpsuit">Dress/Romper/Pantsuit/Jumpsuit</option>
                            <option value="Outerwear">Outerwear</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Sleepwear">Sleepwear</option>
                            <option value="Undergarments">Undergarments</option>
                            <option value="Athletic">Athletic</option>
                            <option value="Other">Other</option>

                        </select>

                    <br /><br />
                    </section>

                <input 
                    name="favorite" 
                    type="checkbox"
                    checked={this.state.favorite}  
                    onChange={this.handleFavoriteChange} /> Favorite?
                    

                <br /><br />
                    <input type="submit" value="Update Item" name="submit" />
                        <Link to={`/item/${itemId}`}>
                            Cancel
                        </Link>
                    <br /><br />

            </form>
            </section>
          </div>
        )
    }
}

export default EditItem;