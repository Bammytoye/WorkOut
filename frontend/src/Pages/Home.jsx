import React from 'react'
import { useEffect } from 'react'
import { useWorkoutContext } from '../hooks/UseWorkoutContent'
// import axios from 'axios'

// Component
import WorkoutDetails from '../Component/WorkoutDetails'
import WorkoutForm from '../Component/Workoutform'

const Home = () => {
    const {workouts, dispatch} = useWorkoutContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            
                const response = await fetch('http://localhost:5010/api/Workout'); //changes
                const json = await response.json();
                console.log(json); // Logging the fetched data to the console
    
                if (response.ok) {
                    dispatch({type: 'SET_WORKOUTS', payload: json});
                } 
                workout.createdAt
        };
    
        fetchWorkouts();
    }, [dispatch]);
    

    return (
        <div className="grid grid-cols-[3fr,1fr] gap-20">
            <div>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm /> 
        </div>
    )
}

export default Home