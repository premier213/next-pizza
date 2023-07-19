import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next-pizza|login",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-blue-200">text from layout login</p>
      {children}
    </div>
  );
}
