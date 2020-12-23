import { expect } from 'chai';
import { Inventory } from '../app/entities/inventory/inventory';
import { StandardItem } from '../app/entities/item/standard-item';
import { GildedRose } from '../app/gilded-rose';
StandardItem

describe('Gilded Rose', function () {

    it('should foo', function() {
        const items = [new StandardItem('foo', 0, 0) ];
        const gildedRose = new GildedRose(items, new Inventory());
        expect(items[0].name).to.equal('foo');
    });

});
