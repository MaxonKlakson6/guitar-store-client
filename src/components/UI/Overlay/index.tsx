import { ReactNode, useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { Placement, Trigger } from "src/components/UI/Overlay/types";

interface OverlayProps {
  children: ReactNode;
  overlay: ReactNode;
  trigger: Trigger | Trigger[];
  placement: Placement;
  popoverClassName?: string;
}

const Overlay = ({
  children,
  overlay,
  trigger,
  placement,
  popoverClassName,
}: OverlayProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleShow = () => setIsShow(true);
  const handleHide = () => setIsShow(false);

  return (
    <OverlayTrigger
      show={isShow}
      trigger={trigger}
      placement={placement}
      overlay={
        <Popover
          className={popoverClassName}
          onMouseOver={handleShow}
          onMouseLeave={handleHide}
        >
          {overlay}
        </Popover>
      }
    >
      {(ref, ...rest) => (
        <span
          {...ref}
          {...rest}
          onMouseOver={handleShow}
          onMouseLeave={handleHide}
        >
          {children}
        </span>
      )}
    </OverlayTrigger>
  );
};

export default Overlay;
