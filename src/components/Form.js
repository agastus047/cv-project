import React,{Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return(
            <input type="text" onChange={this.handleChange} value={this.props.value}/>
        );
    }
}

export default Form;