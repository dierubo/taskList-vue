<template>
    <div class="wrap-listaTareas">
        <div class="item-tarea" v-for="(tarea, indice) in tareas">
            <div class="value-item-tarea" :class="{finalizada: tarea.finalizada}">
                {{ tarea.nombreTarea }}
            </div>
            <div class="btn-item-tarea">
                <button class="btn btn-success" @click="estadoTarea(indice)">Finalizada</button>
                <button class="btn btn-danger" @click="borrarTarea(indice)">Borrar</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['tareas'],
        data() {
            return {

            }
        },
        methods: {
            borrarTarea(indice) {

                // Se obtiene el id para poder borrarlo de la base de datos
                let idTarea = this.tareas[indice].id;

                if (idTarea != '' && typeof idTarea != 'undefined') {
                    this.$http.delete('https://listadotareas-vue.firebaseio.com/tareas/' + idTarea + '.json')
                        .then(respuesta => {
                            if (respuesta.statusText == "OK") {
                                this.tareas.splice(indice, 1); // Se borra de la varible tareas
                            } else {
                                alert("Algo ha ido mal. Prueba de nuevo más tarde y ya veremos si funciona");
                            }
                        });
                }
            },
            estadoTarea(indice) {

                let finalizadaTarea = this.tareas[indice].finalizada = !this.tareas[indice].finalizada; // Se guarda el estado y se cambia en la pantalla
                
                // console.log(this.tareas[indice]);
                let idTarea = this.tareas[indice].id;

                // Update de una de las propiedades del objeto
                this.$http.patch('https://listadotareas-vue.firebaseio.com/tareas/' + idTarea + '.json', {
                    finalizada: finalizadaTarea
                }).then(respuesta => {
                    console.log(respuesta);
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .wrap-listaTareas {
        border-radius: 3px;
        margin: 20px 0 0 0;
        background-color: #FFFFFF;

        .item-tarea {
            padding: 5px 5px;
            margin: 0 5px;
            border-bottom: 1px solid #CCCCCC;
            font-weight: 600;

            &:nth-last-child(1) {
                border-bottom: none;
            }

            .value-item-tarea {
                width: 70%;
                display: inline-block;
            }

            .finalizada {
                text-decoration: line-through;
            }

            .btn-item-tarea {
                width: 160px;
                display: inline-block;
            }
        }
    }
</style>


