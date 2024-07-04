// src/data/projects.ts
export interface Project {
  name: string;
  cover: string;
  link: string;
  details: string[];
}

export const projects: Project[] = [
  {
    name: "宝可梦乐园",
    cover:
      "https://k.sinaimg.cn/n/sinakd20240517ac/64/w1024h640/20240517/bbdd-d43b78bc9ef6a3860d8b8367789d9266.jpg/w700d1q75cms.jpg?by=cms_fixed_width",
    link: "",
    details: [
      "用户选择的六只宝可梦，才能体验 Popstar 游戏",
      "用户点击两个相同的宝可梦，才能显示路径，同时消除宝可梦。",
      "用户用鼠标点击空白处，或者键盘按 wsad 来移动图块。",
      "用户点击宝可梦，来填充整个画布，同时可以设置主题或者画布的宽高。",
      "用户选择两只相同的宝可梦，才能收复它。",
    ],
  },
  {
    name: "瑞雪小鹅",
    cover: "https://images.qiecdn.com/news-aHR0cDovL2luZXdzLmd0aW1nLmNvbS9uZXdzYXBwX21hdGNoLzAvMTEwNjY1Nzk1NTAvMA",
    link: "http://example.com/project2",
    details: [
      "用户拍照或者本地上传，选择主题，自定义头像，并且还有滤镜效果。",
      "自制拼音输入法",
      "用户按键盘的SDGHjZXCVBNM或者点击黑键白键，会有不同的声音效果",
      "代做",
    ],
  },
  // 其他项目数据...
];
