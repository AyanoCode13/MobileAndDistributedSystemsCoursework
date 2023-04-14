import express from "express"
import { getWorkouts, addWorkout, editWorkout, deleteWorkout } from "../controllers/WorkoutsController.js"

const router = express.Router()
router.get('/workouts', getWorkouts)
router.post('/workouts', addWorkout)
router.put('/workouts', editWorkout)
router.delete('/workouts', deleteWorkout)

export default router
