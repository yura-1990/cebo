import { doAuth } from "../../Services/backend";

export default function auth() {

    async function auth(data){
        data.preventDefault()
        const datas = {
            email: data.target[0].value,
            password: data.target[1].value,
        }
        await doAuth('users/auth', datas)
    }
 
    return (
        <div className="bg-secondary vh-100">
            <div className="container d-flex align-items-center justify-content-center h-100">
                <form className="w-50 text-white" onSubmit={auth}>
                    Email:
                    <input type={'email'} className="form-control" />
                    Password
                    <input type={'password'} className="form-control" />
                    <button className="btn btn-success mt-3">Sign in</button>
                </form>
            </div>
        </div>
    )
}