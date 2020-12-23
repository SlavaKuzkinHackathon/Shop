import React, { useRef, useEffect, useState } from "react";
import DailyIframe from "@daily-co/daily-js";
import { Card, Button,} from 'react-bootstrap'

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
    <div>
      <Card className='my-6 p-6 rounded'>
        <iframe
          style={{ width: "100%", height: "80vh", border: 0 }}
          title="video call iframe"
          ref={iframeRef}
          allow="camera; microphone; fullscreen"
          key={url}
        />
      </Card>
    </div>
  );
};

export default function App() {
  const [currentTable, setCurrentTable] = useState("srtoprWrordHePll77io");
  return (
    <div className="App">
      <Button className='my-6' type='button'
        onClick={() => {
          setCurrentTable(val =>
            val === "srtoprWrordHePll77io"
              ? "VW6PROWbuPUK6MkW7kdc"
              : "GHdsso84kddKUKL94kdk"
          );
        }}
      >
        Videocall/Chanel
      </Button>
      <DailyCo url={`https://meetanyway.daily.co/${currentTable}`} />
    </div>
  );
}
