<template>
    <div id="header">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/doscg">Doscg</router-link></li>
            <li><router-link to="/cv">Cv</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
ul{
    margin: 0;
    padding: 0;
}
li{
    display: inline;
    margin-right: 8px;
}
</style>
