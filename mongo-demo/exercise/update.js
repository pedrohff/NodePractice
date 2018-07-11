const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongo-exercises', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: Number
})
const Course = mongoose.model('Course', courseSchema)


async function updateCourse(id) {
    const course = await Course.findById(id)
    if(!course){
        return
    }

    course.isPublished = true
    course.author = 'Another author'

    const result = await course.save()

    console.log(result)
}

async function updateCourseAlt(id) {
    return await Course.findByIdAndUpdate({_id: id}, {
        $set: {
            author: 'MMM',
            isPublished: false
        }
    }, {new: true}) // retreives the state of the object after the update
}

async function removeCourse(id) {
    return Course.deleteOne({_id: id})
}

updateCourse('5a68fde3f09ad7646ddec17e')