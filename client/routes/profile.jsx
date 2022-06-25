import React from 'react';
import { Link } from "react-router-dom";
import { getData } from "../fakedata";

export default function home() {

    let data = getData();

    return(
    <div>
        <nav>
            {data.map((data) => (
                <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/data/${data.number}`} /*to diff end point*/
                key={data.number}>
                    {data.name}
                    </Link>
            ))}
        </nav>
    </div>
    )
};
