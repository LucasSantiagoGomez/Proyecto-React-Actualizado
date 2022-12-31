import { useEffect } from "react";
import { useState } from "react"

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../src/utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore"


const ItemlDetailContainer = () =>{
    const [dato,setDato] = useState({});
    const { idItem } = useParams ();
    

    useEffect(()=>{
        const fetchOneFromFireStore = async ()=>{
        const docRef = doc(db, "productos", idItem);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
           return{
            id: idItem,
            ...docSnap.data()
           }
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }
        fetchOneFromFireStore()
        .then(result => setDato(result))
        .catch(err => console.log(err))
    },[]);

    return(
        <ItemDetail item={dato}/>
    );
}

export default ItemlDetailContainer