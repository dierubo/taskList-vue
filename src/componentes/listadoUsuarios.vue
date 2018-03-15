<template>
    <div class="wrap-listaUsuarios">
        <div class="item-usuario" v-for="(user, indice) in datosUsers">
            <div class="nombre-item-user">
                <div><strong>Nombre: </strong>{{ user.nombre }}</div>
            </div>
            <div class="apellidos-item-user">
                <div><strong>Apellidos: </strong>{{ user.apellidos }}</div>
            </div>
            <div class="email-item-user">
                <div><strong>Email: </strong>{{ user.email }}</div>
            </div>
        </div>
    </div>
</template>
<script>
    
    export default {
        props: ['datosUsers'],
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .item-usuario {
        border-bottom: 1px solid #CCCCCC;

        &:nth-last-child(1) {
            border-bottom: none;
        }
    }
</style>


