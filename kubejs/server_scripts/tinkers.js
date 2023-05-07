// priority: 0
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true


onEvent('recipes', event => {
    event.recipes.tconstruct.casting_table("minecraft:coal", "kubejs:liquifacted_coal", 100).cast("#tconstruct:casts/multi_use/gem")

    event.recipes.tconstruct.casting_table('pneumaticcraft:compressed_iron_gear', "kubejs:molten_dense_steel", 360).cast("#tconstruct:casts/multi_use/gear")
    event.recipes.tconstruct.casting_table("pneumaticcraft:ingot_iron_compressed", "kubejs:molten_dense_steel", 90).cast("#tconstruct:casts/multi_use/ingot")


	event.custom({
		type: "tconstruct:melting",
		ingredient: {
			item: "minecraft:coal"
		},
		result: {
			fluid: "kubejs:liquifacted_coal",
			amount: 100
		},
		temperature: 1000,
		time: 100
	})

    event.custom({
		type: "tconstruct:melting",
		ingredient: {
			item: "pneumaticcraft:compressed_iron_gear"
		},
		result: {
			fluid: "kubejs:molten_dense_steel",
			amount: 360
		},
		temperature: 1000,
		time: 300
	})

    event.custom({
		type: "tconstruct:melting",
		ingredient: {
			item: "pneumaticcraft:ingot_iron_compressed"
		},
		result: {
			fluid: "kubejs:molten_dense_steel",
			amount: 90
		},
		temperature: 1000,
		time: 300
	})


})