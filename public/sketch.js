var socket;
 
setup = () => {
    createCanvas(600, 400)
    background(51)

    socket = io.connect('http://localhost:8000');
    socket.on('mouse', (data) => {
        noStroke()
        fill(`rgba(${data.y},${data.x}, ${data.x}, ${data.y})`)
        ellipse(data.x, data.y, 10, 10)
    })
}

mouseDragged = () => {
    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data)
}

draw = () => {
    noStroke()
    fill(`rgba(${mouseY},${mouseX}, ${mouseX}, ${mouseY})`)
    ellipse(mouseX, mouseY, 10, 10)
}