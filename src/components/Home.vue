<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <autocomplete
                        :place-holder-text="placeHolderInputText"
                        :result-items="autoCompleteResult"
                        :on-key-up="onKeyUpAutoCompleteEvent"
                        :on-focus="onKeyUpAutoCompleteEvent"
                        :on-selected="onSelectedAutoCompleteEvent"
                        :auto-complete-progress="autoCompleteProgress"
                        :item-text="autoCompleteText"
                        :item-id="autoCompleteFieldId">
                </autocomplete>
            </div>
        </div>
        <div class="clear-fix">&nbsp;</div>
        <div class="row" v-if="seen">

            <div class="col-md-12">
                <div class="col-md-2">
                    <img :src="getImage(item.image)">
                </div>
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-12">
                            <p><h2>{{ item.name }}</h2></p>
                        </div>
                        <div class="col-md-3">
                            <p>
                                <b>Calories : </b> {{ item.calories}}
                            </p>
                            <p>
                                <b>Fat : </b> {{ item.fat}} g
                            </p>
                            <p>
                                <b>Protein : </b> {{ item.protein}} g
                            </p>
                            <p>
                                <b>Carbohydrate : </b> {{ item.carbohydrate}} g
                            </p>
                            <p>
                                <b>Sugar : </b> {{ item.sugar}} g
                            </p>
                        </div>
                        <div class="col-md-9">
                            <div>
                                <span><b>Ingredients</b></span>
                                <ul v-if="item.ingredients.length > 0">
                                    <li v-for="(ingredients,i) in item.ingredients" :key="i">
                                        {{ ingredients }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const suggestions = [
        { id: 1, name: 'Coke', calories: '20', protein: '0.1', fat: '0', carbohydrate: '10', sugar: '9', ingredients: ['Sugar', 'Caffeine', 'Caramel color'], image: 'coke.png'},
        { id: 2, name: 'Fries', calories: '266', protein: '11', fat: '10', carbohydrate: '33', sugar: '3.6', ingredients: ['Potatoes', 'Vegetable oil', 'Eggs'], image: 'fries.jpg'},
        { id: 3, name: 'Pizza', calories: '312', protein: '3.4', fat: '15', carbohydrate: '41', sugar: '0.3', ingredients: ['Cheese', 'Dough', 'Mozzarella'], image: 'pizza.jpg'},
        { id: 4, name: 'Burger', calories: '295', protein: '17', fat: '14', carbohydrate: '24', sugar: '4.2', ingredients: ['Beans', 'Nuts', 'Seeds'], image: 'burger.png'},
    ];
    export default {
        data() {
            return {
                placeHolderInputText: 'Enter food name (E.g Coke, Pizza)',
                autoCompleteResult: [],
                autoCompleteProgress: false,
                autoCompleteText: "name",
                autoCompleteFieldId: "id",
                seen: false,
                item: '',
            }
        },
        methods: {
            onSelectedAutoCompleteEvent(id){
                var searchItem = suggestions.find(function (elem) {
                    return elem.id == id;
                });
                this.autoCompleteProgress = false;
                this.autoCompleteResult = [];
                this.item = searchItem;
                this.seen = true;
            },

            onKeyUpAutoCompleteEvent(keywordEntered){
                //reset
                this.autoCompleteResult = [];
                this.autoCompleteProgress = false;
                var newData = [];
                suggestions.forEach(function(item){
                    if(item.name.toLowerCase().indexOf(keywordEntered.toLowerCase()) >= 0){
                        newData.push(item);
                    }
                });
                this.autoCompleteResult = newData;
                this.autoCompleteProgress = false;
            },
            getImage(image){
                const url = require(`../../images/`+image);
                return url
            }
        }
    }

</script>