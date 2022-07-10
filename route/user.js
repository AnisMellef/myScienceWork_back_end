const express = require("express");
const userRouter = express.Router();
const multer = require("multer");
const { getProfile, showAllProfile } = require("../controller/users");

//multer start---------------------------------

// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "../front_end/public/uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({storage: fileStorageEngine});

//multer end----------------------------------

userRouter.get("/allUsers", showAllProfile);

userRouter.get("/myProfile/:id", getProfile);

// articleRouter.delete('/deleteArticle/:id',deleteArticle);

// articleRouter.put('/updateArticle/:id',upload.single("articleImage"), updateArticle);

module.exports = userRouter;
