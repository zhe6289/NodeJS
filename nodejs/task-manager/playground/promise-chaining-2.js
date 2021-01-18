require('../src/db/mongoose')
const Task = require('../src/models/task')

// const deleteTask = async (id) => {
//     await Task.findByIdAndDelete(id)
//     // await Task.create(id)
//     const count = await Task.countDocuments({ completed: false })
//     return count
// }

// deleteTask('5f3e587ce6cbe705002d6b93').then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const addTask = async (obj) => {
    await Task.create(obj)
    const count = await Task.countDocuments({ completed: false })
    return count
}

addTask({ description: 'Buy a hub for my mac', completed: false }).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
}) 