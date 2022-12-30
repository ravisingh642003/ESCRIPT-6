class UserCar {
  constructor(CarBrand, CarModel) {
    this.CarBrand = CarBrand
    this.CarModel = CarModel
  }

  getFullInfo() {
    const val = document.getElementById('demo')
    val.innerHTML = `I have a ${this.CarBrand} , it is a ${this.CarModel}`
    val.style.color = 'teal'
    val.style.fontSize = '30px'
  }
}
let obj = new UserCar('Ford', 'Mustang')
obj.getFullInfo()
