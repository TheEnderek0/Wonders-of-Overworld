// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('rei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide('storagenetwork:crafting_remote')
	event.hide('storagenetwork:picker_remote')
	event.hide('storagenetwork:builder_remote')
	event.hide('storagenetwork:collector_remote')
	event.hide('storagenetwork:inventory_remote')
	event.hide('storagenetwork:exchange')
	event.hide('storagenetwork:collector')

    event.hide('pneumaticcraft:manual_compressor')
    event.hide('pneumaticcraft:air_compressor')
    event.hide('pneumaticcraft:liquid_compressor')
	event.hide('pneumaticcraft:pneumatic_dynamo')
	event.hide('pneumaticcraft:amadron_tablet')

	//Era 3
	event.hide('ironfurnaces:augment_generator')
	event.hide('immersiveengineering:blastfurnace_preheater')
	event.hide('immersiveengineering:dynamo')
	event.hide('industrialforegoing:pitiful_generator')

	event.hide(['thermal:energy_duct', 'thermal:fluid_duct', 'thermal:fluid_duct_windowed', 'thermal:filter_attachment', 'thermal:servo_attachment', 'thermal:turbo_servo_attachment', 'thermal:energy_limiter_attachment'])
	event.hide('industrialforegoing:fluid_extractor')
	event.hide('thermal:quartz_dust')
	event.hide('mob_grinding_utils:jumbo_tank')
	
})