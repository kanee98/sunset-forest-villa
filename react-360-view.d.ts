declare module "react-360-view" {
  import * as React from "react";

  interface React360ViewerProps {
    amount: number;
    imagePath: string;
    fileName: string;
    autoplay?: boolean;
    loop?: boolean;
    width?: number | string;
    height?: number | string;
    style?: React.CSSProperties;
  }

  export default class React360Viewer extends React.Component<React360ViewerProps> {}
}