import React, {Ref} from "react";
import {getDisplayName} from "../../utils/components-utils";
import {StandardEnum} from "../../utils/enums-utils";

type RefType = Ref<HTMLElement>;
interface P<PropsT> {
  defaultTaskStatus: StandardEnum;
  WrappedComponent: React.ComponentType<PropsT>;
  forwardedRef: RefType;
}
interface S {
  task: StandardEnum;
}

export class SingleTaskWrapper<PropsT> extends React.Component<P<PropsT>, S> {
  private mounted: boolean = false;

  constructor(props: P<PropsT>) {
    super(props);
    const {defaultTaskStatus} = this.props;
    this.state = {
      task: defaultTaskStatus,
    };
    this.setTaskStatus = this.setTaskStatus.bind(this);
  }

  private async setTaskStatus(newTaskStatus: StandardEnum): Promise<void> {
    if(this.mounted) {
      await this.setStateAsync({
        task: newTaskStatus,
      });
    } else {
      throw new Error(`Próba ustanowienia zadania dla odmontowanego komponentu: ${getDisplayName(this.props.WrappedComponent)}`);
    }
  }

  private setStateAsync(state: ((prevState: S, props: P<PropsT>) => (Pick<S, keyof S> | S | null)) | (Pick<S, keyof S> | S | null)): Promise<void> {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { defaultTaskStatus, WrappedComponent, forwardedRef, ...restOfProps } = this.props;
    const { task } = this.state;

    return (
      <WrappedComponent
        taskStatus={task}
        setTaskStatus={this.setTaskStatus}
        ref={forwardedRef}
        {...restOfProps as PropsT}
      />
    );
  }
}