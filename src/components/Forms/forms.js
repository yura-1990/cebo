import { useRef } from 'react'


export function PostProductForm({ doPostPro }) {
    const name = useRef()
    const codPraduct = useRef()
    const price = useRef()
    const thereIs = useRef()
    const amount = useRef()
    const description = useRef()
    const searchWord = useRef()
    const discount = useRef()
    const groupPraduct = useRef()
    const priceDifference = useRef()
    const categoryName = useRef()
    const priceType = useRef()
    const unit = useRef()
    const priceValue = useRef()
    const orderFrom = useRef()
    const term = useRef()
    const visiblite = useRef()

    async function postProduct(data) {
        data.preventDefault()
        const datas = {
            "name": name.current.value,
            "codPraduct": codPraduct.current.value,
            "price": price.current.value,
            "thereIs": thereIs.current.value,
            "amount": Number(amount.current.value),
            "description": description.current.value,
            "searchWord": searchWord.current.value,
            "discount": discount.current.value,
            "groupPraduct": groupPraduct.current.value,
            "priceDifference": priceDifference.current.value,
            "categoryName": categoryName.current.value,
            "priceType": priceType.current.value,
            "priceValue": priceValue.current.value,
            "unit": unit.current.value,
            "orderFrom": orderFrom.current.value,
            "term": Number(term.current.value),
            "visiblite": visiblite.current.value,
        }

        console.log(datas);


        await doPostPro('praducts', datas)
    }


    return (
        <div className="mt-3 px-3">
            <form className="form" onSubmit={postProduct} >
                name: <input type={'text'} className={"form-control"} name="name" ref={name} />

                codPraduct: <input type={'text'} className={"form-control"} name="codPraduct" ref={codPraduct} />

                price: <input type={'text'} className={"form-control"} name="price" ref={price} />


                thereIs: <input type={'text'} className={"form-control"} name="thereIs" ref={thereIs} />

                amount: <input type={'number'} className={"form-control"} name="amount" ref={amount} />

                description: <input type={'text'} className={"form-control"} name="description" ref={description} />


                searchWord: <input type={'text'} className={"form-control"} name="searchWord" ref={searchWord} />

                discount: <input type={'text'} className={"form-control"} name="discount" ref={discount} />

                groupPraduct: <input type={'text'} className={"form-control"} name="groupPraduct" ref={groupPraduct} />

                priceDifference: <input type={'text'} className={"form-control"} name="priceDifference" ref={priceDifference} />

                categoryName: <input type={'text'} className={"form-control"} name="categoryName" ref={categoryName} />

                priceType: <input type={'text'} className={"form-control"} name="priceType" ref={priceType} />

                priceValue: <input type={'text'} className={"form-control"} name="priceValue" ref={priceValue} />

                unit: <input type={'text'} className={"form-control"} name="unit" ref={unit} />

                orderFrom: <input type={'text'} className={"form-control"} name="orderFrom" ref={orderFrom} />

                term: <input type={'number'} className={"form-control"} name="term" ref={term} />

                visiblite: <input type={'text'} className={"form-control"} name="visiblite" ref={visiblite} />

                <button className="btn btn-success">Send</button>
            </form>
        </div>
    )
}