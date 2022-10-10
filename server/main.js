import {Meteor} from 'meteor/meteor'
import {apollo} from 'meteor/sangltv:apollo'

apollo()

Meteor.methods({
    hi: ({name}) => {
        console.log("Hello", name)
    }
})