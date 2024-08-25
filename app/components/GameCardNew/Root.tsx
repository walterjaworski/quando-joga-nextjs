import { leagueAliases, teamAliases } from "@/app/lib/aliases";
import { formatDate, formatTime } from "@/app/lib/utils";
import Image from "next/image";

export default function GameCardRoot({
  game,
}: Readonly<{
  game: any;
}>) {
  console.log(game);
  function teamNameClasses(winner: boolean | null) {
    if (winner === true) return "font-bold";
    return "font-thin";
  }

  return (
    <>
      <article className="flex flex-col gap-4 mx-auto bg-white p-6 py-4 rounded-md shadow-md w-6/12">
        <header className="flex justify-between text-sm font-light">
          <div>
            {leagueAliases[game.league.name]}
          </div>
          <div >
            <span>
              {formatDate(game.date)}
            </span>
            <span className="data">
              {formatTime(game.date)}h
            </span>
          </div>
        </header>
        <main className="flex flex-col gap-8 justify-center items-center">
          <div className="grid grid-cols-[1fr_auto_1fr] justify-items-center items-center w-full">
            <div className="flex items-center justify-end w-full">
              <div className="flex gap-4 items-center">
                <Image src={game.teams.home.logo} alt={game.teams.home.name} className={game.teams.home.id === 134 ? "w-14" : "max-w-8 max-y-8"} />
                <span className={teamNameClasses(game.teams.home.winner)}>
                  {teamAliases[game.teams.home.name] || game.teams.home.name}
                </span>
              </div>
              <div className="ml-6">
                <span className="text-2xl font-bold">
                  {game.goals.home !== null ? game.goals.home : "0"}
                </span>
              </div>
            </div>
            <div className="w-16 flex justify-center">
              <span className="text-lg font-xl text-slate-300">X</span>
            </div>
            <div className="flex items-center justify-start w-full">
              <div className="mr-6">
                <span className="text-2xl font-bold">
                  {game.goals.away !== null ? game.goals.away : "0"}
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <span className={teamNameClasses(game.teams.away.winner)}>
                  {teamAliases[game.teams.away.name] || game.teams.away.name}
                </span>
                <Image src={game.teams.away.logo} alt={game.teams.away.name} className={game.teams.away.id === 134 ? "w-14" : "max-w-8 max-y-8"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center text-sm font-light">
            <span>{game.fixture.venue.name}</span>
            <span>{game.fixture.venue.city}</span>
          </div>
        </main>
      </article>
    </>
  );
}
