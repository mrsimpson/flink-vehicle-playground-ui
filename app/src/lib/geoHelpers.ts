import type {Location} from '@/types/Location'
import type { Coordinate } from "ol/coordinate";
import {fromLonLat} from 'ol/proj';


export function coordinateFromLocation(location: Location):Coordinate {
    return fromLonLat([location.longitude, location.latitude])
}