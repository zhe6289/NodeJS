const square = (x) => {
   x * x
}
// const square = (x) => x * x

// console.log(square(4))

const event = {
    name: 'Birthday Party',
    guestList: ['Eugene', 'Jane', 'Sarah'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((item) => {
            console.log(item + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()