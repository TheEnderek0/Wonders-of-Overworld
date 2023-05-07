// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => { 
    let Remove = (id) => {
		event.remove({output: id})
	}

    event.remove({output: 'refinedstorage:quartz_enriched_iron', type:"minecraft:crafting_shaped"})

    event.recipes.immersiveengineeringArcFurnace(['4x refinedstorage:quartz_enriched_iron'], '4x #forge:ingots/iron', ['#forge:gems/quartz'])
    
    Remove('refinedstorage:machine_casing')

    event.shaped('refinedstorage:machine_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:tungsten_ingot',
        B: 'kubejs:arsenic_ingot',
        C: 'refinedstorage:quartz_enriched_iron_block'
    })

    Remove('refinedstorage:controller')
    event.recipes.create.mechanicalCrafting('refinedstorage:controller', [
        "AABAA",
        "ACECA",
        "BDFDB",
        "ACGCA",
        "AABAA"
    ], {
        A:'refinedstorage:quartz_enriched_iron',
        B: 'refinedstorage:advanced_processor',
        C: 'pneumaticcraft:printed_circuit_board',
        D: 'industrialforegoing:plastic',
        E: 'immersiveengineering:component_electronic_adv',
        G: 'industrialforegoing:machine_frame_simple',
        F: 'refinedstorage:machine_casing'
    })

    Remove(['refinedstorage:advanced_processor', 'refinedstorage:improved_processor', 'refinedstorage:basic_processor', 'extrastorage:neural_processor'])

    let t1 = 'kubejs:incomplete_ap'
	event.recipes.create.sequencedAssembly([
		Item.of('refinedstorage:advanced_processor').withChance(100.0)
	], 'refinedstorage:raw_advanced_processor', [
		event.recipes.createDeploying(t1, [t1, 'pneumaticcraft:transistor']),
        event.recipes.createDeploying(t1, [t1, 'pneumaticcraft:capacitor']),
		event.recipes.createPressing(t1, [t1])
	]).transitionalItem(t1).loops(2)

    let t2 = 'kubejs:incomplete_ip'
	event.recipes.create.sequencedAssembly([
		Item.of('refinedstorage:improved_processor').withChance(100.0)
	], 'refinedstorage:raw_improved_processor', [
		event.recipes.createDeploying(t2, [t2, 'pneumaticcraft:transistor']),
		event.recipes.createPressing(t2, [t2])
	]).transitionalItem(t2).loops(2)

    let t3 = 'kubejs:incomplete_bp'
	event.recipes.create.sequencedAssembly([
		Item.of('refinedstorage:basic_processor').withChance(100.0)
	], 'refinedstorage:raw_basic_processor', [
		event.recipes.createDeploying(t3, [t3, 'createaddition:capacitor']),
		event.recipes.createPressing(t3, [t3])
	]).transitionalItem(t3).loops(2)

    let t4 = 'kubejs:incomplete_np'
	event.recipes.create.sequencedAssembly([
		Item.of('extrastorage:neural_processor').withChance(100.0)
	], 'extrastorage:raw_neural_processor', [
		event.recipes.createDeploying(t4, [t4, 'immersiveengineering:component_electronic_adv']),
		event.recipes.createPressing(t4, [t4])
	]).transitionalItem(t4).loops(2)

    event.replaceInput({output: 'refinedstorage:cable'}, '#forge:glass', '#forge:wires/electrum')
    event.replaceInput({output: 'refinedstorage:cable'}, '#forge:dusts/redstone', 'pneumaticcraft:transistor')

    event.replaceInput({output: ['refinedstorage:wireless_grid', 'refinedstorage:wireless_fluid_grid', 'refinedstorage:wireless_crafting_monitor', 'refinedstorageaddons:wireless_crafting_grid']},
                        'minecraft:ender_pearl', Item.of('refinedstorage:network_receiver').ignoreNBT())
})