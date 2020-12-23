import { expect } from 'chai';
import { StandardItem } from '../app/entities/item/standard-item';

describe('Standar Item', function () {

    it('After execute the update method the quality and the sellIn must be minor than initial values', 
    () => {
        const initialQuality = 20;
        const initialSellIn = 10;

        const item = new StandardItem("+5 Dexterity Vest", initialSellIn, initialQuality)
        item.update();

        expect(item.quality).to.equal(initialQuality - 1);
        expect(item.sellIn).to.equal(initialSellIn - 1);
    });

    it('After execute the update method the quality cannot be minor than 0', 
    () => {
        const initialQuality = 0;
        const initialSellIn = 0;

        const item = new StandardItem("+5 Dexterity Vest", initialSellIn, initialQuality)
        item.update();

        expect(item.quality).to.equal(initialQuality);
    });

    it('The quality cannot be major than 50', 
    () => {
        const initialQuality = 52;
        const initialSellIn = 10;

        const item = new StandardItem("+5 Dexterity Vest", initialSellIn, initialQuality)
        item.update();

        expect(item.quality).to.equal(initialQuality);
    });

});
