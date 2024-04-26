import{j as e}from"./styled-components.browser.esm-D8gBLyBZ.js";import{I as l}from"./InputField-Dz6G8JxM.js";import{I as t}from"./Input-DZJnLRnV.js";import{F}from"./FormField-DTFDFL4g.js";import{M as R}from"./Message-DFMA475c.js";import{C as j}from"./Condition-D59quAYQ.js";import"./index-BBkUAzwr.js";const{TITLE:o,LABEL:s,PLACEHOLDER:i,ERROR:A}=R,{MAX_LENGTH:d}=j,M={title:"FormField_CVC",component:F},r={args:{title:o.cvc,children:e.jsx(l,{label:s.cvc,error:"",children:e.jsx(t,{placeholder:i.cvc,value:"",maxLength:d.cvc})})}},c={args:{title:o.cvc,children:e.jsx(l,{label:s.cvc,error:"",children:e.jsx(t,{placeholder:i.cvc,value:"123",maxLength:d.cvc})})}},a={args:{title:o.cvc,children:e.jsx(l,{label:s.cvc,error:A.cvc,children:e.jsx(e.Fragment,{children:e.jsx(t,{placeholder:i.cvc,value:"12a",maxLength:d.cvc,invalid:!0})})})}},n={args:{title:o.cvc,children:e.jsx(l,{label:s.cvc,error:A.cvc,children:e.jsx(e.Fragment,{children:e.jsx(t,{placeholder:i.cvc,value:"12",maxLength:d.cvc,invalid:!0})})})}};var p,v,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: TITLE.cvc,
    children: <InputField label={LABEL.cvc} error="">
        <Input placeholder={PLACEHOLDER.cvc} value="" maxLength={MAX_LENGTH.cvc} />
      </InputField>
  }
}`,...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var u,L,E;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: TITLE.cvc,
    children: <InputField label={LABEL.cvc} error="">
        <Input placeholder={PLACEHOLDER.cvc} value="123" maxLength={MAX_LENGTH.cvc} />
      </InputField>
  }
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var h,C,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: TITLE.cvc,
    children: <InputField label={LABEL.cvc} error={ERROR.cvc}>
        <>
          <Input placeholder={PLACEHOLDER.cvc} value="12a" maxLength={MAX_LENGTH.cvc} invalid />
        </>
      </InputField>
  }
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var I,x,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: TITLE.cvc,
    children: <InputField label={LABEL.cvc} error={ERROR.cvc}>
        <>
          <Input placeholder={PLACEHOLDER.cvc} value="12" maxLength={MAX_LENGTH.cvc} invalid />
        </>
      </InputField>
  }
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const N=["CVCDefault","CVCValid","CVCTypeError","CVCLengthError"];export{r as CVCDefault,n as CVCLengthError,a as CVCTypeError,c as CVCValid,N as __namedExportsOrder,M as default};
