import React, {Component} from "react";
import Form from "./Form";
import Resume from "./Resume";

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "",
        preview: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleChange(newValue) {
      this.setState({value:newValue});
    }
  
    handleClick(event) {
      this.setState(state => ({
        preview: !state.preview
      }));
    }
  
    render() {
      let isPreviewOn = this.state.preview;
      let content;
      let btnText;
      if(!isPreviewOn) {
        content = <Form value={this.state.value} onChange={this.handleChange}/>;
        btnText = "Preview";
      }
      else {
        content = <Resume value={this.state.value}/>
        btnText="Edit";
      }
      return(
        <div>
            <button onClick={this.handleClick}>{btnText}</button>
            <>{content}</>
        </div>
      );
    }
}

export default Main;