import React,{ useState } from "react";
import Form from "./Form";
import Resume from "./Resume";

const Main = () => {
  const [preview, setPreview] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [eduInfo,setEduInfo] = useState({
    degree: "",
    university: "",
    start: "",
    end: "",
  });
  const [workInfo,setWorkInfo] = useState({
    position: "",
    company: "",
    start: "",
    end: "",
  });

  const handlePersonalChange = (input) => {
    let propName = input.name;
    let value = input.value;  
    
    setPersonalInfo({...personalInfo,[propName]:value});
  };

  const handleEducationChange = (input) => {
    let propName = input.name;
    let value = input.value;

    setEduInfo({...eduInfo,[propName]:value});
  };

  const handleExperienceChange = (input) => {
    let propName = input.name;
    let value = input.value;

    setWorkInfo({...workInfo,[propName]:value});
  };

  const handleClick = () => {
    setPreview((current)=> !current);
  };

  let isPreviewOn = preview;
  let content;
  let btnText;

  if(!isPreviewOn) {
    content = <Form 
      personalInfo={personalInfo} onPersonalChange={handlePersonalChange}
      educationInfo={eduInfo} onEducationChange={handleEducationChange}
      experienceInfo={workInfo} onExperienceChange={handleExperienceChange}
    />;
    btnText="Preview";
  }
  else {
    content = <Resume 
      personalInfo={personalInfo}
      educationInfo={eduInfo}
      experienceInfo={workInfo}
    />
    btnText="Edit";
  }
  return(
    <div className="mainComp">
        <button onClick={handleClick} className="previewBtn">{btnText}</button>
        <>{content}</>
    </div>
  );
};

export default Main;