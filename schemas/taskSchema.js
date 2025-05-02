// Se importa la función gql de Apollo Server, que permite definir esquemas GraphQL con template literals.
const { gql } = require("apollo-server");

// Se define el esquema GraphQL (typeDefs) utilizando el lenguaje de esquema de GraphQL.
const typeDefs = gql`
  # Tipo de dato 'Task' que representa una tarea.
  type Task {
    id: ID!            # Identificador único de la tarea (no nulo).
    title: String!     # Título de la tarea (no nulo).
    completed: Boolean! # Estado de la tarea: completada o no (no nulo).
  }

  # Definición de las operaciones de consulta disponibles.
  type Query {
    getTasks: [Task!]!  # Consulta que devuelve una lista de tareas (no nula, y cada tarea no nula).
    getTask(id: ID!): Task # Consulta que devuelve una tarea por su ID.
  }

  # Definición de las operaciones de modificación de datos (mutaciones).
  type Mutation {
    createTask(title: String!, completed: Boolean!): Task  # Crea una tarea con título y estado.
    updateTask(id: ID!, title: String, completed: Boolean): Task  # Actualiza una tarea por ID.
    deleteTask(id: ID!): Boolean  # Elimina una tarea por ID y devuelve true/false según el resultado.
  }
`;

// Se exporta el esquema para que sea utilizado por el servidor de Apollo.
module.exports = typeDefs;
