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