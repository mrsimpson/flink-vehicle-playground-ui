import type { Location } from "./Location";

type Start = {
    date: EpochTimeStamp;
    location: Location;
}

type End = {
    date: EpochTimeStamp;
    location: Location;
}

type Waypoint = {
    date: EpochTimeStamp;
    location: Location;
}

export type Trip = {
    vehicleId: string;
    start: Start;
    end?: End;
    waypoints?: Waypoint[];
}

