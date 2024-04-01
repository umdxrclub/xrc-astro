import React, { useEffect, useState } from "react";

type MainProps = {
  statusUrl: string
};

type LabStatus = {
  open: boolean,
  numberOfMembers: number
}

const LabStatus: React.FC<MainProps> = ({statusUrl}) => {
  const [lab, setLab] = useState<LabStatus | undefined>(undefined);
  const open = lab?.open ?? false;

  useEffect(() => {
    fetch(statusUrl)
      .then(r => r.json())
      .then(setLab)
  }, [statusUrl]);

  return lab ? <>
  <h3 className="lab-status-header">The XR Lab is Currently</h3>
  <h1 className={open ? "lab-open" : "lab-closed"}>{open ? "Open" : "Closed"}</h1>
  <h4>{open ? `${lab.numberOfMembers} members` : "Come back soon"}</h4> 
  </> : <>
    <h3>Loading</h3>
  </>
};

export default LabStatus;
