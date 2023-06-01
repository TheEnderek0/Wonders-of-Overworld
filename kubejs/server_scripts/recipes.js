// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	console.info('Loading resources!')
	// Change recipes here
	event.remove({output: "#forge:gears", type: "minecraft:crafting_shaped"}) //Remove all gears
	event.remove({output: "create:andesite_alloy", type: "minecraft:crafting_shaped"})
	event.remove({output: "create:shaft"})
	event.remove({output: "#forge:rods/all_metal", type: "minecraft:crafting_shaped"})
	event.remove({output: "create:cogwheel"})
	event.remove({id: "create:crafting/kinetics/large_cogwheel"})
	event.remove({output: "#forge:plates", type: "minecraft:crafting_shapeless"})

	event.remove({id: "create:item_application/andesite_casing_from_wood"})
	event.remove({id: "create:item_application/andesite_casing_from_log"})
	event.remove({output: "create:encased_chain_drive"})
	event.remove({output: "create:mechanical_press"})
	event.remove({output: "create:basin"})
	event.remove({output: "create:fluid_pipe"})
	event.remove({id: "thermal:rubber_from_vine"})
	event.remove({id: "thermal:rubber_from_dandelion"})
	event.remove({output: "create:brass_casing"})
	event.remove({output: 'createaddition:capacitor'})
	event.remove({output: 'create:electron_tube'})
	event.remove({output: 'storagenetwork:master'})
	event.remove({output: 'storagenetwork:inventory'})
	event.remove({output: 'storagenetwork:crafting_remote'})
	event.remove({output: 'storagenetwork:picker_remote'})
	event.remove({output: 'storagenetwork:builder_remote'})
	event.remove({output: 'storagenetwork:collector_remote'})
	event.remove({output: 'storagenetwork:inventory_remote'})
	event.remove({output: 'storagenetwork:kabel'})
	event.remove({output: 'create:windmill_bearing'})
	event.remove({output: 'storagenetwork:exchange'})
	event.remove({output: 'storagenetwork:collector'})
	event.remove({type: 'pneumaticcraft:explosion_crafting'})
	event.remove({output: 'create:steam_engine'})
	event.remove({output: 'compressedcreativity:compressed_iron_casing'})
	event.remove({output: 'create:mechanical_drill'})

	event.replaceInput({output:"create:empty_blaze_burner"}, "minecraft:netherrack", "kubejs:casing_frame")
	event.replaceInput({mod: "create"}, "minecraft:dried_kelp", "thermal:cured_rubber")
	event.replaceOutput({}, "create:belt_connector", "4x create:belt_connector")
	event.remove({output: "create:fluid_tank"})
	event.shapeless("create:encased_chain_drive", ["create:andesite_casing", "minecraft:chain", "minecraft:chain"])

	event.recipes.createSplashing(["thermal:rubber"], "industrialforegoing:dryrubber")
	event.remove({id: "create:splashing/sand"})

	event.recipes.createMechanicalCrafting('compressedcreativity:compressed_iron_casing', [
		"ABA",
		"BCB",
		"ABA"
	], {
		B: '#forge:gears/compressed_iron',
		A: '#forge:plates/compressed_iron',
		C: 'create:brass_casing'
	})

	event.shaped('create:mechanical_drill', [
		" A ",
		"BCB",
		" D " 
	], {
		A: 'immersiveengineering:drillhead_steel',
		B: '#forge:gears/invar',
		C: 'create:andesite_casing',
		D: 'create:shaft'
	})

	event.shaped('create:steam_engine', [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: '#forge:plates/copper',
		B: 'create:shaft',
		C: '#forge:gears/compressed_iron',
		D: 'create:copper_casing',
		E: 'compressedcreativity:engine_rotor'
	})

	event.shaped('create:windmill_bearing', [
		" A ",
		"BCB",
		" D "
	], {
		A: '#forge:plates/obsidian',
		B: '#forge:gears/invar',
		C: 'create:brass_casing',
		D: 'create:shaft'
	})

	event.shaped('6x storagenetwork:kabel', [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: "kubejs:insulator",
		B: '#forge:wires/copper',
		C: 'create:electron_tube'
	})
	
	let fine_mesh_t = 'kubejs:incomplete_fine_mesh'
	event.recipes.create.sequencedAssembly([
		Item.of('kubejs:fine_mesh').withChance(80.0),
		Item.of('2x minecraft:iron_nugget').withChance(20.0),
	], 'minecraft:iron_bars', [
		event.recipes.createPressing(fine_mesh_t, [fine_mesh_t]),
		event.recipes.createCutting(fine_mesh_t, [fine_mesh_t])
	]).transitionalItem(fine_mesh_t).loops(4)

	event.shaped('storagenetwork:inventory', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: '#forge:plates/steel',
		B: 'create:electron_tube',
		C: 'storagenetwork:kabel',
		D: 'create:precision_mechanism',
		E: 'ironchest:iron_chest'
	})

	event.recipes.createMechanicalCrafting('storagenetwork:master', [
		"ABCBA",
		"BDEDB",
		"CEFEC",
		"BDEDB",
		"ABCBA"
	], {
		A: '#forge:plates/steel',
		B: 'createaddition:copper_spool',
		C: 'create:electron_tube',
		D: 'createaddition:capacitor',
		E: 'create:precision_mechanism',
		F: 'create:railway_casing'
	})

	event.shaped('create:electron_tube', [
		" A ",
		"BCB",
		" D "
	], {
		A: 'create:polished_rose_quartz',
		B: '#forge:glass_panes',
		C: 'kubejs:fine_mesh',
		D: '#forge:plates/electrum'
	})

	event.shaped('createaddition:capacitor', [
		" A ",
		"BCB",
		" D "
	], {
		A: '#forge:plates/zinc',
		B: '#forge:plates/electrum',
		C: 'kubejs:insulator',
		D: '#forge:rods/aluminum'
	})

	event.recipes.createMechanicalCrafting("kubejs:precision_mechanism_ch", [
		"  A  ",
		" BCB ",
		"ACDCA",
		" BCB ",
		"  A  "
	], {
		A: "create:brass_sheet",
		B: '#forge:plates/steel',
		C: '#forge:rods/brass',
		D: "#forge:gears/bronze" 
	})

	event.custom({
		type: "createaddition:rolling",
		input: {
    	  	item: "thermal:cured_rubber"
		},
		result: {
			item: "kubejs:insulator",
			count: 1
		},
	})

	event.recipes.create.sequencedAssembly([
		Item.of('create:precision_mechanism').withChance(80.0),
		Item.of('kubejs:precision_mechanism_ch').withChance(10.0),
		Item.of('create:electron_tube').withChance(5.0),
		Item.of('createaddition:capacitor').withChance(5.0)
	], "kubejs:precision_mechanism_ch", [
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:electron_tube']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'createaddition:capacitor']),
		event.recipes.createPressing('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'createaddition:copper_spool'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(2)

	event.recipes.createSplashing([
		Item.of("minecraft:clay_ball").withChance(0.25),
		Item.of("kubejs:tiny_rub", 3).withChance(0.25),
		Item.of("kubejs:tiny_rub", 6).withChance(0.1),
		Item.of("kubejs:tiny_rub", 9).withChance(0.05)
	], "minecraft:sand")

	event.shapeless("thermal:rubber", [Item.of("kubejs:tiny_rub", 9)])

	event.recipes.create.compacting(Fluid.of("kubejs:molten_dense_steel", 45), [
		Fluid.of("tconstruct:molten_steel", 90)
	]).heated()

	event.recipes.create.mixing(Fluid.of("tconstruct:molten_steel", 90), [
		Fluid.of("tconstruct:molten_iron", 90),
		Fluid.of("kubejs:liquifacted_coal", 200)
	]).superheated()


	event.remove({output: "create:crushing_wheel"})
	event.recipes.createMechanicalCrafting("2x create:crushing_wheel", [
		" ABA ",
		"AABAA",
		"BBCBB",
		"AABAA",
		" ABA "
	], {
		A: "minecraft:deepslate",
		B: "create:andesite_alloy",
		C: "#forge:storage_blocks/steel"
	})

	event.shaped("create:brass_casing", [
		" A ",
		"ABA",
		" A "
	], {
		A: "create:brass_sheet",
		B: "create:andesite_casing"
	})

	event.shaped("2x create:fluid_tank", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "create:copper_sheet",
		B: "#forge:glass",
		C: "kubejs:casing_frame"
	})

	event.shaped("8x create:fluid_pipe", [
		"AAA",
		"BBB",
		"AAA",
	], {
		A: "create:copper_sheet",
		B: "quark:pipe"
	})

	event.shaped("create:basin", [
		"   ",
		"ABA",
		"AAA",
	], {
		A: "create:andesite_alloy",
		B: "kubejs:casing_frame"
	})

	event.shaped("create:mechanical_press", [
		" A ",
		"BCB",
		" D ",
	], {
		A: "create:iron_sheet",
		B: "create:shaft",
		C: "create:andesite_casing",
		D: "kubejs:press_shaft"
	})

	event.shaped("kubejs:press_shaft", [
		"ABA",
		"ABA",
		" C ",
	], {
		A: "thermal:invar_plate",
		B: "immersiveengineering:stick_iron",
		C: "minecraft:iron_block"
	})

	event.shaped("8x create:shaft", [
		"ARA",
		"ARA",
		"ARA",
	], {
		A: "create:andesite_alloy",
		R: "immersiveengineering:stick_iron"
	})

	event.shaped("16x create:shaft", [
		"ARA",
		"ARA",
		"ARA",
	], {
		A: "create:andesite_alloy",
		R: "immersiveengineering:stick_steel"
	})

	event.shaped("8x create:cogwheel", [
		" R ",
		"PGP",
		" R "
	], {
		R: "immersiveengineering:stick_iron",
		P: "#minecraft:planks",
		G: "thermal:iron_gear"
	})

	event.shaped("16x create:cogwheel", [
		" R ",
		"PGP",
		" R "
	], {
		R: "immersiveengineering:stick_steel",
		P: "#minecraft:planks",
		G: "thermal:steel_gear"
	})

	event.shaped("create:andesite_casing", [
		" A ",
		"LFL",
		" A "
	], {
		A: "create:andesite_alloy",
		L: "#minecraft:logs",
		F: "kubejs:casing_frame"
	})

	event.shaped("3x kubejs:casing_frame", [
		"PAP",
		"A A",
		"PAP"
	], {
		P: "thermal:invar_plate",
		A: "immersiveengineering:stick_aluminum"
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})