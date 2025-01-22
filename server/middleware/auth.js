import jwt from "jsonwebtoken";

export const authToken = (req, res, next) => {
	const auth = req.header("authorization");
	if (!auth) return res.status(401).send("Access denied");
    const token = auth.split(" ")[1];
	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send("Invalid token");
        req.user = user;
        next();
    });
};
