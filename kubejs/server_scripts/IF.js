// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    let Remove = (id) => {
		event.remove({output: id})
	}
    Remove('industrialforegoing:infinity_nuke')
    Remove('industrialforegoing:machine_frame_pity')
    event.replaceInput({output: 'industrialforegoing:biofuel_generator'}, 'industrialforegoing:machine_frame_pity', 'industrialforegoing:machine_frame_simple')
    event.replaceInput({output: 'industrialforegoing:latex_processing_unit'}, 'industrialforegoing:machine_frame_pity', 'industrialforegoing:machine_frame_simple')
    event.replaceInput({output: 'industrialforegoing:mob_slaughter_factory'}, 'industrialforegoing:machine_frame_pity', 'industrialforegoing:machine_frame_simple')

    Remove('industrialforegoing:pitiful_generator')

    event.recipes.create.mechanicalCrafting('industrialforegoing:machine_frame_pity', [
        "ADA",
        "BCB",
        "ADA"
    ], {
        A: '#forge:plates/steel',
        B: 'createaddition:capacitor',
        C: 'create:brass_casing',
        D: '#minecraft:logs'
    })
    Remove('industrialforegoing:fluid_extractor')
    event.recipes.createMixing(Fluid.of('industrialforegoing:latex', 2000), [Fluid.of('pneumaticcraft:plastic', 1000), '#forge:slimeballs']).heated()
    event.remove({type:'industrialforegoing:fluid_extractor'})

    event.replaceInput({output: ['industrialforegoing:sewage_composter', 
    'industrialforegoing:sludge_refiner', 
    'industrialforegoing:animal_baby_separator', 
    'industrialforegoing:sewer', 
    'industrialforegoing:animal_rancher', 
    'industrialforegoing:animal_feeder', 
    'industrialforegoing:water_condensator', 
    'industrialforegoing:plant_gatherer', 
    'industrialforegoing:plant_sower', 'industrialforegoing:spores_recreator', 'industrialforegoing:dissolution_chamber', 'industrialforegoing:resourceful_furnace', 'industrialforegoing:dye_mixer', 'industrialforegoing:fluid_collector', 'industrialforegoing:fluid_placer', 'industrialforegoing:block_placer', 'industrialforegoing:block_breaker', 'industrialforegoing:fluid_extractor']}, 'industrialforegoing:plastic', 'pneumaticcraft:plastic')

    Remove("industrialforegoing:machine_frame_simple")
    event.custom({
        input: [
            {
                item: 'pneumaticcraft:plastic'
              },
              {
                tag: "industrialforegoing:machine_frame/pity"
              },
              {
                item: 'pneumaticcraft:plastic'
              },
              {
                item: 'pneumaticcraft:transistor'
              },
              {
                item: 'pneumaticcraft:transistor'
              },
              {
                tag: 'forge:plates/compressed_iron'
              },
              {
                tag: "forge:gears/gold"
              },
              {
                tag: 'forge:plates/compressed_iron'
            }
        ],
        inputFluid: "{FluidName:\"industrialforegoing:latex\",Amount:250}",
        processingTime: 100,
        output: {
          item: "industrialforegoing:machine_frame_simple",
          count: 1
        },
        type: "industrialforegoing:dissolution_chamber"
    })

    Remove('industrialforegoing:machine_frame_advanced')
    event.custom({
        input: [
            {
                item: 'industrialforegoing:plastic'
              },
              {
                item: 'industrialforegoing:machine_frame_simple'
              },
              {
                item: 'industrialforegoing:plastic'
              },
              {
                item: 'pneumaticcraft:printed_circuit_board'
              },
              {
                item: 'pneumaticcraft:printed_circuit_board'
              },
              {
                tag: 'forge:gears/electrum'
              },
              {
                item: 'immersiveengineering:component_electronic_adv'
              },
              {
                tag: 'forge:gears/electrum'
            }
        ],
        inputFluid: "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
        processingTime: 200,
        output: {
          item: 'industrialforegoing:machine_frame_advanced',
          count: 1
        },
        type: "industrialforegoing:dissolution_chamber"
    })

    event.replaceInput({output: 'industrialforegoing:machine_frame_supreme'}, "#forge:gears/diamond", '#forge:gears/lumium')
})