import { Item } from "./item.class";

export class LegendaryItem extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }
    
}