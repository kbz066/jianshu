import styled from 'styled-components'

export let HomeWrapper=styled.div`
   width: 960px;
   height: 100px;
   margin: 0 auto;
   background-color: red;
`
export let HomeWrapperFlex=styled.div`
   width: 100%;

   display: flex;
   justify-content:space-between;
`

export let HomeLeft=styled.div`
   width: 625px;
   .banner-pic{
      width: 100%;
      height:270px;

   }
`

export let HomeRight=styled.div`
   width: 240px;
   
   /* background-color:green; */
`
export let TopicWrapper=styled.div`
   width: 625px;
 
   display: flex;
   flex-wrap:wrap;
 


`

export let TopicItem=styled.div`
   height: 32px;

   display: flex;
   align-items:center;
   border: 1px solid #ccc;
   padding-right:10px;
   border-radius:4px;
   margin-right:15px;
   margin-top:15px;


   .topic-item-pic{
      width: 32px;
      height: 32px;
      margin-right:10px;
   }


`


export let ListWrapper=styled.div`
   width: 625px;
 

 
`
export let ListItem=styled.div`
  
 h3{
    font-size:18px;
    font-weight: bolder;
   
 }
 p{
    font-size:13px;
 }
`