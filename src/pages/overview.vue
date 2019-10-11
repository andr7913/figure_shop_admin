<template>
    <main>
        <div class="clearfix"></div>
        <table>
            <tr>
                <th><h3>Id</h3></th>
                <th><h3>Name</h3></th>
                <th><h3>Color</h3></th>
                <th><h3>Weigth</h3></th>
                <th><h3>Size</h3></th>
                <th><h3>Price</h3></th>
                <th><h3>Material</h3></th>
                <th><h3>Images</h3></th>
                <th><h3>Update</h3></th>
                <th><h3>Delete</h3></th>
            </tr>
            <tr v-for="actionFigure in actionFigures" v-bind:key="actionFigure.id">
                <td>
                    <p>{{actionFigure.id}}</p>
                </td>
                <td>
                    <p>{{actionFigure.name}}</p>
                </td>
                <td>
                    <p>{{actionFigure.color}}</p>
                </td>
                <td>
                    <p>{{actionFigure.weight}}</p>
                </td>
                <td>
                    <p>{{actionFigure.size}}</p>
                </td>
                <td>
                    <p>{{actionFigure.price}}</p>
                </td>
                <td>
                    <p>{{actionFigure.material}}</p>
                </td>
                <td>
                    <img v-bind:src="actionFigure.pathImage" alt="" style="width: 150px; height: 150px;">
                </td>
                <td class="update">

                    <router-link :to="{path: '/update/' + actionFigure.id}" >Update</router-link>

                </td>
                <td class="slet">
                    <v-btn @click="deleteProduct(actionFigure.id) ">Delete</v-btn>

                </td>
            </tr>
        </table>
        <div class="clearfix"></div>
    </main>
</template>

<script>
    import axios from 'axios';

    export default {
        mounted() {
            this.getActionFigures()
        },
        data: () => ({
            actionFigures: []
        }),
        methods: {
            getActionFigures() {
                axios.get('https://actionfigureshop.azurewebsites.net/api/ActionFigure')
                    .then((response) => {
                        this.actionFigures = response.data;
                    });
            },

            deleteProduct: function (input) {
                axios.delete('https://actionfigureshop.azurewebsites.net/api/ActionFigure/' + input)
                    .then(() => {
                        this.getActionFigures();
                    })
            }
        }


    }


</script>

<style scoped>

</style>