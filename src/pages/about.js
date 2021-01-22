import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

export default function About({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const sweet = data?.sweet?.childImageSharp?.fixed
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <div>
        <blockquote>努力做好一个小程序员,争取做牛的人</blockquote>
        <p>本站所有观点仅代表我个人</p>

        <p>
          Hello,我是toshiba,一个<b>web前端开发工程师</b>,目前就职于
          <a target="_blank" href="https://www.longdai.com">
            龙贷在线投资(北京)有限公司
          </a>
          ,从事该网站前端的日常维护和开发,该网站是2014年3月成立的互联网金融类企业。
        </p>
        <p>
          我性格比较慢热,平时比较酷酷,但是如果熟悉起来了跟大家各种嗨,喜欢看电影无论漫威还是DC。运动缺乏运动神经,所以微胖,吃苦耐劳踏实肯干,抗压能力很强。
        </p>

        <p>维护和开发过的项目:</p>
        <ul class="li">
          <li>
            <a href="https://www.longdai.com/" target="_blank">
              龙贷
            </a>
          </li>
          <li>
            <a href="http://www.labi.com/home" target="_blank">
              蜡笔同步
            </a>
          </li>
          <li>
            <a href="http://dig.chouti.com/" target="_blank">
              抽屉新热榜
            </a>
          </li>
        </ul>
        <p>技能点:</p>
        <ul>
          <li>javascript基础扎实,能手写原生js</li>
          <li>ES6神马的有深入了解,Typescript和CoffeeScript都进行过实战运用</li>
          <li>各种浏览器兼容包括css和js</li>
          <li>jQuery:第一个框架不会jQuery的话算是前端吗</li>
          <li>
            Backbone.js ,AngularJs, Vue.js React.js 各种框架都在项目中有过使用。
          </li>
          <li>
            lodash.js ,underscore.js,Handlebars.js, juice.js etc. 一些必备框架
          </li>
          <li>H5页面什么的都能手到擒来,不过产品貌似才会叫适配手机的页面为H5</li>
          <li>less和sass都是用过,个人比较偏向于sass</li>
          <li>bootstrap也很常用,还要其他一些UI组件库大同小异</li>
          <li>
            nodejs前端标配但是文档很多目前没有看完,只是处于运用阶段,谈不上精通。
          </li>
          <li>使用webpack和browserify、gulp相关工具快速搭建项目架构</li>
          <li>前端测试是弱点最近在项目里补充</li>
          <li>
            数据库redis,mongodb,mysql增删改查连表查询没问题,高级操作目前没遇到
          </li>
          <li>java掌握过一些基础,开发过一些简单服务,了解spring</li>
          <li>git 熟练掌握</li>
          <li>Mac用户,linux略懂略懂,可以简单运维</li>
          <li>Docker简单配置,简单编写过dockerfile</li>
        </ul>

        <p>联系我:</p>
        <ul class="li">
          <li>
            Email:
            <a href="mailto:sdzzlyjy@gmail.com" target="_blank">
              sdzzlyjy@gmail.com
            </a>
          </li>
          <li>
            GitHub:
            <a href="https://github.com/IORI20091101" target="_blank">
              https://github.com/IORI20091101
            </a>
          </li>
          <li>
            Telegram:
            <a href="https://t.me/donduffy" target="_blank">
              https://t.me/donduffy
            </a>
          </li>
          <li>
            Twitter:
            <a href="https://twitter.com/iori20091101" target="_blank">
              https://twitter.com/iori20091101
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
