export interface Reachout {
    id: string;
    message: string;
    // Add other properties of a reachout here
  }

  export interface ReachoutState {
    reachouts: Reachout[];
    loading: boolean;
    error: string | null;
  }

  export interface RootState {
    reachout: ReachoutState;
    // Add other state slices if any
  }
