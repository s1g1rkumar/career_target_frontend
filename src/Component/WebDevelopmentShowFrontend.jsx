import React from 'react'
// import '../CSS/WebDevelopment.css';
import Button from '@material-ui/core/Button';

const SomeDetails = (props)=> {
return ( <>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>{props.Topic}</h3>
                                <p>{props.details}</p>
                            </div>
                            <div className="css__page__box__btn">
                                <Button  color="primary"  href={props.link}>Read More</Button>
                            </div>
                        </div>
</>)
}

function WebDevelopmentShowFrontend(props) {
    // frontend switch case

    switch (props.value) {

        case 'html':
            return (<div>
                <div className="css__page">
                    <h1>HTML</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" link = "https://www.w3schools.com/html/html_intro.asp" details = "HTML stands for Hyper Text Markup Language,HTML is the standard markup language for creating Web pages,HTML describes the structure of a Web page,HTML consists of a series of elements,HTML elements tell the browser how to display the content,HTML elements label pieces of content such as 'this is a heading',this is a paragraph', 'this is a link', etc." />
                        <SomeDetails Topic = "Editors" link ="https://www.w3schools.com/html/html_editors.asp" details = "Open Notepad (PC):-Windows 8 or later:Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad.Windows 7 or earlier: Open Start > Programs > Accessories > Notepad,Open TextEdit (Mac):-Open Finder > Applications > TextEdit Also change some preferences to get the application to save files correctly. In Preferences > Format > choose 'Plain Text' Then under 'Open and Save', check the box that says 'Display HTML files as HTML code instead of formatted text'.Then open a new document to place the code." />
                        <SomeDetails Topic = "Elements" link="https://www.w3schools.com/html/html_elements.asp" details = "The HTML element is everything from the start tag to the end tag: '<tagname>Content goes here...</tagname>'" />
                        <SomeDetails Topic = "Attributes" link="https://www.w3schools.com/html/html_attributes.asp" details = "All HTML elements can have attributes,Attributes provide additional information about elements,Attributes are always specified in the start tag,Attributes usually come in name/value pairs like: name='value'" />
                        <SomeDetails Topic = "Headings" link="https://www.w3schools.com/html/html_headings.asp" details = "HTML headings are defined with the <h1> to <h6> tags.<h1> defines the most important heading. <h6> defines the least important heading. Example:<h1>Heading 1</h1>,<h2>Heading 2</h2>,<h3>Heading 3</h3>,<h4>Heading 4</h4>,<h5>Heading 5</h5>,<h6>Heading 6</h6>." />
                        <SomeDetails Topic = "Paragraphs"  link="https://www.w3schools.com/html/html_paragraphs.asp"  details = "The HTML <p> element defines a paragraph.A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.he property is a CSS property. The value is a CSS value." />
                        <SomeDetails Topic = "Styles"  link="https://www.w3schools.com/html/html_styles.asp" details = "Setting the style of an HTML element, can be done with the style attribute.The HTML style attribute has the following syntax:" />
                        <SomeDetails Topic = "Formatting" link="https://www.w3schools.com/html/html_formatting.asp"  details = "Formatting elements were designed to display special types of text:<b>This text is bold</b>" />
                        <SomeDetails Topic = "Comments"  link="https://www.w3schools.com/html/html_comments.asp" details = "You can add comments to your HTML source by using the following syntax: <!-- Write your comments here -->" />
                        <SomeDetails Topic = "Colors"  link="https://www.w3schools.com/html/html_colors.asp" details = "HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values." />
                        <SomeDetails Topic = "Links"  link="https://www.w3schools.com/html/html_links.asp" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "class Attribute"  link="https://www.w3schools.com/html/html_classes.asp" details = "Class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.In the following example we have three <div> elements with a class attribute with the value of 'city'. All of the three <div> elements will be styled equally according to the .city style definition in the head section:" />
                        <SomeDetails Topic = "JavaScript" link="https://www.w3schools.com/html/html_scripts.asp"  details = "JavaScript makes HTML pages more dynamic and interactive." />
                        <SomeDetails Topic = "Responsive Web Design" link="https://www.w3schools.com/html/html_responsive.asp"  details = "Responsive web design is about creating web pages that look good on all devices!A responsive web design will automatically adjust for different screen sizes and viewports. " />
                    </div>
                </div>
            </div>);

        case 'css':

            return (<div>
                <div className="css__page">
                    <h1>CSS</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction"  link="https://www.w3schools.com/css/css_intro.asp"  details = "CSS stands for Cascading Style Sheets,CSS describes how HTML elements are to be displayed on screen, paper, or in other media, CSS saves a lot of work. It can control the layout of multiple web pages all at once,External stylesheets are stored in CSS files" />
                        <SomeDetails Topic = "Syntax" link="https://www.w3schools.com/css/css_syntax.asp"  details = "A CSS rule consists of a selector and a declaration block." />
                        <SomeDetails Topic = "Selectors" link="https://www.w3schools.com/css/css_selectors.asp"  details = "CSS selectors are used to 'find' (or select) the HTML elements you want to style.The element selector selects HTML elements based on the element name." />
                        <SomeDetails Topic = "Comments" link="https://www.w3schools.com/css/css_comments.asp"  details = "Comments are used to explain the code, and may help when you edit the source code at a later date.Comments are ignored by browsers.A CSS comment is placed inside the <style> element, and starts with /* and ends with */: Example/* This is a single-line comment */p {color: red;}" />
                        <SomeDetails Topic = "Colors" link=""  details = "" />
                        <SomeDetails Topic = "Paragraphs" link="https://www.w3schools.com/css/css_colors.asp"  details = "Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.Example <h1 style='background-color:DodgerBlue;'>Hello World</h1 <p style='background-color:Tomato;'>Lorem ipsum...</p>" />
                        <SomeDetails Topic = "Borders" link="https://www.w3schools.com/css/css_border.asp"  details = "The CSS border properties allow you to specify the style, width, and color of an element's border." />
                        <SomeDetails Topic = "Margin" link="https://www.w3schools.com/css/css_selectors.asp"  details = "CSS selectors are used to 'find' (or select) the HTML elements you want to style.The element selector selects HTML elements based on the element name." />
                        <SomeDetails Topic = "Padding" link="https://www.w3schools.com/css/css_colors.asp"  details = "Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.Example <h1 style='background-color:DodgerBlue;'>Hello World</h1 <p style='background-color:Tomato;'>Lorem ipsum...</p>" />
                       
                    </div>
                </div>
            </div>);


        case 'javascript':

            return (<div>
                <div className="css__page">
                    <h1>JAVASCRIPT</h1>  
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction"  link="https://www.w3schools.com/js/js_intro.asp"  details = "One of many JavaScript HTML methods is getElementById().The example below 'finds' an HTML element (with id='demo'), and changes the element content (innerHTML) to 'Hello JavaScript':Example document.getElementById('demo').innerHTML = 'Hello JavaScript';" />
                        <SomeDetails Topic = "Statements"  link="https://www.w3schools.com/js/js_statements.asp" details = "A computer program is a list of 'instructions' to be 'executed' by a computer.In a programming language, these programming instructions are called statements.A JavaScript program is a list of programming statements." />
                        <SomeDetails Topic = " Comments"  link="https://www.w3schools.com/js/js_comments.asp" details = "Single Line Comments Single line comments start with //. Any text between // and the end of the line will be ignored by JavaScript (will not be executed). This example uses a single-line comment before each code line:" />
                        <SomeDetails Topic = "Variables"  link="https://www.w3schools.com/js/js_variables.asp" details = "Variables are containers for storing data (values). In this example, x, y, and z, are variables, declared with the var keyword:" />
                        <SomeDetails Topic = "Let"  link="https://www.w3schools.com/js/js_let.asp" details = "Variables defined with let cannot be redeclared.You cannot accidentally redeclare a variable.With let you can not do this: Example let x = 'John Doe'; let x = 0; // SyntaxError: 'x' has already been declared" />
                        <SomeDetails Topic = "Const"   link=""details = "The HTML style attribute is used to add styles to an element, such as color, font, size, and more." />
                        <SomeDetails Topic = "Operators"  link="" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Arithmetic"  link="" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Assignment"  link="" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Data Type" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Function" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Object" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Event" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                    </div>
                </div>
            </div>);

        case 'angularjs':

            return (<div>
                <div className="css__page">
                    <h1>Angular JS</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" details = "HTML stands for Hyper Text Markup Language,HTML is the standard markup language for creating Web pages,HTML describes the structure of a Web page,HTML consists of a series of elements,HTML elements tell the browser how to display the content" />
                        <SomeDetails Topic = "Editors" details = "Learn HTML Using Notepad or TextEdit Web pages can be created and modified by using professional HTML editors.However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).We believe in that using a simple text editor is a good way to learn HTML.Follow the steps below to create your first web page with Notepad or TextEdit." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Attributes" details = "HTML attributes provide additional information about HTML elements." />
                        <SomeDetails Topic = "Headings" details = "HTML headings are titles or subtitles that you want to display on a webpage." />
                        <SomeDetails Topic = "Paragraphs" details = "A paragraph always starts on a new line, and is usually a block of text." />
                        <SomeDetails Topic = "Styles" details = "The HTML style attribute is used to add styles to an element, such as color, font, size, and more." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                    </div>
                </div>
            </div>);


        case 'json':

            return (<div>
                <div className="css__page">
                    <h1>JSON</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" details = "HTML stands for Hyper Text Markup Language,HTML is the standard markup language for creating Web pages,HTML describes the structure of a Web page,HTML consists of a series of elements,HTML elements tell the browser how to display the content" />
                        <SomeDetails Topic = "Editors" details = "Learn HTML Using Notepad or TextEdit Web pages can be created and modified by using professional HTML editors.However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).We believe in that using a simple text editor is a good way to learn HTML.Follow the steps below to create your first web page with Notepad or TextEdit." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Attributes" details = "HTML attributes provide additional information about HTML elements." />
                        <SomeDetails Topic = "Headings" details = "HTML headings are titles or subtitles that you want to display on a webpage." />
                        <SomeDetails Topic = "Paragraphs" details = "A paragraph always starts on a new line, and is usually a block of text." />
                        <SomeDetails Topic = "Styles" details = "The HTML style attribute is used to add styles to an element, such as color, font, size, and more." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                    </div>
                </div>
            </div>);
        case 'ajax':

            return (<div>
                <div className="css__page">
                    <h1>AJAX</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" details = "HTML stands for Hyper Text Markup Language,HTML is the standard markup language for creating Web pages,HTML describes the structure of a Web page,HTML consists of a series of elements,HTML elements tell the browser how to display the content" />
                        <SomeDetails Topic = "Editors" details = "Learn HTML Using Notepad or TextEdit Web pages can be created and modified by using professional HTML editors.However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).We believe in that using a simple text editor is a good way to learn HTML.Follow the steps below to create your first web page with Notepad or TextEdit." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Attributes" details = "HTML attributes provide additional information about HTML elements." />
                        <SomeDetails Topic = "Headings" details = "HTML headings are titles or subtitles that you want to display on a webpage." />
                        <SomeDetails Topic = "Paragraphs" details = "A paragraph always starts on a new line, and is usually a block of text." />
                        <SomeDetails Topic = "Styles" details = "The HTML style attribute is used to add styles to an element, such as color, font, size, and more." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                    </div>
                </div>
            </div>);

        case 'appml':

            return (<div>
                <div className="css__page">
                    <h1>AppML</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" details = "HTML stands for Hyper Text Markup Language,HTML is the standard markup language for creating Web pages,HTML describes the structure of a Web page,HTML consists of a series of elements,HTML elements tell the browser how to display the content" />
                        <SomeDetails Topic = "Editors" details = "Learn HTML Using Notepad or TextEdit Web pages can be created and modified by using professional HTML editors.However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).We believe in that using a simple text editor is a good way to learn HTML.Follow the steps below to create your first web page with Notepad or TextEdit." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Attributes" details = "HTML attributes provide additional information about HTML elements." />
                        <SomeDetails Topic = "Headings" details = "HTML headings are titles or subtitles that you want to display on a webpage." />
                        <SomeDetails Topic = "Paragraphs" details = "A paragraph always starts on a new line, and is usually a block of text." />
                        <SomeDetails Topic = "Styles" details = "The HTML style attribute is used to add styles to an element, such as color, font, size, and more." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                    </div>
                </div>
            </div>);


        case 'graphics':

            return (<div>
                <div className="css__page">
                    <h1>Graphics</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" details = "HTML stands for Hyper Text Markup Language,HTML is the standard markup language for creating Web pages,HTML describes the structure of a Web page,HTML consists of a series of elements,HTML elements tell the browser how to display the content" />
                        <SomeDetails Topic = "Editors" details = "Learn HTML Using Notepad or TextEdit Web pages can be created and modified by using professional HTML editors.However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).We believe in that using a simple text editor is a good way to learn HTML.Follow the steps below to create your first web page with Notepad or TextEdit." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Attributes" details = "HTML attributes provide additional information about HTML elements." />
                        <SomeDetails Topic = "Headings" details = "HTML headings are titles or subtitles that you want to display on a webpage." />
                        <SomeDetails Topic = "Paragraphs" details = "A paragraph always starts on a new line, and is usually a block of text." />
                        <SomeDetails Topic = "Styles" details = "The HTML style attribute is used to add styles to an element, such as color, font, size, and more." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                    </div>
                </div>
            </div>);

        case 'svg':

            return (<div>
                <div className="css__page">
                    <h1>SVG</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" details = "HTML stands for Hyper Text Markup Language,HTML is the standard markup language for creating Web pages,HTML describes the structure of a Web page,HTML consists of a series of elements,HTML elements tell the browser how to display the content" />
                        <SomeDetails Topic = "Editors" details = "Learn HTML Using Notepad or TextEdit Web pages can be created and modified by using professional HTML editors.However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).We believe in that using a simple text editor is a good way to learn HTML.Follow the steps below to create your first web page with Notepad or TextEdit." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Attributes" details = "HTML attributes provide additional information about HTML elements." />
                        <SomeDetails Topic = "Headings" details = "HTML headings are titles or subtitles that you want to display on a webpage." />
                        <SomeDetails Topic = "Paragraphs" details = "A paragraph always starts on a new line, and is usually a block of text." />
                        <SomeDetails Topic = "Styles" details = "The HTML style attribute is used to add styles to an element, such as color, font, size, and more." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                    </div>
                </div>
            </div>);

        case 'canvas':

            return (<div>
                <div className="css__page">
                    <h1>CANVAS</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" details = "HTML stands for Hyper Text Markup Language,HTML is the standard markup language for creating Web pages,HTML describes the structure of a Web page,HTML consists of a series of elements,HTML elements tell the browser how to display the content" />
                        <SomeDetails Topic = "Editors" details = "Learn HTML Using Notepad or TextEdit Web pages can be created and modified by using professional HTML editors.However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).We believe in that using a simple text editor is a good way to learn HTML.Follow the steps below to create your first web page with Notepad or TextEdit." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Attributes" details = "HTML attributes provide additional information about HTML elements." />
                        <SomeDetails Topic = "Headings" details = "HTML headings are titles or subtitles that you want to display on a webpage." />
                        <SomeDetails Topic = "Paragraphs" details = "A paragraph always starts on a new line, and is usually a block of text." />
                        <SomeDetails Topic = "Styles" details = "The HTML style attribute is used to add styles to an element, such as color, font, size, and more." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                    </div>
                </div>
            </div>);

        case 'sass':

            return (<div>
                <div className="css__page">
                    <h1>Sass</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" details = "HTML stands for Hyper Text Markup Language,HTML is the standard markup language for creating Web pages,HTML describes the structure of a Web page,HTML consists of a series of elements,HTML elements tell the browser how to display the content" />
                        <SomeDetails Topic = "Editors" details = "Learn HTML Using Notepad or TextEdit Web pages can be created and modified by using professional HTML editors.However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).We believe in that using a simple text editor is a good way to learn HTML.Follow the steps below to create your first web page with Notepad or TextEdit." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Attributes" details = "HTML attributes provide additional information about HTML elements." />
                        <SomeDetails Topic = "Headings" details = "HTML headings are titles or subtitles that you want to display on a webpage." />
                        <SomeDetails Topic = "Paragraphs" details = "A paragraph always starts on a new line, and is usually a block of text." />
                        <SomeDetails Topic = "Styles" details = "The HTML style attribute is used to add styles to an element, such as color, font, size, and more." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "Elements" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                    </div>
                </div>
            </div>);
        default:

            return 'You are a User';

    }

}



export default WebDevelopmentShowFrontend;
