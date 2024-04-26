import{j as r}from"./styled-components.browser.esm-D8gBLyBZ.js";import{I as p}from"./InputField-Dz6G8JxM.js";import{I as d}from"./Input-DZJnLRnV.js";import{F as R}from"./FormField-DTFDFL4g.js";import{M as F}from"./Message-DFMA475c.js";import{C as v}from"./Condition-D59quAYQ.js";import"./index-BBkUAzwr.js";const{TITLE:t,LABEL:n,PLACEHOLDER:l,ERROR:O,CAPTION:i}=F,{MAX_LENGTH:c}=v,D={title:"FormField_Password",component:R},s={args:{title:t.password,caption:i.password,children:r.jsx(p,{label:n.password,error:"",children:r.jsx(d,{placeholder:l.password,value:"",maxLength:c.password,type:"password"})})}},a={args:{title:t.password,caption:i.password,children:r.jsx(p,{label:n.password,error:"",children:r.jsx(d,{placeholder:l.password,value:"12",maxLength:c.password,type:"password"})})}},e={args:{title:t.password,caption:i.password,children:r.jsx(p,{label:n.password,error:O.password,children:r.jsx(d,{placeholder:l.password,value:"1a",maxLength:c.password,type:"password",invalid:!0})})}},o={args:{title:t.password,caption:i.password,children:r.jsx(p,{label:n.password,error:O.password,children:r.jsx(d,{placeholder:l.password,value:"1",maxLength:c.password,type:"password",invalid:!0})})}};var w,m,u;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: TITLE.password,
    caption: CAPTION.password,
    children: <InputField label={LABEL.password} error="">
        <Input placeholder={PLACEHOLDER.password} value="" maxLength={MAX_LENGTH.password} type="password" />
      </InputField>
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var L,E,h;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: TITLE.password,
    caption: CAPTION.password,
    children: <InputField label={LABEL.password} error="">
        <Input placeholder={PLACEHOLDER.password} value="12" maxLength={MAX_LENGTH.password} type="password" />
      </InputField>
  }
}`,...(h=(E=a.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var I,T,g;e.parameters={...e.parameters,docs:{...(I=e.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: TITLE.password,
    caption: CAPTION.password,
    children: <InputField label={LABEL.password} error={ERROR.password}>
        <Input placeholder={PLACEHOLDER.password} value="1a" maxLength={MAX_LENGTH.password} type="password" invalid />
      </InputField>
  }
}`,...(g=(T=e.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var A,x,P;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: TITLE.password,
    caption: CAPTION.password,
    children: <InputField label={LABEL.password} error={ERROR.password}>
        <Input placeholder={PLACEHOLDER.password} value="1" maxLength={MAX_LENGTH.password} type="password" invalid />
      </InputField>
  }
}`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const _=["PasswordDefault","PasswordValid","PasswordTypeError","PasswordLengthError"];export{s as PasswordDefault,o as PasswordLengthError,e as PasswordTypeError,a as PasswordValid,_ as __namedExportsOrder,D as default};
