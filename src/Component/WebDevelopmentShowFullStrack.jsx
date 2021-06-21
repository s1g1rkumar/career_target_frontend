import React from 'react'
import '../CSS/WebDevelopment.css';

function WebDevelopmentShowFullStrack(props) {
    switch (props.value) { 

        case 'sql':
            return (<div>
                <div className="css__page">
                    <h1>Sql</h1>
                    
                    <div className="css__page__cantainer">
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Introduction</h3>
                                <p>SQL stands for Structured Query Language,SQL lets you access and manipulate databases,SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_intro.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>SQL Syntax</h3>
                                <p>A database most often contains one or more tables. Each table is identified by a name (e.g. "Customers" or "Orders"). Tables contain records (rows) with data.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_syntax.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>SQL SELECT Statement</h3>
                                <p>The SELECT statement is used to select data from a database.The data returned is stored in a result table, called the result-set.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_select.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>WHERE Clause</h3>
                                <p>The WHERE clause is used to filter records.It is used to extract only those records that fulfill a specified condition.

WHERE Syntax
SELECT column1, column2, ...
FROM table_name
WHERE condition;</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_where.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>NULL Value</h3>
                                <p>A field with a NULL value is a field with no value.

If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_null_values.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>SQL DELETE Statement</h3>
                                <p>The DELETE statement is used to delete existing records in a table.

DELETE Syntax
DELETE FROM table_name WHERE condition;</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_delete.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>SQL UPDATE Statement</h3>
                                <p>The UPDATE statement is used to modify the existing records in a table.

UPDATE Syntax
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_update.asp">Read More</a>
                            </div>
                        </div>

                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An css element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_min_max.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>SQL MIN() and MAX() Functions</h3>
                                <p>The MIN() function returns the smallest value of the selected column.

The MAX() function returns the largest value of the selected column.

MIN() Syntax
SELECT MIN(column_name)
FROM table_name
WHERE condition;
MAX() Syntax
SELECT MAX(column_name)
FROM table_name
WHERE condition;</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>SQL BETWEEN Operator
</h3>
                                <p>The SQL BETWEEN Operator
The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.

The BETWEEN operator is inclusive: begin and end values are included. </p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_between.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>SQL INNER JOIN Keyword</h3>
                                <p>SQL INNER JOIN Keyword
The INNER JOIN keyword selects records that have matching values in both tables.

INNER JOIN Syntax
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/sql/sql_join_inner.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An css element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Elements</h3>
                                <p>An css element is defined by a start tag, some content, and an end tag.</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                       
                      
                    </div>
                </div>
            </div>);

        case 'mysql':

            return (<div>
                <div className="css__page">
                    <h1>MySql</h1>
                    <div className="css__page__cantainer">
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>Introduction</h3>
                                <p>MySQL is a very popular open-source relational database management system (RDBMS).

s</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/mysql/mysql_intro.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>MySQL SELECT</h3>
                                <p>The SELECT statement is used to select data from a database.

The data returned is stored in a result table, called the result-set.

SELECT Syntax
SELECT column1, column2, ...
FROM table_name;</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/mysql/mysql_select.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>MySQL AND, OR and NOT Operators</h3>
                                <p>The MySQL AND, OR and NOT Operators
The WHERE clause can be combined with AND, OR, and NOT operators.

The AND and OR operators are used to filter records based on more than one condition:

The AND operator displays a record if all the conditions separated by AND are TRUE.
The OR operator displays a record if any of the conditions separated by OR is TRUE.
The NOT operator displays a record if the condition(s) is NOT TRUE.

AND Syntax
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/mysql/mysql_and_or.asp">Read More</a>
                            </div>
                        </div>
                        <div className="css__page__box">
                            <div className="css__page__text">
                                <h3>MySQL INSERT INTO </h3>
                                <p>The INSERT INTO statement is used to insert new records in a table.

INSERT INTO Syntax
It is possible to write the INSERT INTO statement in two ways:

1. Specify both the column names and the values to be inserted:

INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);</p>
                            </div>
                            <div className="css__page__box__btn">
                                <a href="https://www.w3schools.com/mysql/mysql_insert.asp">Read More</a>
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
                                <p>An css element is defined by a start tag, some content, and an end tag.</p>
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
                        </div>   <div className="css__page__box">
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


        case 'mongodb':

            return (<div>
                <div className="css__page">
                    <h1>Mongodb</h1>
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

export default WebDevelopmentShowFullStrack ;
