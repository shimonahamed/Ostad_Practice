const express=require('express');
const StudentControllers=require('../controllers/studentscontrollers');

const router = express.Router();

router.get("/read",StudentControllers.ReadStudents);

router.post("/create",StudentControllers.CreateStudents);

router.put("/update",StudentControllers.UpdateStudents);

router.delete("/delete",StudentControllers.DeleteStudents);

module.exports=router;