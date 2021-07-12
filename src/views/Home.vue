<template>
  <div class="home">
    <treeFolder v-if="!msgError" :folder="treeData"/>
    <p v-else v-html="msgError" />
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      treeData: null,
      msgError: null,
    }
  },
  methods: {
    async getOrganization () {
        let url = `${process.env.VUE_APP_SERVER_PATH}oraganigram`
        let res = await fetch(url)
        if (res.ok) {
            let text = await res.text()
            return {data: JSON.parse(text), status: true}
        } else {
            return  {data: `HTTP error: ${res.status}`, status: false}
        }
    }
  },
  async created() {
    const {data, status} = await this.getOrganization()
    if (status) {
      this.treeData = data
    } else {
      this.msgError = data
    }
  }
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