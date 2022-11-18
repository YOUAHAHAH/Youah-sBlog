import introJs from "intro.js";
import "intro.js/introjs.css";

const intro = introJs();
intro
  .setOptions({
    nextLabel: "下一个", // 下一个按钮文字
    prevLabel: "上一个", // 上一个按钮文字
    doneLabel: "立即体验", // 完成按钮文字
    hidePrev: true, // 在第一步中是否隐藏上一个按钮
    hideNext: false, // 在最后一步中是否隐藏下一个按钮
    showStepNumbers: false, // 是否显示红色圆圈的步骤编号
    disableInteraction: true, // 是否禁用与突出显示的框内的元素的交互，就是禁止点击
    showBullets: true, // 是否显示面板指示点
    keyboardNavigation: true, // 是否允许键盘来操作
    showProgress: false, // 是否显示进度条
    scrollToElement: true, // 是否滑动到高亮的区域
    overlayOpacity: 0.9, // 遮罩层的透明度
    positionPrecedence: ["bottom", "top", "right", "left"], // 当位置选择自动的时候，位置排列的优先级
    exitOnOverlayClick: false, // 是否允许点击空白处退出
    exitOnEsc: false, // 是否使用键盘Esc退出
  });

export default intro;
