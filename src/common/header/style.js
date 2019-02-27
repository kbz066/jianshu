import styled from 'styled-components'
import logoPath from '../../img/logo.png'



export let HeaderWrapper=styled.div`
    position:relative;
    height: 56px;
    border:1px solid #f0f0f0;
`

export let Logo=styled.a.attrs({
    href:"/"
})`
    height: 56px;
    width: 100px;
    
    position :absolute;
    top: 0;
    left: 0;
    background-image:url(${logoPath});
    background-size:contain;
`
export let Nva=styled.div`
    
    margin: 0 auto;
    width: 960px;
    height: 100%;
    

`
export let NvaItem=styled.div`
    &.left{
        float:left;
    }

    &.right{
        float:right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }

    color: #333;
    line-height:56px;
    margin: 0 15px;
    font-size:17px;
    
`
export let NvaSearch=styled.input.attrs({
    placeholder : "搜索"
})`

    &::placeholder{
        color: #999;
    }
    width: 240px;
    height: 38px;
    margin-top: 9px;
    border-radius: 19px;
    padding:0 20px;
    box-sizing:border-box;
	outline:none;  
    border: none;
    background-color: #eee;
    font-size:14px;

`
export let Addition=styled.div`
    position: absolute;
    height: 56px;
    right: 0;
    top: 0;
`
export let Button=styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    border-radius:19px;
    margin-right:20px;
    padding :0 20px;
    border: 1px solid #ea6f5a;
    font-size:14px;

    &.reg{
        background-color :#fff;
        color: #ea6f5a;
    }
    &.writting{
        background-color :#ea6f5a;
        color: #fff;
    }
`