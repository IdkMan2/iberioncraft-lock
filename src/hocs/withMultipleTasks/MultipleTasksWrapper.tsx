import React, {Ref} from "react";
import {StandardEnum} from "../../utils/enums-utils";
import {getDisplayName} from "../../utils/components-utils";

type RefType = Ref<HTMLElement>;
type TasksMap = Map<string, StandardEnum>;
interface TasksObj {
  [name: string]: StandardEnum,
}
interface P<PropsT> {
  defaultTasks: TasksObj | TasksMap;
  WrappedComponent: React.ComponentType<PropsT>;
  forwardedRef: RefType;
}
interface S {
  tasks: TasksMap;
}

export class MultipleTasksWrapper<PropsT> extends React.Component<P<PropsT>, S> {
  private mounted: boolean = false;

  constructor(props: P<PropsT>) {
    super(props);
    const {defaultTasks} = this.props;
    let tasks;
    if(defaultTasks instanceof Map) {
      tasks = defaultTasks;
    } else {
      tasks = new Map(Object.entries(defaultTasks));
    }
    this.state = {
      tasks: tasks,
    };
    this.setTaskStatus = this.setTaskStatus.bind(this);
    this.isTaskDefined = this.isTaskDefined.bind(this);
  }

  private async setTaskStatus(taskName: string, newStatus: StandardEnum): Promise<void> {
    if(!this.mounted) {
      throw new Error(`Próba ustanowienia zadania dla odmontowanego komponentu: ${getDisplayName(this.props.WrappedComponent)}`);
    } else {
      await this.setStateAsync(state => {
        const newMap = new Map(state.tasks);
        newMap.set(taskName, newStatus);
        return {
          tasks: newMap,
        };
      });
    }
  }

  private isTaskDefined(taskName: string): boolean {
    return this.state.tasks.has(taskName);
  }

  private setStateAsync(state: ((prevState: S, props: P<PropsT>) => (Pick<S, keyof S> | S | null)) | (Pick<S, keyof S> | S | null)): Promise<void> {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  render() {
    const {defaultTasks, WrappedComponent, forwardedRef, ...restOfProps} = this.props;
    const {tasks} = this.state;

    return (
      <WrappedComponent
        tasks={tasks}
        setTaskStatus={this.setTaskStatus}
        isTaskDefined={this.isTaskDefined}
        ref={forwardedRef}
        {...restOfProps as PropsT}
      />
    );
  }

}