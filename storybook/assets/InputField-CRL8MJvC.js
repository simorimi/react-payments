import{u as t,j as r}from"./styled-components.browser.esm-DO55u7qc.js";const n=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`,s=t.label`
  ${e=>e.theme.typography.label};
  color: ${e=>e.theme.color.black};
`,l=t.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`,p=t.span`
  ${e=>e.theme.typography.caption};
  color: ${e=>e.theme.color.red};
`,d=({label:e,error:o,children:i})=>r.jsxs(n,{children:[r.jsx(s,{children:e}),r.jsx(l,{children:i}),r.jsx(p,{children:o})]});d.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"JSX.Element"},description:""}}};export{d as I};
