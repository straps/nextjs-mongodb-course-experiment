const TestAPI = (req, res) => {
  res.json({ err: null, message: "productId="+req.query.productId });
};

export default TestAPI;
