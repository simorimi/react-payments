import{u as r,j as t}from"./styled-components.browser.esm-D8gBLyBZ.js";import{r as h}from"./index-BBkUAzwr.js";const m=r.div`
  position: relative;

  width: 100%;
`,p=r.div`
  display: flex;
  justify-content: space-between;

  height: 3.2rem;
  padding: 0.8rem;
  border: 0.1rem solid
    ${e=>e.$isOpen?e.theme.color.black:e.theme.color.lightGray};
  border-radius: 0.2rem;
  ${e=>e.theme.typography.dropDown};

  cursor: pointer;
`,y=r.div`
  color: ${e=>e.$selected?e.theme.color.black:e.theme.color.lightGray};
`,u=r.div`
  color: ${e=>e.$isOpen?e.theme.color.black:e.theme.color.lightGray};
`,g=r.ul`
  position: absolute;

  width: 100%;
  margin-top: 0.5rem;
  border: 0.1rem solid ${e=>e.theme.color.lightGray};
  border-radius: 0.2rem;

  background-color: ${e=>e.theme.color.white};
`,$=r.li`
  height: 3.1rem;
  padding: 0.8rem;

  ${e=>e.theme.typography.dropDown};
  color: ${e=>e.theme.color.charcoalGray};

  cursor: pointer;
`,x=({optionArray:e,selectText:l,selectedOptionState:n})=>{const[o,s]=h.useState(!1),c=()=>{s(!o)},d=i=>{n.setValue(i),s(!1)},a=e.map(i=>t.jsx($,{onClick:()=>d(i),children:i}));return t.jsxs(m,{children:[t.jsxs(p,{$isOpen:o,onClick:c,children:[t.jsx(y,{$selected:n.value,children:n.value||l}),t.jsx(u,{$isOpen:o,children:o?"⬇️":"⬆️"})]}),o&&t.jsx(g,{children:a})]})};x.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{optionArray:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectText:{required:!0,tsType:{name:"string"},description:""},selectedOptionState:{required:!0,tsType:{name:"SelectedOptionStateType"},description:""}}};export{x as D};
