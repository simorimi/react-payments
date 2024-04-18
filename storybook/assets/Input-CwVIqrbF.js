import{u as t,j as r}from"./styled-components.browser.esm-DO55u7qc.js";const i=t.input`
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem;

  border: 0.1rem solid
    ${e=>e.$invalid?e.theme.color.red:e.theme.color.lightGray};
  border-radius: 0.2rem;
  ${e=>e.theme.typography.input};

  &:focus {
    border-color: ${e=>e.$invalid?e.theme.color.red:e.theme.color.black};
    outline: none;
  }

  &::placeholder {
    color: ${e=>e.theme.color.lightGray};
  }
`,n=({invalid:e,...o})=>r.jsx(i,{...o,$invalid:e});n.__docgenInfo={description:"",methods:[],displayName:"Input",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}},composes:["InputHTMLAttributes"]};export{n as I};
