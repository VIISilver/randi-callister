import React from "react";

import Wifi from "./Wifi";
import Phone from "./Phone";
import Trash from "./Trash";
import Message from "./Message";
import Envelope from "./Envelope";

const Icon = props => {
  switch (props.name) {
    case "phone":
      return <Phone {...props} />;
    case "wifi":
      return <Wifi {...props} />;
    case "trash":
      return <Trash {...props} />;
    case "message":
      return <Message {...props} />;
    case "envelope":
      return <Envelope {...props} />;
    default:
      return;
  }
};

export default Icon;
