import { Fragment, useEffect, useState } from "react"

const ItemCard = ({ bg, title, price }) => {
    const selectColor = [
        {
            id: 1,
            color: "#99C4CC"
        },
        {
            id: 2,
            color: "#CC9999"
        },
        {
            id: 3,
            color: "#CB99CC"
        },
        {
            id: 4,
            color: "#A6CC99"
        }
    ]

    const [activeColor, setActiveColor] = useState(selectColor[0]);

    useEffect(() => {

    }, [activeColor])
    return (
        <div className="product item">
            <img src={bg} alt="itembg" />
            <h1>{title}</h1>
            <div className="bottom">
                <h2>€{price}</h2>
                <div className="colorselect">
                    {selectColor.map(x =>
                        <div key={x.id} className={x.id == activeColor ? "circlecolor circlecolorActive" : "circlecolor"} onClick={() => setActiveColor(x.id)} style={{ background: x.color }}></div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default ItemCard