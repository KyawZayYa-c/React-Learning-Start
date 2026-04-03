'use client';
import './FilterableProductTable.css'
import {useState} from "react";
import classname from 'classname';

function SearchBar({onChange}){

    const [filter, setFilter] = useState('');
    const [inStock, setInStock] = useState(false);

    const filterOnChange = (e) => {
        setFilter(e.target.value);
        onChange({
            filter : e.target.value,
            inStock
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
    <form>
        <div>
            <input
                type={"text"}
                value={filter}
                onChange={filterOnChange}
            />
        </div>
        <div>
            <input
                type={'checkbox'}
                checked={inStock}
                onChange={inStockOnChange}
            /> Only shop pfoduct in stock!
        </div>
    </form>
)
}

function ProductTable({products}){
    let group= groupByCategory(products)
    let category = Object.keys(group);
        return(
            <div>
                <div className={'product-name'} >name</div>
                <div className={'product-price'} >Price</div>
                {
                    category.map((c, index) =>
                        <ProductCategoryRow products={group[c]} key={index}/>
                    )
                }
            </div>
        )
}

function ProductCategoryRow({products}){
    let category = products[0].category;
    return(<div>
        <h3 className={'product-category'} >{category}</h3>
        <ProductRow products={products} />
    </div>)
}

function groupByCategory(products){
    let group = {
    }
    for(const product of products){
        if(group[product.category]){
            group[product.category].push(product);
        }else {
            group[product.category]=[product];
        }
    }
    return group;
}
function ProductRow({products}){
    return(<div>
        {
            products.map((product, index) => (
                <div key={index} >
                    <div className = {classname('product-name',
                        {'product-instock' : !product.stocked}
                    )} >
                        {product.name}
                    </div>

                    <div className={'product-price'} >
                        {product.price}
                    </div>

                </div>
            ))
        }
    </div>)
}

export default function FilterableProductTable(){

    const initailData = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]

    const [products, setProducts] = useState(initailData);

    const searchBarChange = (filterData) => {
        let data = initailData;
        if(filterData.filter){
            data = data.filter(item => item.name.includes(filterData.filter));
        }
        if(filterData.inStock){
            data = data.filter(item => item.stocked)
        }
        setProducts(data);
    }




    return(<div>
        <SearchBar onChange={searchBarChange} />
        <ProductTable products={products} />
    </div>)
}