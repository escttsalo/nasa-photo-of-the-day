import React from 'react';

export default function Header(props){
    const { date } = props
    return (
        <div>
            <p>
                Read through the instructions in the README.md file to build your NASA
                app! Have fun <span role="img" aria-label='go!'>🚀</span>!
            </p>
            <p>Today's date: {date}</p>
      </div>
    )
}