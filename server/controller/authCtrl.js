import { User } from "../model.js";
import bcrypt from "bcryptjs";

export default {
    register: async (req, res) => {
        console.log('Hit Register!')
        try {
            const { firstName, lastName, email, password } = req.body;

            const foundUser = await User.findOne({
                where: { email }
            })

            if (foundUser) {
                res.status(400).send('This username is already taken')
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({ firstName, lastName, email, hashedPass: hash })
            }

            req.session.user = {
                userId: newUser.id,
                firstName: newUser.firstName,
            }
            res.status(200).send(req.session.user)
        } catch (err) {
            console.log(err)
            res.status(500).send('Something went wrong trying to register!')
        }
    },

    login: async (req, res) => {
        console.log('hit login!')
        try {
            const { email, password } = req.body;

            const foundUser = await User.findOne({
                where: { email }
            });
            if (!foundUser) {
                res.status(400).send("Couldn't find user with that email!")
            } else {
                const isAuthenticated = await bcrypt.compareSync(password, foundUser.hashedPass)
                if (isAuthenticated) {
                    req.session.user = {
                        userId: foundUser.id,
                        firstName: foundUser.firstName
                    }
                    console.log(req.session.user)
                    req.session.save((error) => {
                        if (error) {
                            console.error('Error saving session!', error)
                        } else {
                            res.status(200).send(req.session.user)
                        }
                    })
                } else {
                    res.status(401).send(req.session.user)
                }
            }
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },

    logout: async (req, res) => {
        console.log('hit logout')
        req.session.destroy();
        res.sendStatus(200);
    }
}