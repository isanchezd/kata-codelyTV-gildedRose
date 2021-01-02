import { Item } from "./item.class";
import { UpgradeableItem } from "./upgradeable-item.class";

export class AgedItem extends UpgradeableItem {
    private static readonly DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD: number = 0;

    constructor(item: Item) {
        super(item);
    }

    public update() {
        this.decreaseSellIn();
        this.increaseQuality();

        if(this.SellIn <  AgedItem.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD) {
            this.increaseQuality();
        }
    }

}