 const {Router} = require('express')
 const User = require('../models/User')
 const bcrypt = require('bcryptjs')
 const router = Router()

router.post('/register', async (req,res)=>{
    try{
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if(candidate){
            return res.status(400).json({message:"Такой пользователь уже существует"})
        }
        const hashedPassword = bcrypt.hash(password)
    }catch(e){
        res.status(500).json({message:"Что-то пошло не так, попробуйте снвоа"})
    }
})
router.post('/login', async (req,res)=>{
    try{

    }catch(e){
        
    }
})

 module.exports = router