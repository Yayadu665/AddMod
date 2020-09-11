const silo = extendContent(Block, "sell", {
    buildConfiguration(tile, table){
		//Copper contre 2 tickets
        table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            convertitem(this, tile, 2, Items.copper);
        })).size(50).disabled(boolf(b => tile.entity != null && !tile.entity.cons.valid()))
		//Lead contre 4 tickets
		table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            convertitem(this, tile, 4, Items.lead);
        })).size(50).disabled(boolf(b => tile.entity != null && !tile.entity.cons.valid()))
		//Titanium contre 10 tickets
		table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            convertitem(this, tile, 10, Items.titanium);
        })).size(50).disabled(boolf(b => tile.entity != null && !tile.entity.cons.valid()))
		//Coal contre 6 tickets
		table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            convertitem(this, tile, 6, Items.coal);
        })).size(50).disabled(boolf(b => tile.entity != null && !tile.entity.cons.valid()))
		//Sand contre 6 tickets
		table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            convertitem(this, tile, 6, Items.sand);
        })).size(50).disabled(boolf(b => tile.entity != null && !tile.entity.cons.valid()))
		//Graphite contre 12 tickets
		table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            convertitem(this, tile, 12	, Items.graphite);
        })).size(50).disabled(boolf(b => tile.entity != null && !tile.entity.cons.valid()))
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
