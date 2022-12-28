import dayjs from 'dayjs';

// 获取当前时间
export const nowDate = (data?: string, timestamp?: number) => {
  return dayjs(timestamp).format(data ? data : 'YYYY-MM-DD HH:mm:ss');
};

// 获取星期
export const weekDay = () => {
  const day = new Date().getDay();
  const weeks = new Array(
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  );
  const week = weeks[day];
  return week;
};
