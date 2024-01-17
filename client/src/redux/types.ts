export interface Reachout {
    id: string;
    message: string;
    // Add other properties of a reachout here if needed
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
