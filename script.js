var i = 10
var j = 8
var k = 6

{
  let i = 2

  var j = 10

  const k = 8
}

const a = document.getElementById('demo1')
a.innerHTML = 'The Value Of i is : ' + i
a.style.color = 'teal'
a.style.fontSize = '30px'
document.write('<br>')
const b = document.getElementById('demo2')
b.innerHTML = 'The Value Of i is : ' + j
b.style.color = 'tomato'
b.style.fontSize = '30px'
document.write('<br>')
const c = document.getElementById('demo3')
c.innerHTML = 'The Value Of i is : ' + k
c.style.color = 'blue'
c.style.fontSize = '30px'
