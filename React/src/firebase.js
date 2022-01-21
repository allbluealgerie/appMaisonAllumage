import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, child, get, onValue } from "firebase/database"

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  authDomain: "projecteur-fc77d.firebaseapp.com",
  databaseURL: "https://projecteur-fc77d-default-rtdb.firebaseio.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  storageBucket: "projecteur-fc77d.appspot.com",
}

const app = initializeApp(firebaseConfig)

// Get a reference to the database service
export const db = getDatabase(app)

export const writeData = (valeur, link) => {
  set(ref(db, link), valeur)
}
export const readData = (Store, link) => {
  const db = getDatabase()
  const starCountRef = ref(db, link)
  console.log(starCountRef)
  onValue(starCountRef, (snapshot) => {
    if (!snapshot.exists()) {
      console.log(snapshot.exists(), "no data")
    } else {
      console.log(snapshot.exists(), "no data")
      const data = snapshot.val()
      Store(data)
    }
  })
}
