import Header from "./Header";


function SellerHome(props,username)
{
    return(<div>

        <Header/>
        <h1>Seller Home</h1>
        <h2>Welcome {username}</h2>

    </div>)
}

export default SellerHome;