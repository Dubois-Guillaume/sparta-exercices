import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  return games.filter((game) => {
    if (game.platform === platform) {
      return true;
    } else {
      return false;
    }
  });
}
