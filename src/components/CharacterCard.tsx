import type { Character } from "@/types/Character"

export default function CharacterCard({name, status, image}: Character){
    return (
        <div className="container bg-stone-300 shadow-lg shadow-gray-400 flex items-center p-3">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{status}</p>
        </div>
    )
} 