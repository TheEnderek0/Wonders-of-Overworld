// priority: 0
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => { 
    let Remove = (id) => {
		event.remove({output: id})
	}


    Remove('mekanism:steel_casing')

    event.shaped('2x mekanism:steel_casing', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: '#forge:plates/steel',
        B: '#forge:storage_blocks/osmium',
        C: 'kubejs:tungsten_ingot',
        D: '#forge:storage_blocks/signalum'
    })

    let RemoveFactoryCrafting = (w) => {
        event.remove({id: 'mekanism:factory/basic/'     .concat(w)})
        event.remove({id: 'mekanism:factory/advanced/'  .concat(w)})
        event.remove({id: 'mekanism:factory/elite/'     .concat(w)})
        event.remove({id: 'mekanism:factory/ultimate/'  .concat(w)})
    }

    RemoveFactoryCrafting('smelting')
    RemoveFactoryCrafting('enriching')
    RemoveFactoryCrafting('crushing')
    RemoveFactoryCrafting('compressing')
    RemoveFactoryCrafting('combining')
    RemoveFactoryCrafting('purifying')
    RemoveFactoryCrafting('injecting')
    RemoveFactoryCrafting('infusing')
    RemoveFactoryCrafting('sawing')

    Remove('mekanism:metallurgic_infuser')
    event.recipes.create.mechanicalCrafting('mekanism:metallurgic_infuser', [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
    ], {
        A: '#forge:ingots/osmium',
        B: 'ironfurnaces:iron_furnace',
        C: 'pneumaticcraft:printed_circuit_board',
        D: 'immersiveengineering:component_electronic_adv',
        E: 'mekanism:steel_casing'
    })

    Remove('mekanism:basic_control_circuit')

    let Infusion = (output, out_quant, input, gas, gas_count) => {
        event.custom({
            type: "mekanism:metallurgic_infusing",
            itemInput: {
                ingredient: {
                    item: input
                }
            },
            chemicalInput: {
                amount: gas_count,
                tag: gas
            },
            output: {
                item: output,
                count: out_quant
            }
        })
    }

    Infusion('pipez:basic_upgrade', 1, 'pneumaticcraft:upgrade_matrix', 'mekanism:redstone', 800)

    Infusion('mekanism:basic_control_circuit', 2, 'pneumaticcraft:printed_circuit_board', 'mekanism:redstone', 40)
    event.replaceInput({output: 'mekanism:alloy_infused'}, "#forge:ingots/iron", '#forge:ingots/steel')

    Remove('mekanism:basic_tier_installer')
    event.shaped('mekanism:basic_tier_installer', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'refinedstorage:basic_processor',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:ingots/lumium',
        D: 'mekanism:steel_casing'
    })

    Remove('mekanism:advanced_tier_installer')
    event.shaped('mekanism:advanced_tier_installer', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'refinedstorage:improved_processor',
        B: 'mekanism:advanced_control_circuit',
        C: 'thermal:rosin',
        D: 'industrialforegoing:machine_frame_simple'
    })

    Remove('mekanism:elite_tier_installer')
    event.shaped('mekanism:elite_tier_installer', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'refinedstorage:advanced_processor',
        B: 'mekanism:elite_control_circuit',
        C: 'thermal:tar',
        D: 'industrialforegoing:machine_frame_advanced'
    })

    Remove('mekanism:ultimate_tier_installer')
    event.recipes.create.mechanicalCrafting('mekanism:ultimate_tier_installer', [
        " A   A ",
        "ABC CBA",
        " CDEFC ",
        "  GHG  ",
        " CFEDC ",
        "ABC CBA",
        " A   A "
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'immersiveengineering:component_electronic_adv',
        C: 'extrastorage:neural_processor',
        D: 'thermal:tar',
        E: 'mekanism:ultimate_control_circuit',
        F: 'thermal:rosin',
        G: '#forge:gears/enderium',
        H: 'industrialforegoing:machine_frame_supreme'
    })

    event.replaceInput({output: 'mekanism:upgrade_speed'}, "#forge:dusts/osmium", 'kubejs:crushed_arsenic')
    event.replaceInput({output: 'mekanism:upgrade_energy'}, "#forge:dusts/gold", 'kubejs:crushed_tungsten')

    Remove('mekanism:energized_smelter')
    event.shaped('mekanism:energized_smelter', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:basic_control_circuit',
        C: 'immersiveengineering:furnace_heater',
        D: 'mekanism:steel_casing'
    })

    Remove('mekanism:crusher')
    event.shaped('mekanism:crusher', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:basic_control_circuit',
        C: 'create:crushing_wheel',
        D: 'mekanism:steel_casing'
    })

    Remove('mekanism:enrichment_chamber')
    event.shaped('mekanism:enrichment_chamber', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:basic_control_circuit',
        C: 'pneumaticcraft:compressed_iron_gear',
        D: 'mekanism:steel_casing'
    })

    Remove('mekanism:advanced_control_circuit')
    event.shaped('mekanism:advanced_control_circuit', [
        " A ",
        "BCB",
        " A "
    ], {
        A: 'immersiveengineering:component_electronic',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:basic_control_circuit'
    })

    Remove('mekanism:elite_control_circuit')
    event.shaped('mekanism:elite_control_circuit', [
        "DAD",
        "BCB",
        "DAD"
    ], {
        A: 'immersiveengineering:component_electronic_adv',
        B: 'mekanism:alloy_reinforced',
        C: 'mekanism:advanced_control_circuit',
        D: 'kubejs:insulator'
    })

    Remove('mekanism:ultimate_control_circuit')
    let t1 = 'kubejs:incomplete_cb'
	event.recipes.create.sequencedAssembly([
		Item.of('mekanism:ultimate_control_circuit').withChance(100.0)
	], 'mekanism:elite_control_circuit', [
        event.recipes.createDeploying(t1, [t1, 'mekanism:alloy_atomic']),
        event.recipes.createFilling(t1, [t1, Fluid.of('tconstruct:molten_aluminum', 180)]),
		event.recipes.createPressing(t1, [t1]),
        event.recipes.createDeploying(t1, [t1, 'create:electron_tube']),
        event.recipes.createDeploying(t1, [t1, 'mekanism:ingot_refined_obsidian']),
        event.recipes.createDeploying(t1, [t1, 'mekanism:alloy_atomic'])
	]).transitionalItem(t1).loops(1)

    Remove('mekanism:osmium_compressor')
    event.shaped('mekanism:osmium_compressor', [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: 'mekanism:alloy_infused',
        B: '#forge:storage_blocks/osmium',
        C: 'mekanism:advanced_control_circuit',
        D: 'mekanism:steel_casing',
        E: 'compressedcreativity:rotational_compressor'
    })

    Remove('mekanism:electrolytic_core')
    event.shaped('mekanism:electrolytic_core', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'mekanism:alloy_infused',
        B: '#forge:dusts/osmium',
        C: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}'),
        D: '#forge:gears/rose_gold'
    })

    Remove('mekanism:electrolytic_separator'),
    event.shaped('mekanism:electrolytic_separator', [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: '#forge:plates/steel',
        B: 'mekanism:alloy_infused',
        C: Item.of('mekanism:basic_chemical_tank').ignoreNBT(),
        D: 'mekanism:electrolytic_core',
        E: 'mekanism:steel_casing'
    })

    Remove('mekanism:chemical_infuser')
    event.shaped('mekanism:chemical_infuser', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:elite_control_circuit',
        C: Item.of('mekanism:basic_chemical_tank').ignoreNBT(),
        D: 'mekanism:steel_casing'
    })
    
    event.replaceInput({output: 'mekanism:thermal_evaporation_block'}, '#forge:ingots/copper', 'mekanism:steel_casing')
    event.replaceInput({output: 'mekanism:thermal_evaporation_block'}, '#forge:ingots/steel', '#forge:ingots/copper')
    event.replaceInput({output: 'mekanism:teleporter'}, 'mekanism:basic_control_circuit', 'mekanism:elite_control_circuit')

    Remove('mekanism:teleportation_core')
    event.shaped('mekanism:teleportation_core', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'immersiveengineering:component_steel',
        B: 'mekanism:alloy_atomic',
        C: 'thermal:enderium_gear',
        D: 'mekanism:ultimate_control_circuit'
    })

    event.recipes.mekanismSawing('pneumaticcraft:plastic', 'industrialforegoing:plastic', 'industrialforegoing:tinydryrubber')
    Remove('mekanism:energy_tablet')
    event.shaped('mekanism:energy_tablet', [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: 'mekanism:alloy_infused',
        B: 'industrialforegoing:plastic',
        C: '#forge:wires/electrum',
        D: 'pneumaticcraft:capacitor'
    })

    Remove(['mekanism:basic_universal_cable', 'mekanism:basic_mechanical_pipe', 'mekanism:basic_pressurized_tube', 'mekanism:basic_logistical_transporter', 'mekanism:basic_thermodynamic_conductor'])
    event.shaped('8x mekanism:basic_universal_cable', [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: '#forge:plates/steel',
        B: 'immersiveengineering:wirecoil_steel',
        C: 'mekanism:alloy_infused'
    })

    event.shaped('8x mekanism:basic_mechanical_pipe', [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: '#forge:plates/steel',
        B: 'create:fluid_pipe',
        C: 'mekanism:alloy_infused'
    })
    event.shaped('8x mekanism:basic_pressurized_tube', [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: '#forge:plates/steel',
        B: 'pneumaticcraft:advanced_pressure_tube',
        C: 'mekanism:alloy_infused'
    })

    event.shaped('8x mekanism:basic_logistical_transporter', [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: '#forge:plates/steel',
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:alloy_infused'
    })

    event.shaped('8x mekanism:basic_thermodynamic_conductor', [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: '#forge:plates/steel',
        B: '#forge:ingots/copper',
        C: 'mekanism:alloy_infused'
    })

    Remove('mekanismgenerators:fission_reactor_casing')
    event.shaped('2x mekanismgenerators:fission_reactor_casing', [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: '#forge:plates/compressed_iron',
        B: '#forge:plates/lead',
        C: 'mekanism:steel_casing'
    })

    event.replaceInput({output: 'mekanismgenerators:reactor_glass'}, "#forge:glass", 'mekanism:steel_casing')
    event.replaceInput({output: 'mekanismgenerators:reactor_glass'}, 'mekanism:enriched_iron', '#forge:glass')

    Remove('mekanism:radioactive_waste_barrel')
    event.shaped('mekanism:radioactive_waste_barrel', [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: '#forge:plates/lead',
        B: Item.of('mekanism:ultimate_chemical_tank').ignoreNBT()
    })

    event.replaceInput({output: 'mekanismgenerators:heat_generator'}, 'minecraft:furnace', 'mekanism:steel_casing')
    event.replaceInput({output: 'mekanismgenerators:wind_generator'}, 'mekanism:alloy_infused', 'pneumaticcraft:turbine_rotor')

    Remove('mekanism:basic_chemical_tank')
    event.shaped('mekanism:basic_chemical_tank', [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: '#forge:plates/steel',
        B: '#forge:ingots/osmium',
        C: 'thermal:fluid_cell_frame'
    })

    Remove('mekanism:basic_fluid_tank')
    event.shaped('mekanism:basic_fluid_tank', [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: '#forge:plates/steel',
        B: '#forge:ingots/iron',
        C: 'thermal:fluid_cell_frame'
    })
})