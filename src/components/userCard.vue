<template>
    <div :class="[`level-${level}`, 'card-user']">
        <div class="overviewInfo">
            <div class="productinfo">
                <div class="grouptext">
                    <h3> {{ data.title }}</h3>
                    <h1> {{ data.name }} </h1>
                </div>
                <div class="productImage">
                    <img :src="data.img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'userCard',
  props: {
      data: {
          type: Object,
      },
      level: {
          type: Number
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-user {
  width: 334px;
  border-radius: 40px;
  overflow: hidden;
  margin: auto;
  height: 127px;
}
.productinfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    min-height: 200px;
    margin-bottom: 50px;
}
.overviewInfo{
  padding: 24px;
}

.grouptext{
    h3 {
        color: var(--text-color);
        text-align: left;
        letter-spacing: 3.2px;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 8px;
    }
    h1 {
        color: var(--text-color);
        text-align: left;
        letter-spacing: 3.2px;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
    } 
  
}
.productImage {
    position: absolute;
    width: 321px;
    height: auto;
    transform: rotate(0deg) translate(113px, 2px);
  
 // animation: updowncontroller infinite 3s alternate;
img{ width: 100%; height: auto}
  transition: ease 2s all ;
  &:hover{
      transition: ease 2s all ;
    animation: none;
    transform: rotate(-2deg) translate( 90px, 2px);
  }
}
.card-user:not(.level-1) .productImage img {
    width: 105px;
    height: 105px;
}
.level-1 {
    .overviewInfo {
        background-image: var(--bg-level-1);  
    }
}
.level-2 {
    .overviewInfo {
        background-image: var(--bg-level-2);  
    }
}
.level-3 {
    .overviewInfo {
        background-image: var(--bg-level-3);
    }
}
.level-4 {
    .overviewInfo {
        background-image: var(--bg-level-4);
    }
}
</style>
