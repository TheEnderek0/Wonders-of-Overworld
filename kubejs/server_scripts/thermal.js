// priority: 0
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => { 
    let Remove = (id) => {
		event.remove({output: id})
	}

    event.remove({output: 'thermal:lumium_ingot', input: 'minecraft:fire_charge'})
    event.remove({output: 'thermal:signalum_ingot', input: 'minecraft:fire_charge'})
    event.remove({output: 'thermal:enderium_ingot', input: 'minecraft:fire_charge'})

    event.remove({output: 'thermal:enderium_dust', type: "minecraft:crafting_shapeless"})
    event.remove({output: 'thermal:lumium_dust', type: "minecraft:crafting_shapeless"})
    event.remove({output: 'thermal:signalum_dust', type: "minecraft:crafting_shapeless"})

    event.replaceInput({output: 'thermal:machine_frame'}, '#forge:gears/tin', 'industrialforegoing:machine_frame_advanced')
    Remove(['thermal:energy_duct', 'thermal:fluid_duct', 'thermal:fluid_duct_windowed', 'thermal:filter_attachment', 'thermal:servo_attachment', 'thermal:turbo_servo_attachment', 'thermal:energy_limiter_attachment'])

    Remove('thermal:redstone_servo')
    event.shaped('thermal:redstone_servo', [
        "ABA",
        " C ",
        "ABA"
    ], {
        A: "#forge:dusts/redstone",
        B: '#forge:plates/tin',
        C: 'immersiveengineering:component_electronic'
    })

    Remove('thermal:rf_coil')

    event.custom({
        input: [
            {
                tag: 'forge:dusts/redstone'
              },
              {
                tag: 'forge:dusts/cinnabar'
              },
              {
                tag: 'forge:dusts/redstone'
              },
              {
                item: 'pneumaticcraft:transistor'
              },
              {
                item: 'pneumaticcraft:capacitor'
              }
        ],
        inputFluid: "{FluidName:\"tconstruct:molten_electrum\",Amount:200}",
        processingTime: 300,
        output: {
          item: 'thermal:rf_coil',
          count: 1
        },
        type: "industrialforegoing:dissolution_chamber"
    })

    //Port melting recipes for magma crucible
    let Melting = (ingot, fluid) => {
        event.recipes.thermal.crucible(Fluid.of(fluid, 90), ingot).energy(40000)
    }

    Melting('#forge:ingots/iron', 'tconstruct:molten_iron')
    Melting('#forge:ingots/gold', 'tconstruct:molten_gold')
    Melting('#forge:ingots/copper', 'tconstruct:molten_copper')
    Melting('#forge:ingots/refined_obsidian', 'tconstruct:molten_refined_obsidian')
    Melting('#forge:ingots/brass', 'tconstruct:molten_brass')
    Melting('#forge:ingots/electrum', 'tconstruct:molten_electrum')
    Melting('#forge:ingots/invar', 'tconstruct:molten_invar')
    Melting('#forge:ingots/steel', 'tconstruct:molten_steel')
    Melting('#forge:ingots/constantan', 'tconstruct:molten_constantan')
    Melting('#forge:ingots/enderium', 'tconstruct:molten_enderium')
    Melting('#forge:ingots/lumium', 'tconstruct:molten_lumium')
    Melting('#forge:ingots/signalum', 'tconstruct:molten_signalum')
    Melting('#forge:ingots/refined_glowstone', 'tconstruct:molten_refined_glowstone')
    Melting('#forge:ingots/tin', 'tconstruct:molten_tin')
    Melting('#forge:ingots/aluminum', 'tconstruct:molten_aluminum')
    Melting('#forge:ingots/lead', 'tconstruct:molten_lead')
    Melting('#forge:ingots/silver', 'tconstruct:molten_silver')
    Melting('#forge:ingots/nickel', 'tconstruct:molten_nickel')
    Melting('#forge:ingots/zinc', 'tconstruct:molten_zinc')
    Melting('#forge:ingots/osmium', 'tconstruct:molten_osmium')
    Melting('#forge:ingots/uranium', 'tconstruct:molten_uranium')
    Melting('#forge:ingots/bronze', 'tconstruct:molten_bronze')
    Melting('#forge:ingots/cobalt', 'tconstruct:molten_cobalt')
    Melting('#forge:ingots/slimesteel', 'tconstruct:molten_slimesteel')
    Melting('#forge:ingots/amethyst_bronze', 'tconstruct:molten_amethyst_bronze')
    Melting('#forge:ingots/rose_gold', 'tconstruct:molten_rose_gold')
    Melting('#forge:ingots/pig_iron', 'tconstruct:molten_pig_iron')
    Melting('#forge:ingots/manyullyn', 'tconstruct:molten_manyullyn')
    Melting('#forge:ingots/hepatizon', 'tconstruct:molten_hepatizon')
    Melting('#forge:ingots/queens_slime', 'tconstruct:molten_queens_slime')
    Melting('#forge:ingots/netherite', 'tconstruct:molten_netherite')
    Melting('#forge:ingots/compressed_iron', 'kubejs:molten_dense_steel')

    event.replaceInput({output: ['thermal:energy_cell_frame', 'thermal:fluid_cell_frame']}, "#forge:gears", 'industrialforegoing:machine_frame_simple')
    
    event.remove({mod: "thermal", input: "minecraft:fire_charge", type: "minecraft:crafting_shapeless"})

    event.custom({
      "type": "thermal:press",
      "ingredients": [
        {
          "item": "minecraft:diamond",
          "count": 4
        },
        {
          "item": "thermal:press_gear_die"
        }
      ],
      "result": [
        {
          "item": "thermal:diamond_gear"
        }
      ]
    })

    event.recipes.thermal.pulverizer('kubejs:crushed_arsenic', 'kubejs:arsenic_ingot').energy(16000)
    event.recipes.thermal.pulverizer('kubejs:crushed_tungsten', 'kubejs:tungsten_ingot').energy(16000)
    event.recipes.thermal.bottler('thermal:rubber', ['industrialforegoing:dryrubber', Fluid.of('minecraft:water', 250)]).energy(4000)
    event.recipes.thermal.press('kubejs:insulator', 'thermal:cured_rubber').energy(2000)

    event.remove({output: "thermal:coal_coke", input: "minecraft:coal"})

    event.custom({
        type: "thermal:pyrolyzer",
        ingredient: {
          item: "minecraft:coal"
        },
        result: [
          {
            item: "thermal:coal_coke"
          },
          {
            fluid: "thermal:creosote",
            amount: 250
          }
        ],
        experience: 0.15
    })

    event.recipes.thermal.chiller('pneumaticcraft:ingot_iron_compressed', [Fluid.of('kubejs:molten_dense_steel', 90), 'thermal:chiller_ingot_cast'])
})