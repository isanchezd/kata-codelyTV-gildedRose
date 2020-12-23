import { Item } from './entities/item/item.class';
import { Inventory } from './entities/inventory/inventory';

export class GildedRose {

    private _inventory: Inventory;
    
    constructor(items = [] as Array<Item>, inventory: Inventory) {
        inventory.items = items;
        this._inventory = inventory;
    }

    updateQuality() {
        this._inventory.items.forEach((item: Item) => item.update());
    }
}
