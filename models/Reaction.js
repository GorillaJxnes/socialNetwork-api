const { Schema, model, Types } = require('mongoose')

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()

      },
      reactionBody: {
        type: string,
        requires: true,
        max_length: 280

      },
      userName: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },


    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
const Reaction = model('reaction', reactionSchema);



module.exports = Reaction