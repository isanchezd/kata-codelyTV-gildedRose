import { Item } from "./item.class";

export class LegendaryItem extends Item {

    private static readonly MAX_QUALITY = 80;

    constructor(name: string) {
        super(name, 1, LegendaryItem.MAX_QUALITY);
    }
    
}