import { useEffect, useState } from "react";
import axios from "axios";

export function MainMenu(props) {
    const [Nintendo, setProducts] = useState(null);

    // We use useEffect to handle the use of Axios and to be able to add the data in Nintendo.
    useEffect(() => {
        const productsAxios = axios
            .get("https://amiiboapi.com/api/amiibo/")
            .then((res) => {
                console.log(res);
                setProducts(res.data.amiibo);
            });
    }, []);



    return (
        <>
            <div class="card">
                <h5 className="card-header display-3 fw-bold" style={{ color: 'rgb(135, 206, 235)' }}>
                    Nintendo Shop 
                </h5>
                <div class="card-body">
                    <h5 class="card-title display-5">Buy your products here!</h5>
                    <div className="products d-flex flex-wrap">
                        {/* usamos la variable de Nintendo para que despues el map lo recorra todo y despues ya en los cards voy pillando lo que quiero */}
                        {Nintendo &&
                            Nintendo.map((Nintendo, index) => (
                                <div class="card" style={{ width: "25%", height: "30vw" }}>
                                    <img src={Nintendo.image} class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">{Nintendo.gameSeries}</h5>
                                        <p class="card-text">{Nintendo.name}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}