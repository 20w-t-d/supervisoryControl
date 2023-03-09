<template>
  <div class="test">
    <ul class="ul">
      <li v-for="(item, index) in data">
        <img src="../assets/img/1.png" alt="" class="img1" />
        <img src="../assets/img/2.png" alt="" class="img2" />
        <span>{{ item.name }}</span>
        <div class="span2">
          <span>{{ item.value }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      data: [
        {name:'运行时间',value:'216天'},
        {name:'NVPS',value:'97.5'},
        {name:'域名响应',value:'100ms'},
        {name:'在线用户',value:'5个'},
        {name:'访问会话',value:'35条'},
        {name:'队列积压',value:'0条'},
        {name:'存储使用',value:'5%'},
        {name:'Tomcat响应',value:'2ms'},
      ]
    }
  },
  methods: {
    getData() {
      this.axios.get('').then(data => {})
    }
  },
  mounted() {}
}
</script>

<style scoped>
.test {
  width: 100%;
  height: 100%;
}
.ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  row-gap: 0.2rem;
  /* padding-left: 0.4rem; */
}
.ul li {
  /* flex-shrink: 1; */
  position: relative;
  text-align: center;
  height: 40%;
}
img {
  width: 58%;
}

span {
  display: block;
  /* margin-left: .18rem; */
  font-family: chaopai;
}
.span2{
  width: 60%;
  position: absolute;
  top: 28%;
  left: 20%;
  text-align: center;
}

.img1 {
  width: 65%;
  animation: rotate2 6s linear infinite;
}
.img2 {
  top: 3%;
  position: absolute;
  left: 21%;
  animation: rotate 6s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg); /*从0度开始*/
  }
  100% {
    transform: rotateZ(360deg); /*360度结束*/
  }
}

@keyframes rotate2 {
  0% {
    transform: rotateZ(360deg); /*从0度开始*/
  }
  100% {
    transform: rotateZ(0deg); /*360度结束*/
  }
}

@font-face{
  font-family:chaopai;
  src:url(../assets/font/jian.ttf)
}
</style>
