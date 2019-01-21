
const parentMix = {
    methods: {
      List(index){
        let leng=[...this.$children].length;
        let attr=[...this.$children];
        attr[this.value].active=true;
      },
    },
  };
  const childMix = {
    data () {
      return {
        ax:0,
      }
    },
    methods: {
      radioClick(ev){
        this.ax=ev.changedTouches[0].clientY;
      },
      radioClick_(ev){
        var tq=ev.changedTouches[0].clientY;
        var swicth_=Math.abs(tq-this.ax);
        if(swicth_<20){
          var self=this;
          let parentD=this.$parent;
          if(!parentD.callBack)return;
          let len=parentD.$children.length;
          for(var i=0;i<len;i++){
            parentD.$children[i].active=false;
          };
          this.active=true;
          parentD.callBack({
            label:self.label,
            id:self.id?self.id:"",
          });
        };
      }
    },
  };
  export {
    parentMix,
    childMix
  };
  