import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import editWorkoutQuery from "../../api/queries/editWorkoutQuery";

export default function AddWorkoutForm({ options, workout, editVisible}) {
  const { mutate, status } = editWorkoutQuery();
  const [name, setName] = useState(workout.name);
  const [day, setDay] = useState(workout.day);
  const [sets, setSets] = useState(workout.sets);
  const [reps, setReps] = useState(workout.reps);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      id: workout._id,
      data:{
        name: name,
        day: day,
        sets: sets,
        reps: reps,
      }
    });
    editVisible(false);
  };
  while (status === "loading" || status === "pending") {
    return <p>Loading...</p>;
  }

  return (
    <div className="addWorkoutForm">
      {workout && (
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader title="Edit Workout" />
            <CardContent>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  type="text"
                  inputMode="text"
                  placeholder="Name"
                  defaultValue={workout.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <Select
                  label="Day"
                  onChange={(e) => setDay(e.target.value)}
                  value={workout.day}
                >
                  {options.map((option) => {
                    return (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  
                  type="number"
                  inputMode="numeric"
                  placeholder="Sets"
                  defaultValue={workout.sets}
                  InputProps={{ inputProps: { min: 0 } }}
                  onChange={(e) => setSets(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  
                  type="number"
                  inputMode="numeric"
                  placeholder="Reps"
                  defaultValue={workout.reps}
                  InputProps={{ inputProps: { min: 0 } }}
                  onChange={(e) => setReps(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
              
              </FormControl>
            </CardContent>
          </Card>
        </form>
      )}
    </div>
  );
}
