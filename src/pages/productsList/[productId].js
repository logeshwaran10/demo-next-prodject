import React from "react";
import Image from 'next/image';

const ProductId = (props) => {
    const { data } = props;
    return (
        <div className={'product-details'}>
            <p>Product name: {data?.title}</p>
            <h3>Product Description: {data?.description}</h3>
            <div className={'product-img'}>
                <Image
                    src={data.image}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>

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
    }));
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps(props) {
    const { params } = props;
    const response =  await fetch(`https://fakestoreapi.com/products/${params?.productId}`).then(response => response);
    const products = await response.json()

    return {
        props: {
            data: products // will be passed to the page component as props
        },
    }
}

export default ProductId