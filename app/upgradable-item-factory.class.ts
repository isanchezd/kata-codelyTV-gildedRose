import { AgedItem } from "./aged-item.class";
import { BackstagePassesItem } from "./backstage-passes-item.class";
import { Item } from "./item.class";
import { LegendaryItem } from "./legendary-item.class";
import { StandardItem } from "./standard-item";

export class UpgradableItemFactory {
    private static readonly AGED_BRIE = "Aged Brie";
    private static readonly BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
    private static readonly SULFURAS = "Sulfuras, Hand of Ragnaros";

    public static updatableItem(item: Item) {
        switch (item.name) {
            case UpgradableItemFactory.AGED_BRIE:
                return new AgedItem(item);
            case UpgradableItemFactory.BACKSTAGE_PASSES:
                return new BackstagePassesItem(item);
            case UpgradableItemFactory.SULFURAS:
                return new LegendaryItem(item);
            default:
                return new StandardItem(item);
        }
    }

    public static List (itemsList: Item[]) {
        return itemsList.map(UpgradableItemFactory.updatableItem);
    }

}