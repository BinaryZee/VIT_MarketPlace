import { supabase } from '$lib/server/supaBaseClient';

interface ProductsType{
    productOwnerGmail: string,
    product_name: string,
    product_des:string,
    productImageUrl:string,
    productPrice : number    
}
const insertData = async (product:ProductsType)=>{
    const {data , error} = await supabase.from('products').insert([product]);
}

const product : ProductsType = {
    productOwnerGmail:"ht94171@gmail.com",
    product_name:"laptop",
    product_des:"good laptop",
    productImageUrl:"something",
    productPrice:35000,
}
// insertData(product);
export const load = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
        console.error('Error fetching profiles:', error.message);
        throw new Error('Failed to fetch data from Supabase');
    }
    // console.log(data);
    return { data }; 
};
