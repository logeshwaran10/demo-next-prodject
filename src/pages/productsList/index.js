import React, { useEffect, useState} from "react";
import Link from 'next/link';
const ProductList = (props) => {
    const { data } = props;

    return (
        <div>
            {
                data.map(list => (
                    // eslint-disable-next-line react/jsx-key
                    <Link href={`/productsList/${list.id}`}>
                        <div> {list.id} {list.title}</div>
                    </Link>
                ))
            }
        </div>
    )
}


//getStaticProps() is used to get data from server at build time
export async function getStaticProps() {
    const response =  await fetch('https://fakestoreapi.com/products').then(response => response);
    const products = await response.json()

    return {
        props: { //props: required
            data: products
        }, // will be passed to the page component as props
    }
}

export default ProductList;