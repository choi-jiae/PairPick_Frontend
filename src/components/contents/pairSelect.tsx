import React, { useState } from "react";
import "../../css/pairSelect.css";
import { Button } from "@mui/material";
interface PairSelectProps {
  role: string;
  actors: Array<string>;
  selectedActor: string;
  setActor: Function;
}

const PairSelect = ({
  role,
  actors,
  selectedActor,
  setActor,
}: PairSelectProps) => {
  return (
    <div className="pair-select">
      <div className="role">{role} 역</div>
      <div className="actor-select">
        {actors.map((actor, index) => (
          <Button
            key={index}
            className="actor-button"
            variant="outlined"
            onClick={() => setActor(actor === selectedActor ? "" : actor)}
            style={{
              border: "1px solid #DA98E7",
              borderRadius: "20px",
              color: actor === selectedActor ? "#713A7C" : "#DA98E7",
              fontFamily: "Pretendard-Bold",
              fontSize: "0.8rem",
              backgroundColor: actor === selectedActor ? "#E8BAFF" : "#FFFFFF",
              padding: "5px 14px",
              margin: 0,
            }}
          >
            {actor}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PairSelect;
