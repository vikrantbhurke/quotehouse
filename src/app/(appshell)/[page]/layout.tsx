import { readQuote } from "@/features/quote/actions";
import { InnerShell } from "./inner-shell";
import { OuterShell } from "./outer-shell";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ [key: string]: string }>;
};

export default async function Layout({ children, params }: LayoutProps) {
  const { page } = await params;
  const quotesPage = await readQuote({ page: Number(page) - 1 });

  return (
    <OuterShell>
      <InnerShell page={page} total={quotesPage.totalElements}>
        {children}
      </InnerShell>
    </OuterShell>
  );
}
