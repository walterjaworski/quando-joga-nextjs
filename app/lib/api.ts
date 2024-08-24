// import { teamAliases } from "./teamsAlias";

// export function applyTeamAliases(games: any[]) {
//   return games.map(game => {
//     const homeTeam = teamAliases[game.teams.home.name] || game.teams.home.name;
//     const awayTeam = teamAliases[game.teams.away.name] || game.teams.away.name;

//     // return {
//     //   ...game,
//     //   fixture: {
//     //     ...game.fixture,
//     //     homeTeam: homeTeam,
//     //     awayTeam: awayTeam
//     //   }
//     // };

//     return {
//       ...game,
//       teams: {
//         // ...game.teams,
//         // homeTeam: homeTeam,
//         // awayTeam: awayTeam
//         away: {
//           ...game.teams.away,
//           name: awayTeam
//         },
//         home: {
//           ...game.teams.home,
//           name: homeTeam
//         },
//       }
//     };
//     // console.log({ response });

//     // return null;
//   });
// }

export async function fetchGames() {
  const res = await fetch("https://quando-joga-json.vercel.app/matches");
  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }
  const data = await res.json();
  // console.log("apply alias:", applyTeamAliases(data));
  return data;
}

export function getFilteredGames(games: any[]) {
  const today = new Date();

  const sortedGames = games
    .map(game => ({
      ...game,
      date: new Date(game.fixture.date)
    }))
    .sort((a, b) => a.date - b.date);

  const previousGame = sortedGames
    .filter(game => game.date < today)
    .slice(-1)[0];

  const nextGame = sortedGames
    .filter(game => game.date >= today)
    .slice(0, 1)[0];

  return {
    previousGame,
    nextGame
  };
}
