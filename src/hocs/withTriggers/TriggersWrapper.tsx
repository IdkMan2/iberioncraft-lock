import React, {Ref} from "react";
import {getDisplayName} from "../../utils/components-utils";
import {StandardEnum} from "../../utils/enums-utils";

type RefType = Ref<HTMLElement>;
export type TriggersMap<TriggerValT> = Map<StandardEnum, TriggerValT>;
interface TriggersObjMappedByString<TriggerValT> {
  [name: string]: TriggerValT,
}
interface TriggersObjMappedByNumber<TriggerValT> {
  [name: number]: TriggerValT,
}
export type  TriggersObj<TriggerValT> = TriggersObjMappedByString<TriggerValT> | TriggersObjMappedByNumber<TriggerValT>;

interface P<PropsT, TriggerValT> {
  defaultTriggers: TriggersObj<TriggerValT> | TriggersMap<TriggerValT>;
  WrappedComponent: React.ComponentType<PropsT>;
  forwardedRef: RefType;
}
interface S<TriggerValT> {
  triggers: TriggersMap<TriggerValT>;
}

export class TriggersWrapper<PropsT, TriggerValT> extends React.Component<P<PropsT, TriggerValT>, S<TriggerValT>> {
  private mounted: boolean;
  private timeoutControllers: Map<StandardEnum, number> = new Map();

  constructor(props: P<PropsT, TriggerValT>) {
    super(props);
    this.mounted =  true;
    const {defaultTriggers} = this.props;
    let triggers;
    if(defaultTriggers instanceof Map) {
      triggers = defaultTriggers;
    } else {
      triggers = new Map(Object.entries(defaultTriggers));
    }
    this.state = {
      triggers: triggers,
    };
    this.setTrigger = this.setTrigger.bind(this);
    this.clearTrigger = this.clearTrigger.bind(this);
    this.isTriggerDefined = this.isTriggerDefined.bind(this);
    this.clearAllTriggers = this.clearAllTriggers.bind(this);
  }

  private async setTrigger(triggerName: StandardEnum, newValue: TriggerValT, timeout: number = 8000): Promise<void> {
    if(!this.mounted) {
      throw new Error(`Próba ustanowienia triggera dla odmontowanego komponentu: ${getDisplayName(this.props.WrappedComponent)}`);
    } else {
      await this.setStateAsync(state => {
        const newMap = new Map(state.triggers);
        newMap.set(triggerName, newValue);
        return {
          triggers: newMap,
        };
      });
      if(timeout !== undefined) {
        this.timeoutControllers.set(
          triggerName,
          setTimeout(() => {
            this.clearTrigger(triggerName);
            this.timeoutControllers.delete(triggerName);
          }),
        );
      }
    }
  }
  
  private async clearTrigger(triggerName: StandardEnum): Promise<void> {
    if(!this.mounted) {
      throw new Error(`Próba wyczyszczenia triggera dla odmontowanego komponentu: ${getDisplayName(this.props.WrappedComponent)}`);
    } else {
      if(this.timeoutControllers.has(triggerName)) {
        clearTimeout(this.timeoutControllers.get(triggerName));
      }
      await this.setStateAsync(state => {
        const newMap = new Map(state.triggers);
        newMap.delete(triggerName);
        return {
          triggers: newMap,
        };
      });
    }
  }

  private async clearAllTriggers(): Promise<void> {
    if(!this.mounted) {
      throw new Error(`Próba usunięcia triggera dla odmontowanego komponentu: ${getDisplayName(this.props.WrappedComponent)}`);
    } else {
      this.timeoutControllers.forEach(value => clearTimeout(value));
      await this.setStateAsync({
        triggers: new Map(),
      });
    }
  }

  private isTriggerDefined(triggerName: StandardEnum): boolean {
    return this.state.triggers.has(triggerName);
  }

  private setStateAsync(state: ((prevState: S<TriggerValT>, props: P<PropsT, TriggerValT>) => (Pick<S<TriggerValT>, keyof S<TriggerValT>> | S<TriggerValT> | null)) | (Pick<S<TriggerValT>, keyof S<TriggerValT>> | S<TriggerValT> | null)): Promise<void> {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  componentWillUnmount() {
    this.timeoutControllers.forEach(value => clearTimeout(value));
    this.mounted = false;
  }


  render() {
    const {defaultTriggers, WrappedComponent, forwardedRef, ...restOfProps} = this.props;
    const {triggers} = this.state;

    return (
      <WrappedComponent
        triggers={triggers}
        setTrigger={this.setTrigger}
        clearTrigger={this.clearTrigger}
        isTriggerDefined={this.isTriggerDefined}
        clearAllTriggers={this.clearAllTriggers}
        ref={forwardedRef}
        {...restOfProps as PropsT}
      />
    );
  }

}