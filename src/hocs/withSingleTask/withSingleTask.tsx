import * as React from "react";
import {getDisplayName} from "../../utils/components-utils";
import {SingleTaskWrapper} from "./SingleTaskWrapper";
import {StandardEnum} from "../../utils/enums-utils";

export interface WithSingleTaskProps<EnumT extends StandardEnum = StandardEnum> {
  taskStatus: EnumT;
  setTaskStatus: (newTaskStatus: EnumT) => Promise<void>;
}

export function withSingleTask<EnumT extends StandardEnum>(defaultTaskStatus: EnumT) {
  return function<PropsT extends WithSingleTaskProps<EnumT> = WithSingleTaskProps<EnumT>>(WrappedComponent: React.ComponentType<PropsT>) {
    type Ref = HTMLElement;
    type ForwardRefProps = Omit<PropsT, keyof WithSingleTaskProps<EnumT>>;

    const forwardRefFunc = React.forwardRef<Ref, ForwardRefProps>((props, ref) => (
      <SingleTaskWrapper<PropsT>
        defaultTaskStatus={defaultTaskStatus}
        WrappedComponent={WrappedComponent}
        forwardedRef={ref}
        {...(props as PropsT)}
      />
    ));

    forwardRefFunc.displayName = `withSingleTask(${getDisplayName(WrappedComponent)})`;

    return forwardRefFunc;
  };
}