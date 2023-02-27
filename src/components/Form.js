import React,{Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.handlePersonalChange = this.handlePersonalChange.bind(this);
    }

    handlePersonalChange(event) {
        this.props.onPersonalChange(event.target);
    }

    render() {
        return(
            <div>
                <h3>Personal Info</h3>
                <input type="text" onChange={this.handlePersonalChange} value={this.props.personalInfo.name} name="name" placeholder="Name"/>
                <input type="text" onChange={this.handlePersonalChange} value={this.props.personalInfo.phone} name="phone" placeholder="Phone No."></input>
            </div>
        );
    }
}

export default Form;