import {Routes, Route } from "react-router-dom";
import Product from "../Products/product";
import Home from "../home/home"

export default function content({showForm, showToggleForm, products, doPostPro}) {
    return (
        <div className="vh-100 overflow-auto bg-light">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product/create" element={<Product showForm={showForm} showToggleForm={showToggleForm} products={products} doPostPro={doPostPro} />}/>
            </Routes>
        </div>
    )
}