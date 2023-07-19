import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3001/product", {
    cache: "no-store",
  }); //SSR
  // const res2 = await fetch("http://localhost:3001/product"); //SSG
  if (!res.ok) {
    throw new Error("failed fetching");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="">
      <div className="flex gap-4">
        {data.map((item: any) => (
          <div key={item.id}>
            <Link href={`/products/${item.id}`} className="cursor-pointer">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
