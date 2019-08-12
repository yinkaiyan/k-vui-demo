
import { postData } from '@/libs/axios';
// 登陆
export const login = (params) => {
    return postData('/member/land.php', params);
};