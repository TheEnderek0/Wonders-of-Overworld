// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.remove({output: 'ironfurnaces:augment_generator'})
    event.remove({output: 'immersiveengineering:dynamo'})
    event.remove({output: 'immersiveengineering:electron_tube'})
	event.remove({output: 'immersiveengineering:component_electronic'})

	event.remove({type: "immersiveengineering:blast_furnace"})

	event.replaceInput({output: 'immersiveengineering:blastbrick_reinforced'}, 'immersiveengineering:plate_steel', "kubejs:compressed_iron_plate")

	let Remove = (id) => {
		event.remove({output: id})
	}

	event.replaceInput({output: 'immersiveengineering:conveyor_basic'}, "#forge:ingots/iron", "#forge:ingots/steel")
	event.replaceInput({output: 'immersiveengineering:cloche'}, 'immersiveengineering:component_iron', 'immersiveengineering:component_electronic')


	Remove(['immersiveengineering:component_iron', 'immersiveengineering:component_steel'])

	event.recipes.immersiveengineeringMetalPress('kubejs:insulator', 'thermal:cured_rubber', 'immersiveengineering:mold_plate')
	event.recipes.immersiveengineeringMetalPress('thermal:diamond_gear', '4x minecraft:diamond', 'immersiveengineering:mold_gear')
	event.recipes.immersiveengineeringCrusher('kubejs:crushed_arsenic', 	'kubejs:arsenic_ingot')
	event.recipes.immersiveengineeringCrusher('kubejs:crushed_tungsten', 	'kubejs:tungsten_ingot')

	event.recipes.immersiveengineeringArcFurnace(['kubejs:tungsten_ingot'], 'kubejs:crushed_tungsten')
	event.recipes.immersiveengineeringArcFurnace(['kubejs:arsenic_ingot'], 'kubejs:crushed_arsenic')
	event.custom({
		type: "immersiveengineering:crusher",
		secondaries: [{chance: 0.05, output: {item: 'kubejs:crushed_arsenic'}}],
		input: 
		{
			tag: 'forge:diorite'
		},
		result: 
		{
			item: 'kubejs:processed_rock'
		},
		energy: 4096

	})

	event.custom({
		type: "immersiveengineering:crusher",
		secondaries: [{chance: 0.05, output: {item: 'kubejs:crushed_tungsten'}}],
		input: 
		{
			tag: 'forge:granite'
		},
		result: 
		{
			item: 'kubejs:processed_rock'
		},
		energy: 4096

	})

	let t_core_1 = 'kubejs:incomplete_iron_comp'
	event.recipes.create.sequencedAssembly([
		Item.of('immersiveengineering:component_iron').withChance(100.0)
	], '#forge:ingots/invar', [
		event.recipes.createDeploying(t_core_1, [t_core_1, '#forge:plates/iron']),
		event.recipes.createFilling(t_core_1, [t_core_1, Fluid.of("tconstruct:molten_copper", 45)]),
		event.recipes.createPressing(t_core_1, [t_core_1])
	]).transitionalItem(t_core_1).loops(4)

	let t_core_2 = 'kubejs:incomplete_steel_comp'
	event.recipes.create.sequencedAssembly([
		Item.of('immersiveengineering:component_steel').withChance(100.0)
	], '#forge:ingots/invar', [
		event.recipes.createDeploying(t_core_2, [t_core_2, '#forge:plates/steel']),
		event.recipes.createFilling(t_core_2, [t_core_2, Fluid.of("tconstruct:molten_copper", 45)]),
		event.recipes.createPressing(t_core_2, [t_core_2])
	]).transitionalItem(t_core_2).loops(4)

	Remove('immersiveengineering:component_electronic_adv')
	Remove([
		'immersiveengineering:light_engineering',
		'immersiveengineering:heavy_engineering',
		'immersiveengineering:rs_engineering'
	])

	event.recipes.create.mechanicalCrafting('2x immersiveengineering:light_engineering', [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: '#forge:plates/steel',
		B: 'immersiveengineering:component_iron',
		C: '#immersiveengineering:scaffoldings/steel'
	})

	event.recipes.create.mechanicalCrafting('2x immersiveengineering:heavy_engineering', [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: '#forge:plates/compressed_iron',
		B: 'immersiveengineering:component_steel',
		C: '#immersiveengineering:scaffoldings/steel'
	})

	event.recipes.create.mechanicalCrafting('2x immersiveengineering:rs_engineering', [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: '#forge:plates/steel',
		B: 'create:electron_tube',
		C: '#immersiveengineering:scaffoldings/steel'
	})

	event.custom({
		type: "immersiveengineering:blueprint",
		inputs: [
			{tag:"forge:treated_wood_slab"},
    		{tag:"forge:gems/quartz"},
    		{item:'pneumaticcraft:capacitor'},
    		{tag:"forge:wires/electrum"}
		],
		category: "components",
		result: {
			item:"immersiveengineering:component_electronic"
		}
	})
	event.custom({
		type: "immersiveengineering:blueprint",
		inputs: [
			{item: 'immersiveengineering:plate_duroplast'},
			{base_ingredient: {item: 'pneumaticcraft:transistor'}, count:2},
			{item: 'immersiveengineering:component_electronic'},
			{base_ingredient: {item: 'immersiveengineering:electron_tube'}, count:2}
		],
		category: "components",
		result: {
			item: 'immersiveengineering:component_electronic_adv'
		}
	})

    let t1 = 'kubejs:incomplete_vac_tube'
	event.recipes.create.sequencedAssembly([
		Item.of('immersiveengineering:electron_tube').withChance(80.0),
		Item.of('create:electron_tube').withChance(20.0),
	], 'create:electron_tube', [
		event.recipes.createDeploying(t1, [t1, '#forge:wires/copper']),
		event.recipes.createDeploying(t1, [t1, '#forge:glass'])
	]).transitionalItem(t1).loops(2)
})