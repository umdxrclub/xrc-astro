import React, { useEffect, useState } from "react";

type MainProps = {};

const Lab: React.FC<MainProps> = ({}) => {
  const [lab, setLab] = useState<string>("");

  useEffect(() => {
    fetch("https://umdxr.club/api/globals/lab/status")
      .then(r => r.text())
      .then(setLab)
  }, []);

  return <>Here is the current lab status: {lab}</>;
};

export default Lab;
