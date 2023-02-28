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
            address: "",
            email: "",
            phone: "",
        },
        eduInfo: {
            degree: "",
            university: "",
            start: "",
            end: "",
        },
        workInfo: {
            position: "",
            company: "",
            start: "",
            end: "",
        },
      };
  
      this.handlePersonalChange = this.handlePersonalChange.bind(this);
      this.handleEducationChange = this.handleEducationChange.bind(this);
      this.handleExperienceChange = this.handleExperienceChange.bind(this);
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
    
    handleEducationChange(input) {
      let propName = input.name;
      let value = input.value;

      let prop = this.state.eduInfo;
      prop[propName]=value;

      this.setState({
        prop
      });
    }

    handleExperienceChange(input) {
      let propName = input.name;
      let value = input.value;

      let prop = this.state.workInfo;
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
        content = <Form 
          personalInfo={this.state.personalInfo} onPersonalChange={this.handlePersonalChange}
          educationInfo={this.state.eduInfo} onEducationChange={this.handleEducationChange}
          experienceInfo={this.state.workInfo} onExperienceChange={this.handleExperienceChange}
        />;
        btnText = "Preview";
      }
      else {
        content = <Resume 
          personalInfo={this.state.personalInfo}
          educationInfo={this.state.eduInfo}
          experienceInfo={this.state.workInfo}
        />
        btnText="Edit";
      }
      return(
        <div className="mainComp">
            <button onClick={this.handleClick} className="previewBtn">{btnText}</button>
            <>{content}</>
        </div>
      );
    }
}

export default Main;