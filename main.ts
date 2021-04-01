input.onButtonPressed(Button.A, function () {
    if (input.temperature() >= 26) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (input.temperature() <= 22) {
        for (let index = 0; index < 1; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
