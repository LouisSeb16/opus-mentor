import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const TawkToWidget = () => {
  const tawkMessengerRef = useRef<any | HTMLButtonElement>();

  return (
    <>
      <TawkMessengerReact
        propertyId="659bc76b8d261e1b5f50aa71"
        widgetId="1hjk860af"
        ref={tawkMessengerRef}
      />
    </>
  );
};

export default TawkToWidget;
