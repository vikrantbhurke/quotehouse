import { readQuote } from "@/features/quote/actions";
import { ItemQuote } from "@/features/quote/views";
import { InnerShell, OuterShell } from "@/global/components/layout";

type PageProps = {
  params: Promise<{ [key: string]: string }>;
};

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const quotesPage = await readQuote({ page: Number(page) - 1 });

  return (
    <OuterShell color={quotesPage.color}>
      <InnerShell
        page={page}
        color={quotesPage.color}
        quote={quotesPage.content[0]}
        total={quotesPage.totalElements}>
        <ItemQuote
          jsonQuote={JSON.stringify(quotesPage.content[0])}
          color={quotesPage.color}
        />
      </InnerShell>
    </OuterShell>
  );
}
