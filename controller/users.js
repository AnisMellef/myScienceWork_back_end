const userSchema = require("../model/user");
const multer = require("multer");

//multer start-----------------------------------------

// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "../front_end/public/uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });
// const upload = multer({storage: fileStorageEngine});

//multer end---------------------------------------------

exports.showAllProfile = async (req, res) => {
  try {
    const allUser = await userSchema.find();
    res.status(200).send({ msg: "this is the list of all users", allUser });
  } catch (err) {
    console.log("error in get all the profiles controller", err);
    res.status(500).send({ msg: "error in showing user controller" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await userSchema.findById({ _id: id });
    res.status(200).send({ msg: "this is your profile", profile });
  } catch (err) {
    console.log("error in get one profile controller", err);
    res.status(500).send({ msg: "error in showing profile controller" });
  }
};
