## videojs 自定义按钮和菜单
```vue
<script>
export default {
    components: {},
    data () {
    return {};
    },
    props: {},
    watch: {},
    computed: {},
    mounted () {},
    methods: {
      init() {
        // 播放器初始化
        this.player = this.$videojs(this.videoId, {
          language: 'zh-CN',
          autoplay: false,
          bigPlayButton: true,
          posterImage: false,
          errorDisplay: false,
          controlBar: {  //总控制条
            //这里可以自己控制各小组件的顺序和显示方式
            children: [
              { name: 'playToggle' }, // 播放按钮
              { name: 'currentTimeDisplay' }, // 当前已播放时间
              { name: 'progressControl'}, // 播放进度条
              { name: 'durationDisplay' }, // 总时间
              { name: 'audioTrackButton' },
              { // 倍数播放
                name: 'playbackRateMenuButton',
                'playbackRates': [0.5, 1, 1.5, 2, 2.5]
              },
              {
                name: 'volumePanel', // 音量控制
                inline: false, // 不使用水平方式
              },
            ],
            Menu: true,
            playbackRateMenuButton: true,
            timeDivider: true,
            currentTimeDisplay: true,
            playbackRate: true,
            remainingTimeDisplay: true,
            PictureInPictureToggle: true,  //画中画
            FullscreenToggle: true // 全屏
          },
          playbackRates: [0.5, 1, 1.5, 2],
          liveDisplay: true,
          liveui: true,
          preferFullWindow:true,
          // LiveDisplay: true, // 是否显示直播文字图标
          controls: true, //是否显示控件
          loop:true, //循环播放
          muted: true //静音模式 、、 解决首次页面加载播放。
        }, function () {
          // this.play() // 自动播放
        });
        this.$nextTick(() => {
          this.addMenu();
          this.addButton();
        });
      },
      /**
       * @Description 添加menu菜单
       * @author wangkangzhang
       * @date 2023/12/22
       */
      addMenu () {
        const MenuButton = this.$videojs.getComponent('MenuButton')
        const Menu = this.$videojs.getComponent('Menu')
        const MenuItem = this.$videojs.getComponent('MenuItem')

        const items = ['100%', '80%', '50%', 'auto']
        const myMenu = new Menu(this.player)

        const myMenuItemList = []

        for (let i = 0; i < items.length; i++) {
          myMenuItemList.push(new MenuItem(this.player, { label: items[i] }))
          const that = this;
          const item =  items[i];
          myMenuItemList[i].on('click', ($event) => {
            that.setShowPercent($event,item)
          });
          myMenu.addItem(myMenuItemList[i])
        }
        this.player.myMenu = myMenu
        this.player.myMenuItemList = myMenuItemList
        const myMenuButton = new MenuButton(this.player)
        myMenuButton.addChild(myMenu)
        myMenuButton.controlText('显示比例')
        myMenuButton.addClass('my-menu-button')
        myMenuButton.children()[0].addClass('vjs-visible-text')
        this.player.myMenuButton = myMenuButton
        this.player.controlBar.addChild(myMenuButton);

      },
      /**
       * @Description 添加按钮
       * @author wangkangzhang
       * @date 2023/12/22
       */
      addButton() {
        const Button = this.$videojs.getComponent('Button');
        const button = new Button(this.player, {
          className: 'vjs-visible-text',
          controlText: '按钮文本',
          clickHandler: (event) => {
            // 点击函数
            console.log('aaaaaaaaaaaaaa');
            // this.$videojs.log('Clicked');
          }
        });
        this.player.getChild('ControlBar').addChild(button)
      },
      setShowPercent (e,item) {
        console.log('e', e);
        console.log('item', item);
      },
    }
};
</script>
```
### 效果
![效果](/img/7.png)
