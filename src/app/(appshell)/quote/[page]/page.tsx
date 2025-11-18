import { ItemQuote } from "@/features/quote/views";
import { readQuote } from "@/features/quote/actions";
import { InnerShell, OuterShell } from "@/global/components/layout";

type PageProps = {
  params: Promise<{ [key: string]: string }>;
};

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const quotesPage = await readQuote({ page: Number(page) - 1 });
  const { color, content, totalElements } = quotesPage;

  return (
    <OuterShell color={color}>
      <InnerShell
        page={page}
        color={color}
        quote={content[0]}
        total={totalElements}>
        <ItemQuote quote={content[0]} color={color} />
      </InnerShell>
    </OuterShell>
  );
}
