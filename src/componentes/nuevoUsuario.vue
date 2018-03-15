<template>
    <div class="wrap-newUser" id="wrap_newUser">
        <h3 class="title-newUser">Nuevo Usuario</h3>
        <div class="newUser-create">
            <div class="form-group">
                <input type="text" class="form-control input-md space" id="input_nombre" placeholder="Nombre" v-model="newUsers.nombre">
                <input type="text" class="form-control input-md space" id="input_apel" placeholder="Apellidos" v-model="newUsers.apellidos">
            </div>
            <div class="form-group">
                <input type="email" class="form-control input-md space" id="inputEmail" placeholder="Email" v-model="newUsers.email">
            </div>
        </div>
        <div class="newUser-data">
            <h4 class="newUser-title-data">Resumen nuevo Usuario</h4>
            <div class="newUser-content-data">
                <div class="newUser-data-nombre space">
                    <span>Nombre: </span>
                    <span>{{ newUsers.nombre }}</span>
                </div>
                <div class="newUser-data-apel space">
                    <span>Apellidos: </span>
                    <span>{{ newUsers.apellidos }}</span>
                </div>
                <div class="newUser-data-email space">
                    <span>Email: </span>
                    <span>{{ newUsers.email }}</span>
                </div>
            </div>
            <button class="btn btn-success btn-users" @click="guardarUser()">Guardar</button>
        </div>
        <div class="text-user-success hidden">El usuario se ha creado satisfactoriamente</div>
        <button class="btn btn-info btn-backUser hidden" @click="volverListado()">Volver</button>
    </div>
</template>
<script>
    export default {
        props: ['datosUsers'],
        data() {
            return {
                newUsers: {
                    nombre: '',
                    apellidos: '',
                    email: '',
                }
            }
        },
        methods: {
            guardarUser() {
                console.log(this.datosUsers);
                if(this.newUsers.nombre != '' && this.newUsers.apellidos != '' && this.newUsers.email != '') {
                    
                    this.$http.post('https://usuarios-drubio.firebaseio.com/usuarios.json', {
                        nombre: this.newUsers.nombre,
                        apellidos: this.newUsers.apellidos,
                        email: this.newUsers.email,
                    }).then(respuesta => {

                        document.getElementsByClassName("title-newUser")[0].classList.add("hidden");
                        document.getElementsByClassName("newUser-create")[0].classList.add("hidden");
                        document.getElementsByClassName("newUser-data")[0].classList.add("hidden");

                        // Se muestra los botones para volver al listado
                        document.getElementsByClassName("text-user-success")[0].classList.remove("hidden");
                        document.getElementsByClassName("btn-backUser")[0].classList.remove("hidden");
                    });
                } else {
                    alert('Rellene todos los campos');
                }
            },
            volverListado() {
                this.$router.push({name: 'usuarios'});
            }
        }
    }
</script>
<style lang="scss" scoped>
    .wrap-newUser {
        overflow: hidden;

        .newUser-create {
            overflow: hidden;

            .space {
                margin: 0 10px 10px 0;
            }

            .input-md {
                width: 45%;
                float: left;
            }
        }

        .btn-users {
            margin: 20px 0 0 0;
        }

        .text-user-success {
            margin: 0 0 20px 0;
            font-size:  20px;
        }

        .hidden {
            display: none;
        }
    }
</style>


