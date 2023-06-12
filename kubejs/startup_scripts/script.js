// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('casing_frame')
		.displayName('Basic Metal Frame')

	event.create('press_shaft')
		.displayName('Press Shaft')
	
	event.create('tiny_rub')
		.displayName('Tiny Wet Rubber')
	
	event.create('precision_mechanism_ch')
		.displayName('Precision Mechanism Chassis')

	event.create('insulator')
		.displayName('Insulator')

	event.create('fine_mesh')
		.displayName('Fine Mesh')

	event.create('incomplete_fine_mesh', 'create:sequenced_assembly')
		.displayName('Incomplete Fine Mesh')

	event.create('unfin_cap')
		.displayName('Unfinished Electrolytic Capacitor')
	
	event.create('compressed_iron_plate')
		.displayName('Dense Steel Plate')

	event.create('incomplete_blade', 'create:sequenced_assembly')
		.displayName('Incomplete Turbine Blade')

	event.create('incomplete_transistor', 'create:sequenced_assembly')
		.displayName('Incomplete Transistor')
	
	event.create('incomplete_capacitor', 'create:sequenced_assembly')
		.displayName('Incomplete Unfinished Electrolytic Capacitor')

	event.create('incomplete_pcb', 'create:sequenced_assembly')
		.displayName('Incomplete PCB')
	
	event.create('incomplete_blueprint', 'create:sequenced_assembly')
		.displayName('Incomplete PCB Blueprint')
	
	event.create('incomplete_laser_m', 'create:sequenced_assembly')
		.displayName('Incomplete Laser Program')
	
	event.create('incomplete_drill_m', 'create:sequenced_assembly')
		.displayName('Incomplete Drill Program')
		.texture('kubejs:item/incomplete_laser_m')
	
	event.create('incomplete_vac_tube', 'create:sequenced_assembly')
		.displayName('Incomplete Vacuum Tube')

	event.create('incomplete_iron_comp', 'create:sequenced_assembly')
		.displayName('Incomplete Iron Engineering Component')
	
	event.create('incomplete_steel_comp', 'create:sequenced_assembly')
		.displayName('Incomplete Steel Engineering Component')

	event.create('crushed_arsenic')
		.displayName('Crushed Arsenic')

	event.create('crushed_tungsten')
		.displayName('Crushed Tungsten')
	
	event.create('arsenic_ingot')
		.displayName('Arsenic Ingot')

	event.create('tungsten_ingot')
		.displayName('Tungsten Ingot')

	event.create('processed_rock')
		.displayName('Powdered Rock')

	event.create('incomplete_bp', 'create:sequenced_assembly')
		.displayName('Incomplete Basic Processor')
		.texture('refinedstorage:item/basic_processor')
	event.create('incomplete_ip', 'create:sequenced_assembly')
		.displayName('Incomplete Improved Processor')
		.texture('refinedstorage:item/improved_processor')
	event.create('incomplete_ap', 'create:sequenced_assembly')
		.displayName('Incomplete Advanced Processor')
		.texture('refinedstorage:item/advanced_processor')
	event.create('incomplete_np', 'create:sequenced_assembly')
		.displayName('Incomplete Neural Processor')
		.texture('extrastorage:item/neural_processor')

	event.create('incomplete_cb', 'create:sequenced_assembly')
		.displayName('Incomplete Ultimate Circuit Board')

	event.create('dc_frame')
		.displayName('Draconium Core Frame')
		.texture('kubejs:item/empty_draconic_core')

	event.create('wv_frame')
		.displayName('Wyvern Core Frame')
		.texture('kubejs:item/empty_wyvern_core')
	
	event.create('aw_frame')
		.displayName('Draconic Core Frame')
		.texture('kubejs:item/empty_awakened_core')

	event.create('ch_frame')
		.displayName('Chaotic Core Frame')
		.texture('kubejs:item/empty_chaos_core')

	event.create('dc_energy_unit')
		.displayName('Draconium Core Energy Unit')
		.texture('kubejs:item/draconic_core_energy_unit')

	event.create('wv_energy_unit')
		.displayName('Wyvern Core Energy Unit')
		.texture('kubejs:item/wyvern_core_energy_unit')
	
	event.create('aw_energy_unit')
		.displayName('Draconic Core Energy Unit')
		.texture('kubejs:item/awakened_core_energy_unit')

	event.create('ch_energy_unit')
		.displayName('Chaotic Core Energy Unit')
		.texture('kubejs:item/chaos_core_energy_unit')
})
 
onEvent('fluid.registry', event => {
	
	event.create('liquifacted_coal')
		.thinTexture(0x212121)
		.bucketColor(0x212121)
		.displayName("Liquifacted Coal")
	
	event.create('molten_dense_steel')
		.thickTexture(0x242424)
		.noBucket().noBlock()
		.displayName("Molten Dense Steel")
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})