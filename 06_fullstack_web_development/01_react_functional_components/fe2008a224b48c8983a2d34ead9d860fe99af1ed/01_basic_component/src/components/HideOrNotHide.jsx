import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [paragraph, setParagraph] = React.useState(true);

  return (
    <div>
      <button onClick={() => setParagraph(!paragraph)}>{paragraph ? <p>Hello!</p> : <></>}</button>
    </div>
  );
};
