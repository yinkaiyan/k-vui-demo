
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
    methods: {
      radioClick(){
        var self=this;
        let parentD=this.$parent;
        if(!parentD.callBack)return;
        let len=parentD.$children.length;
        for(var i=0;i<len;i++){
          parentD.$children[i].active=false;
        };
        this.active=true;
        parentD.callBack({
          label:self.label
        });
      },
    },
  };
  export {
    parentMix,
    childMix
  };
  