const db = require('../models/index')
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const User = db.user

const login = async (req, res) => {
    const { username, password } = req.body
    console.log( username, password);

    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required'})
    }
console.log( username, password);
    const foundUser = await User.findOne({where:{userName:username}})

    if (!foundUser) {
     console.log("not found")
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const match = await bcrypt.compare(password, foundUser.password)
    console.log("kokoko")
    if (!match) return res.status(401).json({ message: 'Unauthorized' })
        
    //ניצור אובייקט המכיל את הפרטים ללא הסיסמא
    //const userInfo = {password, ...foundUser}
    const userInfo= {userId:foundUser.userId, userName:foundUser.userName,levelId:foundUser.levelId, address:foundUser.address,phone:foundUser.phone,email:foundUser.email,permissionLevel:foundUser.permissionLevel,wordsList:foundUser.wordsList,name:foundUser.name }
console.log(userInfo)
console.log(process.env.ACCESS_TOKEN_SECRET)

    //Create the token
    //const accessToken = jwt.sign(userInfo,"לערבול סיסמא")

   const accessToken = jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
   // res.setHeader('Authorization', `Bearer ${accessToken}`)

    res.json({accessToken:accessToken})
    }
    




const register = async (req, res) => {
    console.log("hi")
    const { username, email, password, phone, address,name } = req.body
    console.log(username, email, password, phone, address,name );
    if (!username || !password || !email) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const duplicate = await User.findOne({ where: { userName: username } })      
    if (duplicate) {
       return res.status(409).json({ message: "Duplicate username" })
   }

    const hashedPwd = await bcrypt.hash(password, 10)
    const userObject = {userName:username,levelId:1,password: hashedPwd,address,phone,email,permissionLevel:1,wordsList:null,name}
    const user = await User.create(userObject)
    console.log(user);
    if (user) { // Created
        return res.status(201).json({
            message: `New user ${user.userName} created` })
    } 
    else {
        return res.status(400).json({
            message: 'Invalid user datareceived' })
}

}
const getWordsList = async (req, res) => {
    const wordsListByUserId=await User.findOne({ attributes: ['wordsList'] ,where: { userId:req.user.userId }});;
    if (!wordsListByUserId) {
        return res.status(400).json({ message: 'No ' })
    }
    res.json(wordsListByUserId)
}



const addword = async (req, res) => {    
    const foundUser = await User.findOne({where: { userId:req.user.userId }});
    if (!foundUser) {
        return res.status(400).json({ message: 'No User found' })
    }
    console.log(req.body)
   let wordEng=req.body.wordEnglish;
    let wordHeb=req.body.wordHebrew;

   console.log(wordEng);
   console.log(wordHeb);
let str=`{"${wordEng}":"${wordHeb}"}`;
 let son=JSON.parse(str)
 console.log(son)
       await foundUser.update({
        wordsList: {...foundUser.wordsList, ...son},
       });
    res.send("success")
}
const deleteWord=async(req,res)=>{
    const foundUser = await User.findOne({ where: { userId: req.user.userId } });
    if (!foundUser) {
      return res.status(400).json({ message: 'No User found' });
    }
    
    const wordToDelete = req.body.wordEnglish;
    console.log(wordToDelete);
    console.log(foundUser,"found user")
    // Use the delete operator to remove the property from the object
    const newS = {...foundUser.wordsList} 
    // console.log("newS", newS)
    // console.log("wordToDelete", wordToDelete)
    //delete foundUser.wordsList[wordToDelete];
     delete newS[wordToDelete]
    foundUser.wordsList = newS
    await foundUser.save();
    console.log("I am deleting");
    res.send("success");
    
    

}
const getMyLevel=async(req,res)=>{
    const foundUser = await User.findOne({where: { userId:req.user.userId }});
    if (!foundUser) {
        return res.status(400).json({ message: 'No User found' })
    }
    res.json(foundUser.levelId)
}

module.exports = {  login, 
                    deleteWord,
                    register ,
                    getWordsList,
                    addword,
                    getMyLevel
                }
