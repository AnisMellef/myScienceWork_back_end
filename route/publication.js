const express = require("express");
const publicationRouter = express.Router();
const { getPublicationsByUser, postPublicationByUser } = require("../controller/publication");

publicationRouter.get("/allPublicationsByUser/:userId", getPublicationsByUser);
publicationRouter.post("/publicationsByUser/:userId", postPublicationByUser);

module.exports = publicationRouter;
