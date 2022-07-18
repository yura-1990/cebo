import { PostProductForm } from '../Forms/forms'
import { Table } from '../Tables/tables'
export default function product({showForm,showToggleForm, products, doPostPro}) {

    return (
        <div>
            <div className="w-100 py-4 bg-light position-sticky top-0 shadow d-flex justify-content-between px-5 ">
                <h2 className="text-center ">Add Product</h2>
                <button className="btn btn-info " onClick={()=>showToggleForm()}>{showForm ? "cancel" : "Add"}</button>
            </div>

            {showForm ? <PostProductForm doPostPro={doPostPro} />
            : <Table products={products}/>}
        </div>
    )
}