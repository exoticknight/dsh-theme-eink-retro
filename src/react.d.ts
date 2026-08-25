declare module "react" {
  export interface ReactElement {}
  export type ComponentType = () => ReactElement;

  interface ReactApi {
    createElement(type: unknown, props?: Record<string, unknown> | null, ...children: unknown[]): ReactElement;
    useEffect(effect: () => (() => void) | void, dependencies: unknown[]): void;
    useState<T>(initial: T | (() => T)): [T, (value: T) => void];
  }

  const React: ReactApi;
  export default React;
}
