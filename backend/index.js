import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected");
}).catch(err => {
    console.error(err);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = new mongoose.model("User", userSchema)

//Routes
//This code is copied and pasted from Chat GPT.
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                if (password === user.password) {
                    res.send({ message: "Login successful", user: user });
                } else {
                    res.send({ message: "Password didn't match" });
                }
            } else {
                res.send({ message: "User not registered" });      
            }
        })
        .catch((err) => {
            res.send(err);
        });
});
  

app.listen(9002, ()=>{
    console.log("BE started at port 9002")
})
//After chat gpt suggestion for try - catch block...
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (user) {
            res.send({ message: "User already registered" });
        } else {
            const newUser = new User({
                name,
                email,
                password,
            });
            await newUser.save();
            res.send({ message: "Successfully registered, please login now." });
        }
    } catch (err) {
        res.send(err);
    }

    // console.log(req.body);
});



// //Latest Chat GPT copy-pasted code
// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("DB connected");
// }).catch(err => {
//     console.error(err);
// });


// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     cart: [{ productId: String, quantity: Number }]
// })

// const User = new mongoose.model("User", userSchema)

// //Routes

// app.post("/login", (req, res) => {
//     const { email, password } = req.body;

//     User.findOne({ email: email })
//         .then((user) => {
//             if (user) {
//                 if (password === user.password) {
//                     res.send({ message: "Login successful", user: user });
//                 } else {
//                     res.send({ message: "Password didn't match" });
//                 }
//             } else {
//                 res.send({ message: "User not registered" });         
//             }
//         })
//         .catch((err) => {
//             res.send(err);     
//         });
// });

// app.post("/register", async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         const user = await User.findOne({ email: email });
//         if (user) {
//             res.send({ message: "User already registered" });
//         } else {
//             const newUser = new User({
//                 name,
//                 email,
//                 password,
//                 cart: []
//             });
//             await newUser.save();
//             res.send({ message: "Successfully registered, please login now." });
//         }
//     } catch (err) {
//         res.send(err);
//     }
// });

// app.post("/api/cart", async (req, res) => {
//     const { email, productId, quantity } = req.body;

//     try {
//         const user = await User.findOne({ email: email });
//         if (user) {
//             const cartItem = user.cart.find(item => item.productId === productId);
//             if (cartItem) {
//                 cartItem.quantity += quantity;
//             } else {
//                 user.cart.push({ productId: productId, quantity: quantity });
//             }
//             await user.save();
//             res.send({ message: "Cart updated successfully" });
//         } else {
//             res.send({ message: "User not found" });
//         }
//     } catch (err) {
//         res.send(err);
//     }
// });

// app.get("/api/cart", async (req, res) => {
//     const { email } = req.query;

//     try {
//         const user = await User.findOne({ email: email });
//         if (user) {
//             res.send({ cart: user.cart });
//         } else {
//             res.send({ message: "User not found" });
//         }
//     } catch (err) {
//         res.send(err);
//     }
// });

// app.listen(9002, ()=>{
//     console.log("BE started at port 9002")
// })

// 2nd time
// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("DB connected");
// }).catch(err => {
//     console.error(err);
// });


// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     cart: [{
//         productId: {
//             type: mongoose.Types.ObjectId,
//             ref: 'Product'
//         },
//         quantity: Number
//     }]
// })

// const User = mongoose.model("User", userSchema)

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     description: String
// })

// const Product = mongoose.model("Product", productSchema)

// //Routes

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email: email });
//         if (user) {
//             if (password === user.password) {
//                 res.send({ message: "Login successful", user: user });
//             } else {
//                 res.send({ message: "Password didn't match" });
//             }
//         } else {
//             res.send({ message: "User not registered" });
//         }
//     } catch (err) {
//         res.send(err);
//     }
// });

// app.post("/register", async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         const user = await User.findOne({ email: email });
//         if (user) {
//             res.send({ message: "User already registered" });
//         } else {
//             const newUser = new User({
//                 name,
//                 email,
//                 password,
//                 cart: []
//             });
//             await newUser.save();
//             res.send({ message: "Successfully registered, please login now." });
//         }
//     } catch (err) {
//         res.send(err);
//     }
// });

// app.post("/api/cart", async (req, res) => {
//     const { userId, productId, quantity } = req.body;

//     try {
//         const user = await User.findById(userId);
//         const product = await Product.findById(productId);

//         if (!user) {
//             return res.send({ message: "User not found" });
//         }

