import { UpgradeableItem } from "./upgradeable-item.class";

export class StandardItem extends UpgradeableItem { 

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }
    
}