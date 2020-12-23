import { Upgradeable } from "../../interfaces/upgradeable.interface";

export abstract class Item implements Upgradeable{
    public name: string;
    public sellIn: number;
    public quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    public update() {}
}