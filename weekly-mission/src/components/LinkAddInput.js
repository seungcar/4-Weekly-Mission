import styled, { css } from "styled-components"
import linkIcon from '../img/link.png'



const LinkAddBox = styled.div`
    width : 80rem;
    padding : 1.6rem 2rem;
    border-radius : 15px;
    border : 1px solid #6D6AFE;
    background-color : #fff;
    
    .wrap{
        display : flex;
        align-items : center;
    }
    .wrap > form{
        margin-left : 1.2rem;
        font-size : 1.6rem;
        flex:1;
    }
    form > input{
        width : 100%;
        height : 2.4rem;
        padding-right : 1rem;
    }
`;

const AddBtn = styled.button`
    outline : none;
    border : none;
    padding : 1rem 1.6rem;
    font-size : 1.4rem;
    font-weight : 600;
    color : #f5f5f5;
    background : linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%);
    border-radius : 8px;
`;



function LinkAddInput(){
    return(
        <LinkAddBox>
            <div className="wrap">
                <img src={linkIcon} alt="링크 아이콘"/>
                <form>
                    <input type="text" placeholder="링크를 추가해 보세요"/>
                </form>
                <AddBtn type="button">추가하기</AddBtn>
            </div>
        </LinkAddBox>
    );
};

export default LinkAddInput; 