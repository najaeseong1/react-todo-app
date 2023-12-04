import React, { useEffect } from 'react';

const KakaoLoginHandler = () => {
  console.log(
    '사용자가 동의화면을 통해 필수정보 동의 후 kakao 서버에서 redirect를 진행함!'
  );
  // URL에 쿼리 스트링으로 전달된 인가 코드를 얻어오는 방법.
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    // 컴포넌트가 렌더링 될 때, 인가 코드를 백엔드로 전송하는 fetch요청
  }, []);
  return <div>KakaoLoginHandler</div>;
};

export default KakaoLoginHandler;