//         if (!product) {
//             return res.send({ message: "Product not found" });
//         }

//         const existingCartItemIndex = user.cart.findIndex(item => item.productId.toString() === productId);

//         if (existingCartItemIndex >= 0) {
//             user.cart[existingCartItemIndex].quantity += quantity;
//         } else {
//             user.cart.push({ productId, quantity });
//         }

//         await user.save();
//         res.send({ message: "Item added to cart", cart: user.cart });
//     } catch (err) {
//         res.send(err);
//     }
// });

// app.get("/api/cart/:userId", async (req, res) => {
//     const { userId } = req.params;

//     try {
//         const user = await User.findById(userId).populate({
//             path: 'cart.productId',
//             model: 'Product'
//         });

//         if (!user) {
//             return res.send({ message: "User not found" });
//         }

//         res.send({ cart: user.cart });
//     } catch (err) {
//         res.send(err);
//     }
// });

// app.listen(9002, () => {
//     console.log("BE started at port 9002")
// });


// 3rd time
//backend/index.js
// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("DB connected");
// }).catch(err => {
//     console.error(err);
// });


// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const lawyerSchema = new mongoose.Schema({
//     name: String,
//     area: String,
//     experience: Number,
//     rating: Number
// })

// const User = new mongoose.model("User", userSchema)
// const Lawyer = new mongoose.model("Lawyer", lawyerSchema)

// //Routes

// // Register a lawyer
// app.post("/lawyers", async (req, res) => {
//     const { name, area, experience, rating } = req.body;

//     try {
//         const lawyer = await Lawyer.findOne({ name: name });
//         if (lawyer) {
//             res.send({ message: "Lawyer already exists" });
//         } else {
//             const newLawyer = new Lawyer({
//                 name,
//                 area,
//                 experience,
//                 rating,
//             });
//             await newLawyer.save();
//             res.send({ message: "Lawyer added successfully" });
//         }
//     } catch (err) {
//         res.send(err);
//     }
// });

// // Get all lawyers
// app.get("/lawyers", async (req, res) => {
//     try {
//         const lawyers = await Lawyer.find({});
//         res.send(lawyers);
//     } catch (err) {
//         res.send(err);
//     }
// });

// // Get a single lawyer by id
// app.get("/lawyers/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const lawyer = await Lawyer.findById(id);
//         if (lawyer) {
//             res.send(lawyer);
//         } else {
//             res.send({ message: "Lawyer not found" });
//         }
//     } catch (err) {
//         res.send(err);
//     }
// });

// // Update a lawyer
// app.put("/lawyers/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const lawyer = await Lawyer.findByIdAndUpdate(id, req.body);
//         if (lawyer) {
//             res.send({ message: "Lawyer updated successfully" });
//         } else {
//             res.send({ message: "Lawyer not found" });
//         }
//     } catch (err) {
//         res.send(err);
//     }
// });

// // Delete a lawyer
// app.delete("/lawyers/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const lawyer = await Lawyer.findByIdAndDelete(id);
//         if (lawyer) {
//             res.send({ message: "Lawyer deleted successfully" });
//         } else {
//             res.send({ message: "Lawyer not found" });
//         }
//     } catch (err) {
//         res.send(err);
//     }
// });

// app.listen(9002, ()=>{
//     console.log("BE started at port 9002")
// })




// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("DB connected");
// }).catch(err => {
//     console.error(err);
// });


// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)

// //Routes
// //This code is copied and pasted from Chat GPT.
// app.post("/login", (req, res) => {
//     const { email, password } = req.body;

//     User.findOne({ email: email })
//         .then((user) => {
//             if (user) {
//                 if (password === user.password) {
//                     res.send({ message: "Login successful", user: user });
//                 } else {
//                     res.send({ message: "Password didn't match" });
//                 }
//             } else {
//                 res.send({ message: "User not registered" });
//                 // preventdefault()
//             }
//         })
//         .catch((err) => {
//             res.send(err);
//         });
// });

// app.listen(9002, ()=>{
//     console.log("BE started at port 9002")
// })
// //After chat gpt suggestion for try - catch block...
// app.post("/register", async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         const user = await User.findOne({ email: email });
//         if (user) {
//             res.send({ message: "User already registered" });
//         } else {
//             const newUser = new User({
//                 name,
//                 email,
//                 password,
//             });
//             await newUser.save();
//             res.send({ message: "Successfully registered, please login now." });
//         }
//     } catch (err) {
//         res.send(err);
//     }

//     // console.log(req.body);
// });