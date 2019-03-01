import styled from 'styled-components'
import logoPath from '../../img/logo.png'



export let HeaderWrapper = styled.div`
    position:relative;
    height: 56px;
    border:1px solid #f0f0f0;
`

export let Logo = styled.a.attrs({
    href: "/"
})`
    height: 56px;
    width: 100px;
    
    position :absolute;
    top: 0;
    left: 0;
    background-image:url(${logoPath});
    background-size:contain;
`
export let Nva = styled.div`
    
    margin: 0 auto;
    width: 960px;
    height: 100%;
    
`
export let NvaItem = styled.div`
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
export let SearchWrapper = styled.div`

    float:left;
    position:relative;



    .iconfont{
        position:absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius:50%;
        text-align:center;
        &.focused{
           background : #666 
        }
    }
`
export let SearchInfo = styled.div`
    position:absolute;
    left: 0;
    top: 56px;
    width: 250px;
    
    padding: 20px 20px 10px;
    box-shadow:0px 0px  1px  #aaa;



`
export let SearchInfoTitle = styled.div`

    display:flex;
    font-size: 13px;
    color: #969696;
    justify-content:space-between;
    background-color: transparent;

`
export let SearchInfoSwitch = styled.a`

    font-size: 14px;
    color: #969696

`

export let SearchInfoList = styled.div`


   
`

export let SearchInfoItem = styled.a`

    float:left;
    margin-right:10px;
    margin-top: 10px;
    line-height:20px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
   
`


export let NvaSearch = styled.input.attrs({
    placeholder: "搜索"
})`

    &::placeholder{
        color: #999;
    }
    width: 160px;
    height: 38px;
    margin-top: 9px;
    border-radius: 19px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
	outline:none;  
    border: none;
    background-color: #eee;
    font-size:14px;
    &.focused{
        width: 240px;
    }
    &.fade-enter{
        transition: all 0.2s ease-out;

        width:160px;
     
    }
    &.fade-enter-active{
        width: 240px;

    }
    &.fade-exit{
        width:240px;
        transition: all 0.2s ease-out;
    }
    &.fade-exit-active{
        width: 160px;

    }

`
export let Addition = styled.div`
    position: absolute;
    height: 56px;
    right: 0;
    top: 0;
`
export let Button = styled.div`
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