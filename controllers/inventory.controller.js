import Inventory from "../models/inventorymodels.js";

export const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find();
    res
      .status(200)
      .json({ message: "Inventories retrieved successfully", inventories });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve inventories",
      error: error.message,
    });
  }
};

export const createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    res
      .status(201)
      .json({ message: "Inventory created successfully", inventory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create inventory", error: error.message });
  }
};

export const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res
      .status(200)
      .json({ message: "Inventory retrieved successfully", inventory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve inventory", error: error.message });
  }
};

export const updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res
      .status(200)
      .json({ message: "Inventory updated successfully", inventory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update inventory", error: error.message });
  }
};

export const deleteInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res
      .status(200)
      .json({ message: "Inventory deleted successfully", inventory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete inventory", error: error.message });
  }
};
