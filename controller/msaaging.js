const messageschema = require("../model/Messaging");

const messageInsert = async (req, res) => {
  try {
    const { message } = req.body;
    const userData = new messageschema({
      message,
    });
    const storemessage = await userData.save();
    res.json(storemessage);
  } catch (err) {
    console.log(`Internal server error: ${err}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getmessage = async (req, res) => {
  try {
    const getData = await messageschema.find();
    if (!getData || getData.length === 0) {
      console.log("Data not found");
      res.status(404).json({ error: "Data not found" });
    } else {
      res.json(getData);
    }
  } catch (err) {
    console.log(`Internal server error: ${err}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteOnemessage = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(_id);
    const deletedmessage = await messageschema.findByIdAndDelete(_id);

    if (!deletedmessage) {
      console.log("Article not found");
      return res.status(404).json({ error: "Article not found" });
    }

    console.log("Article deleted successfully:", deletedmessage);
    res
      .status(200)
      .json({ message: "Article deleted successfully", deletedmessage });
  } catch (err) {
    console.error(`Internal server error: ${err}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  messageInsert,
  getmessage,
  deleteOnemessage,
};
