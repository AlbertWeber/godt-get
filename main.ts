/**
 * PIL IKKE VED DET!
 */
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("                                         JJJJJJJJJJJJJJJJJJJJ ")
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.East)
    basic.showString("HEJ NIELS")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C F G F E G - F ", 500)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("TAK FOR GAVEN")
    pins.analogWritePin(AnalogPin.P0, 1023)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("HELP!")
})
basic.showLeds(`
    . # . # .
    . . # . .
    . . # . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    radio.setGroup(56)
})
