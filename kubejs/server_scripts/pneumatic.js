//priority: 0
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.remove({output: 'pneumaticcraft:cannon_barrel'})
    event.remove({output:'pneumaticcraft:manual_compressor'})
    event.remove({output:'pneumaticcraft:air_compressor'})
    event.remove({output:'pneumaticcraft:liquid_compressor'})
    event.remove({output: 'pneumaticcraft:printed_circuit_board'})
    event.remove({output: 'pneumaticcraft:logistics_core', type: "minecraft:crafting_shaped"})
    event.remove({output: ['compressedcreativity:rotational_compressor', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_glass'], input: 'pneumaticcraft:reinforced_bricks' })
    event.remove({output: 'pneumaticcraft:pressure_chamber_valve', input: 'pneumaticcraft:ingot_iron_compressed'})
    event.remove({output: 'pneumaticcraft:pneumatic_dynamo'})
    event.remove({output: 'pneumaticcraft:amadron_tablet'})
    event.remove({output: 'pneumaticcraft:advanced_liquid_compressor'})
    event.remove({output: 'pneumaticcraft:advanced_air_compressor'})
    event.remove({output: 'pneumaticcraft:thermal_compressor'})
    event.remove({output: 'pneumaticcraft:vortex_tube'})
    event.remove({output: 'pneumaticcraft:gas_lift'})
    event.remove({output: 'pneumaticcraft:refinery'})
    event.remove({output: 'pneumaticcraft:refinery_output'})

    event.shaped('pneumaticcraft:refinery_output', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: '#forge:plates/compressed_iron',
        B: 'create:fluid_pipe',
        C: 'minecraft:bucket',
        D: '#forge:gears/steel'
    })

    event.recipes.createMechanicalCrafting('pneumaticcraft:refinery', [
		"ABA",
		"DCD",
		"AEA"
	], {
		A: 'kubejs:insulator',
		B: 'create:fluid_pipe',
		C: 'compressedcreativity:compressed_iron_casing',
        D: 'create:electron_tube',
        E: 'create:mechanical_pump'
	})

    event.shaped('pneumaticcraft:gas_lift', [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A:  '#forge:plates/compressed_iron',
        B:  Item.of('minecraft:diamond_pickaxe', '{Damage:0}'),
        C:  'pneumaticcraft:compressed_iron_gear',
        D:  'pneumaticcraft:pressure_tube',
        E:  'create:mechanical_pump'
    })

    event.remove({output: 'pneumaticcraft:heat_frame'})
    event.shaped('pneumaticcraft:heat_frame', [
        "ABA",
        "B B",
        "ABA"
    ], {
        A: '#forge:plates/compressed_iron',
        B: 'kubejs:insulator'
    })

    event.shaped('pneumaticcraft:vortex_tube', [
        "ABA",
        "CDE",
        "ABA"
    ], {
        A: '#forge:plates/compressed_iron',
        B: '#forge:plates/copper',
        C: 'pneumaticcraft:pressure_tube',
        D: 'create:propeller',
        E: 'kubejs:insulator'
    })

    event.shaped('pneumaticcraft:advanced_air_compressor', [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: '#forge:plates/compressed_iron',
        B: 'pneumaticcraft:printed_circuit_board',
        C: 'pneumaticcraft:advanced_pressure_tube',
        D: 'compressedcreativity:rotational_compressor',
        E: '#forge:gears/invar'
    })

    event.shaped('pneumaticcraft:advanced_liquid_compressor', [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: '#forge:plates/compressed_iron',
        B: 'pneumaticcraft:printed_circuit_board',
        C: 'pneumaticcraft:advanced_pressure_tube',
        D: Item.of('#pneumaticcraft:fluid_tanks').ignoreNBT(),
        E: '#forge:gears/invar'
    })

    event.shaped('pneumaticcraft:thermal_compressor', [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: '#forge:plates/compressed_iron',
        B: 'pneumaticcraft:printed_circuit_board',
        C: 'pneumaticcraft:reinforced_pressure_tube',
        D: 'pneumaticcraft:vortex_tube',
        E: '#forge:gears/invar'
    })
    
    event.replaceInput({input: 'pneumaticcraft:logistics_core'}, "minecraft:stick", "#forge:plates/iron")

    event.shaped('pneumaticcraft:cannon_barrel', [
        "A A",
        "A A",
        "ABA"
    ], {
        A: "kubejs:compressed_iron_plate",
        B: 'pneumaticcraft:pressure_tube'
    })

    event.recipes.create.pressing('kubejs:compressed_iron_plate', 'pneumaticcraft:ingot_iron_compressed')
    event.recipes.immersiveengineeringMetalPress('kubejs:compressed_iron_plate', 'pneumaticcraft:ingot_iron_compressed', 'immersiveengineering:mold_plate')
    event.recipes.thermal.press('kubejs:compressed_iron_plate', 'pneumaticcraft:ingot_iron_compressed')

    event.recipes.create.cutting('pneumaticcraft:plastic', 'industrialforegoing:plastic')

    let transition = "kubejs:incomplete_blade"
    event.recipes.create.sequencedAssembly([
		Item.of('pneumaticcraft:turbine_blade').withChance(80.0),
		Item.of('kubejs:compressed_iron_plate').withChance(20.0)
	], 'kubejs:compressed_iron_plate', [
        event.recipes.createCutting(transition, [transition]), 
		event.recipes.createDeploying(transition, [transition, '#forge:plates/copper']),
        event.recipes.createPressing(transition, [transition])
	]).transitionalItem(transition).loops(2)

    let transition2 = "kubejs:incomplete_transistor"
    event.recipes.create.sequencedAssembly([
		Item.of('pneumaticcraft:transistor').withChance(70.0),
		Item.of('refinedstorage:silicon').withChance(10.0),
        Item.of('minecraft:redstone').withChance(10.0),
        Item.of('pneumaticcraft:plastic').withChance(10.0)
	], 'pneumaticcraft:plastic', [
        event.recipes.createCutting(transition2, [transition2]), 
		event.recipes.createDeploying(transition2, [transition2, '#forge:silicon']),
        event.recipes.createDeploying(transition2, [transition2, '#forge:dusts/redstone']),
        event.recipes.createPressing(transition2, [transition2]),
        event.recipes.createDeploying(transition2, [transition2, '#forge:nuggets/gold']),
        event.recipes.createDeploying(transition2, [transition2, '#forge:nuggets/copper']),
        event.recipes.createPressing(transition2, [transition2])
	]).transitionalItem(transition2).loops(4)

    let transition3 = "kubejs:incomplete_capacitor"
    event.recipes.create.sequencedAssembly([
		Item.of('kubejs:unfin_cap').withChance(70.0),
		Item.of('immersiveengineering:plate_electrum').withChance(10.0),
        Item.of('pneumaticcraft:plastic').withChance(20.0)
	], '#forge:rods/iron', [
        event.recipes.createCutting(transition3, [transition3]), 
		event.recipes.createDeploying(transition3, [transition3, '#forge:plates/electrum']),
        event.recipes.createDeploying(transition3, [transition3, '#forge:slimeballs']),
        event.recipes.createDeploying(transition3, [transition3, 'pneumaticcraft:plastic']),
        event.recipes.createPressing(transition3, [transition3])
	]).transitionalItem(transition3).loops(2)

    let transition4 = "kubejs:incomplete_pcb"
    event.recipes.create.sequencedAssembly([
		Item.of('pneumaticcraft:printed_circuit_board').withChance(100.0)
	], 'pneumaticcraft:unassembled_pcb', [
		event.recipes.createDeploying(transition4, [transition4, 'pneumaticcraft:transistor']),
        event.recipes.createDeploying(transition4, [transition4, 'createaddition:capacitor']),
        event.recipes.createDeploying(transition4, [transition4, 'pneumaticcraft:capacitor']),
        event.recipes.createDeploying(transition4, [transition4, 'immersiveengineering:wire_copper']),
        event.recipes.createPressing(transition4, [transition4])
	]).transitionalItem(transition4).loops(2)

    let transition5 = "kubejs:incomplete_blueprint"
    event.recipes.create.sequencedAssembly([
		Item.of('pneumaticcraft:pcb_blueprint').withChance(10.0),
        Item.of("minecraft:paper").withChance(90.0)
	], 'minecraft:paper', [
		event.recipes.createDeploying(transition5, [transition5, '#forge:dyes/blue']),
        event.recipes.createPressing(transition5, [transition5])
	]).transitionalItem(transition5).loops(4)

    let transition6 = "kubejs:incomplete_laser_m"
    event.recipes.create.sequencedAssembly([
		Item.of('pneumaticcraft:assembly_program_laser').withChance(50.0),
        Item.of('pneumaticcraft:plastic').withChance(50.0)
	], 'pneumaticcraft:plastic', [
		event.recipes.createDeploying(transition6, [transition6, 'createaddition:capacitor']),
        event.recipes.createDeploying(transition6, [transition6, '#forge:dusts/redstone']),
        event.recipes.createCutting(transition6, [transition6])
	]).transitionalItem(transition6).loops(3)

    let transition7 = "kubejs:incomplete_drill_m"
    event.recipes.create.sequencedAssembly([
		Item.of('pneumaticcraft:assembly_program_drill').withChance(50.0),
        Item.of('pneumaticcraft:plastic').withChance(50.0)
	], 'pneumaticcraft:plastic', [
		event.recipes.createDeploying(transition7, [transition7, 'pneumaticcraft:transistor']),
        event.recipes.createDeploying(transition7, [transition7, '#forge:dusts/redstone']),
        event.recipes.createCutting(transition7, [transition7])
	]).transitionalItem(transition7).loops(3)

    event.shaped(Item.of('pneumaticcraft:logistics_core', 2), [
        " A ",
        "ABA",
        " A "
    ], {
        A: '#forge:dusts/redstone',
        B: 'pneumaticcraft:printed_circuit_board'
    })

    event.shaped('4x pneumaticcraft:pressure_chamber_wall', [
        "AAA",
        "A A",
        "AAA"
    ], {
        A: 'kubejs:compressed_iron_plate'
    })

    event.shaped('compressedcreativity:rotational_compressor', [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: 'kubejs:compressed_iron_plate',
        B: 'create:propeller',
        C: 'pneumaticcraft:pressure_tube',
        D: 'create:brass_casing',
        E: '#forge:gears/compressed_iron',
        F: 'create:shaft'
    })

    event.remove({output: 'pneumaticcraft:flux_compressor'})
    event.shaped('pneumaticcraft:flux_compressor', [
        "ABC",
        "DEF",
        "AGC"
    ], {
        A: 'pneumaticcraft:printed_circuit_board',
        B: 'immersiveengineering:wirecoil_steel',
        C: 'pneumaticcraft:ingot_iron_compressed',
        D: 'createaddition:electric_motor',
        E: 'industrialforegoing:machine_frame_advanced',
        F: 'compressedcreativity:rotational_compressor',
        G: 'minecraft:redstone_block'
    })
})