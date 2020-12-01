def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    for index in range(4):
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(100)
        basic.show_icon(IconNames.TARGET)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.show_icon(IconNames.SAD)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
