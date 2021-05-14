import React from 'react';
import styled from 'styled-components';

export default function Header(props){
    const { date } = props

    const Read = styled.p`
        display:none;
    `;

    const Date = styled.p`
        font-weight: bold;

        &:hover{
            transform: scale(1.3);
        }
    `;

    return (
        <div>
            <Read>
                Read through the instructions in the README.md file to build your NASA
                app! Have fun <span role="img" aria-label='go!'>🚀</span>!
            </Read>
            <Date>Today's date: {date}</Date>
      </div>
    )
}