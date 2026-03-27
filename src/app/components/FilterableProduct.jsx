'use client';

import('./FilterableProductTable.css')
import classname from "classname";
import {useState} from "react";

function SearchBar({onChange}) {
    const [filter, setFilter] = useState('');
    const [inStock, setInStock] = useState(false);

    const FilterOnChange= (e) => {
        setFilter(e.target.value);
        onChange({
            filter : e.target.value,
            inStock,
        })
    }

    const inStockOnChange = (e) => {
        setInStock(e.target.checked);
        onChange({
            filter,
            inStock : e.target.checked,
        })
    }
    return(
        <div>
            <div>
                <input type={"text"} value={filter} onChange={FilterOnChange} />
            </div>

            <div>
                <input type={"checkbox"} checked={inStock} onChange={inStockOnChange}  />Only show product instocked
            </div>
        </div>
    )
}

function groupByCategory(products){
    let group = {};
        for (const product of products){
            if(group[product.category]){
                group[product.category].push(product);
            }else {
                group[product.category] = [product];
            }
        }
    return group;
}

function ProductTable({products}) {
   const group = groupByCategory(products);
   console.log('product category ', group);
   let category = Object.keys(group);
    return(<div  >
        <div className={'product-name'} >Name</div>
        <div className={'product-price'} >Price</div>
        {
            category.map((c, index) => (
                <ProductCategoryRow products={group[c]} key={index} />
            ))
        }
    </div>)
}

function ProductCategoryRow({products}) {
    const category = products[0].category;
    return(<div>
        <h3 className={'product-category'} >{category}</h3>
        <ProductRow products={ products } />
    </div>)
}



function ProductRow({products}){
    return(<div>
        {
            products.map( (product) => (
                <div key={product.id}>
                    <div className={classname('product-name', {'product-instock': product.stocked})} >{product.name}</div>
                    <div className={'product-price'} >{product.price}</div>
                </div>
            ))
        }
    </div>)
}

export default function FilterableProduct() {

    const initialData = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]

    const [products, setProducts] = useState(initialData);

    const searchBarChange = (filterData) => {
        console.log('Filter data ' ,filterData);
        let data = initialData;
        if(filterData.filter){
            data = data.filter(item => item.name.includes(filterData.filter));
        }
        if(filterData.inStock){
            data = data.filter(item => item.stocked);
        }

        setProducts(data);
    }
    return(
        <div>
            <SearchBar onChange = {searchBarChange} />
            <ProductTable products={ products }/>
        </div>
    )
}

