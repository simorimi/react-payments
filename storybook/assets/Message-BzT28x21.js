import{u as t,j as r}from"./styled-components.browser.esm-DO55u7qc.js";const n=t.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`,s=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,a=t.h2`
  ${e=>e.theme.typography.title};
  color: ${e=>e.theme.color.black};
`,c=t.p`
  ${e=>e.theme.typography.caption};
  color: ${e=>e.theme.color.gray};
`,d=({title:e,caption:o,children:i})=>r.jsxs(n,{children:[r.jsxs(s,{children:[r.jsx(a,{children:e}),r.jsx(c,{children:o})]}),i]});d.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{title:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"JSX.Element"},description:""}}};const m={cardNumber:"결제할 카드 번호를 입력해 주세요",expirationDate:"카드 유효기간을 입력해 주세요",userName:"카드 소유자 이름을 입력해 주세요"},l={cardNumber:"본인 명의의 카드만 결제 가능합니다.",expirationDate:"월/년도(MMYY)를 순서대로 입력해 주세요."},p={cardNumber:"카드 번호",expirationDate:"유효기간",userName:"소유자 이름"},u={cardNumber:"4자리 숫자를 입력해주세요.",month:"01~12 사이의 숫자를 입력해주세요.",year:"2자리 숫자를 입력해주세요.",userName:"성과 이름을 띄어쓰기를 포함한 대문자로만 입력해주세요."},h={cardNumber:"1234",month:"MM",year:"YY",userName:"LAST_NAME FIRST_NAME"},y={TITLE:m,CAPTION:l,LABEL:p,ERROR:u,PLACEHOLDER:h};export{d as F,y as M};
