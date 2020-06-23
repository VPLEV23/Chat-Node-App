const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  chats: [
    {
      type: {
        type: String,
        required: true,
      },
      adminId: {
        type: String,
      },
      chatId: {
        type: String,
        required: true,
      },
      chatName: {
        type: String,
        required: true,
      },
      messages: [
        {
          message: {
            type: String,
            required: true,
          },
          senderId: {
            type: String,
            required: true,
          },
          sender: {
            type: String,
            required: true,
          },
        },
      ],
      users: [],
    },
  ],
});

module.exports = Register = mongoose.model("UserSchema", UserSchema);
