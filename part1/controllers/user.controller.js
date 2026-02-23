import users from "../models/user.model.js";

export function hello(req, res) {
    res.send(users);
}