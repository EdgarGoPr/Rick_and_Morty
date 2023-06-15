import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <Card 
      key = {character?.id}
      id = {character?.id}
      name = {character?.name}
      status = {character?.status}
      species = {character?.species}
      gender = {character?.gender}
      origin = {character?.origin?.name}
      image = {character?.image}
      />
    </div>
  );
}
