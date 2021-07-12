<template>
  <div class="home">
    <treeFolder :folder="treeData"/>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      treeData: {
        name: "Naruto uzumaki",
        title: "CTO",
        img: "https://iconape.com/wp-content/files/hb/154859/svg/154859.svg",
        children: [
          {
            name: "Luffy",
            title: "Directeur Developpement",
            img: "https://icons.iconarchive.com/icons/crountch/one-piece-character/256/Monkey-D-Luffey-icon.png",
            children: [
              { 
                name: "Donald trump",
                title: "chef Equipe",
                img: "https://webmedias.ac-nice.fr/chasseursdactu/wp-content/uploads/sites/39/2018/03/trump-800x445.png",
                children: [
                  { 
                    name: "buggy ",
                    title: "Developpeur",
                    img: "https://i.skyrock.net/2767/78482767/pics/3002856667_1_17_zt0vAVxu.png",
                  },
                  { 
                    name: "Gattuso",
                    title: "Developpeur",
                    img: "https://www.footyrenders.com/render/gennaro-gattuso-1.png"
                  },
                  { 
                    name: "Pepe",
                    title: "Developpeur",
                    img: "http://www.footugalfrance.fr/media/bearleague/thumb/bl15676139172440.png"
                  }
                ] 
              },
              { 
                name: "Kim Jong Un",
                title: "chef Equipe",
                img: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/great-leader-kim-jong-un/sticker_3.png?d0206403c0cca86b656d68031fa585e1&d=200x200",
                children: [
                  { 
                    name: "Saitama",
                    title: "Developpeur",
                    img: "https://www.pngkey.com/png/full/146-1460159_saitama-sticker-one-punch-man-saitama-ok.png",
                  },
                  { 
                    name: "Goku",
                    title: "Developpeur",
                    img: "https://i.pinimg.com/originals/d5/00/47/d50047b6bdfc27e96f6b9ffb40a25188.png"
                  },
                  { 
                    name: "Madara",
                    title: "Developpeur",
                    img: "https://i.pinimg.com/originals/f2/fe/c2/f2fec265ef3f424cacefd43816ea65ad.png"
                  }
                ] 
              }
            ]
          },
          {
            name: "Salt Bae",
            title: "Directeur Deployment",
            img: "https://emoji.gg/assets/emoji/2199-saltbae.png",
            children: [
              {
                name: "Elon Musk",
                title: "chef Equipe",
                img: "http://csc170.org/examples/gilacqua/project3/images/elon1.png",
              },
              {
                name: "Pep Guardiola",
                title: "chef Equipe",
                img: "https://i.4pcdn.org/sp/1537627538858.png",
              }
            ]
          }
        ]
      }
    }
  },
}
</script>
<style>
:root {
  --bg-level-1:linear-gradient(120deg,  #b6a442, #0F1620) ;
  --bg-level-2:linear-gradient(120deg,  #343A4F, #0F1620) ;
  --bg-level-3: linear-gradient(176deg, #3D9DEA, #4A4EEE);
  --bg-level-4: linear-gradient(176deg, #9fea3d, #000000);
  --lightblue: #3D9DEA;
  --darkblue: #4A4EEE;
  --text-color: #D5E1EF;
  --black: black;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ol {
  list-style: none;
  margin-top: 15px !important;
}

body {
  margin: 50px 0 100px;
  text-align: center;
  font-family: "Inter", sans-serif;
}

.container {
  max-width: 1000px;
  padding: 0 10px;
  margin: 0 auto;
}


/* LEVEL-1 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-1 {
  width: 380px;
  margin: 0 auto 40px;
  height: 212px !important;
  margin-bottom: 57px !important;
}

.level-1::before {
  content: "";
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 38px;
  background: var(--black);
}


/* LEVEL-2 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-2-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.level-2-wrapper::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 25%;
  width: 50%;
  height: 2px;
  background: var(--black);
}

.level-2-wrapper::after {
  display: none;
  content: "";
  position: absolute;
  left: -20px;
  bottom: -20px;
  width: calc(100% + 20px);
  height: 2px;
  background: var(--black);
}

.level-2-wrapper li {
  position: relative;
}

.level-2-wrapper > li::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 20px;
  background: var(--black);
}

.level-2 {
  width: 70%;
  margin: 0 auto 40px;
}

.level-2::before {
    content: "";
    position: absolute;
    top: 17%;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 22px;
    background: var(--black);
}

.level-2::after {
  display: none;
  content: "";
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-100%, -50%);
  width: 20px;
  height: 2px;
  background: var(--black);
}


/* LEVEL-3 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-3-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  width: 90%;
  padding-top: 24px;
  margin: 0 auto;
}

.level-3-wrapper::before {
  content: "";
  position: absolute;
  top: 4px;
  left: calc(25% - 5px);
  width: calc(50% + 10px);
  height: 2px;
  background: var(--black);
}

.level-3-wrapper > li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 2px;
  height: 20px;
  background: var(--black);
}

.level-3 {
  margin-bottom: 20px;
}


/* LEVEL-4 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-4-wrapper {
  position: relative;
  width: 80%;
  margin-left: auto;
}

.level-4-wrapper::before {
  content: "";
  position: absolute;
  top: -20px;
  left: -20px;
  width: 2px;
  height: calc(100% + 20px);
  background: var(--black);
}

.level-4-wrapper li + li {
  margin-top: 20px;
}

.level-4 {
  font-weight: normal;
}

.level-4::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-100%, -50%);
  width: 20px;
  height: 2px;
  background: var(--black);
}


/* MQ STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
@media (max-width:1523px) {
  .card-user {
    width: 332px;
  }
}
@media screen and (max-width: 700px) {
  
  .card-user {
    width: 332px;
  }

  .level-1,
  .level-2 {
    width: 100%;
  }

  .level-1 {
    margin-bottom: 20px;
  }

  .level-1::before,
  .level-2-wrapper > li::before {
    display: none;
  }
  
  .level-2-wrapper,
  .level-2-wrapper::after,
  .level-2::after {
    display: block;
  }

  .level-2-wrapper {
    width: 90%;
    margin-left: 10%;
  }

  .level-2-wrapper::before {
    left: -20px;
    width: 2px;
    height: calc(100% + 40px);
  }

  .level-2-wrapper > li:not(:first-child) {
    margin-top: 50px;
  }
}

</style>