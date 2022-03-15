import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [paragraph, setParagraph] = React.useState();

  return (
    <div>
      <button onClick={() => setParagraph("bonjour")}>{paragraph}</button>
    </div>
  );
};
