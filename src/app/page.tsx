import Image from "next/image";
import Link from "next/link";

export interface DataType {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    pic: string;
}
async function getData() {
    const res = await fetch("http://localhost:4000/product", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("failed fetching");
    }

    return res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <div className="py-10 bg-gray-100">
            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map((item: DataType) => (
                    <article
                        className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
                        key={item.id}
                    >
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <Image
                                src={item.pic}
                                alt={item.title}
                                width={300}
                                height={200}
                                quality={30}
                                loading="lazy"
                            />
                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    ±+
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                                <button className="text-sm">Add to cart</button>
                                Image
                            </div>
                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700">{item.title}</h2>
                            <p className="mt-1 text-sm text-slate-400">
                                {item.description}
                            </p>

                            <div className="mt-3 flex items-end justify-between">
                                <p className="text-lg font-bold text-blue-500">
                                    {item.price}
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>

                                    <button className="text-sm">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
