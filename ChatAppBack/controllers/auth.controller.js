import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body
        if(password !== confirmPassword){
            return res.status(400).json({error:"Senhas não combinam"})
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error:"Esse usuário ja existe"})
        }
        //HASH da senha aqui :)
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // site dahora https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic: gender === 'homem' ? boyProfilePic : girlProfilePic
        })

        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
    } catch (error) {
        console.log("Erro no cadastro controller")
        res.status(500).json({error: "Server ERROR"})
    }
}
export const login = (req, res) => {
    res.send("login")
    console.log('loginUser')
}
export const logout = (req, res) => {
    res.send("logout")
    console.log('logoutUser')
}