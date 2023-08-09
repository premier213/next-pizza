import { PageContent } from "@/component/PageContent";

async function getData() {
  const res = await fetch("http://localhost:3001/product", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed fetching");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return <PageContent data={data} />;
}
