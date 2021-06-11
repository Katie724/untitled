namespace SpriteKind {
    export const Up = SpriteKind.create()
    export const Down = SpriteKind.create()
    export const Left = SpriteKind.create()
    export const right1 = SpriteKind.create()
    export const right = SpriteKind.create()
    export const bye = SpriteKind.create()
}
function Up_Arrows () {
    pause(500)
    up1.setVelocity(0, 150)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (up.overlapsWith(up1)) {
        info.changeScoreBy(10)
        up1.destroy()
        up.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ............11111111............
            ............11111111............
            ............11111111............
            .........11111111111111.........
            .........11111111111111.........
            .........11111111111111.........
            ......11111111111111111111......
            ......11111111111111111111......
            ......11111111111111111111......
            ...11111111111111111111111111...
            ...11111111111111111111111111...
            ...11111111111111111111111111...
            ...11111111111111111111111111...
            ...11111111111111111111111111...
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ................................
            ................................
            ................................
            ................................
            `)
        pause(200)
        up.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            ..........cccccccccccc..........
            ..........cccccccccccc..........
            ..........cccccccccccc..........
            .......cccccccccccccccccc.......
            .......cccccccccccccccccc.......
            .......cccccccccccccccccc.......
            ....cccccccccccccccccccccccc....
            ....cccccccccccccccccccccccc....
            ....cccccccccccccccccccccccc....
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
    } else {
        info.changeLifeBy(-1)
        up.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ............cccccccc............
            ............cccccccc............
            ............cccccccc............
            .........cccccccccccccc.........
            .........cccccccccccccc.........
            .........cccccccccccccc.........
            ......cccccccccccccccccccc......
            ......cccccccccccccccccccc......
            ......cccccccccccccccccccc......
            ...cccccccccccccccccccccccccc...
            ...cccccccccccccccccccccccccc...
            ...cccccccccccccccccccccccccc...
            ...cccccccccccccccccccccccccc...
            ...cccccccccccccccccccccccccc...
            ............cccccccc............
            ............cccccccc............
            ............cccccccc............
            ............cccccccc............
            ............cccccccc............
            ............cccccccc............
            ............cccccccc............
            ............cccccccc............
            ............cccccccc............
            ............cccccccc............
            ................................
            ................................
            ................................
            ................................
            `)
        pause(200)
        up.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            ..........cccccccccccc..........
            ..........cccccccccccc..........
            ..........cccccccccccc..........
            .......cccccccccccccccccc.......
            .......cccccccccccccccccc.......
            .......cccccccccccccccccc.......
            ....cccccccccccccccccccccccc....
            ....cccccccccccccccccccccccc....
            ....cccccccccccccccccccccccc....
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            .............cccccc.............
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
    }
})
function Down_Arrows () {
    pause(500)
    down1.setVelocity(0, 150)
}
sprites.onOverlap(SpriteKind.Left, SpriteKind.bye, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    left1.destroy()
})
sprites.onOverlap(SpriteKind.Up, SpriteKind.bye, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    up1.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Left2.overlapsWith(left1)) {
        info.changeScoreBy(10)
        left1.destroy()
        Left2.setImage(img`
            ................................
            ................................
            ................................
            .............11111..............
            .............11111..............
            .............11111..............
            ..........11111111..............
            ..........11111111..............
            ..........11111111..............
            .......11111111111..............
            .......11111111111..............
            .......11111111111..............
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            .......11111111111..............
            .......11111111111..............
            .......11111111111..............
            ..........11111111..............
            ..........11111111..............
            ..........11111111..............
            .............11111..............
            .............11111..............
            .............11111..............
            ................................
            ................................
            ................................
            `)
        pause(200)
        Left2.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ..............bbb...............
            ..............bbb...............
            ..............bbb...............
            ...........bbbbbb...............
            ...........bbbbbb...............
            ...........bbbbbb...............
            ........bbbbbbbbb...............
            ........bbbbbbbbb...............
            ........bbbbbbbbb...............
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            ........bbbbbbbbb...............
            ........bbbbbbbbb...............
            ........bbbbbbbbb...............
            ...........bbbbbb...............
            ...........bbbbbb...............
            ...........bbbbbb...............
            ..............bbb...............
            ..............bbb...............
            ..............bbb...............
            ................................
            ................................
            ................................
            ................................
            `)
    } else {
        info.changeLifeBy(-1)
        Left2.setImage(img`
            ................................
            ................................
            ................................
            .............bbbbb..............
            .............bbbbb..............
            .............bbbbb..............
            ..........bbbbbbbb..............
            ..........bbbbbbbb..............
            ..........bbbbbbbb..............
            .......bbbbbbbbbbb..............
            .......bbbbbbbbbbb..............
            .......bbbbbbbbbbb..............
            ....bbbbbbbbbbbbbbbbbbbbbbbb....
            ....bbbbbbbbbbbbbbbbbbbbbbbb....
            ....bbbbbbbbbbbbbbbbbbbbbbbb....
            ....bbbbbbbbbbbbbbbbbbbbbbbb....
            ....bbbbbbbbbbbbbbbbbbbbbbbb....
            ....bbbbbbbbbbbbbbbbbbbbbbbb....
            ....bbbbbbbbbbbbbbbbbbbbbbbb....
            ....bbbbbbbbbbbbbbbbbbbbbbbb....
            .......bbbbbbbbbbb..............
            .......bbbbbbbbbbb..............
            .......bbbbbbbbbbb..............
            ..........bbbbbbbb..............
            ..........bbbbbbbb..............
            ..........bbbbbbbb..............
            .............bbbbb..............
            .............bbbbb..............
            .............bbbbb..............
            ................................
            ................................
            ................................
            `)
        pause(200)
        Left2.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ..............bbb...............
            ..............bbb...............
            ..............bbb...............
            ...........bbbbbb...............
            ...........bbbbbb...............
            ...........bbbbbb...............
            ........bbbbbbbbb...............
            ........bbbbbbbbb...............
            ........bbbbbbbbb...............
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            ........bbbbbbbbb...............
            ........bbbbbbbbb...............
            ........bbbbbbbbb...............
            ...........bbbbbb...............
            ...........bbbbbb...............
            ...........bbbbbb...............
            ..............bbb...............
            ..............bbb...............
            ..............bbb...............
            ................................
            ................................
            ................................
            ................................
            `)
    }
})
sprites.onOverlap(SpriteKind.right, SpriteKind.bye, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    right12.destroy()
})
function Music () {
    music.setTempo(150)
    music.playTone(349, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Double))
    pause(100)
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    pause(100)
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    pause(100)
}
function Right_Arrows () {
    pause(500)
    right12.setVelocity(0, 150)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (right12.overlapsWith(right2)) {
        info.changeScoreBy(10)
        right12.destroy()
        right2.setImage(img`
            ................................
            ................................
            ................................
            ..............11111.............
            ..............11111.............
            ..............11111.............
            ..............11111111..........
            ..............11111111..........
            ..............11111111..........
            ..............11111111111.......
            ..............11111111111.......
            ..............11111111111.......
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ....111111111111111111111111....
            ..............11111111111.......
            ..............11111111111.......
            ..............11111111111.......
            ..............11111111..........
            ..............11111111..........
            ..............11111111..........
            ..............11111.............
            ..............11111.............
            ..............11111.............
            ................................
            ................................
            ................................
            `)
        pause(200)
        right2.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ...............ddd..............
            ...............ddd..............
            ...............ddd..............
            ...............dddddd...........
            ...............dddddd...........
            ...............dddddd...........
            ...............ddddddddd........
            ...............ddddddddd........
            ...............ddddddddd........
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            ...............ddddddddd........
            ...............ddddddddd........
            ...............ddddddddd........
            ...............dddddd...........
            ...............dddddd...........
            ...............dddddd...........
            ...............ddd..............
            ...............ddd..............
            ...............ddd..............
            ................................
            ................................
            ................................
            ................................
            `)
    } else {
        info.changeLifeBy(-1)
        right2.setImage(img`
            ................................
            ................................
            ................................
            ..............ddddd.............
            ..............ddddd.............
            ..............ddddd.............
            ..............dddddddd..........
            ..............dddddddd..........
            ..............dddddddd..........
            ..............ddddddddddd.......
            ..............ddddddddddd.......
            ..............ddddddddddd.......
            ....dddddddddddddddddddddddd....
            ....dddddddddddddddddddddddd....
            ....dddddddddddddddddddddddd....
            ....dddddddddddddddddddddddd....
            ....dddddddddddddddddddddddd....
            ....dddddddddddddddddddddddd....
            ....dddddddddddddddddddddddd....
            ....dddddddddddddddddddddddd....
            ..............ddddddddddd.......
            ..............ddddddddddd.......
            ..............ddddddddddd.......
            ..............dddddddd..........
            ..............dddddddd..........
            ..............dddddddd..........
            ..............ddddd.............
            ..............ddddd.............
            ..............ddddd.............
            ................................
            ................................
            ................................
            `)
        pause(200)
        right2.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ...............ddd..............
            ...............ddd..............
            ...............ddd..............
            ...............dddddd...........
            ...............dddddd...........
            ...............dddddd...........
            ...............ddddddddd........
            ...............ddddddddd........
            ...............ddddddddd........
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            .....dddddddddddddddddddddd.....
            ...............ddddddddd........
            ...............ddddddddd........
            ...............ddddddddd........
            ...............dddddd...........
            ...............dddddd...........
            ...............dddddd...........
            ...............ddd..............
            ...............ddd..............
            ...............ddd..............
            ................................
            ................................
            ................................
            ................................
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (down.overlapsWith(down1)) {
        info.changeScoreBy(10)
        down1.destroy()
        down.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ............11111111............
            ...11111111111111111111111111...
            ...11111111111111111111111111...
            ...11111111111111111111111111...
            ...11111111111111111111111111...
            ...11111111111111111111111111...
            ......11111111111111111111......
            ......11111111111111111111......
            ......11111111111111111111......
            .........11111111111111.........
            .........11111111111111.........
            .........11111111111111.........
            ............11111111............
            ............11111111............
            ............11111111............
            ................................
            ................................
            ................................
            ................................
            `)
        pause(200)
        down.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            ....eeeeeeeeeeeeeeeeeeeeeeee....
            ....eeeeeeeeeeeeeeeeeeeeeeee....
            ....eeeeeeeeeeeeeeeeeeeeeeee....
            .......eeeeeeeeeeeeeeeeee.......
            .......eeeeeeeeeeeeeeeeee.......
            .......eeeeeeeeeeeeeeeeee.......
            ..........eeeeeeeeeeee..........
            ..........eeeeeeeeeeee..........
            ..........eeeeeeeeeeee..........
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
    } else {
        info.changeLifeBy(-1)
        down.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ............eeeeeeee............
            ............eeeeeeee............
            ............eeeeeeee............
            ............eeeeeeee............
            ............eeeeeeee............
            ............eeeeeeee............
            ............eeeeeeee............
            ............eeeeeeee............
            ............eeeeeeee............
            ............eeeeeeee............
            ...eeeeeeeeeeeeeeeeeeeeeeeeee...
            ...eeeeeeeeeeeeeeeeeeeeeeeeee...
            ...eeeeeeeeeeeeeeeeeeeeeeeeee...
            ...eeeeeeeeeeeeeeeeeeeeeeeeee...
            ...eeeeeeeeeeeeeeeeeeeeeeeeee...
            ......eeeeeeeeeeeeeeeeeeee......
            ......eeeeeeeeeeeeeeeeeeee......
            ......eeeeeeeeeeeeeeeeeeee......
            .........eeeeeeeeeeeeee.........
            .........eeeeeeeeeeeeee.........
            .........eeeeeeeeeeeeee.........
            ............eeeeeeee............
            ............eeeeeeee............
            ............eeeeeeee............
            ................................
            ................................
            ................................
            ................................
            `)
        pause(200)
        down.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            ....eeeeeeeeeeeeeeeeeeeeeeee....
            ....eeeeeeeeeeeeeeeeeeeeeeee....
            ....eeeeeeeeeeeeeeeeeeeeeeee....
            .......eeeeeeeeeeeeeeeeee.......
            .......eeeeeeeeeeeeeeeeee.......
            .......eeeeeeeeeeeeeeeeee.......
            ..........eeeeeeeeeeee..........
            ..........eeeeeeeeeeee..........
            ..........eeeeeeeeeeee..........
            .............eeeeee.............
            .............eeeeee.............
            .............eeeeee.............
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
    }
})
function Left_Arrows () {
    left1.setVelocity(0, 150)
}
function Music_1 () {
	
}
sprites.onOverlap(SpriteKind.Down, SpriteKind.bye, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    down1.destroy()
})
let right12: Sprite = null
let up1: Sprite = null
let down1: Sprite = null
let left1: Sprite = null
let down: Sprite = null
let right2: Sprite = null
let up: Sprite = null
let Left2: Sprite = null
scene.setBackgroundColor(15)
info.setLife(10)
Left2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ..............bbb...............
    ..............bbb...............
    ..............bbb...............
    ...........bbbbbb...............
    ...........bbbbbb...............
    ...........bbbbbb...............
    ........bbbbbbbbb...............
    ........bbbbbbbbb...............
    ........bbbbbbbbb...............
    .....bbbbbbbbbbbbbbbbbbbbbb.....
    .....bbbbbbbbbbbbbbbbbbbbbb.....
    .....bbbbbbbbbbbbbbbbbbbbbb.....
    .....bbbbbbbbbbbbbbbbbbbbbb.....
    .....bbbbbbbbbbbbbbbbbbbbbb.....
    .....bbbbbbbbbbbbbbbbbbbbbb.....
    ........bbbbbbbbb...............
    ........bbbbbbbbb...............
    ........bbbbbbbbb...............
    ...........bbbbbb...............
    ...........bbbbbb...............
    ...........bbbbbb...............
    ..............bbb...............
    ..............bbb...............
    ..............bbb...............
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
up = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    .............cccccc.............
    .............cccccc.............
    .............cccccc.............
    ..........cccccccccccc..........
    ..........cccccccccccc..........
    ..........cccccccccccc..........
    .......cccccccccccccccccc.......
    .......cccccccccccccccccc.......
    .......cccccccccccccccccc.......
    ....cccccccccccccccccccccccc....
    ....cccccccccccccccccccccccc....
    ....cccccccccccccccccccccccc....
    .............cccccc.............
    .............cccccc.............
    .............cccccc.............
    .............cccccc.............
    .............cccccc.............
    .............cccccc.............
    .............cccccc.............
    .............cccccc.............
    .............cccccc.............
    .............cccccc.............
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
right2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ...............ddd..............
    ...............ddd..............
    ...............ddd..............
    ...............dddddd...........
    ...............dddddd...........
    ...............dddddd...........
    ...............ddddddddd........
    ...............ddddddddd........
    ...............ddddddddd........
    .....dddddddddddddddddddddd.....
    .....dddddddddddddddddddddd.....
    .....dddddddddddddddddddddd.....
    .....dddddddddddddddddddddd.....
    .....dddddddddddddddddddddd.....
    .....dddddddddddddddddddddd.....
    ...............ddddddddd........
    ...............ddddddddd........
    ...............ddddddddd........
    ...............dddddd...........
    ...............dddddd...........
    ...............dddddd...........
    ...............ddd..............
    ...............ddd..............
    ...............ddd..............
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
down = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    .............eeeeee.............
    .............eeeeee.............
    .............eeeeee.............
    .............eeeeee.............
    .............eeeeee.............
    .............eeeeee.............
    .............eeeeee.............
    .............eeeeee.............
    .............eeeeee.............
    .............eeeeee.............
    ....eeeeeeeeeeeeeeeeeeeeeeee....
    ....eeeeeeeeeeeeeeeeeeeeeeee....
    ....eeeeeeeeeeeeeeeeeeeeeeee....
    .......eeeeeeeeeeeeeeeeee.......
    .......eeeeeeeeeeeeeeeeee.......
    .......eeeeeeeeeeeeeeeeee.......
    ..........eeeeeeeeeeee..........
    ..........eeeeeeeeeeee..........
    ..........eeeeeeeeeeee..........
    .............eeeeee.............
    .............eeeeee.............
    .............eeeeee.............
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
left1 = sprites.create(img`
    ................................
    ..............333333............
    ..............333333............
    ..............333333............
    ...........333222333............
    ...........333222333............
    ...........333222333............
    ........333222222333............
    ........333222222333............
    ........333222222333............
    .....3332222222223333333333333..
    .....3332222222223333333333333..
    .....3332222222223333333333333..
    ..3332222222222222222222222333..
    ..3332222222222222222222222333..
    ..3332222222222222222222222333..
    ..3332222222222222222222222333..
    ..3332222222222222222222222333..
    ..3332222222222222222222222333..
    .....3332222222223333333333333..
    .....3332222222223333333333333..
    .....3332222222223333333333333..
    ........333222222333............
    ........333222222333............
    ........333222222333............
    ...........333222333............
    ...........333222333............
    ...........333222333............
    ..............333333............
    ..............333333............
    ..............333333............
    ................................
    `, SpriteKind.Left)
down1 = sprites.create(img`
    ................................
    ................................
    ..........aaaaaaaaaaaa..........
    ..........aaaaaaaaaaaa..........
    ..........aaaaaaaaaaaa..........
    ..........aaa999999aaa..........
    ..........aaa999999aaa..........
    ..........aaa999999aaa..........
    ..........aaa999999aaa..........
    ..........aaa999999aaa..........
    ..........aaa999999aaa..........
    ..........aaa999999aaa..........
    .aaaaaaaaaaaa999999aaaaaaaaaaaa.
    .aaaaaaaaaaaa999999aaaaaaaaaaaa.
    .aaaaaaaaaaaa999999aaaaaaaaaaaa.
    .aaa999999999999999999999999aaa.
    .aaa999999999999999999999999aaa.
    .aaa999999999999999999999999aaa.
    ....aaa999999999999999999aaa....
    ....aaa999999999999999999aaa....
    ....aaa999999999999999999aaa....
    .......aaa999999999999aaa.......
    .......aaa999999999999aaa.......
    .......aaa999999999999aaa.......
    ..........aaa999999aaa..........
    ..........aaa999999aaa..........
    ..........aaa999999aaa..........
    .............aaaaaa.............
    .............aaaaaa.............
    .............aaaaaa.............
    ................................
    ................................
    `, SpriteKind.Down)
up1 = sprites.create(img`
    ................................
    ................................
    .............444444.............
    .............444444.............
    .............444444.............
    ..........444555555444..........
    ..........444555555444..........
    ..........444555555444..........
    .......444555555555555444.......
    .......444555555555555444.......
    .......444555555555555444.......
    ....444555555555555555555444....
    ....444555555555555555555444....
    ....444555555555555555555444....
    .444555555555555555555555555444.
    .444555555555555555555555555444.
    .444555555555555555555555555444.
    .444444444444555555444444444444.
    .444444444444555555444444444444.
    .444444444444555555444444444444.
    ..........444555555444..........
    ..........444555555444..........
    ..........444555555444..........
    ..........444555555444..........
    ..........444555555444..........
    ..........444555555444..........
    ..........444555555444..........
    ..........444444444444..........
    ..........444444444444..........
    ..........444444444444..........
    ................................
    ................................
    `, SpriteKind.Up)
right12 = sprites.create(img`
    ................................
    ............888888..............
    ............888888..............
    ............888888..............
    ............888777888...........
    ............888777888...........
    ............888777888...........
    ............888777777888........
    ............888777777888........
    ............888777777888........
    ..8888888888888777777777888.....
    ..8888888888888777777777888.....
    ..8888888888888777777777888.....
    ..8887777777777777777777777888..
    ..8887777777777777777777777888..
    ..8887777777777777777777777888..
    ..8887777777777777777777777888..
    ..8887777777777777777777777888..
    ..8887777777777777777777777888..
    ..8888888888888777777777888.....
    ..8888888888888777777777888.....
    ..8888888888888777777777888.....
    ............888777777888........
    ............888777777888........
    ............888777777888........
    ............888777888...........
    ............888777888...........
    ............888777888...........
    ............888888..............
    ............888888..............
    ............888888..............
    ................................
    `, SpriteKind.right)
let mySprite = sprites.create(img`
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.bye)
mySprite.setPosition(75, 150)
Left2.setPosition(32, 90)
up.setPosition(64, 90)
right2.setPosition(96, 90)
down.setPosition(128, 90)
left1.setPosition(32, -15)
up1.setPosition(64, -15)
right12.setPosition(96, -15)
down1.setPosition(128, -15)
pause(2000)
Left_Arrows()
Up_Arrows()
Right_Arrows()
Down_Arrows()
Music()
