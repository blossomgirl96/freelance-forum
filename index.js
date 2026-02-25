/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function generateRandomFreelancer() {
  const name = NAMES[Math.floor(Math.random()*NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random()*OCCUPATIONS.length)];
  const rate = Math.floor(Math.random()*(PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
  return { name, occupation, rate };
}

const freelancers = []; 
for (let i = 0; i< NUM_FREELANCERS; i++){
  freelancers[i] = generateRandomFreelancer();
}

function getAverageRate(freelancers) {
  const total = freelancers.reduce((sum, freelancer) => {
    return sum + freelancer.rate;
  }, 0);
  return total / freelancers.length;
}

const averageRate = getAverageRate(freelancers);

function Freelancer({ name, rate }) {
  return (
    <tr>
      <h3>{name}</h3>
      <p>${rate}/hr</p>
    </tr>
  );
}

function arrayFreelancer(num) {
  for (let i = 0; i < num; i++) {
      <tr key={i}>
        <h3>{freelancers[i].name}</h3>
        <p>${freelancers[i].rate}/hr</p>
      </tr>
  }
}

