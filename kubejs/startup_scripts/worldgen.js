// priority: 100

console.info('Hello again im removing ores from your world stand by')

WorldgenEvents.remove(event => {
    event.removeOres(ores => {
      ores.blocks = JsonIO.read('kubejs/ore_tags.json').tags
    })
})

ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent', event => {
  event.canceled = true
})