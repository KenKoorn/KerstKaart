class App {
  runApplication() {
    let canvas = document.getElementById("canvas");
    let g = canvas.getContext("2d");

    var window_height = window.innerHeight;
    var window_width = window.innerWidth;

    canvas.width = window_width;
    canvas.height = window_height;

    canvas.style.background = "cyan";

    g.fillStyle = "darkblue";
    g.beginPath();
    g.moveTo(820, 220);
    g.lineTo(800, 240);
    g.lineTo(800, 270);
    g.lineTo(840, 270);
    g.lineTo(840, 240);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "red";
    g.beginPath();
    g.moveTo(720, 220);
    g.lineTo(700, 240);
    g.lineTo(700, 270);
    g.lineTo(740, 270);
    g.lineTo(740, 240);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "yellow";
    g.beginPath();
    g.moveTo(520, 220);
    g.lineTo(500, 240);
    g.lineTo(500, 270);
    g.lineTo(540, 270);
    g.lineTo(540, 240);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "orange";
    g.beginPath();
    g.moveTo(1020, 220);
    g.lineTo(1000, 240);
    g.lineTo(1000, 270);
    g.lineTo(1040, 270);
    g.lineTo(1040, 240);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "grey";
    g.beginPath();
    g.rect(0, 270, 10000, 50);
    g.closePath();
    g.fill();

    g.fillStyle = "red";
    g.beginPath();
    g.rect(0, 495, 10000, 50);
    g.closePath();
    g.fill();

    g.fillStyle = "white";
    g.beginPath();
    g.rect(0, 320, 10000, 10);
    g.closePath();
    g.fill();

    g.fillStyle = "grey";
    g.beginPath();
    g.rect(0, 330, 10000, 50);
    g.closePath();
    g.fill();

    g.fillStyle = "purple";
    g.font = "30px Arial";
    g.fillText("Vrolijk Kerst Feest!!", 650, 450);

    g.fillStyle = "brown";
    g.beginPath();
    g.rect(750, 220, 40, 50);
    g.closePath();
    g.fill();

    g.fillStyle = "darkgreen";
    g.beginPath();
    g.moveTo(765, 0);
    g.lineTo(700, 220);
    g.lineTo(850, 220);
    g.closePath();
    g.fill();

    g.fillStyle = "brown";
    g.beginPath();
    g.rect(250, 220, 40, 50);
    g.closePath();
    g.fill();

    g.fillStyle = "darkgreen";
    g.beginPath();
    g.moveTo(270, 0);
    g.lineTo(150, 220);
    g.lineTo(375, 220);
    g.closePath();
    g.fill();

    g.fillStyle = "brown";
    g.beginPath();
    g.rect(1200, 220, 40, 50);
    g.closePath();
    g.fill();

    g.fillStyle = "green";
    g.beginPath();
    g.moveTo(1220, 0);
    g.lineTo(1150, 220);
    g.lineTo(1290, 220);
    g.closePath();
    g.fill();

    g.fillStyle = "white";
    g.beginPath();
    g.arc(620, 235, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "white";
    g.beginPath();
    g.arc(620, 200, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "white";
    g.beginPath();
    g.arc(620, 160, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "black";
    g.beginPath();
    g.arc(605, 150, 5, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "black";
    g.beginPath();
    g.arc(635, 150, 5, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "orange";
    g.beginPath();
    g.arc(620, 160, 7, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "white";
    g.beginPath();
    g.arc(930, 235, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "white";
    g.beginPath();
    g.arc(930, 200, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "white";
    g.beginPath();
    g.arc(930, 160, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "black";
    g.beginPath();
    g.arc(915, 150, 5, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "black";
    g.beginPath();
    g.arc(945, 150, 5, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "orange";
    g.beginPath();
    g.arc(930, 160, 6, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "aqua";
    g.beginPath();
    g.arc(930, 180, 2, 0, 2 * Math.PI);
    g.fill();
    g.stroke();
  }
}

let app = new App();
app.runApplication();
