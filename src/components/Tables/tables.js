export function Table({products}){
    return (
        <div className="px-3 py-4">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Code product</th>
                            <th>Description</th>
                            <th>price</th>
                            <th>Edit</th>
                            <th>Delet</th>
                        </tr>   
                    </thead>    
                    <tbody>
                        {
                            products.map((item, id)=> <tr key={item.id}>
                                <td>{id+1}</td>
                                <td>{item.name}</td>
                                <td>{item.codPraduct}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><button className="btn btn-success">Edit</button></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr> )
                        }
                    </tbody>
                </table>                 
            </div>
    )
}