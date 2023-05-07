// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    let Remove = (id) => {
		event.remove({output: id})
	}
    Remove('draconicevolution:draconium_core')
    event.shaped('kubejs:dc_energy_unit', [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: '#forge:plates/lumium',
        B: Item.of('mekanism:energy_tablet').ignoreNBT(),
        C: 'industrialforegoing:machine_frame_advanced'
    })

    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: {
            ingredient: {
                item: 'draconicevolution:draconium_block'
            }
        },
        gasInput: {
            amount: 30,
            gas: "mekanism:antimatter"
        },
        output: {
            item: 'kubejs:dc_frame'
        },
        duration: 4000
    })

    event.custom({
        input: [
            {
                item: 'kubejs:dc_energy_unit'
              },
              {
                item: 'pneumaticcraft:printed_circuit_board'
              },
              {
                item: 'kubejs:dc_frame'
              }
        ],
        inputFluid: "{FluidName:\"tconstruct:molten_signalum\",Amount:500}",
        processingTime: 300,
        output: {
          item: 'draconicevolution:draconium_core',
          count: 1
        },
        type: "industrialforegoing:dissolution_chamber"
    })

    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: {
            ingredient: {
                item: 'kubejs:dc_frame'
            }
        },
        gasInput: {
            amount: 45,
            gas: "mekanism:antimatter"
        },
        output: {
            item: 'kubejs:wv_frame'
        },
        duration: 8000
    })

    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: {
            ingredient: {
                item: 'kubejs:wv_frame'
            }
        },
        gasInput: {
            amount: 90,
            gas: "mekanism:antimatter"
        },
        output: {
            item: 'kubejs:aw_frame'
        },
        duration: 20000
    })

    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: {
            ingredient: {
                item: 'kubejs:aw_frame'
            }
        },
        gasInput: {
            amount: 400,
            gas: "mekanism:antimatter"
        },
        output: {
            item: 'kubejs:ch_frame'
        },
        duration: 80000
    })

    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: {
            ingredient: {
                item: 'bhc:yellow_heart'
            }
        },
        gasInput: {
            amount: 300,
            gas: "mekanism:antimatter"
        },
        output: {
            item: 'draconicevolution:dragon_heart'
        },
        duration: 20000
    })

    event.custom({
        type: "draconicevolution:fusion_crafting",
        result: {
          item: 'kubejs:wv_energy_unit'
        },
        catalyst: {
          item: 'industrialforegoing:machine_frame_supreme'
        },
        total_energy: 200000,
        tier: "DRACONIUM",
        ingredients: [
          {
            item: 'mekanism:energy_tablet'
          },
          {
            item: 'mekanism:energy_tablet' 
          },
          {
            item: 'mekanism:energy_tablet' 
          },
          {
            item: 'mekanism:energy_tablet'
          },
          {
            item: 'draconicevolution:draconium_core'
          },
          {
            item: 'draconicevolution:draconium_core'
          },
          {
            item: 'draconicevolution:draconium_core'
          },
          {
            item: 'draconicevolution:draconium_core'
          }
        ]
    })

    Remove('draconicevolution:wyvern_core')

    event.custom({
        type: "draconicevolution:fusion_crafting",
        result: {
          item: 'draconicevolution:wyvern_core'
        },
        catalyst: {
          item: 'kubejs:wv_frame'
        },
        total_energy: 400000,
        tier: "DRACONIUM",
        ingredients: [
          {
            item: 'kubejs:wv_energy_unit'
          },
          {
            item: 'minecraft:nether_star' 
          },
          {
            item: 'minecraft:nether_star'
          },
          {
            item: 'draconicevolution:draconium_block'
          }
        ]
    })

    event.custom({
        type: "draconicevolution:fusion_crafting",
        result: {
          item: 'kubejs:aw_energy_unit'
        },
        catalyst: {
          item: 'mekanism:pellet_polonium'
        },
        total_energy: 20000000,
        tier: "WYVERN",
        ingredients: [
          {
            item: 'mekanism:ultimate_control_circuit'
          },
          {
            item: 'mekanism:ultimate_control_circuit' 
          },
          {
            item: 'mekanism:ultimate_control_circuit' 
          },
          {
            item: 'mekanism:ultimate_control_circuit'
          },
          {
            item: 'draconicevolution:wyvern_core'
          },
          {
            item: 'draconicevolution:wyvern_core'
          },
          {
            item: 'draconicevolution:wyvern_core'
          },
          {
            item: 'draconicevolution:wyvern_core'
          }
        ]
    })


    Remove('draconicevolution:awakened_core')

    event.custom({
        type: "draconicevolution:fusion_crafting",
        result: {
          item: 'draconicevolution:awakened_core'
        },
        catalyst: {
          item: 'kubejs:aw_frame'
        },
        total_energy: 200000000,
        tier: "WYVERN",
        ingredients: [
          {
            item: 'kubejs:aw_energy_unit'
          },
          {
            item: 'mekanism:pellet_plutonium'
          },
          {
            item: 'mekanism:pellet_plutonium'
          },
          {
            item: 'draconicevolution:awakened_draconium_block'
          }
        ]
    })

    event.custom({
        type: "draconicevolution:fusion_crafting",
        result: {
          item: 'kubejs:ch_energy_unit'
        },
        catalyst: {
          item: 'draconicevolution:large_chaos_frag'
        },
        total_energy: 800000000,
        tier: "DRACONIC",
        ingredients: [
          {
            item: 'mekanism:teleportation_core'
          },
          {
            item: 'mekanism:teleportation_core' 
          },
          {
            item: 'mekanism:teleportation_core' 
          },
          {
            item: 'mekanism:teleportation_core'
          },
          {
            item: 'draconicevolution:awakened_core'
          },
          {
            item: 'draconicevolution:awakened_core'
          },
          {
            item: 'draconicevolution:awakened_core'
          },
          {
            item: 'draconicevolution:awakened_core'
          }
        ]
    })

    Remove('draconicevolution:chaotic_core')

    event.custom({
        type: "draconicevolution:fusion_crafting",
        result: {
          item: 'draconicevolution:chaotic_core'
        },
        catalyst: {
          item: 'kubejs:ch_frame'
        },
        total_energy: 1600000000,
        tier: "DRACONIC",
        ingredients: [
          {
            item: 'kubejs:ch_energy_unit'
          },
          {
            item: 'draconicevolution:large_chaos_frag'
          },
          {
            item: 'draconicevolution:large_chaos_frag'
          },
          {
            item: 'draconicevolution:awakened_draconium_block'
          }
        ]
    })

    Remove('draconicevolution:basic_crafting_injector')
    event.recipes.create.mechanicalCrafting('draconicevolution:basic_crafting_injector', [
        "ABCBA",
        "ADDDA",
        "ADDDA",
        "ADDDA",
        "AAAAA"
    ], {
        A: '#forge:plates/steel',
        B: 'mekanism:elite_control_circuit',
        C: 'draconicevolution:draconium_core',
        D: '#forge:storage_blocks/iron'
    })

    Remove('draconicevolution:awakened_crafting_injector')
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "draconicevolution:awakened_crafting_injector"
        },
        "catalyst": {
          "item": "draconicevolution:wyvern_crafting_injector"
        },
        "total_energy": 256000,
        "tier": "WYVERN",
        "ingredients": [
          {
            "tag": "forge:gems/diamond"
          },
          {
            "tag": "forge:gems/diamond"
          },
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "tag": "forge:storage_blocks/draconium_awakened"
          },
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "tag": "forge:gems/diamond"
          },
          {
            "tag": "forge:gems/diamond"
          }
        ]
    })

    Remove('draconicevolution:awakened_draconium_block')
    event.custom({
        type: "draconicevolution:fusion_crafting",
        result: {
          item: 'draconicevolution:awakened_draconium_block',
          count: 4
        },
        catalyst: {
          count: 4,
          items: [{ tag: "forge:storage_blocks/draconium" }],
          type: "draconicevolution:ingredient_stack"
        },
        total_energy: 500000000,
        tier: "WYVERN",
        ingredients: [
          {
            item: "draconicevolution:dragon_heart"
          },
          {
            item: 'kubejs:arsenic_ingot'
          },
          {
            item: 'kubejs:arsenic_ingot'
          },
          {
            item: 'kubejs:arsenic_ingot'
          },
          {
            item: 'kubejs:arsenic_ingot'
          },
          {
            item: "draconicevolution:draconium_core"
          },
          {
            item: "draconicevolution:draconium_core"
          },
          {
            item: "draconicevolution:draconium_core"
          },
          {
            item: "draconicevolution:draconium_core"
          },
          {
            item: "draconicevolution:draconium_core"
          }
        ]
    })

    event.replaceInput({output: 'draconicevolution:dislocator'}, 'minecraft:ender_eye', 'draconicevolution:draconium_core')
    event.replaceInput({output: 'draconicevolution:fluid_gate'}, 'draconicevolution:draconium_core', 'industrialforegoing:machine_frame_pity')
    event.replaceInput({output: 'draconicevolution:flux_gate'}, 'draconicevolution:draconium_core', 'industrialforegoing:machine_frame_pity')
    event.replaceInput({output: 'draconicevolution:energy_core_stabilizer'}, 'minecraft:diamond', 'mekanism:pellet_polonium')
})