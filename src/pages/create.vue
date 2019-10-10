<template>

<body>
    <div class="main">
        <h1>Create</h1>
        <form class="form-style-7">
            <ul>
                <li>
                    <label for="name">name</label>
                    <input v-model="name"  lable="price" required type="text">
                    <span>Type a name</span>
                </li>
                <li>
                    <label for="price">price</label>
                    <input v-model="price"  lable="price" required type="text">
                    <span>Type a price</span>
                </li>
                <li>
                    <label for="size">size</label>
                    <input v-model="size"  lable="size" required type="text">
                    <span>Type a size</span>
                </li>
                <li>
                    <label for="weight">weight</label>
                    <input v-model="weight"  lable="weight" required type="text">
                    <span>Type a weight</span>
                </li>
                <li>
                    <label for="material">material</label>
                    <input v-model="material"  lable="material" required type="text">
                    <span>Type a material</span>
                </li>
                <li>
                    <label for="color"> color</label>
                    <input v-model="color"  lable="color" required type="text">
                    <span>Type a color</span>
                </li>
                <li>
                    <label for="pathImages"> pathImages</label>
                    <input v-model="pathImages"  lable="pathImages" required type="text">
                    <span>Type a pathImages</span>
                </li>
                <li>
                    <input type="submit" value="Send This" @click="createActionFigures">
                </li>
            </ul>
        </form>
    </div>
</body>
</template>

<script>

    import axios from 'axios';

    export default {
        mounted() {
            this.createActionFigures()
        },
        data: () => ({
            actionFigures: [],
            name: '',
            price:'',
            size:'',
            weight:'',
            material:'',
            color:'',
            pathImages:''


        }),
        methods: {
            createActionFigures() {
                axios.post('https://actionfigureshop.azurewebsites.net/api/ActionFigure',{
                    name : this.name,
                    price: this.price,
                    size:this.size,
                    weight:this.weight,
                    material:this.material,
                    color:this.color,
                    pathImages:this.pathImages
                })

            }
        }
    }
</script>

<style scoped>

    .main{
        background-image: url("../assets/background.jpg");

    }
    .form-style-7 {
        max-width: 400px;
        margin: 50px auto;

        background: #fff;
        border-radius: 2px;
        padding: 20px;
        font-family: Georgia, "Times New Roman", Times, serif;
    }

    .form-style-7 h1 {
        display: block;
        text-align: center;
        padding: 0;
        margin: 0px 0px 20px 0px;
        color: #5C5C5C;
        font-size: x-large;
    }

    .form-style-7 ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .form-style-7 li {
        display: block;
        padding: 9px;
        border: 1px solid #DDDDDD;
        margin-bottom: 30px;
        border-radius: 3px;
    }

    .form-style-7 li:last-child {
        border: none;
        margin-bottom: 0px;
        text-align: center;
    }

    .form-style-7 li > label {
        display: block;
        float: left;
        margin-top: -19px;
        background: #FFFFFF;
        height: 14px;
        padding: 2px 5px 2px 5px;
        color: #B9B9B9;
        font-size: 14px;
        overflow: hidden;
        font-family: Arial, Helvetica, sans-serif;
    }

    .form-style-7 input[type="text"],
    .form-style-7 input[type="date"],
    .form-style-7 input[type="datetime"],
    .form-style-7 input[type="email"],
    .form-style-7 input[type="number"],
    .form-style-7 input[type="search"],
    .form-style-7 input[type="time"],
    .form-style-7 input[type="url"],
    .form-style-7 input[type="password"],
    .form-style-7 textarea,
    .form-style-7 v-text-field,
    .form-style-7 select {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: 100%;
        display: block;
        outline: none;
        border: none;
        height: 25px;
        line-height: 25px;
        font-size: 16px;
        padding: 0;
        font-family: Georgia, "Times New Roman", Times, serif;
    }

    .form-style-7 input[type="text"]:focus,
    .form-style-7 input[type="date"]:focus,
    .form-style-7 input[type="datetime"]:focus,
    .form-style-7 input[type="email"]:focus,
    .form-style-7 input[type="number"]:focus,
    .form-style-7 input[type="search"]:focus,
    .form-style-7 input[type="time"]:focus,
    .form-style-7 input[type="url"]:focus,
    .form-style-7 input[type="password"]:focus,
    .form-style-7 textarea:focus,
    .form-style-7 select:focus {
    }

    .form-style-7 li > span {
        background: #F3F3F3;
        display: block;
        padding: 3px;
        margin: 0 -9px -9px -9px;
        text-align: center;
        color: #C0C0C0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11px;
    }

    .form-style-7 textarea {
        resize: none;
    }

    .form-style-7 input[type="submit"],
    .form-style-7 input[type="button"] {
        background: #2471FF;
        border: none;
        padding: 10px 20px 10px 20px;
        border-bottom: 3px solid #5994FF;
        border-radius: 3px;
        color: #D2E2FF;
    }

    .form-style-7 input[type="submit"]:hover,
    .form-style-7 input[type="button"]:hover {
        background: #6B9FFF;
        color: #fff;
    }

</style>