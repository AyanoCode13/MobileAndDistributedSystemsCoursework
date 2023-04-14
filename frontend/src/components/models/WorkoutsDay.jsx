import { Card, CardHeader, CardContent } from "@mui/material";
import Workout from "./Workout";
export default function WorkoutsDay({ workouts, day ,edit}) {
  return (
    <Card sx={{width:"100%"}}>
      <CardHeader title={day} subheader={"Workouts"}/>
      <CardContent>
        {workouts.map((workout) => {
          return <Workout workout={workout} key={workout._id} setEdit={edit}/>;
        })}
      </CardContent>
    </Card>
  );
}
