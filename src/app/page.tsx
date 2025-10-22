"use client"
import CharacterCard from "components/CharacterCard";
import Loading from "components/Loading";
import type { Character } from "@/types/Character";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const getCharacter = async () => {
    setButtonDisabled(true)
    setCharacter(null)
    try{
      const randomId = Math.floor(Math.random() * 826) + 1;
      const resp = await axios.get(`https://rickandmortyapi.com/api/character/${randomId}`)
      setCharacter(resp.data)
    }catch(error){
      console.log(error);
    }finally{
      setButtonDisabled(false)
    }
  }

  return (
    <div className="container">
      <h1 className="text-xl font-bold">My Rick and Morty APP with NextJS</h1>
      {character ? <CharacterCard
        name={character.name}
        status={character.status}
        image={character.image} />
        : <Loading />}
      <button 
      className="p-3 bg-emerald-300 hover:bg-emerald-500 cursor-pointer rounded" 
      disabled={buttonDisabled}
      onClick={() => getCharacter()}>Generate New Character</button>
    </div>
  );
}
