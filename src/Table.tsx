import * as elements from "typed-html";
import { faker } from "@faker-js/faker";

const generateFakeData = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: faker.person.fullName(),
      jobTitle: faker.person.jobTitle(),
      color: faker.color.human(),
    });
  }
  return data;
};

export default function TestTable({amount = 30}: {amount?: number}) {
  const fakeData = generateFakeData(amount);
  
  return (
    <div class="flex justify-center items-center">
      <div class="overflow-x-auto">
        <table class="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((item) => (
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
