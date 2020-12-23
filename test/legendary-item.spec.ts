import { expect } from 'chai';
import { LegendaryItem } from '../app/entities/item/legendary-item.class';

describe('Legendary Item', function () {

    it('After execute the update method the quality and the sellIn must be equal than initial values', 
    () => {
        const item = new LegendaryItem("+5 Dexterity Vest");
        item.update();

        expect(item.quality).to.equal(80);
        expect(item.sellIn).to.equal(1);
    });


});