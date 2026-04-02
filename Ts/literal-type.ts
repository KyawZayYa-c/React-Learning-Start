let state: string = "pending";
state = "fulfilled";
state = "rejected";

state = "done";

type State = "pending" | "fulfilled" | "rejected";
// State = "done";

let state2: State = "pending";
//state2 = "another";