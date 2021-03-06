import styled from 'styled-components';

export const Wrapper = styled.article`
    background: ${props => props.value % 2 !== 0 ? '#e2e2e2' : '#fff'};
    margin-bottom: 1rem;
    cursor: pointer;
`

export const ItemDone = styled.div`
    span {
        color: ${props => props.value ? '#008000' : '#FF0000'};
    }
`

export const OkButton = styled.div`
    display: ${props => props.value ? 'none' : 'inherit'};
`