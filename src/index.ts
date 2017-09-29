// src/index.ts
import Vue from "vue";
import WeathCompnent from "./components/Weath.vue";
import { Url } from "./components/Base/url";
let v = new Vue({
    el: "#app",
    template: `<div>
    <div>
    选择城市:
    <select v-model="selected" @change="selectChange">
        <option v-for="(item, index)  in Cities":key="item.city" v-bind:value="item.value">
            {{item.city}}
        </option>
    </select>
    </div>
    <weath-component :name="name" :temperature="temperature" :forecast="forecast" />
</div>`,
    data: {
        name: "World",
        temperature: "",
        code: "",
        selected: "101010100",
        forecast: [],
        Cities: [
            { value: "101010100", city: "beijing" },
            { value: "101010200", city: "shanghai" },
            { value: "101010300", city: "hangzhou" },
        ]
    },
    components: {
        'weath-component': WeathCompnent
    },
    methods: {
        selectChange() {
        
            Url.AkPost("/weather_mini?citykey=" + this.selected, {}, (res) => {
                //debugger;
                if (res) {
                    if (res.status == 1000) {
                        //debugger
                        this.name = res.data.city;
                        this.temperature = res.data.wendu;
                        this.code = res.data.ganmao;
                        this.forecast = res.data.forecast;
                    } else {

                    }
                }
            })
        }
    },
    beforeMount() {
        Url.AkPost("/weather_mini?citykey=" +this.selected,{}, (res) => {
            //debugger;
            if (res) {
                if (res.status == 1000) {
                    debugger
                    this.name= res.data.city;
                    this.temperature=res.data.wendu;
                    this.code=res.data.ganmao;
                    this.forecast=res.data.forecast;
                } else {

                }
            }
        })
    },
    beforeUpdate() {

    }
});