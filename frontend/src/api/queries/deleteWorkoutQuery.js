import { useMutation, useQueryClient } from "react-query";
import { deleteWorkoutRequest, getWorkoutsRequest } from "../requests/workoutRequests";

export default () => {
  const client = useQueryClient();
  return useMutation(async (id) => await deleteWorkoutRequest(id), {
    onMutate: async (id) => {
      console.log(id)
      await client.cancelQueries("workouts");
      const prevData = client.getQueryData("workouts");
      client.setQueryData("workouts", () => {
        return prevData.filter((workout) => workout._id !== id);
      });
      return prevData;
    },
    onError: (_e, _workout, context) => {
      console.log(context);
    },
    onSettled: () => {
      client.invalidateQueries("workout");
    },
  });
};
