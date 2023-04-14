import { Card, CardActions, CardContent, CardHeader, IconButton } from "@mui/material";
import deleteWorkoutQuery from "../../api/queries/deleteWorkoutQuery"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Workout({workout, setEdit}){
  const { mutate } = deleteWorkoutQuery(workout._id)
  return (
    <div>
     <Card>
      <CardHeader title={workout.name}/>
      <CardContent>
        <label>Sets:</label><p>{workout.sets}</p>
        <label>Reps:</label><p>{workout.reps}</p>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <IconButton color="error" onClick={()=>mutate(workout._id)}><DeleteIcon/></IconButton>
        <IconButton color="success" onClick={()=>setEdit(workout)}><EditIcon/></IconButton>
      </CardActions>
     </Card>
    </div>
  );
}