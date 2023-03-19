import { ReactElement } from "react";
import { OverlayTrigger, Tooltip as BootstrapTooltip } from "react-bootstrap";

type Position = "top" | "right" | "bottom" | "left";

interface TooltipProps {
  children: ReactElement;
  position: Position;
  innerText: string;
}

const Tooltip = ({ children, position, innerText }: TooltipProps) => {
  return (
    <OverlayTrigger
      placement={position}
      overlay={<BootstrapTooltip>{innerText}</BootstrapTooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

export default Tooltip;
