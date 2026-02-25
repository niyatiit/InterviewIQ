import getToken from "../config/token.js";
import userModel from "../models/user.model.js";

const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.json({
        success: false,
        message: "Please Enter the all Fields",
      });
    }

    let user = await userModel.findOne({ email });

    if (!user) {
      user = await userModel.create({ name, email });
    }

    let token = await getToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      mexAge: 10 * 24 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: "User is created successfully",
      user
    });
  } catch (error) {
    console.log("Google Authentication Error :- ", error);
  }
};

const logout = async (req, res) => {
  try {
    await res.clearCookie("token");
    return res.json({ success: true, message: "Logout successfully" });
  } catch (error) {
    console.log("Logout Error :- ", error);
  }
};
export { googleAuth, logout };
