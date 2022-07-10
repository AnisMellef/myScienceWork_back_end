const publicationSchema = require("../model/publication");

exports.getPublicationsByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const publicationsByUser = await publicationSchema.find({
      userId,
    });
    res.status(200).send({
      msg: "this is the list of all publications of this user",
      publicationsByUser,
    });
  } catch (err) {
    res
      .status(500)
      .send({ msg: "error in showing publications by user controller" });
  }
};

exports.postPublicationByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const newPublication = await new publicationSchema({ ...req.body, userId });
    newPublication.save();
    res.status(200).send({ msg: "publication added", newPublication });
  } catch (err) {
    console.log("error", err);
    res.status(500).send({ msg: "error in adding publication controller" });
  }
};
