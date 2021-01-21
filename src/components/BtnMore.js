import React from "react";

const BtnMore = (props) => {
  return (
    <>
      <button
        className={props.item <= 9 ? "btn-1" : "hide"}
        onClick={() => {
          const newCounters = [...props.counters]; // On créer un nouveau compteur où l'on copie le compteur initial
          newCounters[props.index]++; // On incrémente ce compteur relatif à l'index mapé
          props.setCounters(newCounters); // On transmet le changement par setCounters
        }}
      >
        +
      </button>
    </>
  );
};

export default BtnMore;
