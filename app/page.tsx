"use client";

import { useEffect, useState } from "react";
import { GameCardNew } from "./components/GameCardNew";
import { fetchGames, getFilteredGames } from "./lib/api";

export default function Home() {
  const [previousGame, setPreviousGame] = useState<any>(null);
  const [nextGame, setNextGame] = useState<any>(null);

  useEffect(() => {
    async function loadGames() {
      try {
        const games = await fetchGames();
        const { previousGame, nextGame } = getFilteredGames(games.response);
        setPreviousGame(previousGame);
        setNextGame(nextGame);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    }

    loadGames();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between px-24 py-12">
      <h2 className="text-3xl font-medium text-left w-full mb-12">Próximo Jogo</h2>
      {nextGame ? (
        <GameCardNew.Root game={nextGame} />
      ) : (
        <p className="font-thin">Não há próximo jogo.</p>
      )}
      <h2 className="text-3xl font-medium text-left w-full my-12">Jogo Anterior</h2>
      {previousGame ? (
        <GameCardNew.Root game={previousGame} />
      ) : (
        <p className="font-thin">Não há jogo anterior.</p>
      )}
    </main>
  );
}
