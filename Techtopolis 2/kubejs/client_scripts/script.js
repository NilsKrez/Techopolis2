// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	event.hide('storagenetwork:inventory_remote')
	event.hide('storagenetwork:crafting_remote')
	event.hide('storagenetwork:picker_remote')
	event.hide('storagenetwork:collector_remote')
	event.hide('storagenetwork:builder_remote')
	event.hide('thermal:device_rock_gen')
	event.hide('ae2:facade')
})