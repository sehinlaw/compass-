let Degrees = 0
basic.forever(function () {
    Degrees = input.compassHeading()
    if (Degrees < 45 || Degrees > 315) {
        basic.showString("N")
    } else if (Degrees < 135) {
        basic.showString("E")
    } else if (Degrees < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
