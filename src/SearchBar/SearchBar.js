import React from 'react';
import Item from '../Item/Item';
import ApiContext from '../ApiContext';
import Select from 'react-select';
import{ seasons} from '../options';
import './SearchBar.css';

class SearchBar extends React.Component{
    static contextType = ApiContext;
    state={
        search: '',
        season: '',
        category: '',
        
    };

    clearSearch =(event) => {
        
       this.setState({
            search: '',
            season: '',
            category: '',
       })
    }
    handleWordSearch= (event) =>{
        this.setState({search: event.target.value})
    }

    handleSeasonChange = (e) => {
        let newSeasons = Array.isArray(e) ? e.map(x=> x.value) : []
        this.setState({
            season: newSeasons.join(', ')
        })
    }
    handleCategoryFilter = (event) => {
        this.setState({category: event.target.value})
    }


    // handleSearch = (event) => {
    //     event.preventDefault();
    //     this.setState({searchItems: this.context.items})
    //     const {searchItems} = this.state
 
    //     {let wordSearch= searchItems.filter(
    //         (item) => {
    //             return item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    //         }
    //     ) 
    //         this.setState({
    //             searchItems: wordSearch
    //         })}

    //     if(this.state.season !== '')
    //     {let seasonFilter = searchItems.filter(
    //         (item) =>{
    //             return item.season.toLowerCase().indexOf(this.state.season.toLowerCase()) !== -1;
    //         }
    //     )
    //         this.setState({
    //             searchItems: seasonFilter
    //         })}

    //     if(this.state.category !== '')
    //     {let categoryFilter = searchItems.filter(
    //         (item) =>{
    //             return item.season.toLowerCase().indexOf(this.state.season.toLowerCase()) !== -1;
    //         }
    //     )
    //             this.setState({
    //                 searchItems: categoryFilter
    //             })}

    //     if(this.state.favorite === true){
    //         let favoriteFilter = searchItems.filter(
    //             (item) =>{
    //                return item.favorite === true
    //             }
    //         )
                    
    //         this.setState({
    //             searchItems: favoriteFilter
    //         })
    //             } 
    //     }


render(){
    let {items=[]} = this.context;

    let searchItems= items.filter(
        (item) => {
            return item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 &&
            item.season.toLowerCase().indexOf(this.state.season.toLowerCase()) !== -1 &&
            item.category.toLowerCase().indexOf(this.state.category.toLowerCase()) !== -1
            
        }
    ) 

    return(
    <div className="search">
        <form className='searchbar' >
        <div className='inner-box'>
            <strong>SEARCH:</strong>
            <input 
                id="search"
                type="text" 
                placeholder="Enter Text"
                value={this.state.search}
                onChange={this.handleWordSearch}/>
    <br />
            <section className="categories">
                           <strong>CATEGORY:</strong> 

                        <br />
                        <select value={this.state.category}
                        onChange={this.handleCategoryFilter}
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
                        <strong>SEASON: </strong>(select multiple if desired)

                        <Select  
                        id="season"
                        options={seasons}
                        onChange={this.handleSeasonChange}
                        isMulti
                        isClearable/>

            <br /><br />
                <button type='button' id="clear" name='clear' onClick={this.clearSearch}>Clear Search</button>
                </div>
            </form>
            <div className='group' id='item-layout'>
                    {searchItems.map(item =>
                        <div className='item' key={item.id}>
                            <Item 
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                    />
                                </div>
                            )}
                </div>

        </div>
    )}
}
export default SearchBar;