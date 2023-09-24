import Footer from "../components/Footer";
import Header from "../components/Header";
import TestTable from "../components/Table";
import generatePDF from "../functions/generatePDF";
import { PDF } from "../types/pdf";

export const DynamicTest: PDF = (test) =>
  generatePDF({
    pdfHTML: TestTable({ data }),
    pdfOptions: {
      path: "test.pdf",
      displayHeaderFooter: true,
      headerTemplate: Header({ title: "Test title" }),
      footerTemplate: Footer({}),
      format: "A4",
      margin: {
        top: "100px",
        bottom: "100px",
        left: "30px",
        right: "30px",
      },
      printBackground: false,
    },
    test,
  });

export default DynamicTest;


const data = [
  {
    "id": 1,
    "name": "Neil Bayer",
    "jobTitle": "Investor Assurance Orchestrator",
    "color": "fuchsia"
  },
  {
    "id": 2,
    "name": "Leland Luettgen",
    "jobTitle": "Lead Optimization Representative",
    "color": "orange"
  },
  {
    "id": 3,
    "name": "Annie Haley",
    "jobTitle": "International Brand Supervisor",
    "color": "ivory"
  },
  {
    "id": 4,
    "name": "Lindsay Donnelly",
    "jobTitle": "Corporate Paradigm Technician",
    "color": "mint green"
  },
  {
    "id": 5,
    "name": "Jean Muller",
    "jobTitle": "Principal Security Officer",
    "color": "mint green"
  },
  {
    "id": 6,
    "name": "Dr. Sharon Welch",
    "jobTitle": "Product Markets Coordinator",
    "color": "olive"
  },
  {
    "id": 7,
    "name": "Shari Zboncak",
    "jobTitle": "District Accounts Designer",
    "color": "tan"
  },
  {
    "id": 8,
    "name": "Casey Mann",
    "jobTitle": "Global Program Strategist",
    "color": "blue"
  },
  {
    "id": 9,
    "name": "Nadine Wiza",
    "jobTitle": "Internal Assurance Facilitator",
    "color": "magenta"
  },
  {
    "id": 10,
    "name": "Pamela Koch",
    "jobTitle": "Regional Operations Architect",
    "color": "fuchsia"
  },
  {
    "id": 11,
    "name": "Megan Willms",
    "jobTitle": "Senior Group Designer",
    "color": "turquoise"
  },
  {
    "id": 12,
    "name": "Carrie Brakus",
    "jobTitle": "Regional Configuration Director",
    "color": "green"
  },
  {
    "id": 13,
    "name": "Margarita Hirthe",
    "jobTitle": "Product Solutions Coordinator",
    "color": "maroon"
  },
  {
    "id": 14,
    "name": "Dr. Francis Walter",
    "jobTitle": "Central Research Planner",
    "color": "gold"
  },
  {
    "id": 15,
    "name": "Clyde Corkery",
    "jobTitle": "Internal Paradigm Assistant",
    "color": "lavender"
  },
  {
    "id": 16,
    "name": "Alfonso Mosciski",
    "jobTitle": "Investor Applications Coordinator",
    "color": "plum"
  },
  {
    "id": 17,
    "name": "Carlton D'Amore",
    "jobTitle": "District Configuration Coordinator",
    "color": "azure"
  },
  {
    "id": 18,
    "name": "Elaine Wiza",
    "jobTitle": "Senior Applications Consultant",
    "color": "gold"
  },
  {
    "id": 19,
    "name": "Pablo O'Kon-Turner",
    "jobTitle": "Future Security Facilitator",
    "color": "turquoise"
  },
  {
    "id": 20,
    "name": "Kathleen Moore II",
    "jobTitle": "District Accountability Designer",
    "color": "silver"
  },
  {
    "id": 21,
    "name": "Erin Watsica III",
    "jobTitle": "District Applications Architect",
    "color": "lavender"
  },
  {
    "id": 22,
    "name": "Tanya Swift-Oberbrunner",
    "jobTitle": "Principal Metrics Manager",
    "color": "mint green"
  },
  {
    "id": 23,
    "name": "Lucy Rolfson",
    "jobTitle": "Internal Communications Assistant",
    "color": "ivory"
  },
  {
    "id": 24,
    "name": "Maggie Bednar",
    "jobTitle": "Customer Infrastructure Director",
    "color": "tan"
  },
  {
    "id": 25,
    "name": "Mr. Wm West",
    "jobTitle": "Lead Quality Supervisor",
    "color": "violet"
  },
  {
    "id": 26,
    "name": "Ron Oberbrunner",
    "jobTitle": "Central Communications Strategist",
    "color": "tan"
  },
  {
    "id": 27,
    "name": "Allan Medhurst",
    "jobTitle": "Legacy Group Producer",
    "color": "sky blue"
  },
  {
    "id": 28,
    "name": "Derek Zboncak",
    "jobTitle": "Direct Marketing Supervisor",
    "color": "plum"
  },
  {
    "id": 29,
    "name": "Rebecca Jakubowski",
    "jobTitle": "Dynamic Security Planner",
    "color": "salmon"
  },
  {
    "id": 30,
    "name": "Amber Ryan",
    "jobTitle": "Corporate Markets Administrator",
    "color": "teal"
  },
  {
    "id": 31,
    "name": "Joe Pacocha",
    "jobTitle": "Senior Communications Analyst",
    "color": "violet"
  },
  {
    "id": 32,
    "name": "Kurt Pfannerstill",
    "jobTitle": "Direct Communications Technician",
    "color": "tan"
  },
  {
    "id": 33,
    "name": "Ms. Vickie Weissnat",
    "jobTitle": "District Factors Liaison",
    "color": "red"
  },
  {
    "id": 34,
    "name": "Myra Jaskolski",
    "jobTitle": "National Intranet Technician",
    "color": "tan"
  },
  {
    "id": 35,
    "name": "Jonathon Considine",
    "jobTitle": "Human Directives Architect",
    "color": "black"
  },
  {
    "id": 36,
    "name": "Mitchell King",
    "jobTitle": "Investor Operations Architect",
    "color": "fuchsia"
  },
  {
    "id": 37,
    "name": "Jorge Schultz",
    "jobTitle": "International Integration Engineer",
    "color": "sky blue"
  },
  {
    "id": 38,
    "name": "Hector Wunsch III",
    "jobTitle": "Direct Quality Architect",
    "color": "mint green"
  },
  {
    "id": 39,
    "name": "Mr. Kyle O'Reilly",
    "jobTitle": "Senior Infrastructure Associate",
    "color": "red"
  },
  {
    "id": 40,
    "name": "Ted Kreiger",
    "jobTitle": "Legacy Security Architect",
    "color": "purple"
  },
  {
    "id": 41,
    "name": "Lucas Renner",
    "jobTitle": "Central Program Manager",
    "color": "teal"
  },
  {
    "id": 42,
    "name": "Brandon Bergstrom",
    "jobTitle": "Human Intranet Representative",
    "color": "gold"
  },
  {
    "id": 43,
    "name": "Alfonso Gottlieb",
    "jobTitle": "Direct Data Orchestrator",
    "color": "pink"
  },
  {
    "id": 44,
    "name": "Sonja Rutherford",
    "jobTitle": "International Functionality Officer",
    "color": "maroon"
  },
  {
    "id": 45,
    "name": "Lionel Pollich-Torphy",
    "jobTitle": "Central Integration Analyst",
    "color": "salmon"
  },
  {
    "id": 46,
    "name": "John Considine IV",
    "jobTitle": "Customer Configuration Officer",
    "color": "tan"
  },
  {
    "id": 47,
    "name": "Everett Kreiger",
    "jobTitle": "Dynamic Applications Consultant",
    "color": "pink"
  },
  {
    "id": 48,
    "name": "Jessie Hoppe",
    "jobTitle": "Global Division Associate",
    "color": "turquoise"
  },
  {
    "id": 49,
    "name": "Clayton Leannon",
    "jobTitle": "District Identity Supervisor",
    "color": "fuchsia"
  },
  {
    "id": 50,
    "name": "Lonnie Greenholt",
    "jobTitle": "Dynamic Intranet Coordinator",
    "color": "indigo"
  },
  {
    "id": 51,
    "name": "Yolanda Fay",
    "jobTitle": "Internal Factors Executive",
    "color": "grey"
  },
  {
    "id": 52,
    "name": "Orlando Kuhn-Hansen",
    "jobTitle": "Direct Implementation Representative",
    "color": "grey"
  },
  {
    "id": 53,
    "name": "Kim Maggio",
    "jobTitle": "Global Applications Producer",
    "color": "white"
  },
  {
    "id": 54,
    "name": "Brent Ward",
    "jobTitle": "Regional Interactions Supervisor",
    "color": "cyan"
  },
  {
    "id": 55,
    "name": "Clara Rohan",
    "jobTitle": "Direct Accountability Agent",
    "color": "indigo"
  },
  {
    "id": 56,
    "name": "Silvia Schmitt",
    "jobTitle": "Forward Applications Executive",
    "color": "purple"
  },
  {
    "id": 57,
    "name": "Joann Koepp",
    "jobTitle": "Dynamic Metrics Representative",
    "color": "cyan"
  },
  {
    "id": 58,
    "name": "Christine Reinger",
    "jobTitle": "Global Interactions Designer",
    "color": "tan"
  },
  {
    "id": 59,
    "name": "Angie Breitenberg",
    "jobTitle": "Future Data Assistant",
    "color": "tan"
  },
  {
    "id": 60,
    "name": "Tom Jenkins",
    "jobTitle": "Product Operations Officer",
    "color": "cyan"
  },
  {
    "id": 61,
    "name": "Ana Schamberger",
    "jobTitle": "Future Response Manager",
    "color": "lavender"
  },
  {
    "id": 62,
    "name": "Jorge Sauer",
    "jobTitle": "Lead Data Representative",
    "color": "white"
  },
  {
    "id": 63,
    "name": "Caroline Goyette",
    "jobTitle": "Corporate Intranet Technician",
    "color": "indigo"
  },
  {
    "id": 64,
    "name": "Dr. Gerard Schulist PhD",
    "jobTitle": "Customer Web Coordinator",
    "color": "violet"
  },
  {
    "id": 65,
    "name": "Judith Gutkowski",
    "jobTitle": "Internal Optimization Agent",
    "color": "green"
  },
  {
    "id": 66,
    "name": "Herman Medhurst",
    "jobTitle": "Lead Brand Representative",
    "color": "azure"
  },
  {
    "id": 67,
    "name": "Patsy Schmeler",
    "jobTitle": "Corporate Web Supervisor",
    "color": "salmon"
  },
  {
    "id": 68,
    "name": "Lydia Fisher",
    "jobTitle": "Investor Factors Representative",
    "color": "orange"
  },
  {
    "id": 69,
    "name": "Orlando Graham",
    "jobTitle": "Principal Program Administrator",
    "color": "ivory"
  },
  {
    "id": 70,
    "name": "Danny O'Kon",
    "jobTitle": "Regional Paradigm Consultant",
    "color": "ivory"
  },
  {
    "id": 71,
    "name": "Kathryn Hayes",
    "jobTitle": "Legacy Solutions Assistant",
    "color": "turquoise"
  },
  {
    "id": 72,
    "name": "Mr. Todd Mayert",
    "jobTitle": "Global Mobility Associate",
    "color": "indigo"
  },
  {
    "id": 73,
    "name": "Misty Hamill",
    "jobTitle": "Lead Division Developer",
    "color": "indigo"
  },
  {
    "id": 74,
    "name": "Wallace Graham",
    "jobTitle": "International Integration Planner",
    "color": "maroon"
  },
  {
    "id": 75,
    "name": "Dianna Witting",
    "jobTitle": "International Creative Architect",
    "color": "ivory"
  },
  {
    "id": 76,
    "name": "Nelson Lockman",
    "jobTitle": "Legacy Infrastructure Planner",
    "color": "magenta"
  },
  {
    "id": 77,
    "name": "Sherman Corwin",
    "jobTitle": "Forward Security Architect",
    "color": "olive"
  },
  {
    "id": 78,
    "name": "Daryl Tremblay-Borer",
    "jobTitle": "Direct Creative Agent",
    "color": "violet"
  },
  {
    "id": 79,
    "name": "Jessie Corwin",
    "jobTitle": "Central Optimization Administrator",
    "color": "ivory"
  },
  {
    "id": 80,
    "name": "Minnie MacGyver",
    "jobTitle": "International Operations Designer",
    "color": "violet"
  },
  {
    "id": 81,
    "name": "Audrey Daugherty",
    "jobTitle": "Customer Identity Supervisor",
    "color": "magenta"
  },
  {
    "id": 82,
    "name": "Monique Nienow",
    "jobTitle": "Customer Interactions Designer",
    "color": "lime"
  },
  {
    "id": 83,
    "name": "Lucy Purdy-Sanford",
    "jobTitle": "Global Metrics Engineer",
    "color": "cyan"
  },
  {
    "id": 84,
    "name": "Claude Koch",
    "jobTitle": "Investor Solutions Developer",
    "color": "azure"
  },
  {
    "id": 85,
    "name": "Floyd Berge",
    "jobTitle": "Future Tactics Designer",
    "color": "lavender"
  },
  {
    "id": 86,
    "name": "Dr. Stephanie Prosacco",
    "jobTitle": "International Paradigm Manager",
    "color": "orange"
  },
  {
    "id": 87,
    "name": "Tina Wintheiser V",
    "jobTitle": "Customer Interactions Supervisor",
    "color": "lavender"
  },
  {
    "id": 88,
    "name": "Kent Kub",
    "jobTitle": "Corporate Marketing Director",
    "color": "violet"
  },
  {
    "id": 89,
    "name": "Wayne Goldner",
    "jobTitle": "Central Functionality Specialist",
    "color": "maroon"
  },
  {
    "id": 90,
    "name": "Wayne Smith",
    "jobTitle": "Human Creative Producer",
    "color": "sky blue"
  },
  {
    "id": 91,
    "name": "Jennifer Walker",
    "jobTitle": "Product Infrastructure Assistant",
    "color": "plum"
  },
  {
    "id": 92,
    "name": "Traci Ankunding",
    "jobTitle": "Internal Security Facilitator",
    "color": "orchid"
  },
  {
    "id": 93,
    "name": "Greg Rath",
    "jobTitle": "Lead Research Director",
    "color": "violet"
  },
  {
    "id": 94,
    "name": "Rufus Wolf",
    "jobTitle": "Human Assurance Planner",
    "color": "red"
  },
  {
    "id": 95,
    "name": "Levi Wilderman",
    "jobTitle": "Human Functionality Planner",
    "color": "silver"
  },
  {
    "id": 96,
    "name": "Lauren Casper",
    "jobTitle": "Corporate Security Producer",
    "color": "plum"
  },
  {
    "id": 97,
    "name": "Lee Ryan",
    "jobTitle": "Internal Functionality Assistant",
    "color": "lime"
  },
  {
    "id": 98,
    "name": "Mr. Bruce Mohr",
    "jobTitle": "Central Marketing Liaison",
    "color": "sky blue"
  },
  {
    "id": 99,
    "name": "Ada Kling DDS",
    "jobTitle": "Internal Response Producer",
    "color": "silver"
  },
  {
    "id": 100,
    "name": "Michele Prosacco V",
    "jobTitle": "Global Optimization Agent",
    "color": "tan"
  }
]
