import type PlayerInterface from "./interface/PlayerStat";
import type {ShopInterface, UpgradsType, GeneratorType} from "./interface/ShopObject";


export const player: PlayerInterface = {
    cookies: 0,
    clicked: 0,
    perSecCookie: 0,
    perClickCookie: 1,
    clickAddon: 0,
    clickCPS: 0,
    multiplier: 1,
};

export const shop: ShopInterface = {
    upgrades: [
        {
            price: 100,
            type: 'multi',
            value: 2,
            amount: 0,
            itemType: 'upgrade',
        },
        {
            price: 500,
            type: 'multi',
            value: 2,
            amount: 0,
            itemType: 'upgrade',
        },
        {
            price: 2500,
            type: 'addCPS',
            value: 0.25,
            amount: 0,
            itemType: 'upgrade',
        },
        {
            price: 12500,
            type: 'multi',
            value: 2,
            amount: 0,
            itemType: 'upgrade',
        },
        {
            price: 50000,
            type: 'addCPS',
            value: 0.25,
            amount: 0,
            itemType: 'upgrade',
        },
        {
            price: 100000,
            type: 'addCPS',
            value: 0.25,
            amount: 0,
            itemType: 'upgrade',
        },
        {
            price: 250000,
            type: 'multi',
            value: 2,
            amount: 0,
            itemType: 'upgrade',
        },
        {
            price: 1000000,
            type: 'add',
            value: 1000,
            amount: 0,
            itemType: 'upgrade',
        },
    ],
    generators: [
        {
            price: 15,
            priceInc: 1.1,
            perSecCookie: 0.1,
            amount: 0,
            itemType: 'generator',
        },
        {
            price: 100,
            priceInc: 1.1,
            perSecCookie: 1,
            amount: 0,
            itemType: 'generator',
        },
        {
            price: 1000,
            priceInc: 1.1,
            perSecCookie: 5,
            amount: 0,
            itemType: 'generator',
        },
        {
            price: 10000,
            priceInc: 1.1,
            perSecCookie: 50,
            amount: 0,
            itemType: 'generator',
        },
        {
            price: 100000,
            priceInc: 1.1,
            perSecCookie: 300,
            amount: 0,
            itemType: 'generator',
        },
        {
            price: 1000000,
            priceInc: 1.1,
            perSecCookie: 1500,
            amount: 0,
            itemType: 'generator',
        },
        {
            price: 20000000,
            priceInc: 1.1,
            perSecCookie: 7500,
            amount: 0,
            itemType: 'generator',
        },
        {
            price: 25000000,
            priceInc: 1.1,
            perSecCookie: 50000,
            amount: 0,
            itemType: 'generator',
        },
        {
            price: 5000000000,
            priceInc: 1.1,
            perSecCookie: 250000,
            amount: 0,
            itemType: 'generator',
        },
        {
            price: 50000000000,
            priceInc: 1.1,
            perSecCookie: 1000000,
            amount: 0,
            itemType: 'generator',
        },
    ],
}