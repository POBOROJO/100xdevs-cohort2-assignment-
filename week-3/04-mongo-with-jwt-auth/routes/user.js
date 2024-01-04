const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        message: "User created successfully"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({
        username,
        password
    })
    if(user){
       const token = jwt.sign({
           username
       },JWT_SECRET)
       res.json({
           token
       })
    }
    else{
        res.status(411).json({
            msg : "Incorrect username and password"
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({})

    res.json({
        courses : allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;

    const user = await User.updateOne({
        username,
    },{
        '$push':{
            purcharseCourses:courseId
        }
    })
    res.json({
        msg: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.username
    })
    // console.log(user.purcharseCourses);
    const courses = await Course.find({
        _id:{
            "$in":user.purcharseCourses
        }
      })
      
      res.json({
        courses : courses
    })
});

module.exports = router