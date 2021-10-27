let Tenperatura = 0
music.setVolume(37)
basic.forever(function () {
    Tenperatura = input.temperature()
    basic.showNumber(input.temperature())
    if (Tenperatura < 30) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (Tenperatura > 30) {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
    if (Tenperatura < 30) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
    if (Tenperatura > 30) {
        music.playTone(740, music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
    }
})
