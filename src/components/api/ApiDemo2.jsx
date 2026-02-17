import React, { useState } from 'react'
import axios from 'axios'

export const ApiDemo2 = () => {

    const [products, setProducts] = useState("")
    const [users, setUsers] = useState([])

    const getUsers = async () => {
       
        const response = await axios.get("https://dummyjson.com/products")
            
        setProducts(response.data.total)   
        setUsers(response.data.products)

    }

    return (
        <div style={{ textAlign: "center" }}>
            
            <h1>ApiDemo2</h1>

            <button onClick={getUsers}>GET</button>

            <h2>PRODUCTS = {products}</h2>

            <table border="1" align="center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Discount Percentage</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Tags</th>
                        <th>Brand</th>
                        <th>Sku</th>
                        <th>weight</th>
                        <th>Dimensions width</th>
                        <th>Dimensions height</th>
                        <th>Dimensions depth</th>
                        <th>Warranty Information</th>
                        <th>Shipping Information</th>
                        <th>Availability Status</th>
                        <th>Reviews</th>
                        <th>Rreturn Policy</th>
                        <th>Minimum Order Quantity</th>
                        <th>Meta</th>
                        <th>Images</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.description}</td>
                            <td>{user.category}</td>
                            <td>{user.price}</td>
                            <td>{user.discountPercentage}</td>
                            <td>{user.rating}</td>
                            <td>{user.stock}</td>
                            <td>
                                {user.tags?.map((tag, index) => (
                                    <span key={index}>{tag} </span>
                                ))}
                            </td>
                            <td>{user.brand}</td>
                            <td>{user.sku}</td>
                            <td>{user.weight}</td>
                            <td>{user.dimensions?.width}</td>
                            <td>{user.dimensions?.height}</td>
                            <td>{user.dimensions?.depth}</td>
                            <td>{user.warrantyInformation}</td>
                            <td>{user.shippingInformation}</td>
                            <td>{user.availabilityStatus}</td>
                             <td>
                                {user.reviews?.map((review, index) => (
                                <div key={index}>
                                    ⭐ {review.rating} <br />
                                    {review.comment} <br />
                                    - {review.reviewerName}
                                    <hr/>
                                </div>))}
                            </td>
                            <td>{user.returnPolicy}</td>
                            <td>{user.minimumOrderQuantity}</td>
                            <td>
                            {user.meta && (
                                <div>
                                {user.meta.createdAt} <br />
                                {user.meta.updatedAt} <br />
                                {user.meta.barcode} <br />
                                <img src={user.meta.qrCode} width="40" alt="qr" />
                                </div>)}
                            </td>
                            <td>{user.images?.map((img, index) => (
                                <img key={index} src={img} width="40" alt="product" />))}
                            </td>
                            <td><img src={user.thumbnail} width="60" alt="thumbnail" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
