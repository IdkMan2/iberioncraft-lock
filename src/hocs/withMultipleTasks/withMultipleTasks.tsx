import * as React from "react";
import {getDisplayName} from "../../utils/components-utils";
import {StandardEnum} from "../../utils/enums-utils";
import {MultipleTasksWrapper} from "./MultipleTasksWrapper";

export interface WithMultipleTasksProps<EnumT extends StandardEnum = StandardEnum> {
  tasks: Map<string, EnumT>;
  setTaskStatus: (taskName: string, newStatus: StandardEnum) => Promise<void>;
  isTaskDefined: (taskName: string) => boolean;
}

export function withMultipleTasks<EnumT extends StandardEnum>(defaultTasks: Map<string, EnumT>) {
  return function<PropsT extends WithMultipleTasksProps<EnumT> = WithMultipleTasksProps<EnumT>>(WrappedComponent: React.ComponentType<PropsT>) {
    type Ref = HTMLElement;
    type ForwardRefProps = Omit<PropsT, keyof WithMultipleTasksProps<EnumT>>;

    const forwardRefFunc = React.forwardRef<Ref, ForwardRefProps>((props, ref) => (
      <MultipleTasksWrapper<PropsT>
        defaultTasks={defaultTasks}
        WrappedComponent={WrappedComponent}
        forwardedRef={ref}
        {...(props as PropsT)}
      />
    ));

    forwardRefFunc.displayName = `withMultipleTasks(${getDisplayName(WrappedComponent)})`;

    return forwardRefFunc;
  };
}