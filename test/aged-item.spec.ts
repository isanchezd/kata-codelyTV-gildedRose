import { expect } from 'chai';
import { AgedItem } from '../app/entities/item/aged-item.class';

describe('Aged Item', function () {

    it('After execute the update method the quality must be major than initial value and the sellIn must be minor than initial values', 
    () => {
        const initialQuality = 20;
        const initialSellIn = 10;

        const item = new AgedItem("+5 Dexterity Vest", initialSellIn, initialQuality)
        item.update();

        expect(item.quality).to.equal(initialQuality + 1);
        expect(item.sellIn).to.equal(initialSellIn - 1);
    });

    it('The quality cannot be major than 50', 
    () => {
        const initialQuality = 52;
        const initialSellIn = 10;

        const item = new AgedItem("+5 Dexterity Vest", initialSellIn, initialQuality)
        item.update();

        expect(item.quality).to.equal(initialQuality);
    });

});
