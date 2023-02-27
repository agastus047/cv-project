import React, {Component} from "react";
import Form from "./Form";
import Resume from "./Resume";

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        preview: false,
        personalInfo: {
            name: "",
            phone: "",
        },
        eduInfo: {
            school: "",
        },
      };
  
      this.handlePersonalChange = this.handlePersonalChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handlePersonalChange(input) {
      let propName = input.name;
      let value = input.value;  
      
      let prop = this.state.personalInfo;
      prop[propName]=value;

      this.setState({
        prop
      });
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
        content = <Form personalInfo={this.state.personalInfo} onPersonalChange={this.handlePersonalChange}/>;
        btnText = "Preview";
      }
      else {
        content = <Resume personalInfo={this.state.personalInfo}/>
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