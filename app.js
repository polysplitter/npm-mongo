

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true })

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: "Jim",
  age: 37
})

// person.save()


// Person.find((err, people) => {
//   if (err) {
//     console.log(err)
//   } else {
//     mongoose.connection.close()
//     people.forEach(person => {
//       console.log(person.name)
//     })
//   }
// })

Person.deleteMany({ name: 'Jim' }, (err) => {
  if(err) {
    console.log(err)
  } else {
    mongoose.connection.close()
    console.log('success')
  }
})

// const fruitSchema = new mongoose.Schema ({
//   name: {
//     type: String,
//     required: [ true, 'Names are required.' ] 
//   },
//   rating: {
//     type: Number,
//     min: 1,
//     max: 10,
//   },
//   review: String
// })

// const Fruit = mongoose.model('Fruit', fruitSchema)

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 34,
//   review: "Pretty solid as a fruit"
// })

//fruit.save()

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit"
// })

// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me"
// })

// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "weird texture"
// })

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('success')
//     }
// })

// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err)
//   } else {
//     mongoose.connection.close()
//     fruits.forEach(fruit => {
//       console.log(fruit.name)
//     })
//   }
// })

// Fruit.updateOne({ _id: '5c33e93b9c90130a710b0b81' }, { name: 'NewBanana' }, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('success')
//   }
// })

// Fruit.deleteOne({ name: 'NewBanana'}, (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('deleted')
//   }
// })