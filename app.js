// Carga las variables de entorno desde un archivo .env en process.env
require("dotenv").config();

// Ejecuta el archivo de configuración de Firebase (inicializa la conexión a Firestore)
require("./config/config");

// Se importa ApolloServer, el núcleo del servidor GraphQL
const { ApolloServer } = require("apollo-server");

// Se importan los esquemas (definiciones de tipos y operaciones GraphQL)
const typeDefs = require("./schemas/taskSchema");

// Se importan los resolvers, que contienen la lógica para responder a las queries y mutations
const resolvers = require("./resolvers/taskResolver");

// Se crea una instancia del servidor Apollo con el esquema y los resolvers definidos
const server = new ApolloServer({ typeDefs, resolvers });

// El servidor empieza a escuchar en el puerto especificado en .env o en el puerto 3001 por defecto
server.listen({ port: process.env.PORT || 3001 }).then(({ url }) => {
  // Muestra en consola la URL donde está corriendo el servidor GraphQL
  console.log(`Servidor corriendo en: ${url}`);
});
