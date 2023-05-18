import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/6 my-24 mx-auto'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    1. Tell us the differences between uncontrolled and controlled components?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-semibold'>Controlled components are considered a better approach for handling user input in React.js, as they provide more control and flexibility over the application state. However, uncontrolled components can be useful in certain situations, such as when dealing with large or complex forms, or when working with third-party libraries that require uncontrolled inputs.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    2. How to validate React props using PropTypes?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-semibold'>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with. <br />
                        Props and PropTypes are important mechanisms for passing read-only attributes between React components. We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    3. Tell us the difference between nodejs and express js?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-semibold'>
                        Node.js and Express.js are both technologies used for building web applications, but they serve different purposes. <br />

                        Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser, on the server side. It provides a platform for building server-side applications using JavaScript, and includes a set of built-in modules that can be used to handle file system I/O, networking, and other tasks. <br />

                        Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a higher-level API for building web applications and makes it easier to handle HTTP requests, define routes, and perform other common web development tasks. Express.js also includes a set of middleware modules that can be used to add additional functionality to your application. <br />

                        In summary, Node.js provides a runtime environment for executing JavaScript code on the server side, while Express.js provides a framework for building web applications using Node.js.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ">
                <div className="collapse-title text-2xl font-medium">
                    4. What is a custom hook, and why will you create a custom hook?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-semibold'>
                        In React, a custom hook is a JavaScript function that utilizes some of the built-in hooks (such as useState, useEffect, useContext, etc.) to create custom behavior that can be shared between components. Custom hooks allow developers to encapsulate complex logic or functionality into a reusable and composable function, improving code reuse and reducing duplication. <br />
                        Reusing complex stateful logic: If you find yourself writing the same code repeatedly across multiple components, you can extract that logic into a custom hook to avoid code duplication and make your code more maintainable. <br />

                        Handling third-party APIs or libraries: If you are working with a third-party API or library that has complex setup or state management, you can create a custom hook to encapsulate that logic and make it easier to use across your application.

                    </p>
                </div>

            </div>
        </div>

    );
};

export default Blog;