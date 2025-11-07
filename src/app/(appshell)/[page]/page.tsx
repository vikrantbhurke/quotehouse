import { ItemQuote } from "./item-quote";

const quote = {
  content: `Always trade money for time and knowledge. Because money can be lost
            and gained. But time once lost cannot be gained. And knowledge once
            gained cannot be lost.`,
  author: `Vikrant Bhurke`,
};

export default async function Page() {
  return <ItemQuote quote={quote} />;
}
