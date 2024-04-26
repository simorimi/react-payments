import{u as r,j as t}from"./styled-components.browser.esm-D8gBLyBZ.js";const o=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
`,s=r.label`
  ${e=>e.theme.typography.label};
  color: ${e=>e.theme.color.black};
`,n=r.div`
  display: flex;
  gap: 1rem;

  width: 100%;
`,d=r.span`
  ${e=>e.theme.typography.caption};
  color: ${e=>e.theme.color.red};
`,p=({label:e,error:i,children:l})=>t.jsxs(o,{children:[t.jsx(s,{children:e}),t.jsx(n,{children:l}),t.jsx(d,{children:i})]});p.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"JSX.Element"},description:""}}};export{p as I};
