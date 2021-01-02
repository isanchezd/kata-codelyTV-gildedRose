import { Item } from "./item.class";
import { UpgradeableItem } from "./upgradeable-item.class";

export class LegendaryItem extends UpgradeableItem {

    constructor(item: Item) {
        super(item);
    }

    public update() {}
    
}