<template>
  <v-card class="mx-auto" tile>
    <v-navigation-drawer permanent width="100%">
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            class="child-item"
            @click="setFilter('b')"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import "@mdi/js";

export default {
  data() {
    return {
      items: [
        {
          title: "The Old Chang Kee Platter",
          active: false,
          items: [{ title: "List Item", link: "/a" }],
        },
        {
          title: "Old Chang Kee Favourites",
          active: true,
          items: [
            { title: "List Item", link: "/b" },
            { title: "List Item", link: "/c" },
            { title: "List Item", link: "/d" },
          ],
        },
        {
          title: "Traditional Favourites",
          active: false,
          items: [
            { title: "Seafood Favourites", link: "/3" },
            { title: "Chicken Favourites", link: "/f" },
            { title: "Desserts", link: "/g" },
          ],
        },
      ],
    };
  },
  methods: {
    setFilter(selectedFilter) {
      console.log(this.$store.state.filter);
      this.$store.commit("setFilter", { filter: selectedFilter });
      console.log(this.$store.state.filter);
    },
  },
};
</script> 

<style>
.accordion-items {
  padding-left: 30px;
}

/* .v-list-group--active > .v-list-group__header + .v-list-item--active{
    background: purple;
    border-left: 0px solid #e87655;
} */

/* .v-list-group__header .v-list-item .v-list-item--active {
  color: #000;
  background-color: purple;
} */

.v-list-item--active {
  color: #e87655 !important;
  background-color: #fdf1ee;
  border-left: 3px solid #e87655;
}

.child-item {
  padding-left: 35px;
}
</style>