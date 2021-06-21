import React from 'react'
import '../CSS/WebDevelopment.css';
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

function WebDevelopmentShowBackend(props) {
    switch (props.value) {

        case 'c':
            return (<div>
                <div className="css__page">
                    <h1>C++</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" link = "https://www.w3schools.com/cpp/cpp_intro.asp" details = "C++ is a cross-platform language that can be used to create high-performance applications,C++ was developed by Bjarne Stroustrup, as an extension to the C language.C++ gives programmers a high level of control over system resources and memory.The language was updated 3 major times in 2011, 2014, and 2017 to C++11, C++14, and C++17." />
                        <SomeDetails Topic = "Syntax" link ="https://www.w3schools.com/cpp/cpp_syntax.asp" details = "Line 1: #include <iostream> is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs.Line 2: using namespace std means that we can use names for objects and variables from the standard library.Line 3: A blank line. C++ ignores white space.Line 4: Another thing that always appear in a C++ program, is int main(). This is called a function. Any code inside its curly brackets {} will be executed.Line 5: cout (pronounced 'see-out') is an object used together with the insertion operator (<<) to output/print text. In our example it will output 'Hello World'.Note: Every C++ statement ends with a semicolon ;.Note: The body of int main() could also been written as: int main () { cout << 'Hello World! '; return 0; }." />
                        <SomeDetails Topic = "Comments  " link="https://www.w3schools.com/cpp/cpp_comments.asp " details = "Comments can be used to explain C++ code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Comments can be singled-lined or multi-lined." />
                        <SomeDetails Topic = "Varible" link="https://www.w3schools.com/cpp/cpp_variables.asp" details = "Variables are containers for storing data values.In C++, there are different types of variables (defined with different keywords)" />
                        <SomeDetails Topic = "Input" link="" details = "HTML headings are defined with the <h1> to <h6> tags.<h1> defines the most important heading. <h6> defines the least important heading. Example:<h1>Heading 1</h1>,<h2>Heading 2</h2>,<h3>Heading 3</h3>,<h4>Heading 4</h4>,<h5>Heading 5</h5>,<h6>Heading 6</h6>." />
                        <SomeDetails Topic = "Data Type"  link=""  details = "The HTML <p> element defines a paragraph.A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.he property is a CSS property. The value is a CSS value." />
                        <SomeDetails Topic = "String"  link="https://www.w3schools.com/html/html_styles.asp" details = "Setting the style of an HTML element, can be done with the style attribute.The HTML style attribute has the following syntax:" />
                        <SomeDetails Topic = "math" link="https://www.w3schools.com/html/html_formatting.asp"  details = "Formatting elements were designed to display special types of text:<b>This text is bold</b>" />
                        <SomeDetails Topic = "Boolean"  link="https://www.w3schools.com/html/html_comments.asp" details = "You can add comments to your HTML source by using the following syntax: <!-- Write your comments here -->" />
                        <SomeDetails Topic = "Switch"  link="https://www.w3schools.com/html/html_colors.asp" details = "HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values." />
                        <SomeDetails Topic = "Whilen Loop"  link="https://www.w3schools.com/html/html_links.asp" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "For loop"  link="https://www.w3schools.com/html/html_classes.asp" details = "Class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.In the following example we have three <div> elements with a class attribute with the value of 'city'. All of the three <div> elements will be styled equally according to the .city style definition in the head section:" />
                        <SomeDetails Topic = "JavaScript" link="https://www.w3schools.com/html/html_scripts.asp"  details = "JavaScript makes HTML pages more dynamic and interactive." />
                        <SomeDetails Topic = "Responsive Web Design" link="https://www.w3schools.com/html/html_responsive.asp"  details = "Responsive web design is about creating web pages that look good on all devices!A responsive web design will automatically adjust for different screen sizes and viewports. " />
                    </div>
                </div>
            </div>);

        case 'c++':

            return (<div>
                <div className="css__page">
                    <h1>C#</h1>
                    <div className="css__page__cantainer">
                        <SomeDetails Topic = "Introduction" link = "https://www.w3schools.com/cpp/cpp_intro.asp" details = "C++ is a cross-platform language that can be used to create high-performance applications,C++ was developed by Bjarne Stroustrup, as an extension to the C language.C++ gives programmers a high level of control over system resources and memory.The language was updated 3 major times in 2011, 2014, and 2017 to C++11, C++14, and C++17." />
                        <SomeDetails Topic = "Syntax" link ="https://www.w3schools.com/cpp/cpp_syntax.asp" details = "Line 1: #include <iostream> is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs.Line 2: using namespace std means that we can use names for objects and variables from the standard library.Line 3: A blank line. C++ ignores white space.Line 4: Another thing that always appear in a C++ program, is int main(). This is called a function. Any code inside its curly brackets {} will be executed.Line 5: cout (pronounced 'see-out') is an object used together with the insertion operator (<<) to output/print text. In our example it will output 'Hello World'.Note: Every C++ statement ends with a semicolon ;.Note: The body of int main() could also been written as: int main () { cout << 'Hello World! '; return 0; }." />
                        <SomeDetails Topic = "Comments  " link="https://www.w3schools.com/cpp/cpp_comments.asp " details = "Comments can be used to explain C++ code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Comments can be singled-lined or multi-lined." />
                        <SomeDetails Topic = "Varible" link="https://www.w3schools.com/cpp/cpp_variables.asp" details = "Variables are containers for storing data values.In C++, there are different types of variables (defined with different keywords)" />
                        <SomeDetails Topic = "Input" link="" details = "HTML headings are defined with the <h1> to <h6> tags.<h1> defines the most important heading. <h6> defines the least important heading. Example:<h1>Heading 1</h1>,<h2>Heading 2</h2>,<h3>Heading 3</h3>,<h4>Heading 4</h4>,<h5>Heading 5</h5>,<h6>Heading 6</h6>." />
                        <SomeDetails Topic = "Data Type"  link=""  details = "The HTML <p> element defines a paragraph.A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.he property is a CSS property. The value is a CSS value." />
                        <SomeDetails Topic = "String"  link="https://www.w3schools.com/html/html_styles.asp" details = "Setting the style of an HTML element, can be done with the style attribute.The HTML style attribute has the following syntax:" />
                        <SomeDetails Topic = "math" link="https://www.w3schools.com/html/html_formatting.asp"  details = "Formatting elements were designed to display special types of text:<b>This text is bold</b>" />
                        <SomeDetails Topic = "Boolean"  link="https://www.w3schools.com/html/html_comments.asp" details = "You can add comments to your HTML source by using the following syntax: <!-- Write your comments here -->" />
                        <SomeDetails Topic = "Switch"  link="https://www.w3schools.com/html/html_colors.asp" details = "HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values." />
                        <SomeDetails Topic = "Whilen Loop"  link="https://www.w3schools.com/html/html_links.asp" details = "An HTML element is defined by a start tag, some content, and an end tag." />
                        <SomeDetails Topic = "For loop"  link="https://www.w3schools.com/html/html_classes.asp" details = "Class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.In the following example we have three <div> elements with a class attribute with the value of 'city'. All of the three <div> elements will be styled equally according to the .city style definition in the head section:" />
                        <SomeDetails Topic = "JavaScript" link="https://www.w3schools.com/html/html_scripts.asp"  details = "JavaScript makes HTML pages more dynamic and interactive." />
                        <SomeDetails Topic = "Responsive Web Design" link="https://www.w3schools.com/html/html_responsive.asp"  details = "Responsive web design is about creating web pages that look good on all devices!A responsive web design will automatically adjust for different screen sizes and viewports. " />
                    </div>
                    </div>
            </div>);


        case 'java':

            return (<div>
                <div className="css__page">
                    <h1>JAVA</h1>
                    <div className="css__page__cantainer">
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Introduction</h3>
                                <p>JavaScript Can Change HTML Attribute Values</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Output</h3>
                                <p>Writing into an HTML element, using innerHTML.Writing into the HTML output using document.write().Writing into an alert box, using window.alert().Writing into the browser console, using console.log().</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Statements</h3>
                                <p>A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.A JavaScript program is a list of programming statements.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Comments</h3>
                                <p>Comments are used to explain the code, and may help when you edit the source code at a later date.Comments are ignored by browsers.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Backgrounds</h3>
                                <p>The CSS background properties are used to add background effects for elements.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Borders</h3>
                                <p>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Margins</h3>
                                <p>Margins are used to create space around elements, outside of any defined borders.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>

                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Padding</h3>
                                <p>Padding is used to create space around an element's content, inside of any defined borders.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Height and Width</h3>
                                <p>The CSS height and width properties are used to set the height and width of an element.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>);

        case 'python':

            return (<div>
                <div className="css__page">
                    <h1>PYTHON</h1>
                    <div className="css__page__cantainer">
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Introduction</h3>
                                <p>JavaScript Can Change HTML Attribute Values</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Output</h3>
                                <p>Writing into an HTML element, using innerHTML.Writing into the HTML output using document.write().Writing into an alert box, using window.alert().Writing into the browser console, using console.log().</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Statements</h3>
                                <p>A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.A JavaScript program is a list of programming statements.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Comments</h3>
                                <p>Comments are used to explain the code, and may help when you edit the source code at a later date.Comments are ignored by browsers.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Backgrounds</h3>
                                <p>The CSS background properties are used to add background effects for elements.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Borders</h3>
                                <p>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Margins</h3>
                                <p>Margins are used to create space around elements, outside of any defined borders.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>

                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Padding</h3>
                                <p>Padding is used to create space around an element's content, inside of any defined borders.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Height and Width</h3>
                                <p>The CSS height and width properties are used to set the height and width of an element.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>);


        case 'c#':

            return (<div>
                <div className="css__page">
                    <h1>C#</h1>
                    <div className="css__page__cantainer">
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Introduction</h3>
                                <p>JavaScript Can Change HTML Attribute Values</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Output</h3>
                                <p>Writing into an HTML element, using innerHTML.Writing into the HTML output using document.write().Writing into an alert box, using window.alert().Writing into the browser console, using console.log().</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Statements</h3>
                                <p>A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.A JavaScript program is a list of programming statements.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Comments</h3>
                                <p>Comments are used to explain the code, and may help when you edit the source code at a later date.Comments are ignored by browsers.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Backgrounds</h3>
                                <p>The CSS background properties are used to add background effects for elements.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Borders</h3>
                                <p>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Margins</h3>
                                <p>Margins are used to create space around elements, outside of any defined borders.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>

                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Padding</h3>
                                <p>Padding is used to create space around an element's content, inside of any defined borders.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Height and Width</h3>
                                <p>The CSS height and width properties are used to set the height and width of an element.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>);
case 'node':

    return ( <div>
        <div className="css__page">
            <h1>NODE</h1>
            <div className="css__page__cantainer">
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Introduction</h3>
                        <p>JavaScript Can Change HTML Attribute Values</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Output</h3>
                        <p>Writing into an HTML element, using innerHTML.Writing into the HTML output using document.write().Writing into an alert box, using window.alert().Writing into the browser console, using console.log().</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Statements</h3>
                        <p>A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.A JavaScript program is a list of programming statements.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Comments</h3>
                        <p>Comments are used to explain the code, and may help when you edit the source code at a later date.Comments are ignored by browsers.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Backgrounds</h3>
                        <p>The CSS background properties are used to add background effects for elements.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Borders</h3>
                        <p>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Margins</h3>
                        <p>Margins are used to create space around elements, outside of any defined borders.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>

                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Padding</h3>
                        <p>Padding is used to create space around an element's content, inside of any defined borders.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Height and Width</h3>
                        <p>The CSS height and width properties are used to set the height and width of an element.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Elements</h3>
                        <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Elements</h3>
                        <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Elements</h3>
                        <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
               

            </div>
        </div>
    </div>);

case 'express':

    return ( <div>
        <div className="css__page">
            <h1>EXPRESS</h1>
            <div className="css__page__cantainer">
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Introduction</h3>
                        <p>JavaScript Can Change HTML Attribute Values</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Output</h3>
                        <p>Writing into an HTML element, using innerHTML.Writing into the HTML output using document.write().Writing into an alert box, using window.alert().Writing into the browser console, using console.log().</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Statements</h3>
                        <p>A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.A JavaScript program is a list of programming statements.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Comments</h3>
                        <p>Comments are used to explain the code, and may help when you edit the source code at a later date.Comments are ignored by browsers.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Backgrounds</h3>
                        <p>The CSS background properties are used to add background effects for elements.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Borders</h3>
                        <p>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Margins</h3>
                        <p>Margins are used to create space around elements, outside of any defined borders.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>

                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Padding</h3>
                        <p>Padding is used to create space around an element's content, inside of any defined borders.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Height and Width</h3>
                        <p>The CSS height and width properties are used to set the height and width of an element.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Elements</h3>
                        <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Elements</h3>
                        <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="css__page__box">
                    <div className="css__page__text">
                        <h3>Elements</h3>
                        <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                    </div>
                    <div className="css__page__box__btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
               

            </div>
        </div>
    </div>);

        default:

            return 'You are a User';

    }

}

export default WebDevelopmentShowBackend;
