import React from "react";

const BtnReset = (props) => {
  return (
    <>
      <button
        className="reset"
        onClick={() => {
          const newCounters = [...props.counters]; // On créer un nouveau compteur où l'on copie le compteur initial
          newCounters[props.index] = 0; // On incrémente ce compteur relatif à l'index mapé
          props.setCounters(newCounters); // On transmet le changement par setCounters
        }}
      >
        Reset
      </button>
    </>
  );
};

export default BtnReset;
