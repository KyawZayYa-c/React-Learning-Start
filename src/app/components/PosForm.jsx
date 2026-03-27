'use client'
import {useState} from "react";

export default function PosForm() {
    const [price, setPrice ] = useState(0);
    const [qty, setQty ] = useState(0);
    console.log('Render')
    return (
        <div>
            <form>
                <div>
                    <div>
                        <label>Price</label>
                        <input type={"text"}
                               value={price}
                               onChange={e =>
                                   setPrice(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Qty</label>
                        <input type={"text"}
                               value={qty}
                               onChange={e =>
                                   setQty(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Tatal =  </label>
                        {price * qty}
                    </div>

                </div>
            </form>
        </div>
    )
}