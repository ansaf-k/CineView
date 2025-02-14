import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    let token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

    res.cookie("jwt", token, {
        secure: false,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
    });
}

export default generateToken;