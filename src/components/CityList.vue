<template>
    <div v-for="city in myCities" :key="city.id" class="bg-slate-500">
        <City :city="city" @click="viewCity(city)"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import City from './City.vue';


//TODO - add view City button functionality
const myCities = ref([])
const getCities = async () => {
    if (localStorage.getItem("myCities")){
        myCities.value = JSON.parse(localStorage.getItem("myCities"))
    }

    const requests = []
    myCities.value.forEach((city) => {
        requests.push(
            axios.get(
                //TODO add in weather app link when it works!!!!!
            )
        )
    })

    const weatherData = await Promise.all(requests)
    console.log(weatherData)

    weatherData.forEach((value, idx) => {
        myCities.value[idx].weather = value.data
    })
}

await getCities();

const router = useRouter();
const viewCity = (city) => {
    router.push({
        name: "city",
        params: { state: city.state, city: city.city},
        query: {
            id: city.id,
            lat: city.coords.lat,
            lon: city.coords.lon
        }
    })
}
</script>

