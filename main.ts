scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeScoreBy(-1)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile9`)
    tiles.setTilemap(tilemap`level2`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . 1 9 9 9 1 . . . . . . . 
        . . . . 1 9 9 9 1 . . . . . . . 
        . . . . 1 9 9 9 1 . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 . 1 2 1 . 1 . . . . . . 
        . . . f . 1 1 1 . f . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . b b b . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `, SpriteKind.Player)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . 1 9 9 9 1 . . . . . . . 
    . . . . 1 9 9 9 1 . . . . . . . 
    . . . . 1 9 9 9 1 . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . 1 . 1 2 1 . 1 . . . . . . 
    . . . f . 1 1 1 . f . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . . b b b . . . . . . . . 
    . . . . . b . b . . . . . . . . 
    . . . . . b . b . . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
mySprite.ay = 500
info.setLife(10)
info.setScore(0)
game.showLongText("THE LAST ASTRONAUT", DialogLayout.Bottom)
game.onUpdateInterval(5000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . 4 f . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
})
