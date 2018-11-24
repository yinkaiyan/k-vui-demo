<template>
<div>
    <scroller
        :on-refresh="refresh"
        :on-infinite="infinite"
        ref="my_scroller">
            <ul>
                <li v-for="(name,index) in tabs" :key="index">{{name.list}}</li>
            </ul>
    </scroller>
</div>
</template>

<script>

 export default {
    data () {
      return {
        tabs:[
            {list:"0"},
        ],
        page:0,
      }
    },
    mounted() {
        for (let i = 1; i <= 20; i++) {
            this.tabs.push({
                "list":i,
            })
        };
    },
    methods: {
      refresh(done) {
        console.log("上拉加载数据");
        this.tabs=[];
        this.page=0;
        setTimeout(() => {
          done()
        }, 1000)
      },
      
      infinite(done) {
        console.log("上拉加载数据");
        this.page++;
        setTimeout(() => {
            if(this.page<5){
                for (let i = 1; i <= 5; i++) {
                    this.tabs.push({
                        "list":i,
                    })
                };
                done();
            }else{
                done(TextTrackCueList);
            };
        }, 1000);
      },
    }
}
</script>