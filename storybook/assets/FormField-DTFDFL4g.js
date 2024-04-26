import{u as i,j as t}from"./styled-components.browser.esm-D8gBLyBZ.js";const n=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;
`,l=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,s=i.h2`
  ${e=>e.theme.typography.title};
  color: ${e=>e.theme.color.black};
`,d=i.p`
  ${e=>e.theme.typography.caption};
  color: ${e=>e.theme.color.gray};
`,c=({title:e,caption:r,children:o})=>t.jsxs(n,{children:[t.jsxs(l,{children:[t.jsx(s,{children:e}),t.jsx(d,{children:r})]}),o]});c.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{title:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"JSX.Element"},description:""}}};export{c as F};
