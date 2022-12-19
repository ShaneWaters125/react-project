import * as React from "react";
import { useParams } from 'react-router-dom'

function Films(){
    const { filmid } = useParams()

    return(
    <div>
        <h1>{filmid}</h1>
    </div>
    )
}

export default Films