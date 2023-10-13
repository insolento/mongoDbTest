const blogService = require("../services/marketService");

exports.getAllMarket = async (req, res) => {
  try {
    const blogs = await blogService.getAllMarket();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMarket = async (req, res) => {
  try {
    const blog = await blogService.createMarket(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMarketById = async (req, res) => {
  try {
    const blog = await blogService.getMarketById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMarket = async (req, res) => {
  try {
    const blog = await blogService.updateMarket(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMarket = async (req, res) => {
  try {
    const blog = await blogService.deleteMarket(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAll = async (req, res) => {
    try {
      const blog = await blogService.deleteAll();
      res.json({ data: blog, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
