//radio.onReceivedValueDeprecated(function (name, value) {
//    if (name == "A") {
//        arm = value
//    }
//    if (name == "R") {
//        roll = value
//    }
//    if (name == "T") {
//        throttle = value
//    }
//})
let throttle = 0
let roll = 0
let arm = 0
// let radioGroup = 7
// radio.setGroup(radioGroup)
// basic.showNumber(radioGroup)
if (arm) {
    while (arm) {
        basic.showIcon(IconNames.No)
    }
    basic.showIcon(IconNames.Yes)
}
basic.forever(function () {
    basic.showNumber(Math.round(throttle / 10))
})
basic.forever(function () {
    if (arm) {
        hoverbit.start_cushion_simple()
        hoverbit.forward_power_simple(throttle)
    } else {
        hoverbit.stop_all_motors()
    }
    hoverbit.direction_simple(roll)
})
