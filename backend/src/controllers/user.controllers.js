import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../model/user.model.js";
import generateToken from "../utils/generateToken.js";


const registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(400);
            throw new Error("User already exists");
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        if (user) {
            //generate Token
            generateToken(res, user._id);
            res.status(202).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(400);
            throw new Error('Invalid User data');
        }
    } catch (error) {
res.status(500).json({ message: "Something went wrong" });
    }


});

const authUser = asyncHandler(async (req, res   ) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (User && (await user.matchPassword(password))) {
        //generate Token
        generateToken(res, user._id);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400);
        throw new Error("Invalid Email or Password");
    }
});

const logout = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expiresIn: new Date(0),
    });

    res.status(200).json({ message: "Logged out successfully" });
});

const updateUserProfile = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;

        if (password) {
            user.password = password;
        }
        await user.save()
        res.status(200).json({
            name: user.name,
            email: user.email,
            password: user.password,
        });
    } else {
        res.status(404)
        throw new Error("User not found");
    }
})

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        return res.json(user);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

const updateUser = asyncHandler(async (req, res) => {
    const { name, email, isAdmin, id } = req.body;

    const user = await User.findById(id);

    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        user.isAdmin = isAdmin || user.isAdmin;

        const updatedUser = await user.save();
        res.json(updatedUser);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

const deleteUsers = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
        res.json('User deleted successfully');
    } else {
        res.status(404);
        throw new Error("User not found");
    }

})

export { registerUser, authUser, logout, updateUserProfile, getUsers, getUserById, updateUser, deleteUsers };