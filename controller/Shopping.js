const ShoppingSchema = require("../model/Shopping");

const itemInsert = async (req, res) => {
  try {
    const { type, name, description, price_INR, img, uid } = req.body;
    const itemData = new ShoppingSchema({
      type,
      name,
      description,
      price_INR,
      img,
      uid,
    });

    const storedata = await itemData.save();
    res.json(storedata);
  } catch (err) {
    console.log(`Internal server error: ${err}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getitem = async (req, res) => {
  try {
    const getData = await ShoppingSchema.find();
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

const deleteOneitem = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(_id);
    const deleteditem = await ShoppingSchema.findByIdAndDelete(_id);

    if (!deleteditem) {
      console.log("Article not found");
      return res.status(404).json({ error: "Article not found" });
    }

    console.log("Article deleted successfully:", deleteditem);
    res
      .status(200)
      .json({ message: "Article deleted successfully", deleteditem });
  } catch (err) {
    console.error(`Internal server error: ${err}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  itemInsert,
  getitem,
  deleteOneitem,
};
