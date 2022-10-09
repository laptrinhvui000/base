import React from "react"
import {Meteor} from 'meteor/meteor'
const App = () => 
    <button onClick={()=>{
        Meteor.call( "hi", {name: "LONG"})
    }}>
        I'm Client
    </button>

export default App