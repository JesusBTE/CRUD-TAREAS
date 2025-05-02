// Se importan las funciones del servicio de tareas desde 'taskService'.
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require("../services/taskService");

// Se define el objeto 'resolvers' que contiene las resoluciones para las operaciones de GraphQL.
const resolvers = {
  // Sección de consultas (queries) de GraphQL.
  Query: {
    // Resolver para obtener todas las tareas.
    getTasks: async () => {
      return await getTasks();  // Llama a la función que recupera todas las tareas desde Firestore.
    },

    // Resolver para obtener una tarea específica por su ID.
    getTask: async (_, { id }) => {
      return await getTaskById(id);  // Llama a la función que recupera una tarea por su ID.
    },
  },

  // Sección de mutaciones de GraphQL (operaciones que modifican datos).
  Mutation: {
    // Resolver para crear una nueva tarea.
    createTask: async (_, { title, completed }) => {
      return await createTask(title, completed);  // Llama a la función que crea una nueva tarea.
    },

    // Resolver para actualizar una tarea existente.
    updateTask: async (_, { id, title, completed }) => {
      return await updateTask(id, title, completed);  // Llama a la función que actualiza la tarea especificada.
    },

    // Resolver para eliminar una tarea por su ID.
    deleteTask: async (_, { id }) => {
      return await deleteTask(id);  // Llama a la función que elimina una tarea.
    },
  },
};

// Se exportan los resolvers para que puedan ser utilizados por el servidor de GraphQL.
module.exports = resolvers;
