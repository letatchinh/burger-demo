const {Router} = require('express')
const admin = require("firebase-admin");
const { v4 } = require('uuid')
const router = Router()
admin.initializeApp({
    credential: admin.credential.cert(
      "./burger-demo-44d52-firebase-adminsdk-d3e9m-806a649e4e.json"
    ),
    databaseURL: "https://burger-demo-44d52-default-rtdb.firebaseio.com",
  });
  const db = admin.firestore();
// LOGIN
router.post("/api/users", async (req, res) => {
   try {
    const query = await db.collection("users").get();
    const docs = query.docs;
    const response = docs.map((item) => {
      if(req.body.username === item.data().username && req.body.password === item.data().password){
        return {
          id : item.id,
          name : item.data().name,
          username : item.data().username,
        }
      }
    });
    return res.status(200).json(response);
   } catch (error) {
     throw new Error("Wrong username or password")
   }
  
  });
// Register
router.post("/api/register", async (req, res) => {
  try {
    const {name , username , password} = req.body
    const query =  db.collection("users")
    const check = await query.get()
    const check2 = check.docs
    const response = check2.filter((item) => username === item.data().username);
    if(response.length !== 0){
      return res.status(401).json({message : 'Accont is exist'})
    }
    else{
       const newAccount = {name,username,password}
    await query.doc(`/${v4()}/`).create(newAccount)
    return res.status(201).json(newAccount)
    }
  } catch (error) {
    throw new Error("Wrong username or password")
  }
 
 });
module.exports = router