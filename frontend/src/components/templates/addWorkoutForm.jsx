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
import addWorkoutQuery from "../../api/queries/addWorkoutQuery";
export default function AddWorkoutForm({ options, update}) {
  const { mutate, status } = addWorkoutQuery();
  const [name, setName] = useState();
  const [day, setDay] = useState("Monday");
  const [sets, setSets] = useState();
  const [reps, setReps] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      name: name,
      day: day,
      sets: sets,
      reps: reps,
    });
  };
  while (status === "loading" || status === "pending" ) {
    return <p>Loading...</p>;
  }

  return (
    <div className="addWorkoutForm">
      <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader title="Add Workout" />
        <CardContent>
          <FormControl fullWidth>
            <TextField
              fullWidth
              label="Name"
              type="text"
              inputMode="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <Select
              label="Day"
              onChange={(e) => setDay(e.target.value)}
              value={day}
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
              label="Sets"
              type="number"
              inputMode="numeric"
              placeholder="Sets"
              InputProps={{ inputProps: { min: 0 } }}
              onChange={(e) => setSets(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              fullWidth
              label="Reps"
              type="number"
              inputMode="numeric"
              placeholder="Reps"
              InputProps={{ inputProps: { min: 0 } }}
              onChange={(e) => setReps(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <Button variant="contained" color="primary" type="submit">
              Add Workout
            </Button>
          </FormControl>
        </CardContent>
      </Card>
      </form>
      
    </div>
  );
}
