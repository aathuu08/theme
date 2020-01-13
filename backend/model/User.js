import mongodb from "mongodb";
const Schema = mongodb.Schema;

let userSchema = new Schema({
    _id: {
        type: mongodb.Schema.Types.ObjectId
    },

    username: {
        type: String,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        unique: true,
        lowercase: true,
        required: [true, 'email is required...!']
    },

    password: {
        type: String,
        required: [true, 'password is required...!']
    },
},
    {
        collection: 'user'
    });
export default mongodb.model('User', userSchema);