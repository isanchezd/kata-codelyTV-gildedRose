import { UpgradeableItem } from "./upgradeable-item.class";

export class GildedRose {

    public updateQuality(items: UpgradeableItem[]): void{
        items.forEach(item => item.update());
    }

}
