const { Schema, model } = require('mongoose');
const { Thought } = require('.');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        max_length: 280,

      },
      createEdit: {
        type: Date,
        default: Date.now(),

      },
      userName: {
        type: String,
        required: true

      },
      reaction: [
        reactionSchema
      ],

    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
const Thought = model('thought', thoughtSchema);

thoughtSchema.virtual("reactioncount").get(function(){
    return this.reaction.length
  });

module.exports = Thought