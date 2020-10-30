<template>
  <div>
    <!-- {{ date }} | {{ hour }} : {{ min }} -->
    <v-container>
      <v-row justify="center">
        <v-date-picker v-model="date"></v-date-picker>
      </v-row>

      <v-row justify="center">
        <v-col cols="4">
          <h3>Select Time in 24 hours format</h3>
        </v-col>
      </v-row>
      <v-row justify="center">
        <!-- <v-time-picker v-model="time" format="24hr" landscape></v-time-picker> -->

        <v-col cols="2">
          <v-select :items="hours" label="Hours" v-model="hour"></v-select>
        </v-col>
        <v-col cols="2">
          <v-select :items="mins" label="Minutes" v-model="min"></v-select>
        </v-col>
      </v-row>
      <br />
      <v-row justify="center">
        <v-btn
          @click="
            confirmDateTime();
            log($event);
          "
          data-custom="true"
          >Confirm Date and Time</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { default as logging } from "@/logging/customLogging.js";
// import { Datetime } from "vue-datetime";

export default {
  components: {
    // datetime: Datetime,
  },
  data: function () {
    return {
      date: "2020-10-10",
      datetime13: "",
      time: "",
      hour: "",
      hours: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
      ],
      min: "",
      mins: [
      '00',
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
      ],
      rules: [
        (value) => {
          if (value < 0) {
            return "Hour should be more than or equals to 0";
          }
        },
        (value) => !!value || "Required.",
        (v) => Number(v) < 0 || "Hour should be more than or equals to 0",
        (v) => Number(v) > 23 || "Hour should be less than or equals to 23",
      ],
    };
  },
  methods: {
    confirmDateTime() {
      let formattedTime = this.hour + ":" + this.min;
      this.$store.commit("updateDateTime", {
        date: this.date,
        time: formattedTime,
      });
      this.$router.go(-1);
    },
    log(event) {
      // Invoke Custom Logging Function
      logging(event, "null", {
        Info: "Click on Confirm Delivery Time",
        Target: "ConfirmDeliveryTime",
        View: "TimeView",
        Component: "ConfirmDeliveryTimeButton",
        DV: "2",
      });
    },
  },
};
</script>

<style scoped>
.theme-orange .vdatetime-popup__header,
.theme-orange .vdatetime-calendar__month__day--selected > span > span,
.theme-orange .vdatetime-calendar__month__day--selected:hover > span > span {
  background: #ff9800;
}

.theme-orange .vdatetime-year-picker__item--selected,
.theme-orange .vdatetime-time-picker__item--selected,
.theme-orange .vdatetime-popup__actions__button {
  color: #ff9800;
}
</style>