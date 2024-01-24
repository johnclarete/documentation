import React from "react";
import Syntax from "../../Syntax";

const AppleEntitlements = () => {
  let src = `
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
  <plist version="1.0">
  <dict>
    <key>aps-environment</key>
    <string>development</string>
  </dict>
  </plist>  
  `;
  //com.apple.developer.usernotifications.time-sensitive
  return (<Syntax source={src} language="xml" />);
};
export default AppleEntitlements;