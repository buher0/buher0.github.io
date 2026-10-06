const slider4Images = [
"images/s2_25.jpg
];


const slider1Images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3_p.jpg",
    "images/4_p.jpg",
    "images/5_p.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/13.jpg",
    "images/ultima.jpg"
];

const slider2Images = [
    "images/s2_1.jpg",
    "images/s2_2.jpg",
    "images/s2_3.jpg",
    "images/s2_4.jpg",
    "images/s2_5.jpg",
    "images/s2_6.BMP",
    "images/s2_7.jpg",
    "images/s2_8.jpg",
    "images/s2_9.jpg",
    "images/s2_10.jpg",
    "images/s2_11.jpg",
    "images/s2_12.jpg",
    "images/s2_13.jpg",
    "images/s2_14.jpg",
    "images/s2_15.jpg",
    "images/s2_16.jpg",
    "images/s2_17.jpg",
    "images/s2_18.jpg",
    "images/s2_19.jpg",
    "images/s2_20.jpg",
    "images/s2_21.jpg",
    "images/s2_22.jpg",
    "images/s2_23.jpg",
    "images/s2_24.BMP",
    "images/s2_25.jpg",
    "images/s2_26.jpg",
    "images/s2_27.jpg",
    "images/s2_28.jpg",
    "images/s2_29.jpg",
    "images/s2_30.jpg",
    "images/s2_31.jpg",


];

let index4 = 0;
let index1 = 0;
let index2 = 0;
let index3 = 0;


const slider4 = document.getElementById("slider4");
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");



if (slider4) {
    setInterval(() => {

        index4++;

        if (index4 >= slider4Images.length) {
            index4 = 0;
        }

        slider4.src = slider4Images[index4];

    }, 2000);
}



if (slider1) {
    setInterval(() => {

        index1++;

        if (index1 >= slider1Images.length) {
            index1 = 0;
        }

        slider1.src = slider1Images[index1];

    }, 2000);
}



if (slider2) {
    setInterval(() => {

        index2++;

        if (index2 >= slider2Images.length) {
            index2 = 0;
        }

        slider2.src = slider2Images[index2];

    }, 2000);
}



