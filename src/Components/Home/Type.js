import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>    
    <Typewriter
      options={{
        strings: [
            "Istuti Maurya",
            "Harit Dobariya",
            "Karan Dattani",
            "Hetvi Prajapati",
            "Gungun Kasera",
            "Manya Solanki"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </>


  );
}

export default Type;
