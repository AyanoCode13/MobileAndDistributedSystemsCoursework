import getWorkoutsQuery from "../../api/queries/getWorkoutsQuery";
import { Card,CardHeader, CardContent, CircularProgress, Stack, Divider } from "@mui/material";
import WorkoutsDay from "../models/WorkoutsDay";
import AddWorkoutForm from "../templates/addWorkoutForm";
import EditWorkoutForm from "../templates/editWorkoutForm";
import { useState } from "react";
export default function WorkoutsPage() {
  const [editWorkut, setEditWorkout] = useState();
  const [visible, setVisible] = useState(true);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const { data: workouts, isLoading, isFetching } = getWorkoutsQuery();
  while (isLoading || isFetching) {
    return <CircularProgress />;
  }
  const setEditedWorkout = (workout) => {
    setEditWorkout(workout);
    setVisible(true);
  }

  return (
    <Card sx={{width:"100%", marginTop:10}}>
      <CardHeader title={"Workouts"} />
      <Divider />
      <CardContent>
        <AddWorkoutForm options={days}/>
        <Stack direction={"row"} sx={{marginTop:10}} spacing={2}>
          {days.map((day) => {
            return (
              <WorkoutsDay
                workouts={workouts.filter((workout) => workout.day === day)}
                day={day}
                key={day}
                edit={setEditedWorkout}
              />
            );
          })}
        </Stack>
        {editWorkut && visible && <EditWorkoutForm workout={editWorkut} options={days} editVisible={setVisible}/>}
      </CardContent>
    </Card>
  );
}
