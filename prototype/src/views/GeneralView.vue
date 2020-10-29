<template>
        <FullLayoutView v-if="$route.params.layoutType === 'full'" ></FullLayoutView>
        <AccordionView v-else-if="$route.params.layoutType === 'accordion'" ></AccordionView>
        <div v-else> whoops! bad URL:  {{$route.fullPath}} 
            Please use one of the following:
                accordion/slider
                accordion/input 
                accordion/increment 

                full/slider
                full/input 
                full/increment
            </div>
</template>


<script>

import FullLayoutView from "@/views/FullLayoutView";
import AccordionView from "@/views/AccordionView";

export default {
    name: "App",

    components: {
        FullLayoutView,
        AccordionView
    },

    data: () => ({
        //
    }),
}
</script>


<style scoped>

</style>