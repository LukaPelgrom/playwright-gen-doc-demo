export type TableData = {
  id: number;
  name: string;
  jobTitle: string;
  color: string;
}[];

export default function TestTable({ data }: { data: TableData }) {
  return (
    <div class="flex justify-center items-center">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.jobTitle}</td>
                <td>{item.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
