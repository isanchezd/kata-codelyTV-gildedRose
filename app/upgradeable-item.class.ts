import { Item } from "./item.class";

export abstract class UpgradeableItem extends Item {
    protected static readonly MAX_QUALITY: number = 50;
    protected static readonly MIN_QUALITY: number = 0;

    protected item: Item;

    constructor(item: Item) {
        super(item.name, item.sellIn, item.quality);
        
        this.item = item;
    }

    public abstract update(): void;

    public get SellIn(): number {
        return this.item.sellIn;
    }

    protected decreaseSellIn(): void {
        this.item.sellIn -= 1; 
    }

    protected increaseQuality(): void {
        if (this.item.quality < UpgradeableItem.MAX_QUALITY) {
            this.item.quality += 1;
        }
    }

    protected decreaseQuality(): void {
        if (this.item.quality > UpgradeableItem.MIN_QUALITY) {
            this.item.quality -= 1;
        }
    }

    protected resetQuality(): void {
        this.item.quality = 0;
    }

} 