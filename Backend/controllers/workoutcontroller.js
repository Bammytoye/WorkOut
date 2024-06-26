const Workout = require ('../models/workoutModels.js')
const mongoose = require ('mongoose')

//get all workout
const getWorkouts = async (req, res) => {
    const user_id =  req.user._id

    const workouts = await Workout.find({user_id}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not Found'})
    }

    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({error: 'Not Found'})
    }
        res.status(200).json(workout)
}

//create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    let emptyFields = []

        if (!title) {
            emptyFields.push('title')
        }

        if (!load) {
            emptyFields.push('load')
        }

        if (!reps) {
            emptyFields.push('reps')
        }

        if (emptyFields.length > 0) {
            return res.status(400).json({error: 'All Information Required', emptyFields})
        }

    //add documentation to db
    try {
        const user_id = req.user._id
        const workout = await Workout.create({title, load, reps, user_id})
        res.status(200).json(workout) 
        // console.log(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
        // console.log(error)
    }
}

//delete a single workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not Found'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if (!workout) {
        return res.status(404).json({error: 'Not Found'})
    }
        res.status(200).json(workout)
}

//update a single workout
const updateWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Workout Found'})
    }   
    
    const workout = await Workout.findByIdAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true }
    );

    if (!workout) {
        return res.status(404).json({error: 'No Workout Found'})
    }
    res.status(200).json({workout})
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
}