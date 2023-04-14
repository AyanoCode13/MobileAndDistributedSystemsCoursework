export const getWorkoutsRequest = async () =>{
    const request = await fetch("http://localhost:8000/api/v1/workouts")
    return await request.json()
}

export const addWorkoutRequest = async (workout) =>{
    const request = await fetch("http://localhost:8000/api/v1/workouts", {
        method: "POST",
        mode:"cors",
        body:JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await request.json()
}
export const editWorkoutRequest = async (id, workout) =>{
    console.log(workout)
    const request = await fetch("http://localhost:8000/api/v1/workouts?_id=" + id, {
        method: "PUT",
        mode:"cors",
        body:JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await request.json()
}
export const deleteWorkoutRequest = async (id) =>{
    const request = await fetch("http://localhost:8000/api/v1/workouts?_id="+id,{
        method: "DELETE",
        mode:"cors"
    })
    return await request.json()
}