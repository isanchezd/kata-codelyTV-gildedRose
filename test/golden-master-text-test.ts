import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/entities/item/item.class';
import { StandardItem } from '../app/entities/item/standard-item';
import { LegendaryItem } from '../app/entities/item/legendary-item.class';
import { ConjuredItem } from '../app/entities/item/conjured-item.class';
import { AgedItem } from '../app/entities/item/aged-item.class';
import { Inventory } from '../app/entities/inventory/inventory';


const items: Item[] = [
    new StandardItem("+5 Dexterity Vest", 10, 20), //
    new AgedItem("Aged Brie", 2, 0), //
    new StandardItem("Elixir of the Mongoose", 5, 7), //
    new LegendaryItem("Sulfuras, Hand of Ragnaros"), //
    new LegendaryItem("Sulfuras, Hand of Ragnaros"),
    new StandardItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new StandardItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new StandardItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    new ConjuredItem("Conjured Mana Cake", 3, 6)
];


const gildedRose = new GildedRose(items, new Inventory());
var days: number = 2;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach((element: Item) => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
    });
    console.log();
    gildedRose.updateQuality();
}