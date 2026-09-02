import React, { memo, useCallback, useMemo, useState } from "react";
import Productshow from "./productshow.jsx";


// const products = [
//     {id: 1, name: "iPhone 15", category: "Mobile", price: 70000},
//     {id: 2, name: "Samsung S24", category: "Mobile", price: 65000},
//     {id: 3, name: "MacBook Air", category: "Laptop", price: 90000},
//     {id: 4, name: "Dell Inspiron", category: "Laptop", price: 60000},
//     {id: 5, name: "Sony Headphones", category: "Accessories", price: 15000},
//     {id: 6, name: "iPhone 18", category: "Mobile", price: 70000},
//     {id: 7, name: "Samsung A50s", category: "Mobile", price: 65000},
//     {id: 8, name: "MacBook Neo", category: "Laptop", price: 90000},
//     {id: 9, name: "Dell Latitude", category: "Laptop", price: 60000},
//     {id: 10, name: "Sony  TV", category: "Accessories", price: 15000},
//     {id: 11, name: "Dell  Lap", category: "Laptop", price: 60000},
//     {id: 12, name: "Sony  blutooth", category: "Accessories", price: 15000}
// ]
const products = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    category: `Category ${(index % 5) + 1}`,
    price: (index + 1) * 100
}));

function SearchBar() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortPrice, setSortPrice] = useState(false);

    //useMemo used for 
    const filteredProducts = useMemo(() => {
    return products.filter((product) => {
        const matchName = product.name.toLowerCase().includes(search.toLowerCase());
        const matchCategory =
            category === 'All' || product.category === category;

        return matchName && matchCategory;
    }).sort((a, b) => {
        if (!sortPrice) return 0;

        return a.price - b.price
    });
    }, [search, category, sortPrice]);

    const handleProductSelect = useCallback((product) => {
        console.log("Selected Products :", product)
    },[]);

    const hangleChange = (e) => {
        setSearch(e.target.value);
    }
    
    //useMemo is used for total
    const totals = useMemo(()=>{
        return filteredProducts.reduce((acc,product)=>{
            return acc + product.price;
        },0);
    },[filteredProducts]);

console.log("Total:", {totals})  ; 

    return (
        <>
            <input
                className="input"
                value={search}
                placeholder="Search Product..."
                onChange={hangleChange}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
                <option value="Category 4">Category 4</option>
                <option value="Category 5">Category 5</option>
            </select>
            <button onClick={() => setSortPrice(!sortPrice)}>
                Sort by Price
            </button>
            <p>Matched Products: {filteredProducts.length}</p>
            <p>Total of Matched : {totals}</p>

            <Productshow products={filteredProducts} onProductSelect={handleProductSelect} />


        </>
    )
}

export default memo(SearchBar);