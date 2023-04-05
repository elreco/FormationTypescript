// Définition des types personnalisés

type EmployeeId = string;

type Employee = {
  id: EmployeeId;
  name: string;
  role: Role;
};

type Role = DeveloperRole | ManagerRole;

type DeveloperRole = {
  type: 'developer';
  programmingLanguages: string[];
};

type ManagerRole = {
  type: 'manager';
  managedTeams: string[];
};

// Fonction pour ajouter un employé
function addEmployee(employees: Employee[], newEmployee: Employee): Employee[] {
  return [...employees, newEmployee];
}

// Fonction pour récupérer le rôle d'un employé
function getRole(employee: Employee): string {
  switch (employee.role.type) {
    case 'developer':
      return 'Développeur';
    case 'manager':
      return 'Manager';
    default:
      return 'Inconnu';
  }
}

// Création d'employés en utilisant les types personnalisés
const employee1: Employee = {
  id: 'e1',
  name: 'Alice',
  role: { type: 'developer', programmingLanguages: ['JavaScript', 'TypeScript'] },
};

const employee2: Employee = {
  id: 'e2',
  name: 'Bob',
  role: { type: 'manager', managedTeams: ['Frontend', 'Backend'] },
};

// Liste des employés
let employees: Employee[] = [employee1, employee2];

// Ajout d'un nouvel employé
const employee3: Employee = {
  id: 'e3',
  name: 'Charlie',
  role: { type: 'developer', programmingLanguages: ['Python', 'Django'] },
};

employees = addEmployee(employees, employee3);

// Affichage des informations sur les employés
employees.forEach((employee) => {
  console.log(`Nom: ${employee.name}, Rôle: ${getRole(employee)}`);
});
