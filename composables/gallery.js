function getUniqueRandomNumbers(count, max, exclude = []) {
    const numbers = new Set();
    while (numbers.size < count) {
      const num = Math.floor(Math.random() * max) + 1;
      if (!exclude.includes(num)) {
        numbers.add(num);
      }
    }
    return Array.from(numbers);
  }

export function generateGallery() {
    const countDogs = 1
    const countCats = 15
    // Stelle sicher, dass die Hund-ID nicht in den Katzen-IDs vorkommt:
    const randomDogs = getUniqueRandomNumbers(countDogs, 10000)
    const randomCats = getUniqueRandomNumbers(countCats, 10000, randomDogs)
    
    const pathToCatImages = 'https://cdn.axelganter.de/PetImages/Cat/'
    const pathToDogImages = 'https://cdn.axelganter.de/PetImages/Dog/'
    
    const catPets = randomCats.map(num => ({
      type: 'cat',
      id: 'cat'+num,
      url: `${pathToCatImages}${num}.jpg`,
      img: `${pathToCatImages}previews/${num}.jpg`,  
    }))
    
    const dogPets = randomDogs.map(num => ({
      type: 'dog',
      id: 'dog'+num,
      url: `${pathToDogImages}${num}.jpg`,
      img: `${pathToDogImages}previews/${num}.jpg`,
      
    }))
    
    const pets = [...catPets, ...dogPets]
    const petsRandom = pets.sort(() => Math.random() - 0.5)

    console.log(pets)
    
    return petsRandom
  }
