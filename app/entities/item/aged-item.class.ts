import { UpgradeableItem } from "./upgradeable-item.class";

export class AgedItem extends UpgradeableItem {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    protected _updateQuality() {
        if (this.quality > UpgradeableItem.MIN_QUALITY && this.quality < UpgradeableItem.MAX_QUALITY) {
            this.quality += this.sellIn < 0 ? 2 : AgedItem.QUALITY_CHANGE_VALUE;
        }
    }

}