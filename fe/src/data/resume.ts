// src/data/resume.ts
export interface Skill {
    category: string;
    details: string[];
  }
  
  export interface Job {
    companyName: string;
    position: string;
    time: string;
    projects: Project[];
  }
  
  export interface Project {
    name: string;
    cover?: string;
    link?: string;
    details: string[];
  }
  
  export interface Education {
    institution: string;
    period: string;
    major: string;
  }
  
  export interface Resume {
    name: string;
    phone: string;
    email: string;
    wechat: string;
    website: string;
    objective: string;
    skills: Skill[];
    jobs: Job[];
    education: Education[];
  }
  
  export const resumeData: Resume = {
    name: "李朝",
    phone: "15927762230",
    email: "grammyli@outlook.com",
    wechat: "grammyli",
    website: "https://grammyli.com/",
    objective: "我是一个充满活力、对前端由衷热爱、善于发现问题的前端工程师。我目前正在寻找前端工程师岗位，希望借此机会为贵司献上我的一点绵薄之力",
    skills: [
      {
        category: "个人技能",
        details: [
          "熟练掌握 JavaScript (ES6+)、TypeScript、HTML5 和 CSS3",
          "熟练掌握流行框架如 React/React-Router/Redux、 Vue/Vue-Router/Vuex、Taro",
          "深入理解框架核心原理 ，如 JSX 编译、Fibers、Diff 等",
          "熟练掌握 BOM、DOM、AJAX、HTTP、Canvas 动画等 Web 开发技术",
          "熟练使用 jQuery、Lodash、Echarts 等常用第三方库，以及Element UI、Ant Design 等前端 UI库",
          "理解模块化开发 ，熟练掌握 Babel、Gulp、Webpack等工具链",
          "熟悉 Webpack 配置，能够编写自定义的 loader、 plugin，理解并实现 Gulp 插件",
          "熟悉 Node.js 常用模块， 能够使用 Node.js 结合 Express 框架，实现网络请求与网页分析",
          "掌握编译原理在前端的实践方法 ，熟悉词法分析、语法分析、AST 构造和代码生成的流程",
          "能够基于编译原理独立实现 JSON 解析、JS 代码格式化",
          "熟练使用 GPT 来写需求代码，例如封装组件、优化代码、封装 hook 或者定位问题等",
          "掌握 Git 的提交、拉取、合并、推送等操作，能熟练使用 Git 工具进行版 本控制或项目管理",
          "已通过 CET 4，并有海外项目开发经验，查阅全英文档无障碍",
        ],
      },
    ],
    jobs: [
      {
        companyName: "北京一览科技",
        position: "前端开发工程师",
        time: "2022-02-至今",
        projects: [
          {
            name: "运营宝 (React + Typescript + Ant + Less)",
            details: [
              "参与 AIGC 产品的迭代开发，负责开发产品的 Ai 绘图、海报、数字人、混剪、视频和官网等模块, 以及企业版本的重点功能 AI图文模块，在该模块下实现图文二创，通过批量链接导入或者文章，对文章内容洗稿、图片洗图等操作",
              "抽取通用逻辑，封装 hook",
              "优化 API 请求缓存，减少多次重复的冗余请求，大幅度降低后端请求压力以及网络 IO 压力，并进行乐观更新提升用户体验",
              "二次封装多个 React 基础组件以及业务组件，如 ComBoBox、ProTable、ProForm，以及对业务组件 Business、Order、Customer、Tenant 等的封装",
            ],
          },
        ],
      },
      {
        companyName: "北京蒸汽记忆科技有限公司",
        position: "前端开发工程师",
        time: "2022.06 –2023.01",
        projects: [
          {
            name: "腾讯 CSIG （前端开发工程师）",
            details: [
              "独立完成腾讯会议对接需求迭代，会议预定，邀请人员快速会议，电话短信强提醒和入会人员会控等功能",
              "独立负责此项目 PC 端预定会议开发，包括电话、视频和腾讯会议创建、显示、编辑、取消等功能",
              "独立完成腾讯会议对接需求迭代，会议预定，邀请人员快速会议，电话短信强提醒和入会人员会控等功能",
              "参与短信和电话通知的对接，完成创建短信，短信详情，再次报送等功能，并完成会议的字幕显示功能",
              "基于 Weda（lowcode）开发移动端会议首页，会议记录，会议详情，自定义时间筛选，人员详情模块",
              "独立解决大屏、中屏和移动端交互和产品走查，并解决相应自适应和一些手机兼容性问题",
              "与其他项目沟通交流了解项目中技术难点痛点，并整理输出公用的解决组件和方案",
            ],
          },
        ],
      },
    ],
    education: [
      {
        institution: "文华学院",
        period: "2017-09~2021-06",
        major: "计算机科学与技术 全日制本科",
      },
    ],
  };
  