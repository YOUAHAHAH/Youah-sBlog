import dayjs from 'dayjs';

// 获取当前时间
export const nowDate = (data?: string, timestamp?: number) => {
  return dayjs(timestamp).format(data ? data : 'YYYY-MM-DD HH:mm:ss');
};

// 获取星期
export const weekDay = () => {
  let w;
  switch (dayjs().$W) {
    case 0:
      w = '星期天';
      break;
    case 1:
      w = '星期一';
      break;
    case 2:
      w = '星期二';
      break;
    case 3:
      w = '星期三';
      break;
    case 4:
      w = '星期四';
      break;
    case 5:
      w = '星期五';
      break;
    case 6:
      w = '星期六';
      break;
  }
  return w;
};
