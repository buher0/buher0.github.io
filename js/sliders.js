/* =========================================================
   SLIDER 1
========================================================= */

const slider1Images = [
    "https://drive.google.com/file/d/1P99JJFJooXfbXdl_Nl9pnGXWiG3mcZ78/view?usp=sharing",
    "https://drive.google.com/file/d/1q0to8eaFVlSxN4N7-DYndhl31AEKPz_O/view?usp=sharing",
    "https://drive.google.com/file/d/1hpZvIL397p524ac_FnMdyPWuFJqLUZlh/view?usp=sharing",
    "https://drive.google.com/file/d/1XH3Xk3q-dkNmKCMAMXr_EXnvqKMM2I-M/view?usp=sharing",
    "https://drive.google.com/file/d/1zRT7JgSUDiOa99TBrsbXbCQjBWvs-ld8/view?usp=sharing",
    "https://drive.google.com/file/d/1CK5LwkCbo2YnCXg54PHjo4N76viF1wD_/view?usp=sharing",
    "https://drive.google.com/file/d/1phXt0zJm0hAaZcVXUigmTG405QDAcZY2/view?usp=sharing",
    "https://drive.google.com/file/d/1PSLSVzAOa_pTQlZBVsuzAypL4iIY2LRW/view?usp=sharing",
    "https://drive.google.com/file/d/1J240oGkcj6tOy02iiwJ_Jm20XwvJeL3K/view?usp=sharing",
    "https://drive.google.com/file/d/1ajplr4v9leniFbyAg2ARFwYG-_fYfDfX/view?usp=sharing",
    "https://drive.google.com/file/d/1kd1rqE-Y7FgqaWkMx9hSbNrF6x77s5As/view?usp=sharing",
    "https://drive.google.com/file/d/1DUyzdsPWOIwKD_fG1bE25DejBPN3IU4d/view?usp=sharing",
    "https://drive.google.com/file/d/1eAI0hbO8ccGWRrJ4tT4ISAwOVjpuSfPX/view?usp=sharing"
];

let index1 = 0;

const slider1 = document.getElementById("slider1");

if (slider1) {

    setInterval(() => {

        index1++;

        if (index1 >= slider1Images.length) {
            index1 = 0;
        }

        slider1.src = slider1Images[index1];

    }, 2000);

}


/* =========================================================
   SLIDER 2
========================================================= */

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
    "images/s2_31.jpg"
];

let index2 = 0;

const slider2 = document.getElementById("slider2");

if (slider2) {

    setInterval(() => {

        index2++;

        if (index2 >= slider2Images.length) {
            index2 = 0;
        }

        slider2.src = slider2Images[index2];

    }, 2000);

}


/* =========================================================
   SLIDER 4
========================================================= */

const slider4Images = [
    "images/my-photo.jpg",
    "images/s1_1.jpg",
    "images/s1_2.jpg",
    "images/s1_3.jpg",
    "images/s1_4.jpg",
    "images/s1_5.jpg",
    "images/s1_6.jpg",
    "images/s1_7.jpg",
    "images/s1_8.jpg",
    "images/s1_9.jpg",
    "images/s1_10.jpg",
    "images/s1_11.jpg",
    "images/s1_12.jpg",
    "images/s1_13.jpg"
];

let index4 = 0;

const slider4 = document.getElementById("slider4-image");

if (slider4) {

    setInterval(() => {

        index4++;

        if (index4 >= slider4Images.length) {
            index4 = 0;
        }

        slider4.src = slider4Images[index4];

    }, 700);

}


/* =========================================================
   SLIDER 5
========================================================= */

const slider5Images = [
    "images/pl_1.jpg",
    "images/pl_2.jpg",
    "images/pl_3.jpg",
    "images/pl_4.jpg",
    "images/pl_5.jpg",
    "images/pl_6.jpg"
];

let index5 = 0;

const slider5 = document.getElementById("slider5");

if (slider5) {

    setInterval(() => {

        index5++;

        if (index5 >= slider5Images.length) {
            index5 = 0;
        }

        slider5.src = slider5Images[index5];

    }, 2000);

}


/* =========================================================
   SLIDER 6
========================================================= */

const slider6Images = [
    "images/pl_7.jpg",
    "images/pl_8.jpg",
    "images/pl_9.jpg",
    "images/pl_10.jpg",
    "images/pl_11.jpg",
    "images/pl_12.jpg"
];

let index6 = 0;

const slider6 = document.getElementById("slider6");

if (slider6) {

    setInterval(() => {

        index6++;

        if (index6 >= slider6Images.length) {
            index6 = 0;
        }

        slider6.src = slider6Images[index6];

    }, 2000);

}

