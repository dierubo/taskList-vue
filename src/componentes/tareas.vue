<template>
    <div class="wrap-tareas">
        <nueva-tarea :tareas="tareas"></nueva-tarea>
        <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
</template>
<script>
    import NuevaTarea from './nuevaTarea.vue';
    import ListaTareas from './listaTareas.vue';
    export default {
        components: {
            NuevaTarea,
            ListaTareas,
        },
        data() {
            return {
                tareas: [],
            }
        },
        created() {
            this.$http.get('https://listadotareas-vue.firebaseio.com/tareas.json')
                .then(respuesta => {
                    return respuesta.json();
                }).then(respuestasJson => {
                    //this.tareas = respuesta;

                    for (let id in respuestasJson) {
                        let tareasJson = {
                            id: id,
                            nombreTarea: respuestasJson[id].tarea,
                            finalizadaTarea: respuestasJson[id].finalizada,
                        }

                        this.tareas.push(tareasJson);
                    }
                });
        }
    }
</script>
<style lang="scss" scoped>
    
</style>


