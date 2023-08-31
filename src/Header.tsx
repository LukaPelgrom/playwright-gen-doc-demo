import * as elements from "typed-html";

export default function Header({ title }: { title: string }) {
  return (
      <div
        style="border-bottom: solid 1px; width: 100%; font-size: 30px;
        display: flex; justify-content: center; align-items: center;
        padding-bottom: 5px;
        "
      >
        <div>{title}</div>
      </div>
  );
}
