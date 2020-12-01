let score = 0
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.Happy)
})
input.onPinPressed(TouchPin.P2, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    score += -1
    basic.showNumber(score)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        basic.showIcon(IconNames.Target)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showIcon(IconNames.Sad)
})
input.onPinPressed(TouchPin.P1, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    score += 1
    basic.showNumber(score)
})
basic.forever(function () {
	
})
