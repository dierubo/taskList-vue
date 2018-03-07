import InicioComponent from './componentes/inicio.vue';
import TareasComponent from './componentes/tareas.vue';

// Será siempre un array de objetos
export const rutas = [
    { path: '', component: InicioComponent },
    { path: '/tareas', component: TareasComponent },
]

// {
    //     // Los dos puntos de la URL significa que es dinámico, que el valor de id puede cambiar
    //     // path: '/usuarios/:id',
    //     //path: '/usuarios',
    //     //component: UsuariosComponent, children: [
    //         // Con esto se puede crear subrutas. Con 'name' le damos un nombre a la subruta
    //         //{path: ':id', component: InfoUsuario, name: 'infoUsuario'}
    //     //]
    //     // Lo que hay comentado sobre estas líneas es un ejemplo de subrutas dentro de una ruta
    //     path: '/usuarios', component: UsuariosComponent, name: 'usuarios'
    // },
    // { path: '/usuarios/:id', component: InfoUsuario, name: 'infoUsuario'},
    // // Por si alguien escribe /users para que se le redirija a la página que queramos
    // { path: '/users', redirect: '/usuarios'},
    // // Para cualquier cosa que no este en las rutas llevará a la página de inicio
    // { path: '*', redirect: ''}