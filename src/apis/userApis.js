import {ref, child, get } from "firebase/database";
import { database } from "../firebase/server";
const dbRef = ref(database);
export const userApis = {
    getUserByid : (id) => {
        const res = get(child(dbRef, `user/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
              return snapshot.val()
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
          return res
    }
}