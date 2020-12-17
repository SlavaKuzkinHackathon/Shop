import React, { useRef, useEffect, useState } from "react";
import DailyIframe from "@daily-co/daily-js";

const DailyCo = ({ url }) => {
  const iframeRef = useRef(null);
  useEffect(() => {
    if (!url) {
      console.error("please set an url!");
      return;
    }
    const daily = DailyIframe.wrap(iframeRef.current, {
      showLeaveButton: true,
    });
    daily.join({ url });
    return () => {
      daily.destroy();
    };
  }, [url]);
  return (
    <iframe
      style={{ width: "80%", height: "50vh", border: 0 }}
      title="video call iframe"
      ref={iframeRef}
      allow="camera; microphone; fullscreen"
      key={url}
    />
  );
};

export default function App() {
  const [currentTable, setCurrentTable] = useState("srtoprWrordHePll77io");
  return (
    <div className="App">
      <button type="button" class="btn btn-danger btn-sm"
        onClick={() => {
          setCurrentTable(val =>
            val === "srtoprWrordHePll77io"
              ? "VW6PROWbuPUK6MkW7kdc"
              : "GHdsso84kddKUKL94kdk"
          );
        }}
      >
        Videocall/Chanel
      </button>
      <DailyCo url={`https://meetanyway.daily.co/${currentTable}`} />
    </div>
  );
}
