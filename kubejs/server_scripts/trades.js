//priority: 0

onEvent("morejs.villager.trades", (event) => {
    event.removeModdedTrades(['pneumaticcraft:mechanic'], 1)
    event.removeModdedTrades(['pneumaticcraft:mechanic'], 2)
    event.removeModdedTrades(['pneumaticcraft:mechanic'], 3)
    event.removeModdedTrades(['pneumaticcraft:mechanic'], 4)
    event.removeModdedTrades(['pneumaticcraft:mechanic'], 5)
})

onEvent("lootjs", (event) => {
    event
        .addLootTypeModifier(LootType.CHEST).removeLoot(['pneumaticcraft:spawner_agitator', 'pneumaticcraft:pressure_tube', 'pneumaticcraft:ingot_iron_compressed', 
        'pneumaticcraft:transistor', 'pneumaticcraft:logistics_core', 'pneumaticcraft:vortex_cannon', 'pneumaticcraft:pneumatic_cylinder', 'pneumaticcraft:capacitor'])
});