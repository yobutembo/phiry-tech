import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc Create new order
//@route POST /api/orders
//@access Private

const addOrderItems = asyncHandler(async (req, res) => {
  res.json("add order items");
});

//@desc Get logged in user's orders
//@route GET /api/orders/myorders
//@access Private

const getMyOrders = asyncHandler(async (req, res) => {
  res.json("get my orders ");
});

//@desc Get order by
//@route GET /api/orders/:id
//@access Private

const getOrderById = asyncHandler(async (req, res) => {
  res.json("get order by id ");
});

//@desc Update order to paid
//@route GET /api/orders/:id/pay
//@access Private/Admin

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.json("update order to paid ");
});

//@desc Update order to delivered
//@route GET /api/orders/:id/deliver
//@access Private/Admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.json("update order to delivered ");
});

//@desc Get all orders
//@route GET /api/orders
//@access Private/Admin

const getOrders = asyncHandler(async (req, res) => {
  res.json("get all orders");
});

export {
  addOrderItems,
  getOrders,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
};
