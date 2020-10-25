<template>
  <v-card class="mx-auto" tile>
    <v-navigation-drawer permanent width="400px">
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
        >
          <template v-slot:activator class="selected">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-group
            v-for="child in item.items"
            :key="child.title"
            link
            class="child-item"
            sub-group
            no-action
          >
            <template v-slot:activator class="selected">
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-group>
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
          items: [{ title: "List Item" }],
        },
        {
          title: "Old Chang Kee Favourites",
          active: true,
          items: [
            { title: "List Item" },
            { title: "List Item" },
            { title: "List Item" },
          ],
        },
        {
          title: "Traditional Favourites",
          active: false,
          items: [
            { title: "Seafood Favourites" },
            { title: "Chicken Favourites" },
            { title: "Desserts" },
          ],
        },
      ],
    };
  },
  methods: {

  },
};
</script> 

<style>
.accordion-items {
  padding-left: 30px;
}

.v-list-item--active {
  color: #e87655 !important;
  background-color: #fdf1ee;
  border-left: 3px solid #e87655;
}

.child-item {
  padding-left: 35px;
  color: black !important;

}
</style>