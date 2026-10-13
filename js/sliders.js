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
    "https://drive.google.com/file/d/1yItkiQ9C-gR2sj6EOxFOhAJqh3BC71Wi/view?usp=sharing",
    "https://drive.google.com/file/d/1kJxQgBYi3f34kpBaddgDw40k5dnWZpdO/view?usp=sharing",
    "https://drive.google.com/file/d/1aWiPRWxF-_TSJzILgxN5B_1arBMdTGai/view?usp=sharing",
    "https://drive.google.com/file/d/1OToileXZ0i50JW-Ipsf89fBKuOd_k0nv/view?usp=sharing",
    "https://drive.google.com/file/d/1X5r0rIUwv-H3XrBJhGtJdSFzO82gAlPj/view?usp=sharing",
    "https://drive.google.com/file/d/1FMImudtCNzv6WfUo73jJa9Qeq3Evnu9D/view?usp=sharing",
    "https://drive.google.com/file/d/1Q3Gy4V3C9hfdxVY_LKWtjVB4nV-kW6WD/view?usp=sharing",
    "https://drive.google.com/file/d/1JQxYxI9bBUciC-XcOlJd6ruStv2BaAYS/view?usp=sharing",
    "https://drive.google.com/file/d/195_x-s5k2Ism09D1-ISsqEoaVjdzLIF-/view?usp=sharing",
    "https://drive.google.com/file/d/1JZ1lCpQGjgpYRSVSkiXNBL6ZWD4sYc_L/view?usp=sharing",
    "https://drive.google.com/file/d/1v01fwWUyotx9rYimSLu9pBho2xgiZg-R/view?usp=sharing",
    "https://drive.google.com/file/d/1sZ7u8aGATzXP7pngBBalLgznz7KoYJWi/view?usp=sharing",
    "https://drive.google.com/file/d/1U-zSwh3xEy-JYIIhrLoW7LJ7SxTBE_S1/view?usp=sharing",
    "https://drive.google.com/file/d/1WnFtFv5yMc3-ZwETLnrH9oKbuJPVP-X7/view?usp=sharing"
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
    "https://drive.google.com/file/d/1sbTkfnxxFC2TS2_HrWP9RuPmUvHE4RGK/view?usp=sharing",
    "https://drive.google.com/file/d/1lwuFsq_a7iJSVgBGzNdRRPh4nB_4uWK4/view?usp=sharing",
    "https://drive.google.com/file/d/1T3C9ffB3UammvNV9zosamveBjQhBNgHR/view?usp=sharing",
    "https://drive.google.com/file/d/1HnJQEE6EEzlZnTactb5Zgt3SOkRGGDIX/view?usp=sharing",
    "https://drive.google.com/file/d/1FICK_9BHXOmyslfHw2Mksg4sphHDfClv/view?usp=sharing",
    "https://drive.google.com/file/d/1KRkxIJkFqoJ4vm920FIZp2_W20tyt8MB/view?usp=sharing"
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
    "https://drive.google.com/file/d/1V49GUlvyCm0cth0UeC_LdHUa5WBeYhVN/view?usp=sharing",
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

