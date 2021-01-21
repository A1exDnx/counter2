import React from "react";

const BtnLess = (props) => {
  return (
    <>
      <button
        className={props.item >= 1 ? "btn-1" : "hide"}
        onClick={() => {
          const newCounters = [...props.counters]; // On créer un nouveau compteur où l'on copie le compteur initial
          newCounters[props.index]--; // On décrémente ce compteur relatif à l'index mapé
          props.setCounters(newCounters); // On transmet le changement par setCounters
        }}
      >
        -
      </button>
    </>
  );
};

export default BtnLess;
