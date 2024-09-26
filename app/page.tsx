"use client";
import Alignment from "./components/Alignment";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import { useState } from "react";

export default function Home() {
  const [character, setCharacter] = useState({});
  const race = ["Dwarf", "Elf", "Halfling", "Human"]
  const handleAlignment = (item: string) => {
    setCharacter(prevState => ({
      ...prevState,
      alignment: item
    }));
  }

  const handleRace = (item: string) => {
    setCharacter(prevState => ({
      ...prevState,
      race: item
    }));
  }

  return (
    <div className="grid grid-rows-3 items-center justify-items-center min-h-screen">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Dropdown items={race} heading={"Select Race"} onChange={handleRace}></Dropdown>
        <Alignment onSelectItem={handleAlignment}/>
        <p>Testing: {JSON.stringify(character)}</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
