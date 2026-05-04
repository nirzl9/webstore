import profilemodel from "../models/profilemodel.js";

export const createprofile = async (req, res) => {
  try {
    const profile = await profilemodel.create(req.body);
    res.status(201).json({ message: "profile created successfully", profile });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to create profile", success: false });
  }
};

export const getprofile = async (req, res) => {
  try {
    const profile = await profilemodel.findById(req.params.id);
    res
      .status(200)
      .json({ message: "profile successfully retrieved", profile });
  } catch (error) {
    res.status(500).json({
      message: "failed to get profile",
      success: false,
      error: error.message,
    });
  }
};

export const updateprofile = async (req, res) => {
  try {
    const profile = await profilemodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!profile) {
      return res.status(404).json({ message: "profile not found" });
    }
    res.status(200).json({ message: "profile updated successfully", profile });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to update profile", success: false });
  }
};

export const deleteprofile = async (req, res) => {
  try {
    const profile = await profilemodel.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "profile not found" });
    }
    res.status(200).json({ message: "profile deleted successfully", profile });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to delete profile", success: false });
  }
};
