require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5f3a68f9ae9eea070905ca71', { age: 2 }).then((user) => {
//     console.log(user)
//     return User.create({ name: 'Daniel', age: '27', email: 'daniel@gmail.com', password: '123456789' })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count 
}

updateAgeAndCount('5f3a68f9ae9eea070905ca71', 27).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})