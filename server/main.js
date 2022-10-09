import {Meteor} from 'meteor/meteor'

Meteor.methods({
    hi: ({name}) => {
        console.log("Hello", name)
    }
})