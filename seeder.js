const mongoose = require("mongoose");
const userSchema = require("./model/user");
const publicationSchema = require("./model/publication");
const { faker } = require("@faker-js/faker");
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
    prenom: faker.name.firstName(),
    nom: faker.name.lastName(),
    about: faker.lorem.paragraph(),
    avatar: `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80`,
    socialNetworks: [
      {
        type: "FB",
        socialId: faker.name.findName(),
      },
      {
        type: "LIN",
        socialId: faker.name.findName(),
      },
      {
        type: "TW",
        socialId: faker.name.findName(),
      },
    ],
    affiliations: [
      {
        equipe: "dinosaures",
        fromDate: "2021",
        toDate: "2022",
        pays: "Tunisia",
        organisation: "fake organisation",
        fonction: "Chercheur post doctorale",
      },
    ],
  },
  {
    prenom: faker.name.firstName(),
    nom: faker.name.lastName(),
    about: faker.lorem.paragraph(),
    avatar: `https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80`,
    socialNetworks: [
      {
        type: "FB",
        socialId: faker.name.findName(),
      },
      {
        type: "LIN",
        socialId: faker.name.findName(),
      },
      {
        type: "TW",
        socialId: faker.name.findName(),
      },
    ],
    affiliations: [
      {
        equipe: "dinosaures",
        fromDate: "2016",
        toDate: "",
        pays: "Tunisia",
        organisation: "fake organisation",
        fonction: "Chercheur post doctorale",
      },
    ],
  },
  {
    prenom: faker.name.firstName(),
    nom: faker.name.lastName(),
    about: faker.lorem.paragraph(),
    avatar: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    socialNetworks: [
      {
        type: "FB",
        socialId: faker.name.findName(),
      },
      {
        type: "LIN",
        socialId: faker.name.findName(),
      },
      {
        type: "TW",
        socialId: faker.name.findName(),
      },
    ],
    affiliations: [
      {
        equipe: "dinosaures",
        fromDate: "2019",
        toDate: "2021",
        pays: "Tunisia",
        organisation: "fake organisation",
        fonction: "Chercheur post doctorale",
      },
      {
        equipe: "dinosaures",
        fromDate: "2019",
        toDate: "",
        pays: "Tunisia",
        organisation: "fake organisation",
        fonction: "Chercheur post doctorale",
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
