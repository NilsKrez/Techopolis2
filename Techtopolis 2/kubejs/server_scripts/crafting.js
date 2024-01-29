// priority: 3

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	event.shaped('1x minecraft:feather', ['  S',' SS','SS '], {S:string}).id('techopolis:feather')
	event.shaped('4x minecraft:chest', ['PPP','P P','PPP'], {P:logs}).id('techopolis:chests')
	event.shaped('16x minecraft:stick', ['P','P'], {P:logs}).id('techopolis:sticks')
	event.shaped('1x caveopolis:mixed_stone_ingot', ['C','I'], {I:iron_ingot, C: cobblestone}).id('techopolis:caveopolis_mixed_stone_ingot')
	event.shaped('1x minecraft:slime_ball', ['VVV','VVV','VVV'], {V:'minecraft:vine'}).id('techopolis:slime_ball')

	event.shaped('1x chipped:big_lantern', [' L ','L L',' L '], {L:'minecraft:lantern'}).id('techopolis:big_lantern')
	event.shaped('1x chipped:big_soul_lantern', [' L ','L L',' L '], {L:'minecraft:soul_lantern'}).id('techopolis:big_soul_lantern')

	event.shaped('1x powah:player_aerial_pearl', [' T ','TPT',' T '], {P:'powah:aerial_pearl', T: elite_technium}).id('techopolis:player_aerial_pearl')


	event.shaped('1x minecraft:blue_dye', ['BBB'], {B:'mekanism:dye_base'}).id('techopolis:blue_dye')
	event.shaped('1x minecraft:light_blue_dye', ['BB ','  B'], {B:'mekanism:dye_base'}).id('techopolis:light_blue_dye')
	event.shaped('1x minecraft:white_dye', ['B  ',' BB'], {B:'mekanism:dye_base'}).id('techopolis:white_dye')
	
	event.shaped('1x minecraft:orange_dye', ['BB','B '], {B:'mekanism:dye_base'}).id('techopolis:orange_dye')
	event.shaped('1x minecraft:pink_dye', [' B ','B  ','  B'], {B:'mekanism:dye_base'}).id('techopolis:pink_dye') 
	event.shaped('1x minecraft:yellow_dye', ['B B',' B '], {B:'mekanism:dye_base'}).id('techopolis:yellow_dye')
	event.shaped('1x minecraft:lime_dye', [' B','BB'], {B:'mekanism:dye_base'}).id('techopolis:lime_dye')
	
	event.shaped('1x minecraft:magenta_dye', ['B','B', 'B'], {B:'mekanism:dye_base'}).id('techopolis:magenta_dye')
	event.shaped('1x minecraft:gray_dye', ['B ',' B', ' B'], {B:'mekanism:dye_base'}).id('techopolis:gray_dye')
	event.shaped('1x minecraft:light_gray_dye', ['B ','B ', ' B'], {B:'mekanism:dye_base'}).id('techopolis:light_gray_dye')
	event.shaped('1x minecraft:cyan_dye', [' B','B ', ' B'], {B:'mekanism:dye_base'}).id('techopolis:cyan_dye')
	event.shaped('1x minecraft:purple_dye', ['B  ',' B ', '  B'], {B:'mekanism:dye_base'}).id('techopolis:purple_dye')

	event.shaped('1x minecraft:brown_dye', ['B B','   ', '  B'], {B:'mekanism:dye_base'}).id('techopolis:brown_dye')
	event.shaped('1x minecraft:green_dye', ['  B','B  ', 'B  '], {B:'mekanism:dye_base'}).id('techopolis:green_dye')
	event.shaped('1x minecraft:black_dye', ['B  ','   ', ' BB'], {B:'mekanism:dye_base'}).id('techopolis:black_dye')
	event.shaped('1x minecraft:red_dye', ['  B','   ', 'B B'], {B:'mekanism:dye_base'}).id('techopolis:red_dye')

	event.shapeless('4x minecraft:clay_ball', ['minecraft:clay']).id('techopolis:clay_ball')
	event.shapeless('1x minecraft:wheat_seeds', ['minecraft:wheat']).id('techopolis:wheat_seeds')
	event.shapeless('1x ae2:certus_quartz_crystal', ['minecraft:quartz']).id('techopolis:certus').stage('ae2')

	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "thermal:rf_coil"},"result": [{"item": "minecraft:blaze_powder","count": 1}],"energy_mod": 0.5}).id('techopolis:thermal/machines/pulverizer/blaze_powder')

	event.shaped('9x minecraft:furnace', ['CCC','C C','CCC'], {C:'compressium:cobblestone_1'}).id('techopolis:furnace_9')

	//Custom Compressor Recipes

	function quantumCompressor(input, output, catalyst, power, inputCount){
		event.custom({ "type": "extendedcrafting:compressor", "powerCost": power, "inputCount": inputCount, "ingredient": { "item": input }, "catalyst": { "item": catalyst }, "result": { "item": output } })
  	}
  
  	quantumCompressor('mekanism:dye_base', 'techopolis:quantum_compressed_dye', 'extendedcrafting:ultimate_catalyst', 100000, 1024)
  	quantumCompressor('opolisutilities:b_bucks', 'techopolis:mod_mastery_bucks', 'techopolis:mod_mastery_papers', 100000, 128)
  
	
	//Essence

	event.shaped('1x essence:essence_station', ['III','IBI','III'], {I:iron_ingot, B:'essence:basic_ore_essence'}).id('essence:essence_station/essence_station')


	//LaserIO

	event.shaped('12x laserio:logic_chip_raw', ['RGR','TST','RGR'], {R:redstone, G:gold_nugget, S:elite_technium, T:'alltheores:signalum_ingot'}).id('laserio:logic_chip_raw')

	event.shaped('1x laserio:card_energy', ['RBR','TST','GGG'], {R:redstone, B:redstone_block, T:'alltheores:signalum_ingot', G:gold_nugget, S:'laserio:logic_chip'}).id('laserio:card_energy')
	event.shaped('1x laserio:card_fluid', ['RBR','TST','GGG'], {R:redstone, B:bucket, T:'alltheores:signalum_ingot', G:gold_nugget, S:'laserio:logic_chip'}).id('laserio:card_fluid')
	event.shaped('1x laserio:card_item', ['RBR','TST','GGG'], {R:redstone, B:chest, T:'alltheores:signalum_ingot', G:gold_nugget, S:'laserio:logic_chip'}).id('laserio:card_item')
	event.shaped('1x laserio:card_redstone', ['RBR','TST','GGG'], {R:redstone_block, B:redstone_block, T:'alltheores:signalum_ingot', G:gold_nugget, S:'laserio:logic_chip'}).id('laserio:card_redstone')


	//Building Gadgets

	event.shaped('1x buildinggadgets:gadget_building', ['IRI','TRT','ILI'], {I:iron_ingot, T:advanced_technium, R:redstone, L:lapis}).id('buildinggadgets:gadget_building')
	event.shaped('1x buildinggadgets:gadget_exchanging', ['IRI','TLT','ILI'], {I:iron_ingot, T:advanced_technium, R:redstone, L:lapis}).id('buildinggadgets:gadget_exchanging')
	event.shaped('1x buildinggadgets:gadget_copy_paste', ['IRI','TRT','ILI'], {I:iron_ingot, T:'techopolis:blank_research_papers', R:advanced_technium, L:lapis}).id('buildinggadgets:gadget_copy_paste')
	event.shaped('1x buildinggadgets:gadget_destruction', ['IRI','TRT','ILI'], {I:iron_ingot, T:'#forge:storage_blocks/redstone', R:advanced_technium, L:lapis}).id('buildinggadgets:gadget_destruction')
	event.shaped('1x buildinggadgets:template_manager', ['TRT','TLT','TLT'], {T:advanced_technium, R:redstone, L:lapis}).id('buildinggadgets:template_manager')





	//Smelting

	event.smelting('minecraft:charcoal', '#minecraft:logs').id('techopolis:charcoal').xp(0.1)  
	event.smelting('techopolis:prospectors_pickaxe', 'minecraft:stone_pickaxe').id('techopolis:prospectors_pickaxe').xp(0.1)  

	//Drying table

	event.custom({type: "opolisutilities:drying_table",ingredients: [{item: "opolisutilities:log_sheet"}],duration: 200, "output": {item: "minecraft:leather"}}).id('techopolis:leather_in_drying_table')
	//Jumbo Furnace

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:cobblestone", count: 1}], result:{item: "minecraft:stone"},experience: 0.1}).id('minecraft:stone')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:stone", count: 1}], result:{item: "minecraft:smooth_stone"},experience: 0.1}).id('minecraft:smooth_stone')

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "techopolis:grout", count: 1}], result:{item: "techopolis:grout_dust", count:2},experience: 0.1}).id('techopolis:grout_dust')

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{type: "forge:nbt", item: "alltheores:tin_ingot", count: 1},{type: "forge:nbt", item: "minecraft:copper_ingot", count: 3}],result:{item: "alltheores:bronze_ingot", count:4},experience: 0.5}).id('tecbronzehopolis:_ingot')
	
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "minecraft:sand", count: 1}], result:{item: "minecraft:glass"},experience: 0.1}).id('minecraft:glass')

	//Immersive 

	event.shaped('1x immersiveengineering:hammer', [' B ',' SB','S  '], {S:stick, B: '#forge:ingots/bronze'}).id('immersiveengineering:crafting/hammer')
	event.shaped('24x immersiveengineering:conveyor_basic', ['L L','CCC','SSS'], {S:'minecraft:smooth_stone_slab', C: coal, L: lapis}).id('immersiveengineering:crafting/conveyor_basic')
	event.shaped('1x immersiveengineering:conveyor_dropper', ['C','W'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_dropper')
	event.shaped('1x immersiveengineering:sorter', ['WCW','CHC', 'WCW'], {C:conveyor, W: wooden_hopper, H:chest}).id('immersiveengineering:crafting/sorter')
	event.shaped('3x immersiveengineering:conveyor_splitter', ['C C',' C '], {C:conveyor}).id('immersiveengineering:crafting/conveyor_splitter')
	event.shaped('3x immersiveengineering:conveyor_extract', ['CW'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_extract')
	event.shaped('3x immersiveengineering:conveyor_vertical', ['C','C','C'], {C:conveyor}).id('immersiveengineering:crafting/conveyor_vertical')

	event.shaped('1x immersiveengineering:jerrycan', ['CC','CC'], {C: Item.of('ceramicbucket:ceramic_bucket').strongNBT()}).id('immersiveengineering:crafting/jerrycan')
	
	event.shaped('3x immersiveengineering:cokebrick', [' G ','GBG',' G '], {G:'techopolis:grout_dust', B:'minecraft:bricks'}).id('immersiveengineering:crafting/cokebrick')
	event.shaped('9x immersiveengineering:blastbrick', ['AGA','GBG','AGA'], {A:'#forge:ingots/aluminum', G:'minecraft:brick', B:'immersiveengineering:cokebrick'}).id('immersiveengineering:crafting/blastbrick')

	event.shaped('8x immersiveengineering:treated_wood_horizontal', ['PPP','PBP','PPP'], {P: planks, B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"immersiveengineering:creosote"}}').strongNBT()}).id('techopolis:crafting/treated_wood_horizontal')

	event.custom({"type":"immersiveengineering:bottling_machine","fluid":{"amount":200,"tag":"minecraft:lava"},"input":{"item":"minecraft:glass_bottle"},"results":[{"item":"techopolis:lava_bottle"}]})
	event.custom({"type":"immersiveengineering:bottling_machine","fluid":{"amount":125,"tag":"forge:creosote"},"input":{"tag":"minecraft:planks"},"results":[{"item":"immersiveengineering:treated_wood_horizontal"}]})
	
	event.custom({"type":"immersiveengineering:bottling_machine","fluid":{"amount":1000,"tag":"forge:phenolic_resin"},"input":{"item":"techopolis:mod_mastery_papers"},"results":[{"item":"techopolis:mod_mastery_immersive"}]})

	event.shaped('4x immersiveengineering:wirecoil_copper', ['CCC','CTC','CCC'], {C: copper_ingot, T: stick}).id('techopolis:additional_copper_wire_recipe')
	event.shaped('1x immersiveengineering:mold_plate', ['SSS','S S','SSS'], {S: steel_ingot}).id('techopolis:mold_plate')

	event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), [' E ','BBB','PPP'], {B: '#forge:dyes/blue', P:'minecraft:paper', E:'immersiveengineering:graphite_electrode'}).id('techopolis:electrode_blueprint')

	event.custom({"type":"immersiveengineering:blueprint","category":"molds","inputs":[{"base_ingredient":{"item":'alltheores:steel_ingot'},"count":3},{"item":"immersiveengineering:wirecutter"}],"result":{"item":"immersiveengineering:mold_plate"}}).id('immersiveengineering:blueprint/mold_plate')

	// Misc Crafting

	event.shaped('1x techopolis:grout', ['SGS','GCG','SGS'], {G: gravel, S: sand, C:'minecraft:clay'}).id('techopolis:grout_crafting')
	event.shaped('1x minecraft:clay', ['GG','GG'], {G:'techopolis:grout_dust'}).id('techopolis:clay_from_grout')
	event.shaped('1x minecraft:gravel', ['G G','   ','G G'], {G:'techopolis:grout_dust'}).id('techopolis:gravel_from_grout')
	event.shaped('1x minecraft:sand', [' G ','G G',' G '], {G:'techopolis:grout_dust'}).id('techopolis:sand_from_grout')
	event.shaped('1x minecraft:clay_ball', ['G'], {G:'techopolis:grout_dust'}).id('techopolis:clay_ball_from_grout')

	event.shaped('4x opolisutilities:soaked_paper', [' L ', 'LBL', ' L '], {B:Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(), L:'opolisutilities:log_sheet'}).id('techopolis:soaked_paper_ceramic_bucket')

	event.shaped('1x compressium:netherrack_1', ['CCC','CUC','CCC'], {U:ultimate_technium, C:'compressium:cobblestone_5'}).id('techopolis:netherrack_nether')
	event.shaped('1x compressium:soulsand_1', ['CCC','CUC','CCC'], {U:ultimate_technium, C:'compressium:sand_1'}).id('techopolis:sand_nether')
	event.shaped('64x minecraft:basalt', ['CCC','CUC','CCC'], {U:ultimate_technium, C:'compressium:stone_3'}).id('techopolis:basalt_nether')
	event.shaped('45x minecraft:glowstone', ['CCC','CUC','CCC'], {U:ultimate_technium, C:'techopolis:lava_bottle'}).id('techopolis:glowstone_nether')

	event.shaped('6x minecraft:netherite_scrap', ['BBB','SSS','BBB'], {B:'minecraft:nether_brick', S:'minecraft:soul_sand'}).id('techopolis:netherite_scrap')
	event.shaped('1x minecraft:ancient_debris', [' S ','SBS',' S '], {S:'minecraft:netherite_scrap', B:'minecraft:basalt'}).id('techopolis:ancient_debris')
	
	//Extended Crafting

	event.shaped('1x extendedcrafting:basic_table', ['CCC','TCT','CCC'], {C: 'immersiveengineering:coal_coke', T: 'minecraft:crafting_table'}).id('extendedcrafting:basic_table')
	event.shaped('1x extendedcrafting:basic_auto_table', [' H ','HBH',' H '], {H: wooden_hopper, B: 'extendedcrafting:basic_table'}).id('extendedcrafting:basic_auto_table')

	event.shaped('1x extendedcrafting:advanced_table', ['CCC','TCT','CCC'], {C: 'immersiveengineering:coal_coke', T: 'extendedcrafting:basic_table'}).id('extendedcrafting:advanced_table')
	event.shaped('1x extendedcrafting:advanced_auto_table', [' H ','HBH',' H '], {H: wooden_hopper, B: 'extendedcrafting:advanced_table'}).id('extendedcrafting:advanced_auto_table')

	event.shaped('1x extendedcrafting:elite_table', ['CCC','TCT','CCC'], {C: 'techopolis:ultimate_technium_ingot', T: 'extendedcrafting:advanced_table'}).id('extendedcrafting:elite_table')
	event.shaped('1x extendedcrafting:elite_auto_table', [' H ','HBH',' H '], {H: hopper, B: 'extendedcrafting:elite_table'}).id('extendedcrafting:elite_auto_table')

	event.shaped('1x extendedcrafting:ultimate_table', ['CCC','TCT','CCC'], {C: 'techopolis:ultimate_technium_ingot', T: 'extendedcrafting:elite_table'}).id('extendedcrafting:ultimate_table')
	event.shaped('1x extendedcrafting:ultimate_auto_table', [' H ','HBH',' H '], {H: hopper, B: 'extendedcrafting:ultimate_table'}).id('extendedcrafting:ultimate_auto_table')

	event.shaped('4x extendedcrafting:black_iron_ingot', ['NIN','INI','NIN'], {N: netherite_ingot, I: iron_ingot}).id('extendedcrafting:black_iron_ingot')
	
	
	//Replace 

	event.replaceInput({id: 'craftingautomat:autocrafter'}, 'minecraft:dropper', 'minecraft:crafting_table')
	event.replaceInput({id: 'littlelogistics:transmitter_component'}, 'minecraft:ender_pearl', 'minecraft:redstone')
	event.replaceInput({id: 'littlelogistics:receiver_component'}, 'minecraft:ender_eye', 'minecraft:redstone')
	event.replaceInput({id: 'littlelogistics:rapid_hopper'}, '#forge:ingots/gold', basic_technium)
	event.replaceInput({mod: 'littlelogistics'}, 'minecraft:glowstone_dust', basic_technium)
	event.replaceInput({mod: 'storagenetwork'}, '#forge:ingots/gold', '#forge:ingots/aluminum')
	event.replaceInput({mod: 'storagenetwork'}, '#forge:gems/diamond', advanced_technium)
	event.replaceInput({mod: 'storagenetwork'}, 'minecraft:quartz', '#forge:gears/steel')
	event.replaceInput({mod: 'storagenetwork'}, 'minecraft:blaze_powder', '#forge:dusts/aluminum')
	event.replaceInput({mod: 'storagenetwork'}, 'minecraft:observer', 'minecraft:dropper')
	event.replaceInput({mod: 'tempad'}, 'minecraft:quartz', elite_technium)
	event.replaceInput({mod: 'tempad'}, 'minecraft:glowstone', 'minecraft:clock')
	event.replaceInput({mod: 'elevatorid'}, 'minecraft:ender_pearl', basic_technium)
	event.replaceInput({mod: 'constructionwand'}, 'minecraft:diamond', basic_technium)
	event.replaceInput({mod: 'constructionwand'}, 'minecraft:iron_ingot', bronze_ingot)
	event.replaceInput({mod: 'torchmaster'}, 'minecraft:diamond', basic_technium)
	event.replaceInput({mod: 'torchmaster'}, 'minecraft:gold_ingot', basic_technium)
	event.replaceInput({mod: 'torchmaster'}, 'minecraft:glowstone_dust', 'minecraft:torch')

	event.replaceInput({id: 'thermal:machine_chiller'}, 'minecraft:packed_ice', advanced_technium)
	event.replaceInput({id: 'immersiveengineering:crafting/dynamo'}, 'immersiveengineering:component_iron', '#forge:ingots/aluminum')
	event.replaceInput({id: 'laserio:filter_count'}, 'minecraft:observer', 'minecraft:dropper')


	
	//Thermal

	event.custom({"type": "thermal:pyrolyzer","ingredient": {"item": "minecraft:coal"},"result": [{"item": "immersiveengineering:coal_coke"},{"item": "thermal:tar","chance": 0.25},{"fluid": "immersiveengineering:creosote","amount": 250}],"experience": 0.15}).id('thermal:machines/pyrolyzer/pyrolyzer_coal')
	event.custom({"type": "thermal:pyrolyzer","ingredient": {"item": "thermal:bitumen"},"result": [{"item": "immersiveengineering:coal_coke"},{"item": "thermal:tar","chance": 0.50},{"fluid": "thermal:heavy_oil","amount": 50}], "energy":4000, "experience": 0.15}).id('thermal:machines/pyrolyzer/pyrolyzer_bitumen')
	event.custom({"type": "thermal:pyrolyzer","ingredient": {"tag": "minecraft:logs"},"result": [{"item": "minecraft:charcoal"},{"fluid": "immersiveengineering:creosote","amount": 125}],"experience": 0.15}).id('thermal:machines/pyrolyzer/pyrolyzer_logs')


	event.replaceInput({id: 'thermal:machine_frame'}, AlmostUnified.getPreferredItemForTag('forge:ingots/iron'), 'alltheores:silver_ingot')
	event.replaceInput({id: 'thermal:machine_frame'}, AlmostUnified.getPreferredItemForTag('forge:gears/tin'), '#forge:gears/electrum')
	event.replaceInput({id: 'thermal:machine_crucible'}, 'minecraft:nether_bricks', 'thermal:obsidian_glass')

	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "minecraft:sand","count": 1}],"result": [{"item": "minecraft:glass","count": 1}],"energy": 800}).id('techopolis:machines/smelter/glass')
	event.custom({"type": "thermal:smelter","ingredients": [{"item": "minecraft:stone","count": 1}],"result": [{"item": "minecraft:smooth_stone","count": 1}],"energy": 800}).id('techopolis:machines/smelter/smooth_stone')
	event.custom({"type": "thermal:smelter","ingredient": {"tag": "forge:dusts/osmium"},"result": [{"item": "alltheores:osmium_ingot","count": 1}],"energy_mod": 0.5})

	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "forge:gears/diamond","count": 8},{"value": [{"item": "thermal:upgrade_augment_3"}],"count": 6},{"item": "techopolis:mod_mastery_papers",
			"count": 1}],"result": [{"item": "techopolis:mod_mastery_thermal","count": 1}],"energy": 8000}).id('thermal:mod_mastery_thermal')

	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "forge:dusts/silver","count": 1},{"value": [{"tag": "forge:dusts/tin"}],"count": 3},{"item": "techopolis:advanced_technium_ingot",
			"count": 1}],"result": [{"item": "alltheores:lumium_ingot","count": 4}],"energy": 12000}).id('thermal:machines/smelter/smelter_alloy_lumium')

	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "forge:ingots/silver","count": 1},{"value": [{"tag": "forge:ingots/tin"}],"count": 3},{"item": "techopolis:advanced_technium_ingot",
			"count": 1}],"result": [{"item": "alltheores:lumium_ingot","count": 4}],"energy": 12000}).id('thermal:machines/smelter/smelter_alloy_lumium_from_ingot')

	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "forge:obsidian","count": 1},{"value": [{"tag": "forge:dusts/steel"}],"count": 1},{"tag": "forge:sand",
			"count": 1}],"result": [{"item": "thermal:obsidian_glass","count": 2}],"energy": 4800}).id('thermal:machines/smelter/smelter_glass_obsidian')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "techopolis:crystal_base"}],"count": 1},{"item": "minecraft:redstone",
			"count": 1}],"result": [{"item": "alltheores:ruby_dust","count": 1}],"energy": 2400}).id('techopolis:thermal_ruby_dust')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "techopolis:crystal_base"}],"count": 1},{"item": "thermal:lapis_dust",
			"count": 1}],"result": [{"item": "alltheores:sapphire_dust","count": 1}],"energy": 2400}).id('techopolis:thermal_sapphire_dust')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "techopolis:crystal_base"}],"count": 1},{"item": "techopolis:prismarine_dust",
			"count": 1}],"result": [{"item": "alltheores:peridot_dust","count": 1}],"energy": 2400}).id('techopolis:thermal_peridot_dust')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "minecraft:diamond"}],"count": 1},{"item": "minecraft:emerald",
			"count": 1}],"result": [{"item": "techopolis:infused_crystalline","count": 1}],"energy": 5000}).id('techopolis:infused_crystalline')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "alltheores:ruby","count": 1},{"value": [{"item": "alltheores:sapphire"}],"count": 1},{"item": "alltheores:peridot",
			"count": 1}],"result": [{"item": "minecraft:amethyst_shard","count": 1}],"energy": 5000}).id('techopolis:amethyst')

	event.custom({type: "thermal:bottler", ingredients: [{item: "minecraft:glass_bottle"},{fluid: "minecraft:lava",amount: 200}],
			result: [{item: "techopolis:lava_bottle"}]}).id('techopolis:lava_bottle_thermal')

	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "thermal:niter"}],"result": [{"item": "techopolis:crystal_base"}],"energy": 2500})
	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "alltheores:ruby_dust"}],"result": [{"item": "alltheores:ruby"}],"energy": 2500})
	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "alltheores:sapphire_dust"}],"result": [{"item": "alltheores:sapphire"}],"energy": 2500})
	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "alltheores:peridot_dust"}],"result": [{"item": "alltheores:peridot"}],"energy": 2500})

	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "minecraft:water","amount": 250},{"item": "techopolis:crystal_base"}],"result": [{"item": "minecraft:prismarine_shard"}],"energy": 2500})

	event.custom({"type": "thermal:crucible","ingredient": {"tag": "forge:sand"},"result": [{"fluid": "techopolis:liquid_glass","amount": 500}],"energy": 2000})
	event.custom({"type": "thermal:crucible","ingredient": {"tag": "forge:glass"},"result": [{"fluid": "techopolis:liquid_glass","amount": 1000}],"energy": 2000})

	event.custom({"type": "thermal:crucible","ingredient": {"item": "techopolis:hellish_technium_ingot"},"result": [{"fluid": "beyond_earth:oil","amount": 6000}],"energy": 5000})


	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "techopolis:crystalline"},"result": [{"item": "techopolis:crystalline_dust","count": 1}],"energy_mod": 0.5})
	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "minecraft:prismarine_shard"},"result": [{"item": "techopolis:prismarine_dust","count": 1}],"energy_mod": 0.5})

	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "techopolis:crystal_ore"},"result": [{"item": "techopolis:crystalline","count": 1}],"energy_mod": 0.5})
	event.custom({"type": "thermal:smelter","ingredient": {"tag": "forge:ores/peridot"},"result": [{"item": "alltheores:peridot","chance": 1.5},{"item": "thermal:rich_slag","chance": 0.15}],"experience": 0.5})

	event.custom({"type":"mekanism:injecting","chemicalInput":{"amount":1,"gas":"mekanism:hydrogen_chloride"},"itemInput":{"ingredient":{"tag":"forge:ores/dye"}},"output":{"count":8,"item":"mekanism:dye_base"}})

	//Thermal Extra

	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "forge:gems/apatite","count": 1}, {"item": ultimate_technium ,"count": 2}, {"tag": "forge:ingots/bronze","count": 1}],"result": [{"item": "thermal_extra:shellite_ingot","count": 1}],"energy": 800}).id('thermal_extra:machine/smelter/shellite_ingot')
	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "forge:gems/apatite","count": 1}, {"item": hellish_technium ,"count": 2}, {"tag": "forge:ingots/netherite","count": 1}],"result": [{"item": "thermal_extra:dragonsteel_ingot","count": 1}],"energy": 800}).id('thermal_extra:machine/smelter/dragonsteel_ingot')



	//Mekanism

	event.replaceInput({id: 'mekanism:steel_casing'}, 'alltheores:osmium_ingot', elite_technium)
	event.replaceInput({ output: "mekanism:steel_casing" }, "#forge:ingots/osmium", elite_technium)
	event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"item":"techopolis:infused_crystalline"}},"output":{"item":"mekanism:alloy_infused"}}).id('mekanism:metallurgic_infusing/alloy/infused')
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"minecraft:polished_basalt"}},"output":{"item":"ae2:sky_stone_block"}}).id('techopolis:sky_stone')
	
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/ruby"}},"output":{"item":"alltheores:ruby_dust", "count": 3}}).id('techopolis:ruby_dust_mek')
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/sapphire"}},"output":{"item":"alltheores:sapphire_dust", "count": 3}}).id('techopolis:sapphire_dust_mek')
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/peridot"}},"output":{"item":"alltheores:peridot_dust", "count": 3}}).id('techopolis:peridot_dust_mek')
	
	event.custom({"type": "thermal:pulverizer","ingredient": {"tag":"forge:ores/ruby"},"result": [{"item": "alltheores:ruby_dust","count": 2}],"energy_mod": 0.5})
	event.custom({"type": "thermal:pulverizer","ingredient": {"tag":"forge:ores/sapphire"},"result": [{"item": "alltheores:sapphire_dust","count": 2}],"energy_mod": 0.5})
	event.custom({"type": "thermal:pulverizer","ingredient": {"tag":"forge:ores/peridot"},"result": [{"item": "alltheores:peridot_dust","count": 2}],"energy_mod": 0.5})

	event.custom({type:"mekanism:oxidizing",input:{"ingredient":{"item":"alltheores:uranium_ingot"}},"output":{"amount":200,"gas":"mekanism:nuclear_waste"}}).id('techopolis:nuclear_waste')
	event.custom({type:"mekanism:oxidizing",input:{"ingredient":{"item":"powah:uraninite"}},"output":{"amount":500,"gas":"mekanism:nuclear_waste"}}).id('techopolis:nuclear_waste')

	event.custom({
		"type": "essence:resource_duplicator",
		"ingredients": [
		  {
		   "item": "essence:elite_mob_essence"
		  },
		  {
		   "item": "minecraft:nether_star"
		  }
		],
		"essenceInCount": 10,
		"output": {
		  "item": "minecraft:nether_star"
		},
		"outCount": 1
	  }).id('essence:resource_duplicator/elite_mob/nether_star')

	//Powah

	event.custom({"type": "powah:energizing","ingredients": [{"item": "alltheores:steel_ingot"},{"item": "minecraft:gold_ingot"}],"energy": 10000,"result": {"item": "powah:steel_energized","count": 2}}).id('powah:energizing/energized_steel')
	event.replaceInput({id: 'powah:crafting/energizing_rod_starter'}, 'minecraft:quartz', '#forge:ingots/steel')
	

	//Reseach Papers (ores + quest progression)

	event.shaped('techopolis:blank_research_papers', ['PPP','P P','PPP'], {P:'minecraft:paper'}).id('techopolis:research_papers')
	event.shaped('techopolis:mod_mastery_papers', ['PPP','PTP','PPP'], {P:'minecraft:paper', T:voided_technium}).id('techopolis:mastery_papers')
	event.shaped('techopolis:mod_mastery_flux', ['PPP','PTP','PPP'], {P:'fluxnetworks:flux_block', T:'techopolis:mod_mastery_papers'}).id('techopolis:mod_mastery_flux')
	event.shaped('techopolis:mod_mastery_waystones', ['PPP','PTP','PPP'], {P:'waystones:warp_stone', T:'techopolis:mod_mastery_papers'}).id('techopolis:mod_mastery_waystones')
	event.shaped('techopolis:mod_mastery_beyond', ['CPC','PTP','CPC'], {C:'#forge:storage_blocks/calorite', P:'beyond_earth:rover', T:'techopolis:mod_mastery_papers'}).id('techopolis:mod_mastery_beyond')
		
	event.shaped('techopolis:mod_mastery_digital', ['PPP','PTP','PPP'], {P:'extrastorage:storagepart_256k', T:'techopolis:mod_mastery_papers'}).id('techopolis:mod_mastery_digital_1')
	event.shaped('techopolis:mod_mastery_digital', ['PPP','PTP','PPP'], {P:'ae2:cell_component_256k', T:'techopolis:mod_mastery_papers'}).id('techopolis:mod_mastery_digital_2')

	event.shaped('techopolis:research_papers_copper_and_tin', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/coal', L:'#forge:storage_blocks/lapis'}).id('techopolis:rp_copper_and_tin')
	event.shaped('techopolis:research_papers_iron_and_aluminum', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/bronze', L:basic_technium}).id('techopolis:rp_iron_and_alumium')	
	event.shaped('techopolis:research_papers_redstone', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/steel', L:basic_technium}).id('techopolis:rp_redstone')
	event.shaped('techopolis:research_papers_nickel', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/aluminum', L:basic_technium}).id('techopolis:rp_nickel')
	event.shaped('techopolis:research_papers_metal_press', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/redstone', L:basic_technium}).id('techopolis:rp_metal_press')
	event.shaped('techopolis:research_papers_silver_and_gold', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/constantan', L:advanced_technium}).id('techopolis:rp_silver_and_gold')
	event.shaped('techopolis:research_papers_lead', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:dusts/lead', L:advanced_technium}).id('techopolis:rp_lead')
	event.shaped('techopolis:research_papers_niter', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:gems/niter', L:advanced_technium}).id('techopolis:rp_niter')
	event.shaped('techopolis:research_papers_crystal', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'techopolis:crystal_base', L:advanced_technium}).id('techopolis:rp_crystal')
	event.shaped('techopolis:research_papers_diamond_and_emerald', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/ruby', L:advanced_technium}).id('techopolis:rp_diamond_and_emerald')
	event.shaped('techopolis:research_papers_osmium', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/emerald', L:elite_technium}).id('techopolis:rp_osmium')
	event.shaped('techopolis:research_papers_mekanism', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/osmium', L:elite_technium}).id('techopolis:rp_mekanism')
	event.shaped('techopolis:research_papers_powah', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/uranium', L:elite_technium}).id('techopolis:rp_powah')
	event.shaped('techopolis:research_papers_uranium', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'mekanism:alloy_atomic', L:elite_technium}).id('techopolis:rp_uranium')
	event.shaped('techopolis:research_papers_debris', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:netherrack', L:ultimate_technium}).id('techopolis:rp_debris')
	event.shaped('techopolis:research_papers_nether', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'techopolis:lava_bottle', L:ultimate_technium}).id('techopolis:rp_nether')
	event.shaped('techopolis:research_papers_dye_ore', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:blue_dye', L:advanced_technium}).id('techopolis:rp_dye_ore')
	event.shaped('techopolis:research_papers_fluorite', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:nether_star', L:voided_technium}).id('techopolis:rp_fluorite')
	
	
	event.shaped('techopolis:research_papers_waystones', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/redstone', L: '#forge:plates/iron'}).id('techopolis:rp_waystones')
	event.shaped('techopolis:research_papers_flux_networks', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:ender_pearl', L: elite_technium}).id('techopolis:rp_flux_networks')
	event.shaped('techopolis:research_papers_tempad', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'waystones:waystone', L: elite_technium}).id('techopolis:rp_tempad')
	event.shaped('techopolis:research_papers_building_gadgets', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'constructionwand:diamond_wand', L: advanced_technium}).id('techopolis:rp_building_gadgets')
	event.shaped('techopolis:research_papers_tiab', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:advanced_technium, L: advanced_technium}).id('techopolis:rp_tiab')
	event.shaped('techopolis:research_papers_trash_cans', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'compressium:cobblestone_2', L: basic_technium}).id('techopolis:rp_trash_cans')
	event.shaped('techopolis:research_papers_angel_ring', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/gold', L: elite_technium}).id('techopolis:rp_angel_ring')
	event.shaped('techopolis:research_papers_ender', ['LCL','CPC','LCL'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/gold', L: elite_technium}).id('techopolis:rp_ender')

	event.shaped('techopolis:research_papers_villager_trades', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/emerald', L: ultimate_technium}).id('techopolis:rp_villager_trades')
	event.shaped('techopolis:research_papers_laserio', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:elite_technium, L: '#forge:storage_blocks/redstone'}).id('techopolis:rp_laserio')
	event.shaped('techopolis:research_papers_xnet', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/redstone', L: elite_technium}).id('techopolis:rp_xnet')
	event.shaped('techopolis:research_papers_beyond_earth', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:beacon', L: hellish_technium}).id('techopolis:rp_beyond_earth')
	event.shaped('techopolis:research_papers_iron_chests', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C: chest, L: basic_technium}).id('techopolis:rp_iron_chests')
	
	event.shaped('techopolis:research_papers_no_hunger', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C: 'minecraft:apple', L: advanced_technium}).id('techopolis:rp_no_hunger')
	event.shaped('techopolis:research_papers_speed', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C: 'minecraft:sugar', L: advanced_technium}).id('techopolis:rp_speed')
	
	//Mastery

	event.shaped('techopolis:mod_mastery_compressium', ['CCC','CPC','CCC'], {C:'compressium:cobblestone_9', P:'techopolis:mod_mastery_papers'}).id('techopolis:mm_compressium')
	event.shaped('techopolis:mod_mastery_mekanism', [' C ','CPC',' C '], {C:'mekanism:quantum_entangloporter', P:'techopolis:mod_mastery_papers'}).id('techopolis:mm_mekanism')

	//Reseach Papers (mods)

	event.shaped('techopolis:research_papers_thermal', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/electrum', L:advanced_technium}).id('techopolis:rp_thermal')
	event.shaped('techopolis:research_papers_little_logistic', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/redstone', L:'minecraft:rail'}).id('techopolis:rp_little_logistics')
	event.shaped('techopolis:research_papers_storage_drawers', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:chest', L:'compressium:cobblestone_2'}).id('techopolis:rp_storage_drawers')
	event.shaped('techopolis:research_papers_compressium', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#minecraft:logs', L:'minecraft:smooth_stone'}).id('techopolis:rp_compressium')
	event.shaped('techopolis:research_papers_immersive_aircraft', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'immersiveengineering:coal_coke', L:'immersiveengineering:treated_wood_horizontal'}).id('techopolis:rp_immersive_aircraft')
	event.shaped('techopolis:research_papers_extended_crafting', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:netherite_ingot', L:ultimate_technium}).id('techopolis:rp_extended_crafting')
	event.shaped('techopolis:research_papers_construction_wand', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/coal', L:'#forge:ingots/bronze'}).id('techopolis:rp_construction_wands')
	event.shaped('techopolis:research_papers_framed_blocks', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/tin', L:'immersiveengineering:treated_wood_horizontal'}).id('techopolis:rp_framed_blocks')
	event.shaped('techopolis:research_papers_simple_storage', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/steel', L:advanced_technium}).id('techopolis:rp_simple_storage')
	event.shaped('techopolis:research_papers_elevators', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#minecraft:wool', L:advanced_technium}).id('techopolis:rp_elevators')
	event.shaped('techopolis:research_papers_ender_chests', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:ender_pearl', L:ultimate_technium}).id('techopolis:rp_ender_chests')
	event.shaped('techopolis:research_papers_gem_ores', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'techopolis:crystal_ore', L:elite_technium}).id('techopolis:rp_gem_ores')
	
	event.shaped('techopolis:research_papers_ae2', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/diamond', L:ultimate_technium}).id('techopolis:rp_ae2')
	event.shaped('techopolis:research_papers_rs', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:ultimate_technium, L:'#forge:storage_blocks/diamond'}).id('techopolis:rp_refined_storage')
	event.shaped('techopolis:research_papers_essence', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:ultimate_technium, L:'#forge:storage_blocks/black_iron'}).id('techopolis:rp_essence')
	event.shaped('techopolis:research_papers_chipped', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:stone_bricks', L:'#minecraft:logs'}).id('techopolis:rp_chipped')

	//Miners

	event.shaped('1x miners:tree_absorber', ['SCS','LPL','SCS'], {S:'minecraft:smooth_stone', L:'#minecraft:planks', C:'#minecraft:planks', P:'minecraft:stone_axe'}).id('miners:miners/tree_absorber')
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/niter","minerTier": 6})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/ender","minerTier": 5})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/ruby","minerTier": 6})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/sapphire","minerTier": 6})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/peridot","minerTier": 6})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/fluorite","minerTier": 8})

	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/dye","minerTier": 5})

	event.custom({type: "miners:miner_blocks",blockTag: "forge:sandstone/colorless","minerTier": 6})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:storage_blocks/clay","minerTier": 4})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:gravel","minerTier": 4})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:sand","minerTier": 4})
	event.custom({type: "miners:miner_blocks",blockTag: "minecraft:dirt","minerTier": 3})
	event.custom({type: "miners:miner_blocks",blockTag: "techopolis:sky_stone_block","minerTier": 3})

	event.custom({type: "miners:miner_blocks",blockTag: "techopolis:cobblestone_3","minerTier": 4})
	event.custom({type: "miners:miner_blocks",blockTag: "techopolis:cobblestone_4","minerTier": 5})
	event.custom({type: "miners:miner_blocks",blockTag: "techopolis:cobblestone_5","minerTier": 6})
	event.custom({type: "miners:miner_blocks",blockTag: "techopolis:cobblestone_6","minerTier": 7})
	event.custom({type: "miners:miner_blocks",blockTag: "techopolis:cobblestone_7","minerTier": 8})
	event.custom({type: "miners:miner_blocks",blockTag: "techopolis:cobblestone_8","minerTier": 9})
	event.custom({type: "miners:miner_blocks",blockTag: "techopolis:cobblestone_9","minerTier": 10})

	event.custom({type: "miners:miner_blocks",blockTag: "techopolis:essence_ore","minerTier": 8})
	event.custom({type: "miners:fluid_absorber",fluid: "beyond_earth:oil"})
	event.custom({type: "miners:fluid_absorber",fluid: "immersiveengineering:plantoil"})
	event.custom({type: "miners:fluid_absorber",fluid: "immersiveengineering:ethanol"})

	event.custom({type: "miners:cap_blocks","block": "minecraft:beacon","tickRate": 10}).id('miners:cap_blocks/beacon')
	event.custom({type: "miners:cap_blocks","block": "forge:storage_blocks/netherite","tickRate": 20}).id('miners:cap_blocks/netherite')

	event.custom({type: "miners:tree_absorber_block", logBlock: "minecraft:mangrove_log", leafBlock: "minecraft:mangrove_leaves",
		extraItem1: "minecraft:air",
		extraItem1Chance: 0.0,
		extraItem2: "minecraft:air",
		extraItem2Chance: 0.0,
		extraItem3: "minecraft:air",
		extraItem3Chance: 0.0})



	//Beyond Earth

	event.replaceInput({id: 'beyond_earth:nasa_workbench'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:compressor'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:rocket_nose_cone'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:rocket_launch_pad'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:fuel_refinery'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')

	event.replaceInput({id: 'beyond_earth:space_helmet'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:space_suit'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:space_leggings'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:space_boots'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:oxygen_loader'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:oxygen_tank'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'angelring:leadstone_angel_ring'}, '#forge:storage_blocks/cinnabar', 'minecraft:redstone_block')
	event.replaceInput({id: 'angelring:resonant_angel_ring'}, 'thermal:blizz_powder', 'minecraft:blaze_powder')
	event.replaceInput({id: 'angelring:angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:energetic_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:leadstone_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:hardened_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:reinforced_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:resonant_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:diamond_ring'}, 'minecraft:elytra', '#forge:gears/diamond')
	event.replaceInput({id: 'angelring:diamond_ring'}, 'minecraft:ghast_tear', elite_technium)
	event.replaceInput({id: 'thermal:augments/upgrade_augment_2'}, 'minecraft:quartz', advanced_technium)
	event.replaceInput({id: 'xnet:controller'}, 'minecraft:comparator', elite_technium)


	//Metal press and servo press recipes

	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/signalum"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/signalum"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/aluminum"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/aluminum"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/iridium"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/iridium"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:gems/diamond"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/diamond"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/lumium"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/lumium"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/desh"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/desh"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/netherite"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/netherite"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/enderium"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/enderium"}})
	
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"base_ingredient":{"tag":"forge:ingots/signalum"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/signalum"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"base_ingredient":{"tag":"forge:ingots/iridium"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/iridium"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"base_ingredient":{"tag":"forge:ingots/lumium"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/lumium"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"base_ingredient":{"tag":"forge:ingots/netherite"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/netherite"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"base_ingredient":{"tag":"forge:ingots/enderium"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/enderium"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"base_ingredient":{"item":'minecraft:diamond'},"count":4},"mold":"immersiveengineering:mold_gear","result":{"item":"alltheores:diamond_gear"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"base_ingredient":{"tag":"forge:gems/lapis"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/lapis"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"base_ingredient":{"tag":"forge:gems/emerald"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/emerald"}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"base_ingredient":{"tag":"forge:gems/quartz"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/quartz"}})
		
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/signalum"},"mold":"immersiveengineering:mold_rod","result":{"base_ingredient":{"tag":"forge:rods/signalum"},"count":2}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/aluminum"},"mold":"immersiveengineering:mold_rod","result":{"base_ingredient":{"tag":"forge:rods/aluminum"},"count":2}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/iridium"},"mold":"immersiveengineering:mold_rod","result":{"base_ingredient":{"tag":"forge:rods/iridium"},"count":2}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:gems/diamond"},"mold":"immersiveengineering:mold_rod","result":{"base_ingredient":{"tag":"forge:rods/diamond"},"count":2}})
	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/lumium"},"mold":"immersiveengineering:mold_rod","result":{"base_ingredient":{"tag":"forge:rods/lumium"},"count":2}})

	event.custom({"type": "thermal:press","ingredient": {"tag": "forge:ingots/desh"},"result": [{"item": "beyond_earth:desh_plate"}]})
	event.custom({"type": "thermal:press","ingredient": {"tag": "forge:ingots/brass"},"result": [{"item": "alltheores:brass_plate"}]})
	event.custom({"type": "thermal:press","ingredient": {"tag": "forge:gems/diamond"},"result": [{"item": "alltheores:diamond_plate"}]})
	event.custom({"type": "thermal:press","ingredient": {"tag": "forge:ingots/zinc"},"result": [{"item": "alltheores:zinc_plate"}]})
	event.custom({"type": "thermal:press","ingredient": {"tag": "forge:ingots/iridium"},"result": [{"item": "alltheores:iridium_plate"}]})
	event.custom({"type": "thermal:press","ingredient": {"tag": "forge:ingots/osmium"},"result": [{"item": "alltheores:osmium_plate"}]})
	event.custom({"type": "thermal:press","ingredient": {"tag": "forge:ingots/platium"},"result": [{"item": "alltheores:platium_plate"}]})

	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:gems/quartz","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "thermal:quartz_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:gems/emerald","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "thermal:emerald_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:gems/lapis","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "thermal:lapis_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"item": "minecraft:diamond","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "alltheores:diamond_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:ingots/constantan","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "alltheores:constantan_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:ingots/zinc","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "alltheores:zinc_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:ingots/uranium","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "alltheores:uranium_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:ingots/platinum","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "alltheores:platinum_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:ingots/osmium","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "alltheores:osmium_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:ingots/iridium","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "alltheores:iridium_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:ingots/aluminum","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "alltheores:aluminum_gear"}]})
	event.custom({"type": "thermal:press","ingredients": [{"tag": "forge:ingots/brass","count": 4},{"item": "thermal:press_gear_die"}],"result": [{"item": "alltheores:brass_gear"}]})

	//Ingots From Dusts Mek and Thermal

	function oresSmelting (types){

	event.custom({"type":"mekanism:smelting","input":{"amount":2,"ingredient":{"tag":`forge:dusts/${types}`}},"output":AlmostUnified.getPreferredItemForTag(`forge:ingots/${types}`)}).id(`techopolis:mekanism/smelter/${types}_to_ingot`)
	event.custom({"type":"thermal:furnace","ingredient": {"tag": `forge:dusts/${types}`,"count": 2} ,"result": AlmostUnified.getPreferredItemForTag(`forge:ingots/${types}`),"experience": 0.3,"energy_mod": 2.0}).id(`techopolis:thermal/smelter/${types}_to_ingot`)
	}

	oresSmelting ('iron')
	oresSmelting ('osmium')
	oresSmelting ('gold')
	oresSmelting ('aluminum')
	oresSmelting ('lead')
	oresSmelting ('nickel')
	oresSmelting ('platinum')
	oresSmelting ('silver')
	oresSmelting ('tin')
	oresSmelting ('uranium')
	oresSmelting ('zinc')
	oresSmelting ('iridium')
	oresSmelting ('bronze')
	oresSmelting ('enderium')
	oresSmelting ('luminum')
	oresSmelting ('electrum')
	oresSmelting ('signalum')
	oresSmelting ('steel')
	oresSmelting ('invar')
	oresSmelting ('brass')
	oresSmelting ('copper')
	
	//Shop

	event.custom({type: "opolisutilities:shop",
		ingredient: {item: "opolisutilities:b_bucks"},
		itemInCount: 2,
		result: "minecraft:red_mushroom",
		itemOutCount: 4
	  }
	).id("techopolis:red_mushroom")

	event.custom({type: "opolisutilities:shop",
		ingredient: {item: "opolisutilities:b_bucks"},
		itemInCount: 2,
		result: "minecraft:brown_mushroom",
		itemOutCount: 4
	  }
	).id("techopolis:brown_mushroom")

	event.custom({type: "opolisutilities:shop",
		ingredient: {item: "opolisutilities:b_bucks"},
		itemInCount: 2,
		result: "minecraft:warped_fungus",
		itemOutCount: 4
	  }
	).id("techopolis:warped_fungus")

	event.custom({type: "opolisutilities:shop",
		ingredient: {item: "opolisutilities:b_bucks"},
		itemInCount: 2,
		result: "minecraft:crimson_fungus",
		itemOutCount: 4
	  }
	).id("techopolis:crimson_fungus")

	event.custom({type: "opolisutilities:shop",
		ingredient: {item: "minecraft:netherrack"},
		itemInCount: 64,
		result: 'minecraft:warped_nylium',
		itemOutCount: 4
	  }
	).id("techopolis:warped_nylium")

	event.custom({type: "opolisutilities:shop",
		ingredient: {item: "minecraft:netherrack"},
		itemInCount: 64,
		result: 'minecraft:crimson_nylium',
		itemOutCount: 4
	  }
	).id("techopolis:crimson_nylium")

	event.custom({type: "opolisutilities:shop",
		ingredient: {item: "opolisutilities:b_bucks"},
		itemInCount: 5,
		result: 'ae2:sky_stone_block',
		itemOutCount: 36
	  }
	).id("techopolis:sky_stone_block")


	function gemEnderPulverEnrich (types, outputItem){

		event.custom({"type":"mekanism:enriching","input":{"amount":2,"ingredient":{"tag":`forge:ores/${types}`}},"output": {"item": outputItem}}).id(`techopolis:mekanism/enriching/${types}`)
		event.custom({"type": "thermal:pulverizer","ingredient": {"tag": `forge:ores/${types}`, count: 2},"result": [{"item": outputItem,"count": 1}],"energy_mod": 0.5}).id(`techopolis:thermal/pulverizer/${types}`)
	}

	gemEnderPulverEnrich ('ender', 'opolisutilities:ender_pearl_fragment')
	
	function gemEssencePulverEnrich (types, outputItem){

		event.custom({"type":"mekanism:enriching","input":{"amount":1,"ingredient":{"tag":`forge:ores/${types}`}},"output": {"item": outputItem, "count": 5}}).id(`techopolis:mekanism/enriching/${types}`)
		event.custom({"type": "thermal:pulverizer","ingredient": {"tag": `forge:ores/${types}`, count: 1},"result": [{"item": outputItem,"count": 5}],"energy_mod": 0.5}).id(`techopolis:thermal/pulverizer/${types}`)
	}
	
	gemEssencePulverEnrich ('essence', 'essence:basic_ore_essence')
	gemEssencePulverEnrich ('dye', 'techopolis:dye_base')

	//Recipe Remove

	event.remove({id:'caveopolis:coal_fragment'})
	event.remove({id:'caveopolis:charcoal_fragment'})
	event.remove({id:'opolisutilities:resource_generator/resource_generator'})
	event.remove({id:'opolisutilities:resource_generator_2'})
	event.remove({id:'alltheores:steel_dust_from_alloy_blending'})
	event.remove({id:'thermal:compat/mekanism/smelter_mek_osmium_ore'})
	event.remove({id:'thermal:compat/mekanism/pulverizer_mek_osmium_ore'})
	event.remove({id:'beyond_earth:iron_plate'})
	event.remove({id:'minecraft:netherite_ingot'})
	event.remove({id:'beyond_earth:desh_plate'})
	event.remove({input:'alltheores:iron_ore_hammer'})
	event.remove({input:'alltheores:copper_ore_hammer'})
	event.remove({input:'alltheores:bronze_ore_hammer'})
	event.remove({input:'alltheores:invar_ore_hammer'})
	event.remove({input:'alltheores:platinum_ore_hammer'})
	event.remove({input:'minecraft:fire_charge', output: '#forge:ingots'})
	event.remove({input:'minecraft:fire_charge', output: '#forge:gems'})
	event.remove({input:'minecraft:fire_charge', output: '#forge:dusts'})
	event.remove({input:'minecraft:fire_charge', output: '#thermal:glass/hardened'})
	event.remove({input:'#forge:nuggets/iron', output: '#forge:gears'})
	event.remove({type:'opolisutilities:resource_generator'})
	event.remove({type:'opolisutilities:resource_generator_2'})
	event.remove({type:'opolisutilities:rg2_blocks'})
	event.remove({type:'opolisutilities:rg2_speed_blocks'})
	event.remove({type:'thermal:rock_gen'})
	event.remove({id:'storagenetwork:inventory_remote'})
	event.remove({id:'storagenetwork:crafting_remote'})
	event.remove({id:'storagenetwork:picker_remote'})
	event.remove({id:'storagenetwork:collector_remote'})
	event.remove({id:'storagenetwork:builder_remote'})
	event.remove({id:'beyond_earth:steel_ingot_blasting'})
	event.remove({id:'thermal:machines/pulverizer/pulverizer_andesite'})
	event.remove({id:'thermal:machines/pulverizer/pulverizer_granite'})
	event.remove({id:'thermal:machines/pulverizer/pulverizer_diorite'})
	event.remove({id:'ae2:misc/vanilla_comparator'})
	event.remove({id:'minecraft:redstone_from_smelting_deepslate_redstone_ore'})
	event.remove({id:'minecraft:redstone_from_blasting_deepslate_redstone_ore'})
	event.remove({id:'thermal:device_rock_gen'})
	event.remove({id:'beyond_earth:iron_rod'})
	event.remove({id:'thermal:lumium_dust_4'})
	event.remove({id:'alltheores:lumium_dust_from_alloy_blending'})
	event.remove({id:'/thermal:parts//'})
	event.remove({id:'mekanism:dye_base'})
	event.remove({id:'opolisutilities:shop/buying/nether_star'})
	event.remove({id:'opolisutilities:shop/buying/diamond'})
	event.remove({id:'opolisutilities:shop/buying/emerald'})

})
