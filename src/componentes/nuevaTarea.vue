<template>
    <div class="add-tareas">
        <input type="text" class="input-tareas" id="addTarea" v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Escriba una tarea" />
        <button @click="agregarTarea" class="btn btn-primary">Guardar</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nuevaTarea: '',
        }
    },
    props: ['tareas'],
    methods: {
        agregarTarea() {
            let agregarTarea = this.nuevaTarea;
            if(agregarTarea != '') {
                // Limpio la variable de espacios en blanco tanto al principio como al final
                agregarTarea = agregarTarea.trim();

                // Se graba en la base de datos de firebase
                this.$http.post('https://listadotareas-vue.firebaseio.com/tareas.json', {
                    tarea: agregarTarea,
                    finalizada: false
                }).then(respuesta => {
                    // Se crea el Objeto de la nueva tarea
                    let objTarea = {
                        id: respuesta.body.name, // El id que da firebase a la tarea
                        nombreTarea: agregarTarea,
                        finalizadaTarea: false,
                    }

                    //Se guarda la tarea en la variable 'tareas' pasada por su padre 'tareas.vue'
                    this.tareas.push(objTarea);
                });

                this.nuevaTarea = "";
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .add-tareas {
        .input-tareas {
            width: 86%;
            height: 35px;
            border: none;
            border-bottom: 2px solid #CCCCCC;
            border-radius: 2px;
            outline: 0;
            text-indent: 10px;
        }


    }
</style>


