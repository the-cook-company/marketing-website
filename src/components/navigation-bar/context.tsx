import {
  createContext,
  FunctionComponent,
  ReactNodeArray,
  useReducer,
  useContext,
  ReactNode,
} from "react";

type Action = { type: "triggerOverlayVisibility" };
type Dispatch = (action: Action) => void;
type State = {
  isNavigationOverlayVisible: boolean;
  navigationLinks: ReactNodeArray;
};

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "triggerOverlayVisibility":
      return {
        ...state,
        isNavigationOverlayVisible: !state.isNavigationOverlayVisible,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

type NavigationBarProviderProps = {
  initialState: State;
};

const NavigationBarProvider: FunctionComponent<NavigationBarProviderProps> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useNavigationBar = (): [State, Dispatch] => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  if (state === undefined || dispatch === undefined) {
    throw new Error(
      `useNavigationBar must be used within NavigationBarProvider`
    );
  }

  return [state, dispatch];
};

export { NavigationBarProvider, useNavigationBar };
