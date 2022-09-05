bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
})
bluetooth.onBluetoothDisconnected(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.No)
})
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showArrow(ArrowNames.North)
})
devices.onGamepadButton(MesDpadButtonInfo._2Down, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.No)
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.No)
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    if (Light == 0) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        Light = 1
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
        Light = 0
    }
})
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showArrow(ArrowNames.North)
})
let Light = 0
basic.showIcon(IconNames.No)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.InBackground)
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
pins.digitalWritePin(DigitalPin.P3, 1)
pins.digitalWritePin(DigitalPin.P4, 1)
pins.digitalWritePin(DigitalPin.P5, 0)
