import styled from 'styled-components'

export let HomeWrapper = styled.div`
   width: 960px;
   height: 100px;
   margin: 0 auto;

`
export let HomeWrapperFlex = styled.div`
   width: 100%;

   display: flex;
   justify-content:space-between;
`

export let HomeLeft = styled.div`
   width: 625px;
   .banner-pic{
      width: 100%;
      height:270px;

   }
`

export let HomeRight = styled.div`
   width: 240px;
   
   /* background-color:green; */
`
export let TopicWrapper = styled.div`
   width: 625px;
   padding: 20px 0;
   display: flex;
   flex-wrap:wrap;
   border-bottom : 1px solid #dcdcdc;
`

export let TopicItem = styled.div`
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


export let ListWrapper = styled.div`
   width: 625px;

 
`
export let ListItem = styled.div`
   display: flex;
   padding:20px 0 ;
   border-bottom : 1px solid #dcdcdc;
   img{
      width: 150px;
      height: 100px;
   }

`
export let ListInfo = styled.div`
 h3{
    font-size:18px;
    font-weight: bolder;
    line-height: 1.5;
    
 }
 p{
   margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
 }

`;

export let RecommendWrapper = styled.div`
   display:flex;
   flex-direction:column;
   height: 350px;
   justify-content:space-between;


`;

export let RecommendItem = styled.div`

   width: 280px;
   height: 50px;
   cursor:pointer;
   background-size:contain;
   background-image:url(${(props) => props.imgUrl})
`