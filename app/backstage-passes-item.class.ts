import { Item } from "./item.class";
import { UpgradeableItem } from "./upgradeable-item.class";

export class BackstagePassesItem extends UpgradeableItem {
    private static readonly DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
    private static readonly TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;
    private static readonly QUALITY_RESET_SELL_IN_THRESHOLD = 0;

    constructor(item: Item) {
        super(item);
    }

    public update(): void {
        this.decreaseSellIn();

        this.increaseQuality();

        if (this.SellIn < BackstagePassesItem.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
            this.increaseQuality();
        }

        if (this.SellIn < BackstagePassesItem.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
            this.increaseQuality();
        }

        if (this.SellIn < BackstagePassesItem.QUALITY_RESET_SELL_IN_THRESHOLD) {
            this.resetQuality();
        }
    }
}