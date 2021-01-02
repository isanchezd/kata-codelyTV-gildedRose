import { Item } from "./item.class";
import { UpgradeableItem } from "./upgradeable-item.class";

export class ConjuredItem extends UpgradeableItem {
    private static readonly DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD: number = 0;

    constructor(item: Item) {
        super(item);
    }

    public update() {
        this.decreaseSellIn();
        this.decreaseConjuredQuality();

        if(this.SellIn < ConjuredItem.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD) {
            this.decreaseConjuredQuality();
        }        
        
    }

    private decreaseConjuredQuality() {
        if (this.item.quality < UpgradeableItem.MIN_QUALITY) {
            this.item.quality -= 1 * 2;
        }
    }
    
}