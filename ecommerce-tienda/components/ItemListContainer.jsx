import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { db } from "../src/utils/firebaseConfig";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"; 

const ItemListContainer = () =>{
    const [datos,setDatos] = useState([]);
    const { categoryid } = useParams();

     useEffect(() =>{
        const fetchFromFirestore = async ()=>{
         let q;   
         if(categoryid){
            q = query(collection(db, "productos"), where ("categoryid","==",(categoryid)))
         }else{
             q = query(collection(db, "productos"))   
         }   
           
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
         return dataFromFirestore;
        
    }
     fetchFromFirestore()
     .then(result => setDatos (result))
     .catch(err => console.log(err)) 
     },[categoryid]);


    useEffect(()=>{
        return(()=>{
            setDatos([]);
        })
    },[]);
    return(
        <ItemList datos = {datos}/>
    )
}

export default ItemListContainer;