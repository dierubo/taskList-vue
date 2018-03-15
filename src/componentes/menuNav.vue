<template>
    <div class="menu-nav">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Logo</a>
                </div>
                <ul class="nav navbar-nav">
                    <router-link tag="li" active-class="active" exact to="/"><a>Inicio</a></router-link>
                    <router-link tag="li" active-class="active" exact to="/tareas"><a>Tareas</a></router-link>
                    <router-link tag="li" active-class="active" exact to="/usuarios"><a>Usuarios</a></router-link>
                </ul>
                <!-- <button class="btn btn-success navbar-btn">Log In</button> -->
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>
<style scoped>

</style>


