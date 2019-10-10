<template>

    <div id="app">
        <header>
            <h1>ActionFigure administration page</h1>
            <div id="nav">
                <nav>


                            <ul class="list">
                                <li class="list-item">
                                    <router-link to="/">home</router-link>
                                </li>
                                <li class="list-item">
                                    <router-link to="/create">Create</router-link>
                                </li>


                            </ul>



                </nav>
            </div>
        </header>
        <div class="clearfix"></div>
        <router-view/>



    </div>
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
            }
        }
    }






</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

    }

    h1{
        color: rgb(255,196,0);
    }
    header{
        background-color: #a60f28;
    }

    .list-item {
        float: left;
        list-style: none;
        margin-left: 25px;


    }



    .list {
        margin-right: 525px;
        float: right;
    }

    a {
        text-decoration: none;
        color: #2c3e50;
        font-weight: bold;

    }

    a:hover {
        color: red;
        font-weight: bolder;
        text-decoration: underline solid red;

    }

    main {
        width: 1080px;
        min-height: 300px;
        border-top: black solid 1px;
        border-bottom: black solid 1px;
        padding: 10px;
        margin-left: 95px;

    }

    .clearfix {
        clear: both;
        height: 0px;
    }

    table {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;


    }

    td, th {
        border: 1px solid #ddd;
        padding: 8px;

    }

    td {
        font-size: 17px;
        font-weight: bolder;
        margin: 10px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #a60f28;
        color: white;
    }

    .edit a {
        text-decoration: none;
        color: black;
    }





</style>
