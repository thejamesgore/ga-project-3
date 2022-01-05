import Country from "../models/country.js";

//create comment
async function createComment(req, res, next) {
  try {
    const { id } = req.params;
    const country = await Country.findById(id);

    if (!country) {
      return res.status(404).send({ message: "Country does not exist" });
    }

    const newComment = {
      ...req.body,
      //   createdBy: req.currentUser,
    };

    country.comments.push(newComment);
    const savedCountry = await country.save();
    console.log(savedCountry);

    return res.status(201).json(savedCountry);
  } catch (err) {
    next(err);
  }
}

//delete comment
async function deleteComment(req, res, next) {
  try {
    const { id, commentId } = req.params;
    const country = await Country.findById(id);

    if (!country) {
      return res.status(404).send({ message: "country does not exist" });
    }
    console.log(req.params);
    const comment = country.comments.id(commentId);

    if (!comment) {
      return res.status(404).send({ message: "comment does not exist" });
    }
    comment.remove();

    const savedCountry = await country.save();
    return res.status(200).send(savedCountry);
  } catch (err) {
    next(err);
  }
}

//update Comment

async function updateComment(req, res, next) {
  try {
    const { id, commentId } = req.params;
    const country = await Country.findById(id);
    console.log(req.params);
    if (!country) {
      return res.status(404).send({ message: "Country does not exist" });
    }

    const comment = country.comments.id(commentId);

    if (!comment) {
      return res.status(404).send({ message: "Comment does not exist" });
    }

    comment.set(req.body);
    const savedCountry = await country.save();
    return res.status(200).send(savedCountry);
  } catch (err) {
    next(err);
  }
}

export default { createComment, deleteComment, updateComment };
