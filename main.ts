let Degrees = 0
basic.forever(function () {
    Degrees = input.compassHeading()
    if (Degrees < 45 || Degrees > 315) {
        basic.showString("N")
    } else if (Degrees < 67.5) {
        basic.showString("NE")
    } else if (Degrees < 112.5) {
        basic.showString("E")
    } else if (Degrees < 157.5) {
        basic.showString("SE")
    } else if (Degrees < 202.5) {
        basic.showString("S")
    } else if (Degrees < 247.5) {
        basic.showString("SW")
    } else if (Degrees < 292.5) {
        basic.showString("W")
    } else {
        basic.showString("NW")
    }
})
