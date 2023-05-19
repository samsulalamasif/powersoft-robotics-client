import React from 'react';
import useTitle from '../../TitleHooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='w-3/6 my-24 mx-auto'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-semibold'>
                        An access token and a refresh token are commonly used in authentication and authorization systems to grant and manage access to protected resources. <br />
                        <li>An access token is a credential that is issued to a client application after successful authentication. It grants the client access to protected resources and is used to authenticate subsequent requests.
                        </li>
                        <li>A refresh token is also issued alongside the access token. It is a long-lived credential used to obtain a new access token when the current one expires, without requiring the user to re-enter their credentials.</li>
                        <br />
                        <br />
                        Access tokens are used by the client application to access protected resources. They are typically included in request headers or parameters. Refresh tokens are used to obtain new access tokens when the current one expires. <br />

                        On the client-side, access tokens are often stored in memory or short-term storage (e.g., session storage) while refresh tokens are securely stored in long-term storage (e.g., secure cookies or local storage). Security measures should be implemented to protect the tokens, such as encryption and secure transmission over HTTPS.

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    2. Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-semibold'>

                        <span className='text-orange-600'>SQL Databases:</span>
                        <br />
                        <li>Structured, tabular data model with predefined schemas</li>
                        <li>Enforce relationships between tables using foreign keys</li>
                        <li>Use structured query language (SQL) for data manipulation</li>
                        <li>Vertically scalable, upgrading hardware resources for increased workload</li>
                        <li>Rigid schemas, suitable for structured data and complex queries</li>
                        <li>Commonly used in traditional enterprise systems and relational data-oriented use cases</li>


                        <br />
                        <br />
                        <span className='text-orange-600'>NoSQL Databases:</span>

                        <br />
                        <li>Various data models such as key-value, document, columnar, or graph</li>
                        <li>Flexibility with dynamic schemas, allowing storage of unstructured or evolving data</li>
                        <li>Data retrieval and manipulation using model-specific query languages</li>
                        <li>Horizontally scalable, distributing data across multiple servers</li>
                        <li></li>
                        <li>Suitable for handling large volumes of unstructured or rapidly changing data</li>

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    3. What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-semibold'>
                        <span className='text-orange-600'>Express.js:</span>
                        <br />
                        Express.js is a fast and minimalist web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a straightforward and unopinionated approach. With its lightweight design, it focuses on essential features such as routing, middleware support, and handling HTTP requests and responses.
                        <br />
                        <br />

                        <span className='text-orange-600'>Nest.js:</span>  <br />
                        Nest.js is a progressive and opinionated web application framework for Node.js that is built on top of Express.js. It combines the power of TypeScript with object-oriented programming (OOP) and dependency injection (DI) principles. Inspired by Angular, Nest.js offers a structured and scalable architecture for building server-side applications. It provides features like dependency injection, decorators for defining modules, controllers, and services, and built-in support for validation, routing, and error handling. Nest.js promotes maintainable and organized code through its modular design.



                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ">
                <div className="collapse-title text-2xl font-medium">
                    4. What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-semibold'>
                        The       <span className='text-orange-600'>MongoDB</span> aggregate function is used for advanced data processing and analysis. It works by taking an array of stages, where each stage represents a specific operation or transformation. The stages are executed sequentially, with the output of each stage becoming the input for the next stage in the pipeline. This allows for complex queries, data transformations, and aggregations to be performed on the data stored in MongoDB.

                    </p>
                </div>

            </div>
        </div>

    );
};

export default Blog;