import * as elements from "typed-html";
import BaseHtml from "./BaseHtml";
import TestTable from "./Table";

export default function TestPDF({amount = 30}: {amount?: number}) {
  return (
    <BaseHtml>
      <TestTable amount={amount} />
    </BaseHtml>
  );
}
