import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const users = [];

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true })); 
;

app.post('/signup',(req, res) => {
    const user = req.body;
    const verify = (user.fname === '' ) || (user.lname === '' ) || (user.username === '' ) || (user.birthDate === '' ) 
                                        || (user.email === '' ) || (user.password === '' );
    if (verify) {
        console.log('Missing credentials')
        res.json({ message: "Missing credentials"})
    } 
    else if (user.password !== user.repassword) {
        console.log('Passwords dont match')
        res.json({ message: "Passwords dont match"})
    }
    else {
        users.push(user);
        console.log("Current users:", users);
        console.log("Sign Up successful")
        res.json({ message: "Signup successful"});
    }
});

app.post('/login',(req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => (u.username === username || u.email === username) && u.password === password);
    if (user) {
        console.log("Login successful")
        res.json({ message: "Login successful"});
    } 
    else {
        console.log("Invalid credentials")
        res.json({ message: "Invalid credentials" });
    }
});


app.listen(PORT, () => {
    console.log("server at http://localhost:3000");
})