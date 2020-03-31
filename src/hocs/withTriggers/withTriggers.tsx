import * as React from "react";
import {getDisplayName} from "../../utils/components-utils";
import {TriggersMap, TriggersObj, TriggersWrapper} from "./TriggersWrapper";
import {StandardEnum} from "../../utils/enums-utils";

export interface WithTriggersProps<TriggerValT> {
  triggers: TriggersMap<TriggerValT>;
  setTrigger: (triggerName: StandardEnum, newValue: TriggerValT, timeout?: number) => Promise<void>;
  clearTrigger: (triggerName: StandardEnum) => Promise<void>;
  clearAllTriggers: () => Promise<void>;
  isTriggerDefined: (triggerName: StandardEnum) => boolean;
}

export function withTriggers<TriggerValT>(defaultTriggers: TriggersObj<TriggerValT> | TriggersMap<TriggerValT> = new Map<StandardEnum, TriggerValT>()) {
  return function<PropsT extends WithTriggersProps<TriggerValT> = WithTriggersProps<TriggerValT>>(WrappedComponent: React.ComponentType<PropsT>) {
    type Ref = HTMLElement;
    type ForwardRefProps = Omit<PropsT, keyof WithTriggersProps<TriggerValT>>;

    const forwardRefFunc = React.forwardRef<Ref, ForwardRefProps>((props, ref) => (
      <TriggersWrapper<PropsT, TriggerValT>
        defaultTriggers={defaultTriggers}
        WrappedComponent={WrappedComponent}
        forwardedRef={ref}
        {...(props as PropsT)}
      />
    ));

    forwardRefFunc.displayName = `withTriggers(${getDisplayName(WrappedComponent)})`;

    return forwardRefFunc;
  };
}