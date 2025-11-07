import { readQuote } from "@/features/quote/actions";
import { ItemQuote } from "./item-quote";

type PageProps = {
  params: Promise<{ [key: string]: string }>;
};

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const quotesPage = await readQuote({ page: Number(page) - 1 });

  return <ItemQuote quote={quotesPage.content[0]} />;
}
