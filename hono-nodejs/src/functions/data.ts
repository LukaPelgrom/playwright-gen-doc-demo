import { faker } from "@faker-js/faker";

export const generateFakeData = (count: number) => {
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