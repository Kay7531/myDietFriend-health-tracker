import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
    },
    calsLost: {
        type: Number,
    },
    date: {
        type: Date,
    },
    owner: { type: Schema.Types.ObjectId, ref: "Profile" },
}, {
    timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
    Workout
}

