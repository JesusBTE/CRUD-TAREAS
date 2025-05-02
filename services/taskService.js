// Se importa la colección 'tasks' desde el modelo, que representa la colección "Tasks" en Firestore.
const { tasks } = require("../models/task");

// Función que obtiene todas las tareas desde la colección "Tasks".
const getTasks = async () => {
  const snapshot = await tasks.get();  // Se obtiene un snapshot de todos los documentos.
  const tasksList = snapshot.docs.map((doc) => {
    const data = doc.data();  // Se extraen los datos de cada documento.
    return { id: doc.id, ...data };  // Se agrega el ID del documento al objeto.
  });
  return tasksList;  // Se devuelve la lista completa de tareas.
};

// Función que obtiene una tarea por su ID.
const getTaskById = async (id) => {
  const doc = await tasks.doc(id).get();  // Se accede al documento por ID.
  return doc.exists ? { id: doc.id, ...doc.data() } : null;  // Si existe, se devuelve con ID, si no, null.
};

// Función que crea una nueva tarea en la colección.
const createTask = async (title, completed) => {
  const docRef = await tasks.add({ title, completed });  // Se crea un nuevo documento.
  const doc = await docRef.get();  // Se obtiene el documento recién creado.
  return { id: doc.id, ...doc.data() };  // Se devuelve el documento con su ID.
};

// Función que actualiza una tarea existente.
const updateTask = async (id, title, completed) => {
  const updates = {};  // Se construye un objeto con los campos a actualizar.

  // Solo se agregan al objeto los campos que fueron proporcionados.
  if (title !== undefined) updates.title = title;
  if (completed !== undefined) updates.completed = completed;

  await tasks.doc(id).update(updates);  // Se aplica la actualización en Firestore.

  const updatedDoc = await tasks.doc(id).get();  // Se obtiene el documento actualizado.
  return { id, ...updatedDoc.data() };  // Se devuelve con su ID.
};

// Función que elimina una tarea por su ID.
const deleteTask = async (id) => {
  await tasks.doc(id).delete();  // Se elimina el documento de la colección.
  return true;  // Se retorna true para indicar que la operación fue exitosa.
};

// Se exportan todas las funciones para ser utilizadas por los resolvers de GraphQL.
module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
