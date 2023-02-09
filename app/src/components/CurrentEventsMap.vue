<script setup lang="ts">
import { socket } from "@/lib/socket-client";
import { CENTER } from "@/lib/Frankfurt";
import type { Trip } from "@/types/Trip";
import VehicleEventStatistics from "./VehicleEventStatistics.vue";

socket.on("trips", (message) => {
  const trip: Trip = message.f1;
  if (trip.vehicleId) {
    activeTrips.value = activeTrips.value.set(trip.vehicleId, trip);
    if (trip.end) {
      setTimeout(() => activeTrips.value.delete(trip.vehicleId), 2000);
    }
  }
});

socket.on("rentals", (message) => {
  rentals.value = message.f1;
});

socket.on("returns", (message) => {
  returns.value = message.f1;
});

const center = ref(CENTER);
const projection = ref("EPSG:3857");
const zoom = ref(13);
const rotation = ref(0);
const view = ref(null);
const activeTrips = ref(new Map<string, Trip>());
const rentals = ref(0);
const returns = ref(0);
</script>

<template>
  <NCard>
    <VehicleEventStatistics :rentals="rentals" :returns="returns" />
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
          <TripFeature
            v-for="[vehicleId, trip] in activeTrips"
            :key="vehicleId"
            :trip="trip"
          />
        </ol-source-vector>
      </ol-vector-layer>
    </ol-map>
  </NCard>
</template>
