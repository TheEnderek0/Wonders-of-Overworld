// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    let Remove = (id) => {
		event.remove({output: id})
	}

    event.shaped('bhc:green_heart', [
        " A ",
        "ABA",
        " A "
    ], {
        A: '#forge:ingots/terrasteel',
        B: 'bhc:yellow_heart'
    })

    event.shaped('bhc:blue_heart', [
        " A ",
        "ABA",
        " A "
    ], {
        A: 'bloodmagic:infusedslate',
        B: 'bhc:green_heart'
    })

    Remove('mininggadgets:mininggadget_simple')
    event.shaped('mininggadgets:mininggadget_simple', [
        'ABC',
        "DEF",
        "ABG"
    ], {
        A: '#forge:gems/diamond',
        B: 'kubejs:insulator',
        C: 'createaddition:modular_accumulator',
        D: 'industrialforegoing:laser_lens0',
        E: '#forge:glass',
        F: 'immersiveengineering:component_electronic',
        G: '#forge:rods/steel'
    })

    Remove('mininggadgets:mininggadget_fancy')
    event.shaped('mininggadgets:mininggadget_fancy', [
        'ABA',
        "DEF",
        "ABA"
    ], {
        A: 'industrialforegoing:plastic',
        B: '#forge:wires/lead',
        D: '#forge:glass',
        E: Item.of('mininggadgets:mininggadget_simple').ignoreNBT(),
        F: 'immersiveengineering:component_electronic_adv'
    })

    Remove('mininggadgets:mininggadget')
    event.shaped('mininggadgets:mininggadget', [
        'ABA',
        "DEF",
        "ABA"
    ], {
        A: '#forge:plates/steel',
        B: 'pneumaticcraft:printed_circuit_board',
        D: 'pneumaticcraft:drill_bit_netherite',
        E: Item.of('mininggadgets:mininggadget_fancy').ignoreNBT(),
        F: '#forge:ingots/tungsten'
    })

    event.replaceInput({output: ['buildinggadgets:gadget_building', 'buildinggadgets:gadget_exchanging', 'buildinggadgets:gadget_copy_paste', 'buildinggadgets:gadget_destruction']}, 'minecraft:lapis_lazuli', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'draconicevolution:potentiometer'}, 'draconicevolution:draconium_dust', 'minecraft:lever')
    
    event.shaped('6x tconstruct:rod_sand_cast',[
        "A A",
        "A A",
        "A A",
    ], {
        A: '#tconstruct:casts/single_use/blank'
    })

    event.shaped('4x tconstruct:plate_sand_cast',[
        " A ",
        "A A",
        " A ",
    ], {
        A: '#tconstruct:casts/single_use/blank'
    })

    event.shaped('4x tconstruct:gear_sand_cast',[
        "A A",
        "   ",
        "A A",
    ], {
        A: '#tconstruct:casts/single_use/blank'
    })

    Remove('minecraft:bedrock')

    event.replaceInput({output: [
        'mob_grinding_utils:saw_upgrade_arthropod', 
        'mob_grinding_utils:saw_upgrade_beheading', 
        'mob_grinding_utils:saw_upgrade_fire', 
        'mob_grinding_utils:saw_upgrade_looting', 
        'mob_grinding_utils:saw_upgrade_sharpness', 
        'mob_grinding_utils:saw_upgrade_smite']}, '#forge:nuggets/gold', 'mekanism:alloy_infused')

    event.replaceInput({output: 'mob_grinding_utils:mob_swab'}, '#mekanism:colorable/wool', 'mekanism:alloy_infused')

    event.recipes.createCompacting('minecraft:stone', '4x kubejs:processed_rock')
    event.recipes.createMixing(Fluid.of('minecraft:lava', 100), 'kubejs:processed_rock').heated()
    event.shapeless('minecraft:gravel', Item.of('kubejs:processed_rock', 4))

    Remove('mob_grinding_utils:jumbo_tank')

    event.shapeless('quark:limestone', 'create:limestone')
    event.shapeless('create:limestone', 'quark:limestone')
})