import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, child, get } from "firebase/database"

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  authDomain: "projecteur-fc77d.firebaseapp.com",
  databaseURL: "https://projecteur-fc77d-default-rtdb.firebaseio.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://projecteur-fc77d-default-rtdb.firebaseio.com",
  storageBucket: "projecteur-fc77d.appspot.com",
}

const app = initializeApp(firebaseConfig)

// Get a reference to the database service
export const db = getDatabase(app)

export const writeData = (valeur, link) => {
  set(ref(db, link), valeur)
}
export const readData = async (link) => {
  const dbRef = ref(getDatabase())

  const valeurtemp = get(dbRef, link)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log("No data available")
      }
    })
    .catch((error) => {
      console.error(error)
    })
  return valeurtemp
}
