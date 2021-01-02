import { expect } from 'chai'
import { GildedRose } from '../app/gilded-rose.class';
import { Item } from '../app/item.class';
import { UpgradableItemFactory } from '../app/upgradable-item-factory.class';
import { UpgradeableItem } from '../app/upgradeable-item.class';


describe('GildedRose Suite', () => {

    it('Sell in value should be decreased', () => {
        const gildedRose: GildedRose = new GildedRose();
        const whateverItem: Item = new Item("whatever", 10, 0);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(whateverItem);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(whateverItem.sellIn).to.equal(9);
    });

    it('Quality value should be decreased', () => {
        const gildedRose: GildedRose = new GildedRose();
        const whateverItem: Item = new Item("whatever", 1, 10);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(whateverItem);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(whateverItem.quality).to.equal(9);
    });

    it('Quality value decreases twice as much when sell by is passed', () => {
        const gildedRose: GildedRose = new GildedRose();
        const whateverItem: Item = new Item("whatever", 0, 10);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(whateverItem);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(whateverItem.quality).to.equal(8);
    });


    it('Quality is never negative', () => {
        const gildedRose: GildedRose = new GildedRose();
        const whateverItem: Item = new Item("whatever", 0, 0);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(whateverItem);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(whateverItem.quality).to.equal(0);
    });

    it('Aged brie increases quality with age', () => {
        const gildedRose: GildedRose = new GildedRose();
        const agedBrie: Item = new Item("Aged Brie", 0, 0);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(agedBrie);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(agedBrie.quality).to.equal(2);
    });

    it('Qualify never increases past fifty', () => {
        const gildedRose: GildedRose = new GildedRose();
        const agedBrie: Item = new Item("Aged Brie", 5, 50);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(agedBrie);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(agedBrie.quality).to.equal(50);
    });

    it('Sulfuras never changes', () => {
        const gildedRose: GildedRose = new GildedRose();
        const agedBrie: Item = new Item("Sulfuras, Hand of Ragnaros", 0, 25);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(agedBrie);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(agedBrie.quality).to.equal(25);
        expect(agedBrie.sellIn).to.equal(0);

    });

    it('Backstage pass increases quality by one if sell by greater than ten', () => {
        const gildedRose: GildedRose = new GildedRose();
        const backstagePasses: Item = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(backstagePasses);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(backstagePasses.quality).to.equal(21);
    });

    it('Backstage pass increases quality by two if sell by smaller than ten', () => {
        const gildedRose: GildedRose = new GildedRose();
        const backstagePasses: Item = new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(backstagePasses);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(backstagePasses.quality).to.equal(22);
    });

    it('Backstage pass increases quality by three if sell by smaller than five', () => {
        const gildedRose: GildedRose = new GildedRose();
        const backstagePasses: Item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(backstagePasses);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(backstagePasses.quality).to.equal(23);
    });

    it('Backstage pass loses value after sell by passes', () => {
        const gildedRose: GildedRose = new GildedRose();
        const backstagePasses: Item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);
        const updatableItem: UpgradeableItem = UpgradableItemFactory.updatableItem(backstagePasses);
        const itemList: UpgradeableItem[] = [updatableItem];

        gildedRose.updateQuality(itemList);

        expect(backstagePasses.quality).to.equal(0);
    });

});