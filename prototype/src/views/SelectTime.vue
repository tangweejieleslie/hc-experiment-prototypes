<template>
  <div>
    <!-- {{ date }} | {{ time }} -->
    <v-container>
      <v-row justify="center">
        <v-date-picker v-model="date"></v-date-picker>
      </v-row>
      <v-row justify="center">
        <v-time-picker v-model="time" format="24hr" landscape></v-time-picker>
      </v-row>
      <br />
      <v-row justify="center">
        <v-btn @click="confirmDateTime">Confirm Date and Time</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      date: "2020-10-10",
      time: "",
    };
  },
  methods: {
    confirmDateTime() {
      this.$store.commit("updateDateTime", {
        date: this.date,
        time: this.time,
      });
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>