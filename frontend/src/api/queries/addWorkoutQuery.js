import { addWorkoutRequest, getWorkoutsRequest } from "../requests/workoutRequests";
import { useQueryClient, useMutation } from "react-query";

export default () => {
  
  const client = useQueryClient();
 
  return useMutation(async (workout) => {
    await addWorkoutRequest(workout) 
  }, 
  {
    onSuccess: async () => {
      await client.cancelQueries("workouts");
      const workouts =  await getWorkoutsRequest()
      client.setQueryData("workouts", () => {
        return [...workouts]
      });
      return workouts
    },
    onError: (_e, _workout, context) => {
      console.log(context);
    },
    onSettled: () => {
      client.invalidateQueries("workots");
    },
  });
};
