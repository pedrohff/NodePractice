const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/playground', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect', err))

const courseSchema = new mongoose.Schema({
    name: {type: String, 
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
})
const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    // const course = new Course({
    //     name: 'Node.js Course',
    //     author: 'Me',
    //     tags: ['node', 'backend']
    // })
    
    const course = new Course({
        name: 'Angular Course',
        author: 'Me',
        tags: ['angular', 'frontend']
    })
    
    const result = await course.save()
    console.log(result)
}

async function getCourses() {
    const courses = await Course
        .find({author: /^M/i})
        /*
            ^   starts with
            $   ends with
            i   case insensitive
            .*  zero or any 
        */
        .limit(pageSize)
        .skip((pageNumber - 1) * pageSize)
        .sort({name:1})
        .select({name: 1, tags: 1})

    console.log(courses)
}

getCourses()