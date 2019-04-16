<template>
    <div class="container">
        <div class="row">
            <table border="1" class="table table-bordered">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <!--<th>Calories</th>
                    <th>Protein</th>
                    <th>Carbohydrate</th>
                    <th>Sugar</th>
                    <th>Ingredients</th>-->
                    <th>Action</th>
                </tr>
                </thead>
                <tr v-for="(food, index) in foods">
                    <td align="center"><img :src="getImage(food.image)"></td>
                    <td align="center">{{food.name}}</td>
                    <!--<td align="center">{{food.protein}}</td>
                    <td align="center">{{food.calories}}</td>
                    <td align="center">{{food.carbohydrate}}</td>
                    <td align="center">{{food.sugar}}</td>
                    <td>
                        <ul v-if="food.ingredients.length > 0">
                            <li v-for="(ingredients,i) in food.ingredients" :key="i">
                                {{ ingredients }}
                            </li>
                        </ul>
                    </td>-->
                    <td align="center"><button v-if="!food.buttonHidden" @click="addCard(food)">Compare</button></td>
                </tr>


            </table>
        </div>

        <div class="row" v-if="seen" >
            <h3>Comparison</h3>
            <table border="1" class="table table-bordered comparison">
                <span v-for="(card, index) in cards">
                    <thead>
                        <tr>
                            <th v-if="index < 1 "></th>
                            <th class="text-center">{{ capitalize(card.name) }}</th>
                        </tr>
                    </thead>

                    <tr v-for="(v, i, count) in card" v-if="i != 'id' && i != 'image' && i != 'buttonHidden'">
                        <th class="text-left" v-if="index < 1">{{ capitalize(i) }}</th>
                        <td>{{ getCompareValues(i, v) }}</td>
                    </tr>
                    <tr>
                        <th v-if="index < 1 ">Action</th>
                        <td align="center"><button @click="removeCard(card)">Remove</button></td>
                    </tr>
                </span>
            </table>
            <!--<card :name="card.name" :calories="card.calories" :protein="card.protein" :carbohydrate="card.carbohydrate" :sugar="card.sugar"></card>-->
        </div>

    </div>
</template>
<script>
    const foods = [
        { id: 1, name: 'Coke', calories: '20', protein: '0.1', fat: '0', carbohydrate: '10', sugar: '9', ingredients: ['Sugar', 'Caffeine', 'Caramel color'], image: 'coke.png',buttonHidden:false},
        { id: 2, name: 'Fries', calories: '266', protein: '11', fat: '10', carbohydrate: '33', sugar: '3.6', ingredients: ['Potatoes', 'Vegetable oil', 'Eggs'], image: 'fries.jpg',buttonHidden:false},
        { id: 3, name: 'Pizza', calories: '312', protein: '3.4', fat: '15', carbohydrate: '41', sugar: '0.3', ingredients: ['Cheese', 'Dough', 'Mozzarella'], image: 'pizza.jpg',buttonHidden:false},
        { id: 4, name: 'Burger', calories: '295', protein: '17', fat: '14', carbohydrate: '24', sugar: '4.2', ingredients: ['Beans', 'Nuts', 'Seeds'], image: 'burger.png',buttonHidden:false},
    ];

    export default {
        data() {
            return {
                foods: foods,
                seen: false,
                cards: [],
                item: ''
            }
        },
        methods: {
            addCard: function (food) {
                this.seen = true;
                food.buttonHidden = true;
                this.cards.push(food);
            },
            removeCard: function (food) {
                food.buttonHidden = false;
                this.cards = this.cards.filter(item => item.id !== food.id)
              if(this.cards.length == 0) {
                this.seen = false;
              }
            },
            getImage(image){
                const url = require(`../../images/`+image);
                return url
            },
            capitalize(s){
                if (typeof s !== 'string') return '';
                return s.charAt(0).toUpperCase() + s.slice(1)
            },
            getCompareValues(type, val){
                if(type === 'ingredients'){
                    var inge = '';
                    for(var i=0; i < val.length; i++){
                        inge += val[i];
                        if(i < (val.length)-1){
                            inge += ", ";
                        }
                    }
                    return inge;
                }else{
                    return val;
                }
            }
        }
    }
</script>