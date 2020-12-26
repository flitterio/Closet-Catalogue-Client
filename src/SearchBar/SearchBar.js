import React from 'react';
import Item from '../Item/Item';
import ApiContext from '../ApiContext';
import Select from 'react-select';
import{ groupedOptions} from '../options'

class SearchBar extends React.Component{
    state={
        search: '',
        season: '',
        category: '',
    };
    static contextType = ApiContext;

    handleSearch= (event) =>{
        this.setState({search: event.target.value})
    }

    handleSeasonChange = (event) => {
        this.setState({season: event.target.value})
    }
    handleCategoryFilter = (event) => {
        this.setState({ category: Array.isArray(event) ? event.map(x=> x.value) : []})
    }
render(){
    let {items=[]} = this.context;
    let searchItems= items.filter(
        (item) => {
            return item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    ) 
    let seasonFilter = searchItems.filter(
        (item) =>{
            return item.season.toLowerCase().indexOf(this.state.season.toLowerCase()) !== -1;
        }

    )
    let categoryFilter = seasonFilter.filter(
        (item) =>{
            return item.season.toLowerCase().indexOf(this.state.season.toLowerCase()) !== -1;
        }

    )

    return(
        <div className="searchbar">
            <input 
            type="text" 
            placeholder="Search"
            value={this.state.search}
            onChange={this.handleSearch}/>

     <select name="season" id="season" form="season" onChange={this.handleSeasonChange}>
         <option value='' >Season...</option>
         <option value="winter">Winter</option>
         <option value="spring">Spring</option>
         <option value="summer">Summer</option>
         <option value="fall">Fall</option>

         </select>
         <Select id="category"
                    options={groupedOptions}
                    onChange={this.handleCategoryFilter}
                    isClearable
                />

        <div className='group'>
                {categoryFilter.map(item =>
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