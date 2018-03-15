<template>
    <div class="wrap-users">
        <!-- <nuevo-usuario :datosUsers="datosUsers"></nuevo-usuario> -->
        <button class="btn btn-info btn-crear" :datosUsers="datosUsers" @click="newUser()">Crear Usuario</button>
        <listado-usuarios :datosUsers="datosUsers"></listado-usuarios>
    </div>
</template>
<script>
    import NuevoUsuario from './nuevoUsuario.vue';
    import ListadoUsuarios from './listadoUsuarios.vue';
    export default {
        components: {
            NuevoUsuario,
            ListadoUsuarios,
        },
        data() {
            return {
                datosUsers: [],
            }
        },
        created() {
            this.$http.get('https://usuarios-drubio.firebaseio.com/usuarios.json')
                .then(respuesta => {
                    return respuesta.json();
                }).then(respuestasJson => {
                    console.log(respuestasJson);
                    for (let id in respuestasJson) {
                        let usuariosJson = {
                            id: id,
                            nombre: respuestasJson[id].nombre,
                            apellidos: respuestasJson[id].apellidos,
                            email: respuestasJson[id].email,
                        }

                        this.datosUsers.push(usuariosJson);
                    }
                });
        },
        methods: {
            newUser() {
                this.$router.push({name: 'nuevoUsuario'});
            }
        }
    }
</script>
<style lang="scss" scoped>
    .btn-crear {
        margin: 0 0 20px 0;
    }
</style>


