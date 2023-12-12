## dat.gui使用方法
### 1、安装 yarn add dat.gui -S
```vue

<script>
import * as dat from "dat.gui";
let folderSky;
export default {
    components: {},
      data () {
        return {
          
        };
      },
      mounted () {
          this.$nextTick(() => {
            this.init();
          });
      },
      methods: {
       init () {
         const gui = new dat.GUI();
          if (folderSky) {
            gui.removeFolder(folderSky);
          }
          folderSky = gui.addFolder('Sky');
          folderSky.add(parameters, 'elevation', 0, 90, 0.1).onChange(updateSun);
          folderSky.add(parameters, 'azimuth', -180, 180, 0.1).onChange(updateSun);
          folderSky.open();
         // gui.add(sphere.position, "x").min(-5).max(5).step(0.1);
         // gui
         //     .add(spotLight, "angle")
         //     .min(0)
         //     .max(Math.PI / 2)
         //     .step(0.01);
         // gui.add(spotLight, "distance").min(0).max(10).step(0.01);
         // gui.add(spotLight, "penumbra").min(0).max(1).step(0.01);
         // gui.add(spotLight, "decay").min(0).max(5).step(0.01);
       }
      }
}
</script>
```
