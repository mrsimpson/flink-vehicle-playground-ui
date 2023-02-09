<script setup lang="ts">
import { socket } from "@/lib/socket-client";
import { CENTER } from "@/lib/Frankfurt";
import type {Location} from '@/types/Location'
import {coordinateFromLocation} from '@/lib/geoHelpers'

socket.on("event", (message) => {
    const location: Location = message.location;
    if(location){
        displayEvents.value.push(coordinateFromLocation(message.location))
    }
});

const center = ref(CENTER);
const projection = ref("EPSG:3857");
const zoom = ref(13);
const rotation = ref(0);
const view = ref(null);
const displayEvents = ref([CENTER])

const radius = ref(10)
        const strokeWidth = ref(4)
        const strokeColor = ref('red')
        const fillColor = ref('white')
</script>

<template>
  <NCard>
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 100vh"
      displayProjection="EPSG:4326"
    >
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <ol-vector-layer>
        <ol-source-vector>
          <ol-feature v-for="event in displayEvents">
            <ol-geom-point
              :coordinates="event"
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
        </ol-source-vector>
      </ol-vector-layer>
    </ol-map>
  </NCard>
</template>
