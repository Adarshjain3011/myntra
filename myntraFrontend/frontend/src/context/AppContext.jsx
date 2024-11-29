import { createContext } from 'react';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider ({children}){

    const [allProduct,setALLProduct] = useState([]);

    const [allCategory,setAllCategory] = useState([]);

    const [allTags,setAllTags] = useState([]);

    const [singleTag,setSingleTag] = useState('');

    const [currentTag,setCurrentTag] = useState('');

    const [specificTagCategory,setSpecificTagcategory] = useState([]);

    const [singleProductId,setSingleProductId] = useState('');

    const [currentUserId,setCurrentUserId] = useState('');

    const [allCart,setAllCart] = useState([]);

    const [allWishlist,setAllWishlist] = useState([]);

    const [currentUserImage,setCurrentUserImage] = useState('');

    const[userInfo,setUserInfo] = useState({});
    




    // Every thing about product 


    const [singleProductDescription,setSingleProductDescription] = useState('');

    

    // Finish 

    // wishlist 

    // const [likedArray,set]

    let BASE_URL = import.meta.env.VITE_BASE_URL;

    let posts = BASE_URL;

    async function fetchAllproduct (productId = null,tag = null,category = null){

        
        if(category == null && tag === null && productId === null ){


            //  for ALL categories 


            let categories = BASE_URL;

            categories +=`getAllCategory`;

            let cat = await axios.get(categories);

            console.log(cat);
            
            let catos = Object.values(cat.data)[1];
          
            setAllCategory(catos);


            console.log("all tags array is here ",allCategory.length);

            

            console.log(" -------------------------------------");

            // for ALL tags 
            
            let tags = BASE_URL;

            tags +=`getAllTags`

            let AllTags = await axios.get(tags);
        
            
            let obj = Object.values(AllTags.data)[1];

            console.log(obj);

            setAllTags(obj);

            
            console.log("all tags array is here ",allTags.length);

            console.log("all tags array is here ",allCategory.length);

  
            console.log("-------------------------------------");

            // for getting all products 


            let allProducts = BASE_URL;

            allProducts += `getAllProduct`

            let products = await  axios.get(allProducts);

            let pro = Object.values(products.data)[1];

            console.log(pro);

            setALLProduct(pro);
            // setALLProduct(products);

        console.log(" ------------------------>")
            console.log("All product ",allProduct);

            console.log("allCtegory",allCategory);

            console.log("allTags",allTags);


        }

        if(tag !== null && category === null && productId === null){

            console.log("hellow mai tag ke andar ");

            BASE_URL+=`getAllSpecificTagCategory`;

            const params = new URLSearchParams();

            params.append('TagName', tag);

            console.log("params ",params);

            let data = await axios.get(`${BASE_URL}?${params}`);
            
            let specificTagData = Object.values(data.data)[1];
            
            console.log("specificTagData",specificTagData);

            setAllCategory(specificTagData);

        }

        
        if(productId !== null && tag === null && category === null){

            BASE_URL+=`/getProdctByID/${productId}`

            let data = await axios.get(BASE_URL);

            setALLProduct(data);

        }



    }

    useEffect(()=>{

        fetchAllproduct();


    },[]);



    // for setting data to the Datbase 

    // it is realted to post request 


    async function setData(tag = null, category = null){


        console.log(tag);
        if(tag !== null && category === null){

            posts+=`createTags`;
            console.log("hellow ",posts);
            console.log(posts);
            
            const forms = new FormData();

            forms.append("name",tag);

            let createTag = await axios.post(posts,forms);

            console.log("cerated tag is ",createTag);

        }

        if(tag !== null && category !== null){

            posts+=`createCategory`;
            
            const forms = new FormData();
            // name,tagName

            forms.append("name",category);

            forms.append("tagName",tag);

            let createCategory = await axios.post(posts,forms);

            console.log("cerated category  is ",createCategory);


        }
    }


    const[isLoggedIn,setIsLoggedIn] = useState(false);

    const[loading,setLoading] = useState(false);

    const value ={

        isLoggedIn,setIsLoggedIn,
        loading,setLoading,
        allProduct,setALLProduct,
        allCategory,setAllCategory,
        allTags,setAllTags,
        singleTag,setSingleTag,
        currentTag,setCurrentTag,
        fetchAllproduct,setData,
        singleProductDescription,setSingleProductDescription,
        specificTagCategory,setSpecificTagcategory,
        singleProductId,setSingleProductId,
        currentUserId,setCurrentUserId,
        allCart,setAllCart,
        allWishlist,setAllWishlist,
        currentUserImage,setCurrentUserImage,
        userInfo,setUserInfo

    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>


}





