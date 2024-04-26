import{j as r}from"./styled-components.browser.esm-D8gBLyBZ.js";import{I as n}from"./InputField-Dz6G8JxM.js";import{I as e}from"./Input-DZJnLRnV.js";import{F as H}from"./FormField-DTFDFL4g.js";import{M as C}from"./Message-DFMA475c.js";import{C as O}from"./Condition-D59quAYQ.js";import"./index-BBkUAzwr.js";const{TITLE:t,CAPTION:N,LABEL:o,PLACEHOLDER:a,ERROR:T}=C,{MAX_LENGTH:d}=O,G={title:"FormField_CardNumber",component:H},c={args:{title:t.cardNumber,caption:N.cardNumber,children:r.jsx(n,{label:o.cardNumber,error:"",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{placeholder:a.cardNumber,value:"",maxLength:d.cardNumber}),r.jsx(e,{placeholder:a.cardNumber,value:"",maxLength:d.cardNumber}),r.jsx(e,{placeholder:a.cardNumber,value:"",maxLength:d.cardNumber}),r.jsx(e,{placeholder:a.cardNumber,value:"",maxLength:d.cardNumber})]})})}},u={args:{title:t.cardNumber,caption:N.cardNumber,children:r.jsx(n,{label:o.cardNumber,error:"",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{placeholder:a.cardNumber,value:"1234",maxLength:d.cardNumber}),r.jsx(e,{placeholder:a.cardNumber,value:"5678",maxLength:d.cardNumber}),r.jsx(e,{placeholder:a.cardNumber,value:"1234",maxLength:d.cardNumber}),r.jsx(e,{placeholder:a.cardNumber,value:"5678",maxLength:d.cardNumber})]})})}},m={args:{title:t.cardNumber,caption:N.cardNumber,children:r.jsx(n,{label:o.cardNumber,error:T.cardNumber,children:r.jsxs(r.Fragment,{children:[r.jsx(e,{placeholder:a.cardNumber,value:"simo",maxLength:d.cardNumber,invalid:!0}),r.jsx(e,{placeholder:a.cardNumber,value:"123d",maxLength:d.cardNumber,invalid:!0}),r.jsx(e,{placeholder:a.cardNumber,value:"123!",maxLength:d.cardNumber,invalid:!0}),r.jsx(e,{placeholder:a.cardNumber,value:"5678",maxLength:d.cardNumber})]})})}},l={args:{title:t.cardNumber,caption:N.cardNumber,children:r.jsx(n,{label:o.cardNumber,error:T.cardNumber,children:r.jsxs(r.Fragment,{children:[r.jsx(e,{placeholder:a.cardNumber,value:"123",maxLength:d.cardNumber,invalid:!0}),r.jsx(e,{placeholder:a.cardNumber,value:"12",maxLength:d.cardNumber,invalid:!0}),r.jsx(e,{placeholder:a.cardNumber,value:"1",maxLength:d.cardNumber,invalid:!0}),r.jsx(e,{placeholder:a.cardNumber,value:"5678",maxLength:d.cardNumber})]})})}};var b,L,p;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: TITLE.cardNumber,
    caption: CAPTION.cardNumber,
    children: <InputField label={LABEL.cardNumber} error="">
        <>
          <Input placeholder={PLACEHOLDER.cardNumber} value="" maxLength={MAX_LENGTH.cardNumber} />
          <Input placeholder={PLACEHOLDER.cardNumber} value="" maxLength={MAX_LENGTH.cardNumber} />
          <Input placeholder={PLACEHOLDER.cardNumber} value="" maxLength={MAX_LENGTH.cardNumber} />
          <Input placeholder={PLACEHOLDER.cardNumber} value="" maxLength={MAX_LENGTH.cardNumber} />
        </>
      </InputField>
  }
}`,...(p=(L=c.parameters)==null?void 0:L.docs)==null?void 0:p.source}}};var s,i,h;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: TITLE.cardNumber,
    caption: CAPTION.cardNumber,
    children: <InputField label={LABEL.cardNumber} error="">
        <>
          <Input placeholder={PLACEHOLDER.cardNumber} value="1234" maxLength={MAX_LENGTH.cardNumber} />
          <Input placeholder={PLACEHOLDER.cardNumber} value="5678" maxLength={MAX_LENGTH.cardNumber} />
          <Input placeholder={PLACEHOLDER.cardNumber} value="1234" maxLength={MAX_LENGTH.cardNumber} />
          <Input placeholder={PLACEHOLDER.cardNumber} value="5678" maxLength={MAX_LENGTH.cardNumber} />
        </>
      </InputField>
  }
}`,...(h=(i=u.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var E,x,g;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: TITLE.cardNumber,
    caption: CAPTION.cardNumber,
    children: <InputField label={LABEL.cardNumber} error={ERROR.cardNumber}>
        <>
          <Input placeholder={PLACEHOLDER.cardNumber} value="simo" maxLength={MAX_LENGTH.cardNumber} invalid />
          <Input placeholder={PLACEHOLDER.cardNumber} value="123d" maxLength={MAX_LENGTH.cardNumber} invalid />
          <Input placeholder={PLACEHOLDER.cardNumber} value="123!" maxLength={MAX_LENGTH.cardNumber} invalid />
          <Input placeholder={PLACEHOLDER.cardNumber} value="5678" maxLength={MAX_LENGTH.cardNumber} />
        </>
      </InputField>
  }
}`,...(g=(x=m.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var A,v,I;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: TITLE.cardNumber,
    caption: CAPTION.cardNumber,
    children: <InputField label={LABEL.cardNumber} error={ERROR.cardNumber}>
        <>
          <Input placeholder={PLACEHOLDER.cardNumber} value="123" maxLength={MAX_LENGTH.cardNumber} invalid />
          <Input placeholder={PLACEHOLDER.cardNumber} value="12" maxLength={MAX_LENGTH.cardNumber} invalid />
          <Input placeholder={PLACEHOLDER.cardNumber} value="1" maxLength={MAX_LENGTH.cardNumber} invalid />
          <Input placeholder={PLACEHOLDER.cardNumber} value="5678" maxLength={MAX_LENGTH.cardNumber} />
        </>
      </InputField>
  }
}`,...(I=(v=l.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const X=["CardNumberDefault","CardNumberValid","CardNumberTypeError","CardNumberLengthError"];export{c as CardNumberDefault,l as CardNumberLengthError,m as CardNumberTypeError,u as CardNumberValid,X as __namedExportsOrder,G as default};
