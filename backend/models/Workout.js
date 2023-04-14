import mongoose from "mongoose"
const WorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  day:String,
  sets:{
    type:Number,
    default:0
  },
  reps:{
    type:Number,
    default:0
  },
  weight:{
    type:Number,
    default:0
  },
  created_at:{
    type:String,
    default: new Date(),
  },
})

export default new mongoose.model("Workout", WorkoutSchema);