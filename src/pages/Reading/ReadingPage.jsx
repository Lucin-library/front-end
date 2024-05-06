import React, { useState } from 'react';
import parse from 'html-react-parser';

export const ReadingPage = ({ content }) => {
    let data = null;
    if (content.contents[0] !== undefined) {
        console.log(content.contents[0].content);
        data = content.contents[0].content;
    }
    return <div style={{ padding: '10px' }}>{data === null ? <div>loading...</div> : parse(data)}</div>;
};
