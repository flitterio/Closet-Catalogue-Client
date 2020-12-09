import React, {Component} from 'react';

class RenderError extends Component{
    constructor(props) {
        super(props);
        this.state={
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render(){
        if(this.state.hasError) {
            return (
                <h2>Something Went Wrong, cannot render</h2>
            );
        }
        return this.props.children;

    }
}

export default RenderError;