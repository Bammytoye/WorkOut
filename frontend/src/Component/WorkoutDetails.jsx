import React from 'react'
import { useWorkoutContext } from '../hooks/UseWorkoutContent'


const WorkoutDetails = ({workout}) => {
    const { dispatch } = useWorkoutContext()

    const handleClick = async () => {
        const response = await fetch('http://localhost:5010/api/Workout/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        // console.log(json);

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }


    return (
        <div className='flex  justify-between items-center bg-white rounded-md mx-auto my-5 p-5 relative shadow'>
            <div>
                <h4 className='mb-3 text-lg text-[#1aac83]'> 
                    {workout.title}
                </h4>

                <p className='text-sm text-[#555]'> <strong>Load (kg): </strong> {workout.load}</p>
                <p className='text-sm text-[#555]'> <strong>Reps: </strong> {workout.reps}</p>
                <p className='text-sm text-[#555]'>{workout.createdAt}</p>
                
            </div>

            <div>
                <span className='text-[#555] cursor-pointer' onClick={handleClick}>Delete</span>
            </div>
        </div>
    )
}

export default WorkoutDetails