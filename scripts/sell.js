const silo = extendContent(Block, "sell", {
    buildConfiguration(tile, table){
	//Code
    },
})

function convertitem(main, tile, value, item){
	if(tile.entity.items.total()>=value){
			const ticket = Vars.content.getByName(ContentType.item, "addmod-ticket");
			tile.entity.items.add(item, 1);
			main.tryDump(tile, item);
            tile.entity.items.remove(ticket,value)
        }
}
