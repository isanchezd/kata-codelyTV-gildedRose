import { UpgradeableItem } from "./upgradeable-item.class";

export class ConjuredItem extends UpgradeableItem {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    protected _updateQuality() {
        if(this.quality > ConjuredItem.MIN_QUALITY && this.quality < ConjuredItem.MAX_QUALITY) {
            if(this.sellIn < 0) {
                if(this.quality > 1) {
                    this.quality -= (2 * 2);
                    
                } else {
                    this.quality -= ConjuredItem.QUALITY_CHANGE_VALUE;
                }
            } else {
                this.quality -= (ConjuredItem.QUALITY_CHANGE_VALUE * 2);
            }
            /*this.quality -= this.sellIn < 0 ? 
            this.quality > 1 ? 2 * 2 : ConjuredItem.QUALITY_CHANGE_VALUE * 2
            : ConjuredItem.QUALITY_CHANGE_VALUE; */
        }
    }
    
}