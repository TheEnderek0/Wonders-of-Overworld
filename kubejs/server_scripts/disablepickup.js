

let banned_items = ['pneumaticcraft:air_compressor']

onEvent('block.break', event => {
    if (banned_items.includes(event.block.id)) {
        event.cancel()
    }
})

onEvent('block.right_click', event => {
    if (banned_items.includes(event.block.id)) {
        event.cancel()
    }
})