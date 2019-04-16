<script>
    export default {
        props: {
            name: String,
            calories: String,
            protein: String,
            carbohydrate: String,
            sugar: String,
        }
    };
</script>

<template>
    <div>
        <ul>
            <li><b>Name:</b> {{ name }}</li>
            <li><b>Calories:</b> {{ calories }}</li>
            <li><b>Protein:</b> {{ protein }}</li>
            <li><b>Carbohydrate:</b> {{ carbohydrate }}</li>
            <li><b>Sugar:</b> {{ sugar }}</li>
        </ul>
    </div>
</template>
