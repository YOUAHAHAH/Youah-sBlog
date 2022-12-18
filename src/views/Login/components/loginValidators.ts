interface User {
  userName: string;
  password: string;
}

export const loginUser = ref<User>({
  userName: 'sg',
  password: '1234',
});

interface Rules {
  userName: ({
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  })[];
  // | {
  //     min: number;
  //     max: number;
  //     message: string;
  //     trigger: string;
  //     required?: undefined;
  //   }
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
      }
  )[];
}

// 校验规则
export const rules = ref<Rules>({
  userName: [
    {
      type: 'string',
      message: '请输入账号',
      required: true,
      trigger: 'blur',
    },
    // {
    //   min: 3,
    //   max: 12,
    //   message: '账号长度为3-12位',
    //   trigger: 'blur',
    // },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 12,
      message: '密码长度为3-12位',
      trigger: 'blur',
    },
  ],
});
