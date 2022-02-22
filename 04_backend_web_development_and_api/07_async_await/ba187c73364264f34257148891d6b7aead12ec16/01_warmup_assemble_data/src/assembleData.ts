type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(names: string[], ages: number[], countries: string[], haveTraveled: boolean[]): Profile[] {
  // Code here
  const profile: Profile[] = [];
  for (let i = 0; i < names.length; i++) {
    const person: Profile = {};
    person.name = names[i];
    person.age = ages[i];
    person.country = countries[i];
    person.haveTraveled = haveTraveled[i];
    profile.push(person);
  }
  return profile;
}

//on as des tableau remplis de valeur ( noms, ages, pays et voyageur ou non )
//on doit prendre un éléments de chaque tableau pour le placer en valeur d'une clé d'un des objets
//on doit renvoyer un tableau d'objet de type Profile ({
//  name:"LeNom"
//  age: "SonAge"
//  country: "SonPays"
//  haveTraveled: "SiIlADejaVoyager"
//})
