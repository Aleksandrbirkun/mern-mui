 const {Router} = require('express')

 const router = Router()

router.post('/register', async (req,res)=>{
    try{

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