/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        mons: ['Montserrat'],
        vibur:['Vibur']

      },
      colors:{
        title: '#2F281E',
        sub: '#544837',
        btn: '#3A5AFF',
        gray:'#F2F2F2',
        login:"#979797",
        myYellow: "#FFC43B",
        box1: "#3A5AFF",
        box2: "#3CC5FF",
        box3: "#FF3B53",
        box4: "#FFC43B",

      }
    },
  },
  plugins: [],
}

