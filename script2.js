class UserCar {
  constructor(CarBrand) {
    this.CarBrand = CarBrand
  }

  get1() {
    return 'I have a ' + this.CarBrand
  }
}
class CarModel extends UserCar {
  constructor(CarBrand, CarMod) {
    super(CarBrand)
    this.CarModel = CarMod
  }
  getinfo() {
    return this.get1() + ' , it is a  ' + this.CarModel
  }
}
let mycar = new CarModel('Ford', 'Mustang')

const val = document.getElementById('demo')
val.innerHTML = mycar.getinfo()
val.style.color = 'teal'
val.style.fontSize = '30px'
