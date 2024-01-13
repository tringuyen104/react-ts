import React, { useState } from "react";
import { usePopper } from "react-popper";

type TooltipProps = {
    trigger: React.ReactNode,
    placement?: string,
    children?: React.ReactNode
};

const Tooltip = ({placement = 'top', children, trigger }: TooltipProps) => {
    const [referenceElement, setReferenceElement] = React.useState(null);
    const [popperElement, setPopperElement] = React.useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });
    return (
        <div className="tooltip">
            <div>
                <div ref={setReferenceElement}>{trigger}</div>

                {children && (
                    <div
                        ref={setPopperElement}
                        style={{
                            ...styles.popper,
                            zIndex: 9999,
                        }}
                        {...attributes.popper}
                    >
                        {children}
                        <div ref={setArrowElement} style={styles.arrow} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tooltip;