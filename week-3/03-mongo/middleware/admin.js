// Middleware for handling auth
const {Admin} = require("../db");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username : username,
        password: password
        .then(value=()=>{
            if(value){
                next();
            }
            else{
                res.status(403).json({
                    msg : "Admin does not exist"
                })
            }
        })
    })
}
// async function adminMiddleware(req, res, next) {
//     // Implement admin auth logic
//     // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
//     try{
//         const username = req.headers.username;
//         const password = req.headers.password;

//         const admin = await Admin.findOne({
//             username : username,
//             password : password 
//         })
//         if(value){
//             next();
//         }
//         else{
//             res.status(403).json({
//                 msg: "Admin does not exist"
//             })
//         }
//     }
//     catch(e){
//     }
// }

module.exports = adminMiddleware;