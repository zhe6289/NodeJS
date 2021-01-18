const doWorkCallBack = (callback) => {
    setTimeout(() => {
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallBack((err, result) => {
    if (err) {
        return console.log(err)
    }
    console.log(result)
})