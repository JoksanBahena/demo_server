const db = require("./db/connection");
const axios = require("axios");

// const createClient = () => {
//     axios.get('https://randomuser.me/api/')
//         .then((response) => {
//             const { name } = response.data.results[0];
//             const sql = `INSERT INTO clients (name,last_name, created_at) VALUES ('${name.first}','${name.last}', '2024-02-01 19:07:41')`;
//             db.query(sql, (err, result) => {
//                 if (err) throw err;
//                 console.log('Cliente creado!');
//                 /*const sql = `INSERT INTO logs (description, time_stamp) VALUES ('Cliente creado', NOW())`;
//                 db.query(sql, (err, result) => {
//                     if (err) throw err;
//                     console.log('Log creado!');
//                 });*/
//             });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

const pets = [
  {
    name: "Max",
    type: "Dog",
    breed: "Labrador Retriever",
    owner_id: 1,
  },
  {
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    owner_id: 2,
  },
  {
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    owner_id: 3,
  },
  {
    name: "Simba",
    type: "Cat",
    breed: "Persian",
    owner_id: 4,
  },
  {
    name: "Rocky",
    type: "Dog",
    breed: "German Shepherd",
    owner_id: 5,
  },
  {
    name: "Whiskers",
    type: "Cat",
    breed: "Maine Coon",
    owner_id: 6,
  },
  {
    name: "Bailey",
    type: "Dog",
    breed: "Bulldog",
    owner_id: 7,
  },
  {
    name: "Milo",
    type: "Cat",
    breed: "Ragdoll",
    owner_id: 8,
  },
  {
    name: "Coco",
    type: "Dog",
    breed: "Poodle",
    owner_id: 9,
  },
  {
    name: "Oreo",
    type: "Cat",
    breed: "British Shorthair",
    owner_id: 10,
  },
  {
    name: "Charlie",
    type: "Dog",
    breed: "Beagle",
    owner_id: 11,
  },
  {
    name: "Smokey",
    type: "Cat",
    breed: "Scottish Fold",
    owner_id: 12,
  },
  {
    name: "Daisy",
    type: "Dog",
    breed: "Boxer",
    owner_id: 10,
  },
  {
    name: "Mittens",
    type: "Cat",
    breed: "Siberian",
    owner_id: 1,
  },
  {
    name: "Max",
    type: "Dog",
    breed: "Labrador Retriever",
    owner_id: 5,
  },
  {
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    owner_id: 6,
  },
  {
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    owner_id: 6,
  },
  {
    name: "Simba",
    type: "Cat",
    breed: "Persian",
    owner_id: 8,
  },
  {
    name: "Rocky",
    type: "Dog",
    breed: "German Shepherd",
    owner_id: 9,
  },
  {
    name: "Whiskers",
    type: "Cat",
    breed: "Maine Coon",
    owner_id: 10,
  },
];

const createPet = (pets) => {
    const randomIndex = Math.floor(Math.random() * 20);
    const randomPet = pets[randomIndex];
    console.log(randomIndex, randomPet);
    const sql = `INSERT INTO pets (name, type, breed, owner_id) VALUES ('${randomPet.name}', '${randomPet.type}', '${randomPet.breed}', ${randomPet.owner_id})`;
    console.log(sql);
  
    try {
      db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Mascota creada!");
      });
    } catch (error) {
      console.log(error);
    }
  };
  

// setInterval(createClient, 5000);
setInterval(() => createPet(pets), 5000);
