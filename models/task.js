// Se importa la configuración de Firebase desde el archivo config.js.
const admin = require("../config/config");

// Se obtiene una instancia de Firestore desde el objeto admin.
const db = admin.firestore();

// Se accede a la colección 'Tasks' dentro de Firestore.
const tasks = db.collection("Tasks");

// Se exporta el objeto 'tasks' para que pueda ser utilizado en otros archivos.
module.exports = { tasks };
