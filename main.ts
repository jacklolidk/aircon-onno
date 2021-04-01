let low_temp_warning = 0
input.onButtonPressed(Button.A, function () {
    if (input.temperature() >= 26) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
    if (input.temperature() <= 22) {
        if (low_temp_warning == 0) {
            basic.showString("Temp. Too low! Turn off the air-con please!")
        }
        low_temp_warning += 1
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
    if (input.temperature() > 22) {
        low_temp_warning = 0
    }
})
