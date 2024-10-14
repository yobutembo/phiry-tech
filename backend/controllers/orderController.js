import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc
//@route
//@access

const getOrders = asyncHandler(async (req, res) => {
  res.json("get orders");
});

export { getOrders };
