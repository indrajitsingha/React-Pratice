import { useState } from "react"

export function CartFirst({ products, getdata }) {


    const [CheckData, setCheckData] = useState([])

    const GetData = (product) => {
        if (!CheckData.find((checkData) => checkData == product)) {
            setCheckData([...CheckData, product])
        } else {
            const index = CheckData.indexOf(product);
            if (index > -1) { // only splice array when item is found
                CheckData.splice(index, 1); // 2nd parameter means remove one item only
                setCheckData([...CheckData])
            }
        }


    }
    console.log(CheckData);

    const TransferData = () => {
        getdata(CheckData)
    }

    return (
        <div
            className="m-auto my-6 w-screen max-w-sm rounded-lg border border-gray-200 bg-white p-4 pt-4 shadow-sm sm:p-6 lg:p-8"
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
        >

            <div className="mt-6 space-y-6">
                <ul className="space-y-4">
                    {products.map((product) => (
                        <li key={product.id} className="flex justify-between items-center gap-4" >
                            <img
                                src={product.imageSrc}
                                alt={product.name}
                                className="h-16 w-16 rounded-full object-cover "
                            />
                            <div>
                                <h3 className="text-sm text-gray-900">{product.name}</h3>
                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dd className="inline font-bold">{product.price}</dd>
                                    </div>
                                    <div>
                                        <dt className="inline">Color:</dt>
                                        <dd className="inline">{product.color}</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="">
                                <input type="checkbox" name="" id=""
                                    className="accent-pink-300 focus:accent-pink-500"
                                    onChange={() => GetData(product)} />

                            </div>
                        </li>
                    ))}
                </ul>
                <div className="space-y-4 text-center">

                    <button
                        type="button"
                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

                        onClick={TransferData}>
                        Transfer
                    </button>

                </div>
            </div>
        </div>
    )
}
export function CartSecond({ products, getdata }) {

    const [CheckData, setCheckData] = useState([])

    const GetData = (product) => {
        if (!CheckData.find((checkData) => checkData == product)) {
            setCheckData([...CheckData, product])
        } else {
            const index = CheckData.indexOf(product);
            if (index > -1) { // only splice array when item is found
                CheckData.splice(index, 1); // 2nd parameter means remove one item only
                setCheckData([...CheckData])
            }
        }


    }
    console.log(CheckData);

    const TransferData = () => {
        getdata(CheckData)
    }

    return (
        <div
            className="m-auto my-6 w-screen max-w-sm rounded-lg border border-gray-200 bg-white p-4 pt-4 shadow-sm sm:p-6 lg:p-8"
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
        >

            <div className="mt-6 space-y-6">
                <ul className="space-y-4">
                    {products.map((product) => (
                        <li key={product.id} className="flex justify-between items-center gap-4">
                            <img
                                src={product.imageSrc}
                                alt={product.name}
                                className="h-16 w-16 rounded-full object-cover "
                            />
                            <div>
                                <h3 className="text-sm text-gray-900">{product.name}</h3>
                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dd className="inline font-bold">{product.price}</dd>
                                    </div>
                                    <div>
                                        <dt className="inline">Color:</dt>
                                        <dd className="inline">{product.color}</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="">
                                <input type="checkbox" name="" id=""
                                    className="accent-pink-300 focus:accent-pink-500"
                                    onChange={() => GetData(product)} />

                            </div>
                        </li>
                    ))}
                </ul>
                <div className="space-y-4 text-center">

                    <button
                        type="button"
                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={TransferData}>
                        Transfer
                    </button>

                </div>
            </div>
        </div>
    )
}
