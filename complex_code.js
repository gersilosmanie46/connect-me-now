/* complex_code.js */

// This code demonstrates a complex algorithm for solving the traveling salesman problem using a genetic algorithm approach.

const NUMBER_OF_CITIES = 20; // Number of cities to visit
const POPULATION_SIZE = 100; // Number of individuals in the population
const ELITISM_RATE = 0.1; // Rate at which best individuals are preserved for next generation
const MUTATION_RATE = 0.1; // Rate at which mutations occur

class City {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  distanceTo(city) {
    const xDistance = Math.abs(this.x - city.x);
    const yDistance = Math.abs(this.y - city.y);
    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
  }
}

class Route {
  constructor(cities) {
    this.cities = cities;
    this.distance = this.calculateDistance();
  }
  
  calculateDistance() {
    let totalDistance = 0;
    for (let i = 0; i < this.cities.length - 1; i++) {
      totalDistance += this.cities[i].distanceTo(this.cities[i + 1]);
    }
    return totalDistance;
  }
  
  static generateRandomRoute() {
    const cities = [];
    for (let i = 0; i < NUMBER_OF_CITIES; i++) {
      cities.push(new City(Math.random() * 100, Math.random() * 100));
    }
    return new Route(cities);
  }
}

class Population {
  constructor() {
    this.routes = [];
    for (let i = 0; i < POPULATION_SIZE; i++) {
      const route = Route.generateRandomRoute();
      this.routes.push(route);
    }
  }
  
  sortRoutesByFitness() {
    this.routes.sort((a, b) => a.distance - b.distance);
  }
  
  crossover(parent1, parent2) {
    const childCities = [];
    for (let i = 0; i < NUMBER_OF_CITIES; i++) {
      childCities.push(null);
    }
    
    const start = Math.floor(Math.random() * NUMBER_OF_CITIES);
    const end = Math.floor(Math.random() * NUMBER_OF_CITIES);
    
    for (let i = 0; i < NUMBER_OF_CITIES; i++) {
      if (start < end && i > start && i < end) {
        childCities[i] = parent1.cities[i];
      } else if (start > end && !(i < start && i > end)) {
        childCities[i] = parent1.cities[i];
      }
    }
    
    for (let i = 0; i < NUMBER_OF_CITIES; i++) {
      if (!childCities.includes(parent2.cities[i])) {
        for (let j = 0; j < NUMBER_OF_CITIES; j++) {
          if (childCities[j] === null) {
            childCities[j] = parent2.cities[i];
            break;
          }
        }
      }
    }
    
    return new Route(childCities);
  }
  
  mutate(route) {
    for (let i = 0; i < NUMBER_OF_CITIES; i++) {
      if (Math.random() < MUTATION_RATE) {
        const j = Math.floor(Math.random() * NUMBER_OF_CITIES);
        const temp = route.cities[i];
        route.cities[i] = route.cities[j];
        route.cities[j] = temp;
      }
    }
    route.distance = route.calculateDistance();
  }
  
  evolve() {
    this.sortRoutesByFitness();
    const elitismOffset = Math.ceil(POPULATION_SIZE * ELITISM_RATE);
    const newPopulation = [];
    
    for (let i = 0; i < elitismOffset; i++) {
      newPopulation.push(this.routes[i]);
    }
    
    for (let i = elitismOffset; i < POPULATION_SIZE; i++) {
      const parent1 = this.routes[Math.floor(Math.random() * elitismOffset)];
      const parent2 = this.routes[Math.floor(Math.random() * POPULATION_SIZE)];
      const child = this.crossover(parent1, parent2);
      this.mutate(child);
      newPopulation.push(child);
    }
    
    this.routes = newPopulation;
  }
}

function main() {
  let population = new Population();
  
  for (let i = 0; i < 1000; i++) {
    population.evolve();
  }
  
  console.log("Best distance:", population.routes[0].distance);
  console.log("Best route:", population.routes[0].cities);
}

main();