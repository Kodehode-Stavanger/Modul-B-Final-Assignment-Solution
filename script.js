const employees = [
  {
    name: "Todd Adams",
    position: "Sales Manager",
    email: "todd.adams@company.com",
    phone: "(310) 874-9015",
    location: "New York",
  },
  {
    name: "Jane Doe",
    position: "Marketing Specialist",
    email: "jane.doe@company.com",
    phone: "(415) 555-1234",
    location: "San Francisco",
  },
  {
    name: "John Smith",
    position: "IT Analyst",
    email: "john.smith@company.com",
    phone: "(212) 555-5678",
    location: "Chicago",
  },
  {
    name: "Emily Davis",
    position: "HR Coordinator",
    email: "emily.davis@company.com",
    phone: "(305) 789-4321",
    location: "Miami",
  },
  {
    name: "Alex Johnson",
    position: "Finance Manager",
    email: "alex.johnson@company.com",
    phone: "(713) 987-6543",
    location: "Houston",
  },
  {
    name: "Megan Brown",
    position: "Software Engineer",
    email: "megan.brown@company.com",
    phone: "(415) 222-3333",
    location: "San Francisco",
  },
  {
    name: "Daniel White",
    position: "Customer Support Representative",
    email: "daniel.white@company.com",
    phone: "(512) 555-8888",
    location: "Austin",
  },
  {
    name: "Linda Miller",
    position: "Operations Manager",
    email: "linda.miller@company.com",
    phone: "(617) 444-5555",
    location: "Boston",
  },
  {
    name: "Aaron Taylor",
    position: "Quality Assurance Specialist",
    email: "aaron.taylor@company.com",
    phone: "(503) 111-2222",
    location: "Portland",
  },
  {
    name: "Catherine Wilson",
    position: "Graphic Designer",
    email: "catherine.wilson@company.com",
    phone: "(415) 777-8888",
    location: "San Francisco",
  },
];

const main = document.createElement("main");
document.body.append(main);

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
main.append(gridContainer);

const title = document.createElement("div");
title.setAttribute("id", "table-name");
title.textContent = "Employee database";

const columnLabels = document.createElement("div");
columnLabels.setAttribute("id", "col-names");

gridContainer.append(title, columnLabels);

const columns = ["Name", "Position", "Email", "Tel", "Location"];

for (let column of columns) {
  const colElem = document.createElement("p");
  colElem.classList.add("col-name");
  colElem.textContent = column;
  columnLabels.append(colElem);
}

const empList = document.createElement("ul");
title.setAttribute("id", "table-name");

for (let employee of employees) {
  const empElem = document.createElement("li");
  const name = document.createElement("p");
  name.textContent = employee.name;
  const position = document.createElement("p");
  position.textContent = employee.position;
  const email = document.createElement("p");
  email.textContent = employee.email;
  const tel = document.createElement("p");
  tel.textContent = employee.tel;
  const location = document.createElement("p");
  location.textContent = employee.location;
  empElem.append(name, position, email, tel, location);
  empList.append(empElem);
}
