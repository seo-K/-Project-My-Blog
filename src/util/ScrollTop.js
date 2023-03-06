// 페이지 이동시 상단부터 시작되게 해주는 코드
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function ScrollTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
