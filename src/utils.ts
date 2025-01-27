import type PlayerInterface from "./interface/PlayerStat";
import type { ShopInterface } from "./interface/ShopObject";

export function convertNumber(cookie: number) {
    if (cookie >= 1000000000000000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000000000000000) / 100 + 'Vig');
    if (cookie >= 1000000000000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000000000000) / 100 + 'NovDec');
    if (cookie >= 1000000000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000000000) / 100 + 'OctDec');
    if (cookie >= 1000000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000000) / 100 + 'SepDec');
    if (cookie >= 1000000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000000) / 100 + 'SexDec');
    if (cookie >= 1000000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000000) / 100 + 'QuinDec');
    if (cookie >= 1000000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000000) / 100 + 'Quat');
    if (cookie >= 1000000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000000) / 100 + 'Tre');
    if (cookie >= 1000000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000000) / 100 + 'Duo');
    if (cookie >= 1000000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000000) / 100 + 'Und');
    if (cookie >= 1000000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000000) / 100 + 'Dec');
    if (cookie >= 1000000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000000) / 100 + 'Non');
    if (cookie >= 1000000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000000) / 100 + 'Oct');
    if (cookie >= 1000000000000000000000000) return String(Math.round(cookie / 10000000000000000000000) / 100 + 'Sep');
    if (cookie >= 1000000000000000000000) return String(Math.round(cookie / 10000000000000000000) / 100 + 'Sex');
    if (cookie >= 1000000000000000000) return String(Math.round(cookie / 10000000000000000) / 100 + 'Qui');
    if (cookie >= 1000000000000000) return String(Math.round(cookie / 10000000000000) / 100 + 'Qua');
    if (cookie >= 1000000000000) return String(Math.round(cookie / 10000000000) / 100 + 'Tri');
    if (cookie >= 1000000000) return String(Math.round(cookie / 10000000) / 100 + 'Bil');
    if (cookie >= 1000000) return String(Math.round(cookie / 10000) / 100 + 'Mil');
    if (cookie >= 1000) return String(Math.round(cookie / 10) / 100 + 'k');
    if (cookie < 1000) return String(Math.round(cookie * 10) / 10);
  }

export function savePlayerStats(playSnapshot: PlayerInterface) {
  const playerStatsString = JSON.stringify(playSnapshot);
  localStorage.setItem('game.player', playerStatsString);
}
export function saveShopStatus(shopSnapshot: ShopInterface) {
  const shopStatusString = JSON.stringify(shopSnapshot);
  localStorage.setItem('game.shop', shopStatusString)
}