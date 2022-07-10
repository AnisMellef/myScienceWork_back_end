const mongoose = require("mongoose");
const userSchema = require("./model/user");
const publicationSchema = require("./model/publication");
require("dotenv").config();

const mongo = process.env.MONGO_URI;

mongoose
  .connect(mongo)
  .then(() => {
    console.log("you are now connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const users = [
  {
    prenom: "Yoyo",
    nom: "Mellef",
    about: "very nice baby",
    avatar: `avatar${Date.now()}.jpg`,
    socialNetworks: [
      {
        type: "FB",
        content: "www.facebook.com/yoyo",
      },
      {
        type: "LIN",
        content: "www.linkedIn.com/yoyo",
      },
    ],
    affiliations: [
      {
        equipe: "dinosaures",
        fromDate: "18/04/2021",
        toDate: "18/04/2022",
        pays: "Tunisia",
        organisation: "fake organisation",
      },
    ],
  },
];

const seedDB = async () => {
  await publicationSchema.deleteMany({});
  await userSchema.deleteMany({});
  await userSchema.insertMany(users);
};

seedDB().then(() => {
  mongoose.connection.close();
});
