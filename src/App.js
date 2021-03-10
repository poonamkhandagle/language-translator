import React, {useState} from "react";
import Translate from "./components/Translate";
import Dropdown from "./components/Dropdown";

const options = [
  {
    label:"The Color Red",
    value:"Red"
  },
  {
    label:"The Color Green",
    value:"Green"
  },
  {
    label:"A Shade Of Blue",
    value:"Blue"
  }
]
 const App = () => {
   return(
     <div>
      <Translate />
      </div>
   )
 }
 export default App;
