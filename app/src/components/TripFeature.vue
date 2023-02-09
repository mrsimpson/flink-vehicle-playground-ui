<script setup lang="ts">
import type { Trip } from "@/types/Trip";
import type { PropType } from "vue";
import { coordinateFromLocation } from "../lib/geoHelpers";
import type { Coordinate } from "ol/coordinate";

defineProps({
  trip: {
    type: Object as PropType<Trip>,
    required: true,
  },
});

const radius = ref(4);
const strokeWidth = ref(6);
const fillColor = ref("white");
const strokeColor = ref("red");

function tripCoordinates(trip: Trip): Coordinate[] {
  const wpCoordinates =
    trip.waypoints?.map((wp) => coordinateFromLocation(wp.location)) || [];
  return [coordinateFromLocation(trip.start.location)]
    .concat(wpCoordinates)
    .concat(trip.end ? [coordinateFromLocation(trip.end.location)] : []);
}
</script>

<template>
    <ol-feature>
      <ol-geom-point
        :coordinates="coordinateFromLocation(trip.start.location)"
      ></ol-geom-point>
      <ol-style>
        <ol-style-circle :radius="radius">
          <ol-style-fill :color="fillColor"></ol-style-fill>
          <ol-style-stroke
            :color="strokeColor"
            :width="strokeWidth"
          ></ol-style-stroke>
        </ol-style-circle>
      </ol-style>
    </ol-feature>
    <ol-feature>
      <ol-geom-line-string
        :coordinates="tripCoordinates(trip)"
      />
      <ol-style>
        <ol-style-stroke
          :color="strokeColor"
          :width="strokeWidth"
        ></ol-style-stroke>
      </ol-style>
    </ol-feature>
    <ol-feature v-if="trip.end">
        <ol-geom-point
          :coordinates="coordinateFromLocation(trip.end.location)"
        ></ol-geom-point>
        <ol-style>
          <ol-style-circle :radius="radius">
            <ol-style-fill :color="strokeColor"></ol-style-fill>
            <ol-style-stroke
              :color="strokeColor"
              :width="strokeWidth"
            ></ol-style-stroke>
          </ol-style-circle>
        </ol-style>
      </ol-feature>
</template>
