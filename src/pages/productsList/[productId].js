import React from "react";
import Image from 'next/image';

const ProductId = (props) => {
    const { data } = props;
console.log('ProductId', props)
    return (
        <div>
            <p>Product name:  {data?.title}</p>
            <h3>Description: {data?.description}</h3>
            <Image
                src={data.image}
                alt="Picture of the author"
                width={500}
                height={500}
                blurDataURL={data.image} //automatically provided
                placeholder="blur" // Optional blur-up while loading
            />
        </div>
    );
}

export async function getStaticPaths() {
    const response =  await fetch('https://fakestoreapi.com/products').then(response => response);
    const products = await response.json();
    // Here we need to mention how many dynamic page is need to pre-render;
    const paths = products.map((post) => ({
        params: {
            productId: `${post.id}` // Params.productId key is to be used in getStaticProps()
        },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps(context) {
    const { params } = context;
    const response =  await fetch(`https://fakestoreapi.com/products/${params?.productId}`).then(response => response);
    const products = await response.json()

    return {
        props: {
            data: products
        }, // will be passed to the page component as props
    }
}

export default ProductId