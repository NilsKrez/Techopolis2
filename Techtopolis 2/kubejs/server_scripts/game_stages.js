// priority: 99

//Recipes Restrictions Handled by Kubejs 

//Reloading the recipes

ServerEvents.loaded((event) => {
    event.server.runCommandSilent('reload')
})

//No Trading

MoreJSEvents.playerStartTrading((event) => {
    // We don't have the stage, so no trades for us :(
    if (!event.player.stages.has("villager_trades")) {
        event.forEachOffers((o, i) => {
            o.disabled = true;
        });
    }
});

//Superflat right click grass for pebbles

BlockEvents.rightClicked(event => {
    const {player, server} = event
    if(event.block.hasTag('minecraft:dirt')){
        if (event.player.stages.has('superflat_recipes') && event.player.isCrouching() && player.mainHandItem === 'minecraft:air' && player.offHandItem === 'minecraft:air') {
            event.player.give('caveopolis:cobblestone_pebble')
        }
    }
})

ServerEvents.recipes(event => {

    event.shaped('1x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: basic_technium}).id('techopolis:b_bucks_1')
    event.shaped('4x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: advanced_technium}).id('techopolis:b_bucks_2')
    event.shaped('7x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: elite_technium}).id('techopolis:b_bucks_3')
    event.shaped('10x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: ultimate_technium}).id('techopolis:b_bucks_4')
    event.shaped('50x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: hellish_technium}).id('techopolis:b_bucks_5')
    event.shaped('64x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: voided_technium}).id('techopolis:b_bucks_6')


//World Exclusive recipes

//    event.shaped('1x minecraft:diamond', ['BBB','BBB','BBB'], {B:'minecraft:dirt'}).id('techopolis:hexlands_diamond').stage('hexland_recipes')


    //Skyblock Recipes

    event.shaped('1x minecraft:dirt', ['LLL','L L','LLL'], {L:'#minecraft:leaves'}).stage('skyblock_recipes')
    event.shaped('1x minecraft:grass_block', ['LLL','LDL','LLL'], {L:'#minecraft:leaves', D:'minecraft:dirt'}).id('techopolis:sky_grass').stage('skyblock_recipes')
    event.shaped('1x minecraft:gravel', ['D'], {D:'minecraft:dirt'}).stage('skyblock_recipes')
    event.shaped('1x minecraft:sand', ['D'], {D:'minecraft:gravel'}).stage('skyblock_recipes')
    event.shaped('1x minecraft:clay', ['D'], {D:'minecraft:sand'}).stage('skyblock_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), [' L ','LCL',' L '], {L:lapis, C:'ceramicbucket:ceramic_bucket'}).stage('skyblock_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'), [' L ','LCL',' L '], {L:redstone, C:'ceramicbucket:ceramic_bucket'}).stage('skyblock_recipes')
    
    event.shapeless('1x minecraft:birch_sapling', ['minecraft:mangrove_propagule']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:jungle_sapling', ['minecraft:birch_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:dark_oak_sapling', ['minecraft:jungle_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:acacia_sapling', ['minecraft:dark_oak_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:spruce_sapling', ['minecraft:acacia_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:oak_sapling', ['minecraft:spruce_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:mangrove_propagule', ['minecraft:oak_sapling']).stage('skyblock_recipes')

    event.shapeless('1x minecraft:wheat_seeds', ['minecraft:beetroot_seeds']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:beetroot_seeds', ['minecraft:pumpkin_seeds']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:pumpkin_seeds', ['minecraft:melon_seeds']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:melon_seeds', ['immersiveengineering:seed']).stage('skyblock_recipes')
    event.shapeless('1x immersiveengineering:seed', ['minecraft:wheat_seeds']).stage('skyblock_recipes')

    event.shapeless('1x minecraft:apple', ['minecraft:carrot']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:carrot', ['minecraft:potato']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:potato', ['minecraft:sweet_berries']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:sweet_berries', ['minecraft:apple']).stage('skyblock_recipes')

    event.shapeless('2x minecraft:cactus', ['#minecraft:leaves', '#minecraft:leaves']).stage('skyblock_recipes')
    event.shapeless('2x minecraft:kelp', ['minecraft:cactus', 'minecraft:cactus']).stage('skyblock_recipes')
    event.shapeless('2x minecraft:bamboo', ['minecraft:kelp', 'minecraft:kelp']).stage('skyblock_recipes')
    event.shapeless('2x minecraft:sugar_cane', ['minecraft:bamboo','minecraft:bamboo']).stage('skyblock_recipes')

    event.shaped('9x techopolis:grout', ['GSG','SCS','GSG'], {G: gravel, S: sand, C:'minecraft:clay'}).id('techopolis:grout_crafting_sky').stage('skyblock_recipes')
    event.shaped('8x fluxnetworks:flux_dust', ['RRR','ROR','RRR'], {R: redstone, O: 'minecraft:obsidian'}).id('techopolis:flux_in_skyblock').stage('skyblock_recipes')


    
    //Superflat Recipes

    event.shaped('3x minecraft:gravel', ['D C','   ','C D'], {D:'minecraft:dirt',C:cobblestone}).stage('superflat_recipes')
    event.shaped('3x minecraft:grass_block', ['LDL','LDL','LDL'], {L:'#minecraft:leaves', D:'minecraft:dirt'}).id('techopolis:flat_grass').stage('superflat_recipes') //FIX
    event.shaped('3x minecraft:sand', ['D C','   ','C D'], {D:'minecraft:dirt',C:gravel}).stage('superflat_recipes')
    event.shaped('3x minecraft:clay_ball', ['D C','   ','C D'], {D:'minecraft:dirt',C:sand}).stage('superflat_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), ['L L',' C ','L L'], {L:lapis, C:'ceramicbucket:ceramic_bucket'}).stage('superflat_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'), ['L L',' C ','L L'], {L:redstone, C:'ceramicbucket:ceramic_bucket'}).stage('superflat_recipes')
   
    event.shapeless('2x minecraft:oak_sapling', ['minecraft:birch_sapling','minecraft:birch_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:birch_sapling', ['minecraft:jungle_sapling','minecraft:jungle_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:jungle_sapling', ['minecraft:dark_oak_sapling','minecraft:dark_oak_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:dark_oak_sapling', ['minecraft:acacia_sapling','minecraft:acacia_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:acacia_sapling', ['minecraft:spruce_sapling','minecraft:spruce_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:spruce_sapling', ['minecraft:mangrove_propagule','minecraft:mangrove_propagule']).stage('superflat_recipes')
    event.shapeless('2x minecraft:mangrove_propagule', ['minecraft:oak_sapling','minecraft:oak_sapling']).stage('superflat_recipes')

    
    event.shapeless('3x minecraft:cactus', ['#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves']).stage('superflat_recipes')
    event.shapeless('3x minecraft:kelp', ['minecraft:cactus', 'minecraft:cactus', 'minecraft:cactus']).stage('superflat_recipes')
    event.shapeless('3x minecraft:bamboo', ['minecraft:kelp', 'minecraft:kelp', 'minecraft:kelp']).stage('superflat_recipes')
    event.shapeless('3x minecraft:sugar_cane', ['minecraft:bamboo','minecraft:bamboo','minecraft:bamboo']).stage('superflat_recipes')

//Recipe Staging (Credit EnigmaQuip for the assist )

    const $CraftingRecipe = Java.loadClass('net.minecraft.world.item.crafting.CraftingRecipe')
    function addStageByMod(stage, modid) {
       event.forEachRecipe({ mod: modid }, recipe => {
            if (recipe.originalRecipe instanceof $CraftingRecipe) {
                recipe.stage(stage)
            }
        })
    }

    //(stage, modid)

    addStageByMod("storage_drawers", "storagedrawers")
    addStageByMod("storage_drawers", "framedcompactdrawers")
    addStageByMod("littlelogistics", "little_logistics")
    addStageByMod("thermal", "thermal")
    addStageByMod("thermal", "thermal_extra")
    addStageByMod("ae2", "ae2")
    addStageByMod("refinedstorage", "refinedstorage")
    addStageByMod("mekanism", "mekanism")
    addStageByMod("waystones", "waystones")
    addStageByMod("powah", "powah")
    addStageByMod("beyond_earth", "beyond_earth")
    addStageByMod("compressium", "compressium")
    addStageByMod("constructionwand", "construction_wand")
    addStageByMod("nether", "nether")
    addStageByMod("netheropolis", "netheropolis")
    addStageByMod("extended_crafting", "extended_crafting")
    addStageByMod("framed_blocks", "framedblocks")
    addStageByMod("simple_storage", "storagenetwork")
    addStageByMod("tempad", "tempad")
    addStageByMod("tiab", "tiab")
    addStageByMod("flux_networks", "fluxnetworks")
    addStageByMod("kubejs", "skyblock_recipes")
    addStageByMod("kubejs", "superflat_recipes")
    addStageByMod("trash_cans", "trashcans")
    addStageByMod("angel_ring", "angelring")
    addStageByMod("laserio", "laserio")
    addStageByMod("xnet", "xnet")
    addStageByMod("xnet", "rftoolsbase")
    addStageByMod("building_gadgets", "buildinggadgets")
    addStageByMod("elevators", "elevatorid")
    addStageByMod("ender_storage", "enderstorage")
    addStageByMod("chipped", "chipped")
    addStageByMod("iron_chests", "ironchest")

    addStageByMod("ae2", "appmek")
    addStageByMod("ae2", "ae2wtlib")
    addStageByMod("ae2", "aeinfinitybooster")
    addStageByMod("ae2", "merequester")

    addStageByMod("refinedstorage", "rsrequestify")
    addStageByMod("refinedstorage", "extrastorage")
    addStageByMod("refinedstorage", "rsinfinitybooster")
    addStageByMod("refinedstorage", "refinedstorageaddons")
 
    //1, 2, 3 Crafting Recipes backups for failed gamestages, Fixed Storage Drawers as well

    
	// Remove Mod Recipes for resources

    event.remove({input:'#forge:ingots', output: '#forge:storage_blocks'})
    event.remove({input:'#forge:nuggets', output: '#forge:ingots'})
    event.remove({input:'#forge:ingots', output: '#forge:nuggets'})
    event.remove({input:'#forge:storage_blocks', output: '#forge:ingots'})

    function craftingFixes(stage1, stage2, stage3, materialName) {

        if (stage3 !== null) {
            event.shaped(`${stage3}`, ['222', '222', '222'], {2: `${stage2}`}).id(`techopolis:${materialName}_2_to_${materialName}_3`)
        }

        if (stage2 !== null) {
            event.shaped(`${stage2}`, ['111', '111', '111'], {1: `${stage1}`}).id(`techopolis:${materialName}_1_to_${materialName}_2`)
            event.shapeless(`9x ${stage2}`, [`${stage3}`]).id(`techopolis:${materialName}_3_to_${materialName}_2`)
        }

        if (stage1 !== null) {
            event.shapeless(`9x ${stage1}`, [`${stage2}`]).id(`techopolis:${materialName}_2_to_${materialName}_1`)
        }
    }

    craftingFixes('minecraft:iron_nugget', 'minecraft:iron_ingot', 'minecraft:iron_block', 'iron')
    craftingFixes('alltheores:copper_nugget', 'minecraft:copper_ingot', 'minecraft:copper_block', 'copper')
    craftingFixes('thermal:netherite_nugget', 'minecraft:netherite_ingot', 'minecraft:netherite_block', 'netherite')
    craftingFixes('minecraft:gold_nugget', 'minecraft:gold_ingot', 'minecraft:gold_block', 'gold')
    craftingFixes('opolisutilities:mini_coal', 'minecraft:coal', 'minecraft:coal_block', 'coal')
 //   craftingFixes(null, 'minecraft:charcoal', 'minecraft:charcoal_block', 'charcoal')

    craftingFixes('alltheores:aluminum_nugget', 'alltheores:aluminum_ingot', 'alltheores:aluminum_block', 'aluminum')
    craftingFixes('alltheores:lead_nugget', 'alltheores:lead_ingot', 'alltheores:lead_block', 'lead')
    craftingFixes('alltheores:nickel_nugget', 'alltheores:nickel_ingot', 'alltheores:nickel_block', 'nickel')
    craftingFixes('alltheores:osmium_nugget', 'alltheores:osmium_ingot', 'alltheores:osmium_block', 'osmium')
    craftingFixes('alltheores:platinum_nugget', 'alltheores:platinum_ingot', 'alltheores:platinum_block', 'platinum')
    craftingFixes('alltheores:silver_nugget', 'alltheores:silver_ingot', 'alltheores:silver_block', 'silver')
    craftingFixes('alltheores:tin_nugget', 'alltheores:tin_ingot', 'alltheores:tin_block', 'tin')
    craftingFixes('alltheores:uranium_nugget', 'alltheores:uranium_ingot', 'alltheores:uranium_block', 'uranium')
    craftingFixes('alltheores:zinc_nugget', 'alltheores:zinc_ingot', 'alltheores:zinc_block', 'zinc')
    craftingFixes('alltheores:iridium_nugget', 'alltheores:iridium_ingot', 'alltheores:iridium_block', 'iridium')
    craftingFixes('alltheores:steel_nugget', 'alltheores:steel_ingot', 'alltheores:steel_block', 'steel')
    craftingFixes('alltheores:invar_nugget', 'alltheores:invar_ingot', 'alltheores:invar_block', 'invar')
    craftingFixes('alltheores:electrum_nugget', 'alltheores:electrum_ingot', 'alltheores:electrum_block', 'electrum')
    craftingFixes('alltheores:bronze_nugget', 'alltheores:bronze_ingot', 'alltheores:bronze_block', 'bronze')
    craftingFixes('alltheores:enderium_nugget', 'alltheores:enderium_ingot', 'alltheores:enderium_block', 'enderium')
    craftingFixes('alltheores:lumium_nugget', 'alltheores:lumium_ingot', 'alltheores:lumium_block', 'lumium')
    craftingFixes('alltheores:signalum_nugget', 'alltheores:signalum_ingot', 'alltheores:signalum_block', 'signalum')
    craftingFixes('alltheores:constantan_nugget', 'alltheores:constantan_ingot', 'alltheores:constantan_block', 'constantan')
    craftingFixes('alltheores:brass_nugget', 'alltheores:brass_ingot', 'alltheores:brass_block', 'brass')

    craftingFixes('beyond_earth:desh_nugget', 'beyond_earth:desh_ingot', 'beyond_earth:desh_block', 'desh')
    craftingFixes('beyond_earth:ostrum_nugget', 'beyond_earth:ostrum_ingot', 'beyond_earth:ostrum_block', 'ostrum')
    craftingFixes('beyond_earth:calorite_nugget', 'beyond_earth:calorite_ingot', 'beyond_earth:calorite_block', 'calorite')

 //   craftingFixes('caveopolis:mixed_stone_nugget', 'caveopolis:mixed_stone_ingot', null, 'mixed_stone')

    craftingFixes('extendedcrafting:black_iron_nugget', 'extendedcrafting:black_iron_ingot', 'extendedcrafting:black_iron_block', 'black_iron')
    craftingFixes('extendedcrafting:redstone_nugget', 'extendedcrafting:redstone_ingot', 'extendedcrafting:redstone_ingot_block', 'redstone')
    craftingFixes('extendedcrafting:enhanced_redstone_nugget', 'extendedcrafting:enhanced_redstone_ingot', 'extendedcrafting:enhanced_redstone_ingot_block', 'enhanced_redstone')
    craftingFixes('extendedcrafting:ender_nugget', 'extendedcrafting:ender_ingot', 'extendedcrafting:ender_ingot_block', 'ender')
    craftingFixes('extendedcrafting:enhanced_ender_nugget', 'extendedcrafting:enhanced_ender_ingot', 'extendedcrafting:enhanced_ender_ingot_block', 'enhanced_ender')
    craftingFixes('extendedcrafting:crystaltine_nugget', 'extendedcrafting:crystaltine_ingot', 'extendedcrafting:crystaltine_block', 'crystaltine')
    craftingFixes('extendedcrafting:the_ultimate_nugget', 'extendedcrafting:the_ultimate_ingot', 'extendedcrafting:the_ultimate_block', 'the_ultimate')

    craftingFixes('mekanism:nugget_refined_obsidian', 'mekanism:ingot_refined_obsidian', 'mekanism:block_refined_obsidian', 'refined_obsidian')
    craftingFixes('mekanism:nugget_refined_glowstone', 'mekanism:ingot_refined_glowstone', 'mekanism:block_refined_glowstone', 'refined_glowstone')

    craftingFixes('thermal:rose_gold_nugget', 'thermal:rose_gold_ingot', 'thermal:rose_gold_block', 'rose_gold')
    craftingFixes('thermal_extra:soul_infused_nugget', 'thermal_extra:soul_infused_ingot', 'thermal_extra:soul_infused_block', 'soul_infused')
    craftingFixes('thermal_extra:shellite_nugget', 'thermal_extra:shellite_ingot', 'thermal_extra:shellite_block', 'shellite')
    craftingFixes('thermal_extra:twinite_nugget', 'thermal_extra:twinite_ingot', 'thermal_extra:twinite_block', 'twinite')
    craftingFixes('thermal_extra:dragonsteel_nugget', 'thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_block', 'dragonsteel')
    
    craftingFixes(null, 'powah:steel_energized', 'powah:energized_steel_block', 'energized_steel')

    let dustTags = AlmostUnified.getTags().filter(tag => {
        return /forge:dusts/.test(tag)
    })
    dustTags.forEach(tag => {
        let item = AlmostUnified.getPreferredItemForTag(tag)
        event.forEachRecipe({ output: item, input: ['#forge:ingots', '#forge:nuggets', '#forge:ores']}, recipe => {
            recipe.stage("ore_recipes")  
        })
    })
    
})




//Login Event

PlayerEvents.loggedIn(event => {

    const {server} = event
    var worldType = server.worldData.worldGenSettings().overworld().getTypeNameForDataFixer().toString().replace("Optional[ResourceKey[minecraft:worldgen/chunk_generator / ", "").replace("]]", "")

    if (!event.player.stages.has('ore_recipes')) {
        event.player.stages.add('ore_recipes')
    }

    if (!event.player.stages.has('starting_items')) {

        event.player.stages.add('starting_items')
        event.player.give('minecraft:wooden_axe')
        event.player.give('16x minecraft:apple')
        event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:world_types"}'))
        server.runCommandSilent(`gamerule doMobSpawning false`)
        server.runCommandSilent(`gamerule doTraderSpawning false`)
        server.runCommandSilent(`gamerule doWeatherCycle false`)

        //World Type Specific Items To Start With

        if (worldType.contains("minecraft:flat")) {
            event.player.give('1x minecraft:oak_sapling')   
        }
    }


    if (worldType.contains("hexlands:hexlands")) {
        event.player.tell('You are playing Techopolis 2 (Hexlands Mode)')
        event.player.stages.add('hexland_recipes')
    }

    if (worldType.contains("minecraft:flat")) {
        event.player.tell('You are playing Techopolis 2 (Superflat Mode). Additional recipes loaded :)')
        event.player.stages.add('superflat_recipes')        
    }

    if (worldType.contains("minecraft:noise")) {
        event.player.tell('You are playing Techopolis 2 (Default Mode)')
        event.player.stages.add('default_recipes')

    }

    if (worldType.contains("skyblockbuilder:noise_based")) {
        event.player.tell('You are playing Techopolis 2 (Skyblock Mode). Additional recipes loaded :)')
        event.player.stages.add('skyblock_recipes')

    }

    console.log(`Current world type is ${worldType}`)
})	

PlayerEvents.tick(event => {
    if (event.player.stages.has('no_hunger')) {
        event.player.potionEffects.add("saturation", 10, 0, false, false);
    }
    if (event.player.stages.has('speed_1')) {
        event.player.potionEffects.add("speed", 10, 0, false, false);
    }
    if (event.player.stages.has('speed_2')) {
        event.player.potionEffects.add("speed", 10, 1, false, false);
    }
    if (event.player.stages.has('speed_3')) {
        event.player.potionEffects.add("speed", 10, 2, false, false);
    }
})

BlockEvents.broken(event => {
    const { server, player } = event;
    const stages = {
      coal_and_lapis: { loot: 'techopolis:ores/coal_and_lapis'},
      copper_and_tin: { loot: 'techopolis:ores/copper_and_tin'},
      iron_and_aluminum: { loot: 'techopolis:ores/iron_and_aluminum' },
      redstone: { loot: 'techopolis:ores/redstone' },
      nickel: { loot: 'techopolis:ores/nickel' },
      silver_and_gold: { loot: 'techopolis:ores/silver_and_gold'},
      lead: { loot: 'techopolis:ores/lead' },
      crystal: { loot: 'techopolis:ores/crystal' },
      osmium: { loot: 'techopolis:ores/osmium' },
      uranium: { loot: 'techopolis:ores/uranium' },
      diamond_and_emerald: { loot: 'techopolis:ores/diamond_and_emerald'}
    };
  
    for (const [stage, { loot}] of Object.entries(stages)) {
      if (event.player.stages.has(stage)) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
          if (event.block.hasTag(`techopolis:colored_stone`)) {
            server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`);
            server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
          }
        }
      }
    }
})
  
  
  
  