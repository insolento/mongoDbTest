const MarketModel = require("../models/Market");

exports.getAllMarket = async () => {
  return await MarketModel.find();
};


exports.createMarket = async (market) => {
  return await MarketModel.create(market);
};

exports.getMarketById = async (id) => {
    return await MarketModel.findById(id);
};

exports.updateMarket = async (id, blog) => {
  return await MarketModel.findByIdAndUpdate(id, blog);
};

exports.deleteMarket = async (id) => {
  return await MarketModel.findByIdAndDelete(id);
};

exports.deleteAll = async (id) => {
    return await MarketModel.delete();
};
  
