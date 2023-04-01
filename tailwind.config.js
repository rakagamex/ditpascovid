/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        blue: "#2CBCE9",
        red: "#FC2947",
        yellow:"#FDCC49",
        grey: "#ededed",
        "deep-blue":"#010026",
        "dark-grey":"#757575",
        "opaque-black":"rgba(0,0,0,0.35)"
      },
      backgroundImage:(theme) =>({
        "gradient-rainbow":
          "linear-gradient(81.66deg,#00B5EE 7.21%, #FF45AA 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg,#24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",    

      }),
      fontFamily:{
        playfair:["Playfair Display","serif"],
        poppins:["Poppins","sans-serif"],
        opensans:["Open Sans","sans-serif"]
      },
      content:{
        brush:"url('./assets/brush.png')",
        logodpas:"url('./assets/logodpas.png')",
        logodpasw:"url('./assets/logodpaswhite.png')",
        virus:"url('./assets/virus.png')",
        virus2:"url('./assets/virus2.png')",
        ditpas1:"url('./assets/ditpas-man.png')",
        ditpas2:"url('./assets/ditpas-woman.png')",
        ditpas3:"url('./assets/ditpas-man.png')",
        unodcman:"url('./assets/unodc-man.png')",
        unodcwoman:"url('./assets/unodc-woman.png')",
        doctormale:"url('./assets/doctor-male.png')",
        doctorfemale:"url('./assets/doctor-female.png')",

      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px",
    }
  },
  plugins: [],
}

