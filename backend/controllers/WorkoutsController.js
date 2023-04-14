import Workout from "../models/Workout.js"
export const getWorkouts = async (req, res)=>{
    res.status(200).json(await Workout.find(req.query))
}
export const addWorkout = async (req, res)=>{
    console.log(req.body)
    await Workout.create(req.body)
    res.status(200).json("Workout Added")
}
export const editWorkout = async (req, res)=>{
    await Workout.findOneAndUpdate({_id:req.query._id}, req.body)
    res.status(200).json("Workout Edited")
}
export const deleteWorkout = async (req, res)=>{
    console.log(req.query)
    await Workout.findOneAndDelete({_id:req.query._id})
    res.status(200).json("Workout Deleted")
}