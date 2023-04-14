import { getWorkoutsRequest } from "../requests/workoutRequests";
import { useQuery } from "react-query"

export default ()=>{
  return useQuery("workouts", async () => await getWorkoutsRequest(),{
    refetchOnWindowFocus: false,
  });
}
