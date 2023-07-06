//priority: -1

onEvent('item.tags', event => {
    event.add("forge:plates", 'kubejs:compressed_iron_plate')
    event.add("forge:plates/compressed_iron", 'kubejs:compressed_iron_plate')

    event.add('forge:dusts/arsenic',    'kubejs:crushed_arsenic')
    event.add('forge:dusts/tungsten',   'kubejs:crushed_tungsten')
    event.add('forge:ingots/arsenic',   'kubejs:arsenic_ingot')
    event.add('forge:ingots/tungsten',  'kubejs:tungsten_ingot')

    event.add('kubejs:crafting_station', 'tconstruct:crafting_station')
    event.add('kubejs:tinker_station', 'tconstruct:tinker_station')
    event.add('kubejs:part_builder', 'tconstruct:part_builder')
    event.add('kubejs:modifier_table', 'tconstruct:modifier_worktable')
    event.add('kubejs:tinkers_anvil', 'tconstruct:tinkers_anvil')
    event.add('kubejs:smeltery_controller', 'tconstruct:smeltery_controller')
    event.add('kubejs:drinkable', [
        'minecraft:glass_bottle',
        'toughasnails:purified_water_bottle',
        'toughasnails:dirty_water_canteen',
        'toughasnails:water_canteen',
        'toughasnails:purified_water_canteen'
    ])

    event.add('forge:rods', ['immersiveengineering:stick_steel', 'immersiveengineering:stick_iron'])

    let AddDrink = (id, thirst, hydration) => {
        event.add('toughasnails:drinks', id)
        event.add('toughasnails:thirst/' + thirst + '_thirst_drinks', id)
        event.add('toughasnails:hydration/' + hydration + '_hydration_drinks', id)
    }

    AddDrink('farmersrespite:green_tea', 7, 30)
    AddDrink('farmersrespite:yellow_tea', 7, 30)
    AddDrink('farmersrespite:black_tea', 7, 30)
    AddDrink('farmersrespite:rose_hip_tea', 7, 30)
    AddDrink('farmersrespite:dandelion_tea', 7, 30)
    AddDrink('farmersrespite:purulent_tea', 7, 30)
    AddDrink('farmersrespite:coffee', 8, 10)
    AddDrink('create:builders_tea', 10, 70)

    event.remove('forge:stone', '#pneumaticcraft:reinforced_stone')
    event.remove('minecraft:stone_bricks', '#pneumaticcraft:reinforced_stone_bricks')

})