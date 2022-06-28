const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Must Be email Address.']
      },
      thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
      ],
      friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
      ],

    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  userSchema.virtual("friendcount").get(function(){
    return this.friends.length
  });
const User = model('user', userSchema);
  
  

module.exports = User
