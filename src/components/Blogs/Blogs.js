import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='common-answer'>
                <h1>What is Semantic Tag?</h1>
                <p><h4>Semantic Tag:</h4> Semantic HTML elements are those that express their meaning in a way that is both human and machine understandable. Header, footer, and article elements are all deemed semantic since they correctly explain the element's function and the sort of material it contains. <br />
                Two types:
                <ol>
                    <li>semantic-  Example: (form, table, article ect) </li>
                    <li>non-semantic- Example: (div, span ect) </li>
                </ol>

                </p>
            </div>

            <div className='common-answer'>
                <h1>Inline, Block, Inline Block: </h1>
                Inline:
                <ul>
                    <li>The element Doesn’t start  on a new line and only occupy just the width it requires.  just can set width or height</li>
                    <li>respects  margin-left and margin- right and padding but not bottom and top</li>
                    <li>Allows others elements to their left and right</li>
                   
                    
                </ul>
                Inline Block:
                <ul>
                    <li>It's  formatted  just like the element where it Doesn’t  start on a new line but just can set  width and height values</li>
                    <li>respects margin-top and bottom and padding</li>
                    <li>Inline block also allows others elements to their left and right</li>

                </ul>
                Block:
                <ul>
                    <li>The element will start on a new line  and occupy the full width available and set width and height  Values</li>
                    <li>Example: (p, h1, ul,hr) </li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;