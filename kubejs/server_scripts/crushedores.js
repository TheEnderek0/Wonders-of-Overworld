// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    let ChangeProcessing = (name, nugget) => {
        event.remove({input: 'create:crushed_' + name + "_ore", type: 'create:splashing'})
        event.recipes.createSplashing(['14x ' + nugget, Item.of(nugget, 4).withChance(0.5)], 'create:crushed_' + name + '_ore')
    }

    ChangeProcessing('iron', 'minecraft:iron_nugget')
    ChangeProcessing('gold', 'minecraft:gold_nugget')
    ChangeProcessing('copper', 'create:copper_nugget')
    ChangeProcessing('zinc', 'create:zinc_nugget')
    ChangeProcessing('osmium', 'mekanism:nugget_osmium')
    ChangeProcessing('silver', 'immersiveengineering:nugget_silver')
    ChangeProcessing('tin', 'thermal:tin_nugget')
    ChangeProcessing('lead', 'immersiveengineering:nugget_lead')
    ChangeProcessing('aluminum', 'immersiveengineering:nugget_aluminum')
    ChangeProcessing('uranium', 'immersiveengineering:nugget_uranium')
    ChangeProcessing('nickel', 'immersiveengineering:nugget_nickel')
})