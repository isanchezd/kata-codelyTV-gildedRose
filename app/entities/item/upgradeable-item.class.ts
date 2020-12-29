import { Item } from "./item.class";

export class UpgradeableItem extends Item {

    protected static readonly MAX_QUALITY = 50;
    protected static readonly MIN_QUALITY = 0;
    protected static readonly QUALITY_CHANGE_VALUE = 1;


    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    public update() {
        this._updateSellIn();
        this._updateQuality();
    }

    protected _updateSellIn() {
        this.sellIn -= 1; 
    }

    protected _updateQuality() {
        if (this.quality > UpgradeableItem.MIN_QUALITY && this.quality < UpgradeableItem.MAX_QUALITY) {
            this.quality -= this.sellIn < 0 ? 
            (this.quality > 1 ? UpgradeableItem.QUALITY_CHANGE_VALUE * 2 : UpgradeableItem.QUALITY_CHANGE_VALUE) 
            : UpgradeableItem.QUALITY_CHANGE_VALUE;
        }
    }

} 