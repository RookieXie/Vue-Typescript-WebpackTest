<!-- src/components/Hello.vue -->

<template>
    <div>
        <div class="greeting">Hello {{name}},当前温度：{{temperature}}</div>
        <ul>
            <li v-for="cast in forecast":key="cast.data">
               日期： {{cast.date}}
               风力： {{cast.fengli}}
               风向： {{cast.fengxiang}}
               高温： {{cast.high}}
               低温： {{cast.low}}
               天气： {{cast.type}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
// import {Url} from "./Base/url";

export default Vue.extend({
    props: ['name','temperature','forecast'],
    data() {
        return {
            //enthusiasm: this.initialEnthusiasm
        }
    },    
    methods: {
        // increment() { this.enthusiasm++; },
        // decrement() {
        //     if (this.enthusiasm > 1) {
        //         this.enthusiasm--;
        //     }
        // },
    },
    computed: {
        // exclamationMarks(): string {
        //     return Array(this.enthusiasm + 1).join('!');
        // }
    }
});

</script>

<style>
.greeting {
    font-size: 20px;
}
</style>